# Fifty Years in Bloom Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, chronological fiftieth-birthday website for Nwando that combines 18 photographs with family and friend tributes and deploys unchanged to GitHub Pages.

**Architecture:** A dependency-free static site uses semantic HTML for the complete reading order, CSS for the botanical timeline and responsive presentation, and two classic deferred scripts so it also works from `file://`. `data/tributes.js` owns all personal writing; `app.js` progressively enhances the timeline, modal letters, progress indicator, and finale without hiding core content from no-JavaScript visitors.

**Tech Stack:** HTML5, CSS custom properties, vanilla JavaScript, SVG/CSS botanical artwork, Node.js built-ins for the proposed verification gate, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-21-her-life-in-bloom-design.md`

## Global Constraints

- Use all 18 supplied photographs; do not alter faces or invent dates and ages.
- Preserve author voice, spelling, humour, emojis, and phrasing; only normalize paragraph spacing.
- Do not use em dashes in interface text, tribute copy, metadata, or documentation.
- Keep the family tribute order: Chike, CC, Uche, Somi, Ifeoma, then Dammy and the remaining friends, including Nene and Osato, ending with Oghenero Agunbiade.
- Use only relative asset paths and no server routes so the same files work locally and on a GitHub Pages project URL.
- Do not autoplay music.
- Provide full keyboard navigation, labelled controls, visible focus, and a reduced-motion path.
- Keep personal text in `data/tributes.js` so late edits do not require layout changes.

---

### Task 1: Curate source assets and tribute data

**Files:**
- Create: `assets/photos/01-young-love-outdoors.jpg` through `assets/photos/18-today-in-white.jpg`
- Create: `data/tributes.js`
- Create with explicit user approval: `scripts/check.mjs`

**Interfaces:**
- Consumes: the 18 source image paths supplied in chat and the twelve completed tribute texts.
- Produces: `window.BIRTHDAY_DATA` with `{ person, years, chapters, tributes }`; each chapter has `{ id, title, reflection, photos }`; each photo has `{ src, alt, position }`; each tribute has `{ id, author, salutation, excerpt, paragraphs }`.

- [ ] **Step 1: Create a failing content check**

Write `scripts/check.mjs` with Node built-ins. It must load `data/tributes.js` in a `vm` context and assert the data contract, 18 unique relative photo paths, twelve present tribute ids in the exact order below, non-empty alt text, and existence of every referenced image:

```js
const expected = [
  "chike", "cc", "uche", "somi", "ifeoma", "dammy",
  "jinghreh", "excel", "paul", "nene", "osato", "oghenero"
];
assert.deepEqual(data.tributes.map(({ id }) => id), expected);
assert.equal(photos.length, 18);
assert.equal(new Set(photos.map(({ src }) => src)).size, 18);
```

- [ ] **Step 2: Run the check and verify the expected failure**

Run: `node scripts/check.mjs`

Expected: exit code 1 because `data/tributes.js` and curated photo files do not yet exist.

- [ ] **Step 3: Copy and rename the photographs in chronological story order**

Use this exact source-to-destination map:

```text
CamScanner ..._41.jpg -> 01-young-love-outdoors.jpg
CamScanner ..._51.jpg -> 02-young-love-traditional.jpg
CamScanner ..._43.jpg -> 03-building-a-life.jpg
CamScanner ..._24.jpg -> 04-family-with-baby.jpg
CamScanner ..._37.jpg -> 05-mother-and-daughter.jpg
578369b8....jpeg       -> 06-early-digital-portrait.jpg
91675701....jpeg       -> 07-green-celebration.jpg
d3bea545....jpeg       -> 08-blue-celebration.jpg
3ba9e2a9....jpeg       -> 09-braided-portrait.jpg
8a99855b....jpeg       -> 10-mother-and-daughter.jpg
6afe809e....jpeg       -> 11-family-outdoors.jpg
94b55752....jpeg       -> 12-school-day-selfie.jpg
c0b4c35d....jpeg       -> 13-mother-daughter-selfie.jpg
315feb04....jpeg       -> 14-red-portrait.jpg
85fbc459....jpeg       -> 15-red-celebration.jpg
5482df1c....jpeg       -> 16-golden-portrait.jpg
bc3efdbd....jpeg       -> 17-today-close.jpg
5b912ac6....jpeg       -> 18-today-in-white.jpg
```

- [ ] **Step 4: Encode the approved story and writing as data**

Define the classic-script global without module syntax so local opening works:

```js
window.BIRTHDAY_DATA = Object.freeze({
  person: "Nwando Mofunanya",
  years: 50,
  chapters: [
    { id: "beginning", title: "The beginning", reflection: "Before we knew her as Mummy, there was a young woman building a life of her own.", photos: [] },
    { id: "becoming", title: "Becoming", reflection: "A life taking shape through courage, work, laughter and grace.", photos: [] },
    { id: "home", title: "The love she made a home for", reflection: "Then love widened its circle, and home became something she carried with her.", photos: [] },
    { id: "bloom", title: "In full bloom", reflection: "The years did not dim her. They revealed her.", photos: [] },
    { id: "today", title: "Today", reflection: "Fifty years, and the best chapters are still beginning.", photos: [] }
  ],
  tributes: []
});
```

Populate the twelve tribute objects from the supplied copy, correcting only obvious spelling, punctuation, and accidental whitespace while preserving each author's voice. Split at the existing paragraph breaks. Excerpts must be exact sentences from each author's message and no longer than 180 characters.

- [ ] **Step 5: Run the check and verify the data passes**

Run: `node scripts/check.mjs`

Expected: `PASS content: 18 photos, 12 tributes, 5 chapters`.

### Task 2: Build the complete static reading experience

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Modify: `scripts/check.mjs`

**Interfaces:**
- Consumes: `window.BIRTHDAY_DATA` from Task 1.
- Produces: stable DOM hooks `[data-story]`, `[data-chapter]`, `[data-photo]`, `[data-tribute-list]`, `[data-letter-dialog]`, `[data-progress]`, and `[data-finale]` for Task 3.

- [ ] **Step 1: Extend the failing check for page structure**

Read `index.html` as text and assert the language, viewport, description, stylesheet, script order, landmark elements, no-JavaScript note, and required DOM hooks:

```js
for (const token of [
  'lang="en"', 'name="viewport"', 'name="description"',
  'href="styles.css"', 'src="data/tributes.js"', 'src="app.js"',
  '<main', 'data-story', 'data-tribute-list', 'data-letter-dialog'
]) assert.ok(html.includes(token), `index.html missing ${token}`);
```

- [ ] **Step 2: Run the check and verify structural failure**

Run: `node scripts/check.mjs`

Expected: exit code 1 with `index.html missing`.

- [ ] **Step 3: Write the semantic HTML shell**

Create an intro with the exact headline “Fifty years of becoming.” and supporting line “A lifetime of making everything around you bloom.” Add a visible “Begin her story” anchor. Include an empty story mount, an empty tribute-list mount, a native `<dialog>` with a labelled close button, and a no-JavaScript message that explains every letter remains readable when scripts are enabled.

- [ ] **Step 4: Implement the visual system and responsive layout**

Use the six spec colors as custom properties, a locally resilient Georgia-led editorial serif stack and an `Aptos, Segoe UI, sans-serif` control stack. Build the off-center vine as inline background SVG/CSS, large alternating image stages, paper-like letter buttons, and a 50-bloom finale made from generated elements. Keep body lines at `max-width: 68ch`, controls at least 44px high, and add breakpoints at 52rem and 32rem.

Implement these exact accessibility modes:

```css
:focus-visible { outline: 3px solid var(--gold); outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
}
```

- [ ] **Step 5: Run the structural check**

Run: `node scripts/check.mjs`

Expected: structural assertions pass; the checker may still fail on Task 3 behavior-source assertions.

### Task 3: Add progressive story and tribute interactions

**Files:**
- Create: `app.js`
- Modify: `scripts/check.mjs`

**Interfaces:**
- Consumes: `window.BIRTHDAY_DATA` and the Task 2 DOM hooks.
- Produces: `renderStory(data)`, `renderTributes(data)`, `openLetter(tributeId)`, `closeLetter()`, `setProgress(ratio)`, and `init()`.

- [ ] **Step 1: Add failing interaction-source assertions**

Assert `app.js` contains the public function names, creates 50 bloom nodes, uses `IntersectionObserver` only behind a feature check, listens for `Escape`, restores focus after dialog close, and branches on `prefers-reduced-motion`.

- [ ] **Step 2: Run the check and verify interaction failure**

Run: `node scripts/check.mjs`

Expected: exit code 1 because `app.js` does not exist.

- [ ] **Step 3: Render all story chapters and photographs**

Build DOM with `createElement` and `textContent`, not tribute HTML injection. Every `<img>` must have its supplied `alt`, `loading="lazy"` except the first story image, `decoding="async"`, and a per-photo `object-position`. Each chapter includes its title and reflection before its images.

- [ ] **Step 4: Render and open tribute letters safely**

Each tribute button shows author and exact excerpt. `openLetter(id)` replaces the dialog body with text nodes and `<p>` elements from `paragraphs`, calls `showModal()`, records the trigger, and moves focus to the close control. `closeLetter()` calls `dialog.close()` and restores focus to the recorded trigger. The `cancel` event and close button both call `closeLetter()`.

- [ ] **Step 5: Add restrained timeline enhancement**

Use one `IntersectionObserver` to add `.is-present` to photo stages and update `aria-current` on the active chapter. Scroll progress sets only the `--story-progress` custom property. When IntersectionObserver is missing or reduced motion is requested, add `.is-present` to all stages immediately.

- [ ] **Step 6: Build the fifty-bloom finale**

Generate exactly 50 decorative spans with `aria-hidden="true"`, deterministic rotation and scale variables, then reveal the final birthday line and all tribute-author buttons. Do not autoplay sound or trigger confetti.

- [ ] **Step 7: Run the completed check**

Run: `node scripts/check.mjs`

Expected: `PASS site: content, structure, behavior source, and relative assets`.

### Task 4: Browser QA and GitHub Pages handoff

**Files:**
- Modify: `styles.css` only for defects discovered during QA
- Modify: `data/tributes.js` when later tributes are supplied
- Create: `README.md`

**Interfaces:**
- Consumes: the completed static site.
- Produces: a locally verified, GitHub Pages-ready folder and concise publishing instructions.

- [ ] **Step 1: Open the site from the filesystem**

Open the absolute `index.html` path and verify that all 18 photographs load, all twelve current tribute buttons open the correct author's letter, the dialog closes by button and Escape, and focus returns to its trigger.

- [ ] **Step 2: Test desktop and mobile layouts**

At 1440×900 and 390×844, inspect the intro, every chapter transition, the longest Uche letter, the 50-bloom finale, and the full-image crops. Confirm there is no horizontal overflow and adjust only incorrect `object-position` values or layout rules.

- [ ] **Step 3: Test accessibility preferences**

Emulate reduced motion and confirm all photographs remain visible without scroll-trigger dependence. Tab through every interactive control, confirm visible focus, and inspect that image alt text and dialog labels are exposed.

- [ ] **Step 4: Verify a project-path deployment**

Serve the folder under a nested path and confirm every reference stays relative:

```text
https://<account>.github.io/<repository>/index.html
```

No reference may begin with `/assets`, `/data`, or another site-root path.

- [ ] **Step 5: Document the two last-mile edits**

Write `README.md` with exact instructions for adding another tribute object before Oghenero's closing entry, previewing by opening `index.html`, running `node scripts/check.mjs`, and enabling GitHub Pages from the repository root on the default branch.

- [ ] **Step 6: Run the done-gate**

Run: `node scripts/check.mjs`

Expected: exit code 0 with both PASS lines and no missing asset output.
