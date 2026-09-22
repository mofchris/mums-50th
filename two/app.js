/* Fifty. Renders every word and every photograph from ../data/content.js at runtime. */
(function () {
  "use strict";

  var DATA = window.BIRTHDAY;
  if (!DATA) { return; }

  var reduceMotion = false;
  try {
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) { reduceMotion = false; }

  /* ---------------------------------------------------------- helpers */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined && text !== null && text !== "") { node.textContent = text; }
    return node;
  }

  function setVars(node, map) {
    var key;
    for (key in map) {
      if (Object.prototype.hasOwnProperty.call(map, key) && map[key] !== null) {
        node.style.setProperty(key, map[key]);
      }
    }
  }

  function words(list) {
    var joined = list.join(" ").trim();
    return joined ? joined.split(/\s+/).length : 0;
  }

  function startsWithLetter(text) {
    return /^[A-Za-z]/.test(text || "");
  }

  /* ------------------------------------------------------------ layout
     Hand set placement, one entry per photograph, in data order.
     d: [column start, column span, row, top offset] on a 12 column grid.
     m: [column start, column span] on a 6 column grid for the phone.
     Spans follow each photograph's own proportions so nothing is ever
     trimmed to fit a cell. */

  var PHOTO_LAYOUT = [
    { d: [1,  7, 1, "0"],    m: [1, 6] },
    { d: [8,  5, 1, "14vw"], m: [2, 5] },

    { d: [1, 11, 1, "0"],    m: [1, 6] },
    { d: [1,  5, 2, "0"],    m: [1, 5] },
    { d: [7,  6, 2, "10vw"], m: [2, 5] },

    { d: [1,  3, 1, "0"],    m: [1, 4] },
    { d: [7,  5, 1, "12vw"], m: [2, 5] },
    { d: [1,  4, 2, "0"],    m: [3, 4] },
    { d: [6,  5, 2, "8vw"],  m: [1, 6] },

    { d: [1,  4, 1, "0"],    m: [1, 5] },
    { d: [6,  6, 1, "10vw"], m: [1, 6] },
    { d: [2,  4, 2, "0"],    m: [3, 4] },
    { d: [7,  5, 2, "14vw"], m: [2, 5] },

    { d: [1,  5, 1, "0"],    m: [1, 6] },
    { d: [7,  4, 1, "12vw"], m: [1, 4] },
    { d: [3,  7, 2, "0"],    m: [1, 6] },
    { d: [1,  4, 3, "0"],    m: [2, 5] },
    { d: [6,  5, 3, "10vw"], m: [1, 6] }
  ];

  /* Chapter breaks each park the outlined 50 at their own fixed spot, so
     the number reads as one object recurring rather than as wallpaper. */
  var FIFTY_SPOTS = [
    { x: "56%", y: "-8%" },
    { x: "2%",  y: "14%" },
    { x: "64%", y: "-12%" },
    { x: "-4%", y: "6%" },
    { x: "48%", y: "-6%" }
  ];

  var TRIBUTE_LAYOUT = [
    { d: [1,  6, 1, "0"] },
    { d: [8,  4, 1, "11vw"] },
    { d: [3,  6, 2, "0"] },
    { d: [1,  4, 3, "0"] },
    { d: [6,  6, 3, "6vw"] },
    { d: [2,  5, 4, "0"] },
    { d: [1,  5, 5, "0"] },
    { d: [8,  4, 5, "10vw"] },
    { d: [2,  4, 6, "0"] },
    { d: [7,  5, 6, "5vw"] },
    { d: [1,  4, 7, "0"] },
    { d: [6,  6, 7, "9vw"] }
  ];

  /* A letter short enough to be held whole is printed whole, at the
     largest type on its own plate. A long letter keeps its pull quote
     here and opens into a reading view of its own. */
  var WHOLE_MAX_WORDS = 240;

  var revealables = [];

  function markReveal(node) {
    if (!reduceMotion && "IntersectionObserver" in window) {
      node.classList.add("reveal");
      revealables.push(node);
    }
  }

  /* -------------------------------------------------------------- hero */

  var person = DATA.person || {};
  var greeting = document.getElementById("hero-greeting");
  var sub = document.getElementById("hero-sub");
  if (person.greeting) { greeting.textContent = person.greeting; }
  if (person.subtitle) { sub.textContent = person.subtitle; }
  if (person.fromAll) { document.getElementById("close-title").textContent = person.fromAll; }

  /* The 50 is the page's largest object, so it is measured rather than
     guessed: whichever serif the device resolves, the numerals are sized
     to fill their own column exactly and can never overflow or clip. */
  var monumentDigits = document.querySelector(".monument__digits");
  var monumentBox = document.querySelector(".monument");
  var closeDigits = document.querySelector(".close__digits");
  var closeShell = document.querySelector(".close__shell");

  function fitDigits(node, targetWidth, maxHeight) {
    if (!node || !targetWidth) { return; }
    node.style.fontSize = "100px";
    var measured = node.getBoundingClientRect().width;
    if (!measured) { return; }
    var size = (targetWidth / measured) * 100;
    if (maxHeight) { size = Math.min(size, maxHeight / 0.74); }
    node.style.fontSize = Math.round(size) + "px";
  }

  function fitAll() {
    var wide = window.innerWidth >= 900;
    fitDigits(monumentDigits, monumentBox.clientWidth, window.innerHeight * (wide ? 0.58 : 0.42));
    fitDigits(closeDigits, closeShell.clientWidth * (wide ? 0.44 : 0.82), window.innerHeight * 0.5);
  }

  fitAll();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitAll).catch(function () { /* the fallback sizes hold */ });
  }

  var fitTimer = null;
  window.addEventListener("resize", function () {
    window.clearTimeout(fitTimer);
    fitTimer = window.setTimeout(fitAll, 150);
  });

  if (!reduceMotion) {
    var hero = document.getElementById("hero");
    hero.classList.add("intro");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { hero.classList.add("is-lit"); });
    });
  }

  /* ---------------------------------------------------------- chapters */

  var chaptersHost = document.getElementById("chapters");
  var photoIndex = 0;

  (DATA.chapters || []).forEach(function (chapter, ci) {
    var section = el("section", "chapter");
    section.setAttribute("aria-labelledby", "chapter-" + chapter.id);

    var spot = FIFTY_SPOTS[ci % FIFTY_SPOTS.length];
    var ghost = el("span", "chapter__fifty", "50");
    ghost.setAttribute("aria-hidden", "true");
    setVars(ghost, { "--fx": spot.x, "--fy": spot.y });
    section.appendChild(ghost);

    var head = el("div", "chapter__shell");
    var mark = el("span", "chapter__mark tick");
    mark.setAttribute("aria-hidden", "true");
    head.appendChild(mark);

    var title = el("h2", "chapter__title", chapter.title);
    title.id = "chapter-" + chapter.id;
    head.appendChild(title);

    if (chapter.note) { head.appendChild(el("p", "chapter__note", chapter.note)); }
    markReveal(head);
    section.appendChild(head);

    var plates = el("div", "plates");
    var shots = (DATA.photos || []).filter(function (p) { return p.chapter === chapter.id; });

    shots.forEach(function (photo) {
      var layout = PHOTO_LAYOUT[photoIndex] || { d: [1, 6, 1, "0"], m: [1, 6] };
      photoIndex += 1;

      var figure = el("figure", "plate");
      setVars(figure, {
        "--ar": photo.w + " / " + photo.h,
        "--d-start": String(layout.d[0]),
        "--d-span": String(layout.d[1]),
        "--d-row": String(layout.d[2]),
        "--d-off": layout.d[3],
        "--m-start": String(layout.m[0]),
        "--m-span": String(layout.m[1])
      });

      var img = el("img", "plate__img");
      img.src = "../" + photo.src;
      img.alt = photo.alt;
      img.width = photo.w;
      img.height = photo.h;
      img.decoding = "async";
      if (photoIndex > 2) { img.loading = "lazy"; }
      figure.appendChild(img);

      if (photo.caption) {
        var cap = el("figcaption", "plate__cap");
        var rule = el("span", "plate__cap-rule");
        rule.setAttribute("aria-hidden", "true");
        cap.appendChild(rule);
        cap.appendChild(el("span", null, photo.caption));
        figure.appendChild(cap);
      }

      markReveal(figure);
      plates.appendChild(figure);
    });

    section.appendChild(plates);
    chaptersHost.appendChild(section);
  });

  /* ----------------------------------------------------------- letters */

  var tributes = DATA.tributes || [];
  var entriesHost = document.getElementById("entries");

  function buildParagraphs(host, list, useDropCap) {
    list.forEach(function (text, i) {
      var p = el("p", null, text);
      if (useDropCap && i === 0 && startsWithLetter(text)) { p.className = "dropcap"; }
      host.appendChild(p);
    });
  }

  tributes.forEach(function (tribute, ti) {
    var count = words(tribute.paragraphs || []);
    var whole = count <= WHOLE_MAX_WORDS;
    var weight = count <= 90 ? "xl" : (count <= 180 ? "lg" : "md");

    var article = el("article", "entry" + (whole ? " entry--" + weight : ""));
    var layout = TRIBUTE_LAYOUT[ti] || { d: [1, 12, 1, "0"] };
    setVars(article, {
      "--d-start": String(layout.d[0]),
      "--d-span": String(layout.d[1]),
      "--d-row": String(layout.d[2]),
      "--d-off": layout.d[3]
    });

    var name = el("h3", "entry__author", tribute.author);
    name.id = "tribute-" + tribute.id;
    article.appendChild(name);
    article.setAttribute("aria-labelledby", name.id);

    if (tribute.relation) {
      article.appendChild(el("span", "entry__rel micro", tribute.relation));
    }

    if (whole) {
      if (tribute.salutation) {
        article.appendChild(el("p", "entry__salut", tribute.salutation));
      }
      var body = el("div", "entry__whole");
      buildParagraphs(body, tribute.paragraphs || [], weight === "md");
      article.appendChild(body);
      if (tribute.signoff) {
        article.appendChild(el("p", "entry__sign", tribute.signoff));
      }
    } else {
      if (tribute.heading) {
        article.appendChild(el("p", "entry__heading", tribute.heading));
      }
      if (tribute.pullQuote) {
        article.appendChild(el("p", "entry__quote", tribute.pullQuote));
      }
      var open = el("button", "entry__open", "Read the letter");
      open.type = "button";
      open.setAttribute("aria-label", "Read the letter from " + tribute.author);
      open.addEventListener("click", function () { openReader(ti, open); });
      article.appendChild(open);
    }

    markReveal(article);
    entriesHost.appendChild(article);
  });

  /* ------------------------------------------------------------- close */

  var closeNames = document.getElementById("close-names");
  tributes.forEach(function (tribute) {
    closeNames.appendChild(el("li", null, tribute.author));
  });

  /* ------------------------------------------------------------ reader */

  var reader = document.getElementById("reader");
  var readerPanel = document.getElementById("reader-panel");
  var readerScroll = document.getElementById("reader-scroll");
  var readerBody = document.getElementById("reader-body");
  var readerAuthor = document.getElementById("reader-author");
  var readerRel = document.getElementById("reader-rel");
  var prevBtn = document.getElementById("reader-prev");
  var nextBtn = document.getElementById("reader-next");
  var mainEl = document.getElementById("top");

  var lastFocus = null;
  var currentIndex = -1;
  var scrollY = 0;

  function renderLetter(index) {
    var tribute = tributes[index];
    if (!tribute) { return; }
    currentIndex = index;

    readerAuthor.textContent = tribute.author;
    readerRel.textContent = tribute.relation || "";

    while (readerBody.firstChild) { readerBody.removeChild(readerBody.firstChild); }

    if (tribute.heading) {
      readerBody.appendChild(el("h2", "reader__heading", tribute.heading));
    }
    if (tribute.salutation) {
      readerBody.appendChild(el("p", "reader__salut", tribute.salutation));
    }

    var text = el("div", "reader__text");
    buildParagraphs(text, tribute.paragraphs || [], true);
    readerBody.appendChild(text);

    if (tribute.signoff) {
      readerBody.appendChild(el("p", "reader__sign", tribute.signoff));
    }

    var before = tributes[index - 1];
    var after = tributes[index + 1];

    prevBtn.disabled = !before;
    prevBtn.textContent = before ? "Back to " + before.author : "This is the first letter";
    nextBtn.disabled = !after;
    nextBtn.textContent = after ? "Next, " + after.author : "This is the last letter";

    readerScroll.scrollTop = 0;
  }

  function openReader(index, trigger) {
    lastFocus = trigger || document.activeElement;
    scrollY = window.pageYOffset;

    renderLetter(index);
    reader.hidden = false;
    document.body.classList.add("is-locked");
    if ("inert" in HTMLElement.prototype) { mainEl.inert = true; }
    else { mainEl.setAttribute("aria-hidden", "true"); }

    readerScroll.focus();
  }

  function closeReader() {
    reader.hidden = true;
    document.body.classList.remove("is-locked");
    if ("inert" in HTMLElement.prototype) { mainEl.inert = false; }
    else { mainEl.removeAttribute("aria-hidden"); }

    if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
    window.scrollTo(0, scrollY);
    currentIndex = -1;
  }

  function step(delta) {
    var next = currentIndex + delta;
    if (next < 0 || next >= tributes.length) { return; }
    renderLetter(next);
    readerScroll.focus();
  }

  prevBtn.addEventListener("click", function () { step(-1); });
  nextBtn.addEventListener("click", function () { step(1); });

  Array.prototype.forEach.call(
    reader.querySelectorAll("[data-reader-close]"),
    function (node) { node.addEventListener("click", closeReader); }
  );

  document.addEventListener("keydown", function (event) {
    if (reader.hidden) { return; }

    if (event.key === "Escape") {
      event.preventDefault();
      closeReader();
      return;
    }

    if (event.key !== "Tab") { return; }

    var focusable = readerPanel.querySelectorAll(
      'button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) { return; }

    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    var active = document.activeElement;

    if (event.shiftKey && (active === first || active === readerScroll)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ------------------------------------------------------------ reveal */

  if (revealables.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.02 });

    revealables.forEach(function (node) { observer.observe(node); });

    /* Nothing stays hidden because an observer never fired. */
    window.setTimeout(function () {
      revealables.forEach(function (node) { node.classList.add("is-in"); });
    }, 4000);
  }
})();
