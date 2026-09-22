/* Celebration cloth.
   Everything on this page is built from ../data/content.js at runtime.
   No sentence of anybody's letter is typed into this file.

   The layout rule, in one line: a band is a strip of cloth, and every
   piece in it, photograph or plain colour, is cut to the same height.
   Give each piece a flex-grow, and a photograph whose flex-grow equals
   its own aspect ratio comes out at exactly the strip height, whole.
   Strip height is simply (available width / sum of the grows), so the
   plan below controls scale by choosing that sum, never by cropping. */

(function () {
  "use strict";

  var DATA = window.BIRTHDAY;
  if (!DATA) { return; }

  var PHOTOS = DATA.photos;
  var HERO = 15; /* 16-golden-portrait, the one the data marks hero */

  /* ---- the plan -------------------------------------------------------
     p: index into DATA.photos.  cloth: a plain piece, value is its grow.
     Sums are chosen so that every strip lands at a deliberate height at
     both 1440 and 390. Rows alternate which side the colour sits on, and
     no two consecutive rows share a shape. */

  var PLAN = [
    {
      id: "before",
      tone: "maroon",
      wide: [
        [ { cloth: 1.2, tone: "champagne", lead: true }, { p: 0 } ],
        [ { p: 1 }, { cloth: 1.4, tone: "gold" } ]
      ],
      narrow: [
        [ { p: 0 } ],
        [ { cloth: 0.35, tone: "gold", chevron: true }, { p: 1 } ]
      ]
    },
    {
      id: "building",
      tone: "ultra",
      wide: [
        [ { cloth: 1.0, tone: "gold", lead: true }, { p: 2 } ],
        [ { p: 3 }, { cloth: 0.5, tone: "coral" }, { p: 4 } ]
      ],
      narrow: [
        [ { p: 2 } ],
        [ { p: 3 } ],
        [ { cloth: 0.3, tone: "coral" }, { p: 4 } ]
      ]
    },
    {
      id: "between",
      tone: "gold",
      wide: [
        [ { cloth: 1.0, tone: "ultra", lead: true }, { p: 5 }, { p: 6 } ],
        [ { p: 7 }, { cloth: 1.3, tone: "crimson" }, { p: 8 } ]
      ],
      narrow: [
        [ { p: 5 }, { cloth: 0.5, tone: "ultra" } ],
        [ { p: 6 } ],
        [ { cloth: 0.45, tone: "crimson" }, { p: 7 } ],
        [ { p: 8 } ]
      ]
    },
    {
      id: "people",
      tone: "crimson",
      wide: [
        [ { cloth: 1.05, tone: "green", lead: true }, { p: 9 }, { p: 10 } ],
        [ { p: 11 }, { cloth: 0.55, tone: "champagne" }, { p: 12 } ]
      ],
      narrow: [
        [ { p: 9 } ],
        [ { p: 10 }, { p: 11 } ],
        [ { cloth: 0.5, tone: "champagne" }, { p: 12 } ]
      ]
    },
    {
      id: "now",
      tone: "ink",
      wide: [
        [ { cloth: 1.0, tone: "gold", lead: true }, { p: 13 }, { p: 14 } ],
        [ { cloth: 0.35, tone: "crimson" }, { p: 16 }, { p: 17 } ]
      ],
      narrow: [
        [ { p: 13 }, { cloth: 0.4, tone: "crimson" } ],
        [ { p: 14 } ],
        [ { cloth: 0.3, tone: "gold", chevron: true }, { p: 16 } ],
        [ { p: 17 } ]
      ]
    }
  ];

  /* Six cloth colours, cycled, so that no two letters that touch on the
     quilt are ever the same colour. Each one carries text that clears
     4.5:1 against it. */
  var LETTER_TONES = ["green", "ultra", "crimson", "gold", "teal", "maroon"];

  /* A letter shorter than this is shown whole, in its own panel.
     A longer one opens into a reading view, so that a four line message
     is never printed at the scale of a four thousand word one. */
  var WHOLE_LIMIT = 1500;

  var WIDE = window.matchMedia("(min-width: 760px)");
  var CALM = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---- small helpers -------------------------------------------------- */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text != null) { n.textContent = text; }
    return n;
  }

  function ratio(photo) { return photo.w / photo.h; }

  function chapterById(id) {
    for (var i = 0; i < DATA.chapters.length; i++) {
      if (DATA.chapters[i].id === id) { return DATA.chapters[i]; }
    }
    return null;
  }

  function lengthOf(tribute) {
    return tribute.paragraphs.join(" ").length;
  }

  function isWhole(tribute) {
    return lengthOf(tribute) < WHOLE_LIMIT;
  }

  /* ---- the strip engine ------------------------------------------------
     Normalise every row so the grows add up to a fixed total. Ratios are
     untouched, so the geometry is identical, but the total stays safely
     above 1 and the row always fills its line. */

  function buildBand(row, eager) {
    var band = el("div", "band");
    var i, total = 0;

    for (i = 0; i < row.length; i++) {
      total += row[i].cloth != null ? row[i].cloth : ratio(PHOTOS[row[i].p]);
    }
    var scale = 4 / total;

    for (i = 0; i < row.length; i++) {
      var item = row[i];
      var node;

      if (item.cloth != null) {
        node = el("div", "cloth piece" + (item.chevron ? " chevron" : ""));
        node.setAttribute("data-tone", item.tone);
        node.setAttribute("aria-hidden", "true");
        if (item.chevron) {
          node.style.setProperty("--m1", "rgba(255,255,255,0.22)");
          node.style.setProperty("--m2", "rgba(0,0,0,0.16)");
        }
        node.style.flexGrow = String(item.cloth * scale);
        if (!item.lead) { node.classList.add("is-plain"); }
      } else {
        var photo = PHOTOS[item.p];
        node = el("figure", "piece");
        node.style.flexGrow = String(ratio(photo) * scale);

        var img = el("img");
        img.src = "../" + photo.src;
        img.alt = photo.alt;
        img.width = photo.w;
        img.height = photo.h;
        img.style.aspectRatio = photo.w + " / " + photo.h;
        img.decoding = "async";
        if (!eager) { img.loading = "lazy"; }
        node.appendChild(img);

        if (photo.caption) {
          node.appendChild(el("figcaption", null, photo.caption));
        }
      }

      node.style.setProperty("--stagger", (i * 70) + "ms");
      band.appendChild(node);
    }

    return band;
  }

  function leadItem(row) {
    for (var i = 0; i < row.length; i++) {
      if (row[i].cloth != null && row[i].lead) { return i; }
    }
    return -1;
  }

  /* ---- masthead -------------------------------------------------------- */

  function buildMasthead() {
    var host = document.getElementById("masthead");
    host.textContent = "";

    var person = DATA.person;
    var hero = PHOTOS[HERO];
    var wide = WIDE.matches;

    var copy = el("div", "mast-copy piece");
    copy.setAttribute("data-tone", "green");

    var h1 = el("h1", "greeting");
    h1.id = "greeting";
    /* "Happy 50th Birthday, Mummy" arrives as one string. Split the last
       word off so her name can carry the scale, without retyping either. */
    var greeting = person.greeting;
    var tail = person.name;
    var cut = greeting.lastIndexOf(tail);
    if (cut > 0) {
      h1.appendChild(document.createTextNode(greeting.slice(0, cut).replace(/[,\s]+$/, "") + ","));
      h1.appendChild(el("span", "name", tail));
    } else {
      h1.textContent = greeting;
    }
    copy.appendChild(h1);
    copy.appendChild(el("p", "subtitle", person.subtitle));

    var jump = el("nav", "jump");
    jump.setAttribute("aria-label", "Jump to");
    var a1 = el("a", "one", "See the photographs");
    a1.href = "#chapters";
    var a2 = el("a", "two", "Read the twelve letters");
    a2.href = "#letters";
    jump.appendChild(a1);
    jump.appendChild(a2);
    copy.appendChild(jump);

    if (wide) {
      var band = el("div", "band band-stretch");
      copy.style.flexGrow = String(1.9 * (4 / (1.9 + ratio(hero))));
      copy.style.flexBasis = "0";
      band.appendChild(copy);

      var fig = el("figure", "piece");
      fig.style.flexGrow = String(ratio(hero) * (4 / (1.9 + ratio(hero))));
      fig.appendChild(heroImage(hero));
      band.appendChild(fig);
      host.appendChild(band);
    } else {
      host.appendChild(copy);
      var solo = el("div", "band");
      var f2 = el("figure", "piece");
      f2.style.flexGrow = "4";
      f2.appendChild(heroImage(hero));
      solo.appendChild(f2);
      host.appendChild(solo);
    }
  }

  function heroImage(hero) {
    var img = el("img");
    img.src = "../" + hero.src;
    img.alt = hero.alt;
    img.width = hero.w;
    img.height = hero.h;
    img.style.aspectRatio = hero.w + " / " + hero.h;
    img.decoding = "async";
    img.setAttribute("fetchpriority", "high");
    return img;
  }

  /* ---- chapters -------------------------------------------------------- */

  function buildChapters() {
    var host = document.getElementById("chapters");
    host.textContent = "";

    var wide = WIDE.matches;
    var seen = {};
    var eagerBudget = 2;

    PLAN.forEach(function (planned, ci) {
      var meta = chapterById(planned.id);
      var section = el("section", "chapter field");
      section.setAttribute("data-tone", planned.tone);
      section.setAttribute("aria-labelledby", "ch-" + planned.id);

      var rule = el("div", "selvedge weave");
      rule.setAttribute("aria-hidden", "true");
      section.appendChild(rule);

      var rows = wide ? planned.wide : planned.narrow;
      var placedTitle = false;

      rows.forEach(function (row, ri) {
        var band = buildBand(row, eagerBudget-- > 0);

        if (wide) {
          var li = leadItem(row);
          if (li >= 0 && !placedTitle && meta) {
            var cloth = band.children[li];
            cloth.removeAttribute("aria-hidden");
            cloth.classList.remove("is-plain");
            var h2 = el("h2", "ch-title", meta.title);
            h2.id = "ch-" + planned.id;
            cloth.appendChild(h2);
            cloth.appendChild(el("p", "ch-note", meta.note));
            placedTitle = true;
          }
        }

        row.forEach(function (item) {
          if (item.p != null) { seen[item.p] = true; }
        });

        section.appendChild(band);
        void ri;
      });

      if (!wide && meta) {
        var head = el("div", "band-title");
        var h2n = el("h2", "ch-title", meta.title);
        h2n.id = "ch-" + planned.id;
        head.appendChild(h2n);
        head.appendChild(el("p", "ch-note", meta.note));
        section.insertBefore(head, section.children[1]);
      }

      host.appendChild(section);
      void ci;
    });

    /* Nothing may go missing. If the plan ever drifts from the data,
       any unplaced photograph still gets shown, whole, on its own. */
    var orphans = [];
    for (var i = 0; i < PHOTOS.length; i++) {
      if (i !== HERO && !seen[i]) { orphans.push({ p: i }); }
    }
    if (orphans.length) {
      var extra = el("section", "chapter field");
      extra.setAttribute("data-tone", "ink");
      orphans.forEach(function (o) { extra.appendChild(buildBand([o], false)); });
      host.appendChild(extra);
    }
  }

  /* ---- the twelve letters ---------------------------------------------- */

  function buildLetters() {
    var host = document.getElementById("letters");
    host.textContent = "";

    var head = el("div", "letters-head");
    var h2 = el("h2", null, "Twelve letters");
    h2.id = "letters-title";
    head.appendChild(h2);
    head.appendChild(el("p", null,
      "Your husband, your four children, the daughter you chose, and your friends. Every word is theirs."));
    host.appendChild(head);

    var quilt = el("div", "quilt");

    DATA.tributes.forEach(function (t, i) {
      var tone = LETTER_TONES[i % LETTER_TONES.length];
      var panel = el("article", "panel");
      panel.setAttribute("data-tone", tone);
      panel.setAttribute("aria-labelledby", "letter-" + t.id);

      var author = el("h3", "author", t.author);
      author.id = "letter-" + t.id;
      panel.appendChild(author);
      panel.appendChild(el("p", "relation", t.relation));

      if (isWhole(t)) {
        if (t.heading) {
          var hd = el("p", "lead");
          hd.textContent = t.heading;
          panel.appendChild(hd);
        }
        if (t.salutation) {
          panel.appendChild(el("p", "salutation", t.salutation));
        }
        var body = el("div", "body");
        t.paragraphs.forEach(function (para) {
          body.appendChild(el("p", null, para));
        });
        panel.appendChild(body);
        if (t.signoff) {
          panel.appendChild(el("p", "signoff", t.signoff));
        }
      } else {
        var quote = el("p", "lead");
        quote.textContent = t.pullQuote || t.heading || "";
        panel.appendChild(quote);

        var foot = el("div", "foot");
        var btn = el("button", "open-btn", "Read " + t.author + "'s letter");
        btn.type = "button";
        btn.addEventListener("click", function () { openReader(t, tone, btn); });
        foot.appendChild(btn);
        foot.appendChild(el("span", "extent",
          t.paragraphs.length + (t.paragraphs.length === 1 ? " paragraph" : " paragraphs")));
        panel.appendChild(foot);
      }

      quilt.appendChild(panel);
    });

    host.appendChild(quilt);
  }

  /* ---- closing --------------------------------------------------------- */

  function buildClosing() {
    var host = document.getElementById("closing");
    host.textContent = "";
    var rule = el("div", "selvedge weave");
    rule.setAttribute("aria-hidden", "true");
    host.appendChild(rule);
    var inner = el("div", "closing-inner");
    inner.appendChild(el("p", "fifty", String(DATA.person.milestone)));
    inner.appendChild(el("p", "from-all", DATA.person.fromAll));
    host.appendChild(inner);
  }

  /* ---- reading view ---------------------------------------------------- */

  var reader = document.getElementById("reader");
  var lastFocus = null;
  var scrollY = 0;

  function openReader(t, tone, origin) {
    lastFocus = origin || document.activeElement;
    reader.textContent = "";
    reader.setAttribute("role", "dialog");
    reader.setAttribute("aria-modal", "true");
    reader.setAttribute("aria-labelledby", "reader-author");

    var head = el("header", "reader-head");
    head.setAttribute("data-tone", tone);

    var bar = el("div", "reader-bar");
    var close = el("button", "close-btn", "Close");
    close.type = "button";
    close.addEventListener("click", closeReader);
    bar.appendChild(close);

    var wrap = el("div", "reader-shell");
    wrap.setAttribute("data-tone", tone);
    wrap.appendChild(bar);

    var author = el("h2", "author", t.author);
    author.id = "reader-author";
    head.appendChild(author);
    head.appendChild(el("p", "relation", t.relation));
    if (t.heading) { head.appendChild(el("p", "heading", t.heading)); }
    wrap.appendChild(head);
    reader.appendChild(wrap);

    var body = el("div", "reader-body");
    var inner = el("div", "reader-inner");

    if (t.salutation) {
      inner.appendChild(el("p", "salutation", t.salutation));
    }

    /* The pull quote is set once, a few paragraphs in, where it falls in
       a printed letter. It is never repeated as body text. */
    var quoteAt = Math.min(2, Math.max(0, t.paragraphs.length - 1));
    t.paragraphs.forEach(function (para, i) {
      inner.appendChild(el("p", "para", para));
      if (i === quoteAt && t.pullQuote) {
        var pull = el("blockquote", "pull");
        pull.style.setProperty("--accent", "var(--" + tone + ")");
        pull.appendChild(el("p", null, t.pullQuote));
        inner.appendChild(pull);
      }
    });

    if (t.signoff) {
      var foot = el("div", "reader-foot");
      foot.appendChild(el("p", "signoff", t.signoff));
      inner.appendChild(foot);
    }

    var end = el("div", "reader-end");
    var close2 = el("button", "close-btn", "Close");
    close2.type = "button";
    close2.setAttribute("data-tone", tone);
    close2.addEventListener("click", closeReader);
    end.appendChild(close2);
    inner.appendChild(end);

    body.appendChild(inner);
    reader.appendChild(body);

    scrollY = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = (-scrollY) + "px";
    document.body.style.width = "100%";

    reader.hidden = false;
    reader.scrollTop = 0;
    close.focus();

    document.addEventListener("keydown", onKey, true);
  }

  function closeReader() {
    document.removeEventListener("keydown", onKey, true);
    reader.hidden = true;
    reader.textContent = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollY);
    if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
  }

  function onKey(e) {
    if (reader.hidden) { return; }
    if (e.key === "Escape") {
      e.preventDefault();
      closeReader();
      return;
    }
    if (e.key !== "Tab") { return; }
    var focusable = reader.querySelectorAll("button, a[href], [tabindex]:not([tabindex='-1'])");
    if (!focusable.length) { return; }
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  /* ---- reveal: one wipe, like a length of cloth being laid down -------- */

  var pending = [];
  var lastSweep = 0;

  function showAll() {
    var hidden = document.querySelectorAll(".will-reveal:not(.is-in)");
    for (var i = 0; i < hidden.length; i++) { hidden[i].classList.add("is-in"); }
    pending = [];
  }

  function sweep() {
    lastSweep = Date.now();
    if (!pending.length) { return; }
    var fold = window.innerHeight * 0.94;
    var still = [];
    for (var i = 0; i < pending.length; i++) {
      if (pending[i].getBoundingClientRect().top < fold) {
        pending[i].classList.add("is-in");
      } else {
        still.push(pending[i]);
      }
    }
    pending = still;
  }

  function queueSweep() {
    if (!pending.length) { return; }
    if (Date.now() - lastSweep < 90) { return; }
    sweep();
  }

  /* If anything at all ever goes wrong with the wipe, visibility wins.
     A piece sitting inside the viewport and still hidden means the
     mechanism failed, and the whole page is shown at once. */
  function failsafe() {
    if (!pending.length) { return; }
    if (pending[0].getBoundingClientRect().top < window.innerHeight) {
      showAll();
    }
  }

  function armReveal() {
    var stale = document.querySelectorAll(".will-reveal");
    for (var s = 0; s < stale.length; s++) {
      stale[s].classList.remove("will-reveal", "is-in");
    }
    pending = [];
    if (CALM.matches) { return; }

    var targets = document.querySelectorAll(
      ".band > .piece, .band-title, .panel, .letters-head");
    var fold = window.innerHeight;

    for (var i = 0; i < targets.length; i++) {
      if (targets[i].getBoundingClientRect().top >= fold) {
        targets[i].classList.add("will-reveal");
        pending.push(targets[i]);
      }
    }

    window.setTimeout(sweep, 200);
    window.setTimeout(sweep, 900);
    window.setTimeout(failsafe, 2500);
    if (!guard) { guard = window.setInterval(failsafe, 4000); }
  }
  var guard = 0;

  window.addEventListener("scroll", queueSweep, { passive: true });
  window.addEventListener("resize", queueSweep, { passive: true });
  window.addEventListener("orientationchange", queueSweep);
  window.addEventListener("pageshow", queueSweep);

  /* ---- render ---------------------------------------------------------- */

  function render() {
    buildMasthead();
    buildChapters();
    buildLetters();
    buildClosing();
    armReveal();
  }

  render();

  var last = WIDE.matches;
  function onBreak() {
    if (WIDE.matches === last) { return; }
    last = WIDE.matches;
    if (!reader.hidden) { closeReader(); }
    render();
  }
  if (WIDE.addEventListener) { WIDE.addEventListener("change", onBreak); }
  else if (WIDE.addListener) { WIDE.addListener(onBreak); }

  if (CALM.addEventListener) { CALM.addEventListener("change", armReveal); }
})();
