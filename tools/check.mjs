// Definition of done for this project. Run: node tools/check.mjs
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
let failures = 0;
const fail = (m) => { console.error("FAIL " + m); failures++; };
const ok = (m) => console.log("  ok  " + m);

// ---- content data ----
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync(join(root, "data/content.js"), "utf8"), ctx);
const data = ctx.window.BIRTHDAY;

if (!data) fail("window.BIRTHDAY not defined");

const expectedTributes = ["chike","cc","uche","somi","ifeoma","dammy","jinghreh","excel","paul","nene","osato","oghenero"];
const actual = data.tributes.map((t) => t.id);
if (actual.join(",") !== expectedTributes.join(",")) fail(`tribute order is ${actual.join(",")}`);
else ok(`12 tributes in order: ${actual.join(", ")}`);

if (data.photos.length !== 18) fail(`expected 18 photos, got ${data.photos.length}`);
else ok("18 photos");

for (const p of data.photos) {
  if (!existsSync(join(root, p.src))) fail(`missing photo file ${p.src}`);
  if (!p.alt || p.alt.length < 10) fail(`weak alt text for ${p.src}`);
  if (!p.w || !p.h) fail(`missing intrinsic size for ${p.src}`);
  if (p.src.startsWith("/")) fail(`absolute path breaks GitHub Pages project URLs: ${p.src}`);
}
ok("every photo exists, has alt text, intrinsic size, and a relative path");

for (const t of data.tributes) {
  if (!t.paragraphs?.length) fail(`tribute ${t.id} has no paragraphs`);
  if (!t.author) fail(`tribute ${t.id} has no author`);
}
ok("every tribute has an author and body");

// ---- no em dashes anywhere in the project ----
const textExt = new Set([".html", ".css", ".js", ".mjs", ".md", ".json", ".txt", ".svg"]);
const skipDirs = new Set(["node_modules", ".git", "source-photos", "assets"]);
const offenders = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) { if (!skipDirs.has(entry)) walk(full); continue; }
    if (!textExt.has(extname(entry))) continue;
    if (entry === "check.mjs") continue; // this file names the characters it hunts for
    const text = readFileSync(full, "utf8");
    text.split("\n").forEach((line, i) => {
      if (/[—–]/.test(line) || /\\u201[34]/.test(line)) {
        offenders.push(`${full.slice(root.length)}:${i + 1}`);
      }
    });
  }
})(root);
if (offenders.length) fail(`em dash or en dash found at:\n      ${offenders.join("\n      ")}`);
else ok("no em dashes or en dashes anywhere in the project");

// ---- built pages ----
// index.html at the root is the page she actually opens. two/ and three/ are
// the designs that were not chosen, kept so the link still works.
const pages = ["index.html", "two/index.html", "three/index.html"];
for (const page of pages) {
  const path = join(root, page);
  if (!existsSync(path)) { console.log(`  --  ${page} not built yet`); continue; }
  const html = readFileSync(path, "utf8");
  const dataRef = page.includes("/") ? "../data/content.js" : "data/content.js";
  for (const token of ['lang="en"', 'name="viewport"', dataRef]) {
    if (!html.includes(token)) fail(`${page} missing ${token}`);
  }
  if (/src="\//.test(html) || /href="\/[^\/]/.test(html)) fail(`${page} uses a site-root path, which breaks GitHub Pages project URLs`);
  if (/object-fit:\s*cover/.test(html)) fail(`${page} uses object-fit: cover, which crops photos`);
  ok(`${page} structure, relative paths, no cropping`);
}

console.log(failures ? `\nFAILED with ${failures} problem(s)` : "\nPASS");
process.exit(failures ? 1 : 0);
