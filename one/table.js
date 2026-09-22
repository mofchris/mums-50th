/* The table. Everything on this page is rendered from data/content.js at
   runtime, with createElement and textContent only. */
(function () {
  "use strict";

  var data = window.BIRTHDAY;
  if (!data) { return; }

  var reduceMotion = false;
  try {
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) { reduceMotion = false; }

  /* How each print lies on the table. Hand set, never generated: the angles
     and offsets are irregular on purpose and never mirror each other.
     wd/mld/dyd/rotd are the desktop values, wm/mlm/dym/rotm the phone ones. */
  var PRINTS = [
    { wd: 52, mld: 0,    dyd: 8,    rotd: -1.5, wm: 100, mlm: 0,  dym: 0,    rotm: -1.3, z: 2 },
    { wd: 44, mld: -1.5, dyd: 108,  rotd: 2.1,  wm: 86,  mlm: 12, dym: -14,  rotm: 1.9,  z: 3 },
    { wd: 57, mld: 0,    dyd: 0,    rotd: -1.0, wm: 100, mlm: 0,  dym: 0,    rotm: 1.0,  z: 1 },
    { wd: 37, mld: 1,    dyd: 132,  rotd: 2.3,  wm: 78,  mlm: 0,  dym: -10,  rotm: -2.0, z: 3 },
    { wd: 45, mld: 9,    dyd: -66,  rotd: -2.2, wm: 80,  mlm: 18, dym: -22,  rotm: 1.6,  z: 2 },
    { wd: 20, mld: 2,    dyd: 44,   rotd: 1.8,  wm: 40,  mlm: 0,  dym: 0,    rotm: 1.8,  z: 2 },
    { wd: 30, mld: 3,    dyd: 0,    rotd: -1.4, wm: 52,  mlm: 4,  dym: 40,   rotm: -1.5, z: 3 },
    { wd: 23, mld: 3,    dyd: 134,  rotd: 2.4,  wm: 46,  mlm: 0,  dym: -20,  rotm: 2.2,  z: 1 },
    { wd: 34, mld: 30,   dyd: -104, rotd: -2.0, wm: 46,  mlm: 6,  dym: 64,   rotm: -1.9, z: 4 },
    { wd: 28, mld: 0,    dyd: 0,    rotd: -1.7, wm: 88,  mlm: 0,  dym: 0,    rotm: -1.5, z: 2 },
    { wd: 34, mld: 3,    dyd: 86,   rotd: 1.2,  wm: 44,  mlm: 6,  dym: -6,   rotm: 1.8,  z: 3 },
    { wd: 26, mld: 4,    dyd: 14,   rotd: -2.3, wm: 42,  mlm: 4,  dym: 52,   rotm: -2.2, z: 1 },
    { wd: 31, mld: 18,   dyd: -96,  rotd: 2.0,  wm: 82,  mlm: 14, dym: -18,  rotm: 1.3,  z: 4 },
    { wd: 27, mld: 0,    dyd: 30,   rotd: 1.5,  wm: 52,  mlm: 0,  dym: 0,    rotm: 1.6,  z: 2 },
    { wd: 25, mld: 3,    dyd: 0,    rotd: -1.9, wm: 40,  mlm: 6,  dym: 58,   rotm: -1.8, z: 3 },
    { wd: 33, mld: 3,    dyd: 96,   rotd: 1.0,  wm: 92,  mlm: 4,  dym: -10,  rotm: -1.1, z: 4 },
    { wd: 29, mld: 6,    dyd: -70,  rotd: -2.1, wm: 44,  mlm: 0,  dym: 0,    rotm: 2.0,  z: 2 },
    { wd: 32, mld: 4,    dyd: 40,   rotd: 1.7,  wm: 48,  mlm: 6,  dym: 44,   rotm: -1.5, z: 3 }
  ];

  /* How each letter lies, and what paper it is written on. Excel and Paul sit
     side by side, so do Nene and Osato: four short notes, two real pairs. */
  /* A tall sheet swings a long way at the corners, so on a phone the letters
     that run full length lie almost flat and only the short notes tilt. */
  var LETTERS = {
    chike:    { stock: "laid",    fold: 1, wd: 62, mld: 4,  dyd: 0,   rotd: -0.8, wm: 96, mlm: 2, rotm: -0.8 },
    cc:       { stock: "lined",   fold: 0, wd: 56, mld: 26, dyd: -30, rotd: 1.1,  wm: 94, mlm: 4, rotm: 0.35 },
    uche:     { stock: "laid",    fold: 2, wd: 66, mld: 2,  dyd: -20, rotd: -1.0, wm: 98, mlm: 0, rotm: -0.6 },
    somi:     { stock: "laid",    fold: 0, wd: 58, mld: 28, dyd: -24, rotd: 0.9,  wm: 94, mlm: 4, rotm: 0.8 },
    ifeoma:   { stock: "lined",   fold: 0, wd: 52, mld: 6,  dyd: -16, rotd: -1.3, wm: 92, mlm: 4, rotm: -0.4 },
    dammy:    { stock: "laid",    fold: 1, wd: 60, mld: 24, dyd: -28, rotd: 0.7,  wm: 96, mlm: 2, rotm: 0.7 },
    jinghreh: { stock: "airmail", fold: 1, wd: 63, mld: 3,  dyd: -20, rotd: -0.9, wm: 96, mlm: 2, rotm: -0.7 },
    excel:    { stock: "note",    fold: 0, wd: 40, mld: 8,  dyd: 0,   rotd: 1.4,  wm: 84, mlm: 8, rotm: 1.2 },
    paul:     { stock: "note",    fold: 0, wd: 40, mld: 6,  dyd: 46,  rotd: -1.6, wm: 84, mlm: 6, rotm: -1.2 },
    nene:     { stock: "lined",   fold: 0, wd: 41, mld: 12, dyd: -10, rotd: -1.2, wm: 86, mlm: 9, rotm: -0.6 },
    osato:    { stock: "lined",   fold: 0, wd: 41, mld: 4,  dyd: 40,  rotd: 1.5,  wm: 86, mlm: 5, rotm: 0.55 },
    oghenero: { stock: "laid",    fold: 1, wd: 64, mld: 16, dyd: -6,  rotd: 0.8,  wm: 96, mlm: 2, rotm: 0.7 }
  };

  /* Above this length a letter is folded: its pull quote stays out on the
     table and the whole text opens in a reading view. Below it, the letter is
     present in full, complete, nothing held back. */
  var FOLD_AT = 340;

  var FALLBACK = { wd: 46, mld: 6, dyd: 0, rotd: 1, wm: 96, mlm: 2, dym: 0, rotm: 1, z: 1, stock: "laid", fold: 0 };

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) { node.className = cls; }
    if (text != null) { node.textContent = text; }
    return node;
  }

  function lay(node, spec) {
    node.style.setProperty("--wd", spec.wd + "%");
    node.style.setProperty("--mld", spec.mld + "%");
    node.style.setProperty("--dyd", (spec.dyd || 0) + "px");
    node.style.setProperty("--rotd", spec.rotd + "deg");
    node.style.setProperty("--wm", spec.wm + "%");
    node.style.setProperty("--mlm", spec.mlm + "%");
    node.style.setProperty("--dym", (spec.dym || 0) + "px");
    node.style.setProperty("--rotm", spec.rotm + "deg");
    if (spec.z) { node.style.setProperty("--z", String(spec.z)); }
  }

  function words(paragraphs) {
    var all = paragraphs.join(" ").replace(/\s+/g, " ").trim();
    return all ? all.split(" ").length : 0;
  }

  /* ------------------------------------------------------------- hero */

  function buildHero() {
    var host = document.getElementById("hero");
    var person = data.person;

    var type = el("div", "hero__type");
    var h1 = el("h1", "hero__greeting");
    var greeting = person.greeting || "";
    var tail = ", " + person.name;
    if (person.name && greeting.slice(-tail.length) === tail) {
      h1.appendChild(el("span", "hero__line", greeting.slice(0, greeting.length - tail.length) + ","));
      h1.appendChild(el("span", "hero__name", person.name));
    } else {
      h1.appendChild(el("span", "hero__line", greeting));
    }
    type.appendChild(h1);
    type.appendChild(el("div", "hero__hair"));
    if (person.subtitle) { type.appendChild(el("p", "hero__sub", person.subtitle)); }

    var jump = el("a", "hero__jump", "Read the twelve letters");
    jump.href = "#letters";
    type.appendChild(jump);

    var heroPhoto = null;
    var i;
    for (i = 0; i < data.photos.length; i++) {
      if (data.photos[i].hero) { heroPhoto = data.photos[i]; break; }
    }
    if (!heroPhoto) { heroPhoto = data.photos[data.photos.length - 1]; }

    var holder = el("div", "hero__plate");
    holder.style.setProperty("--rot", "2.1deg");
    holder.style.transform = "rotate(2.1deg)";
    holder.appendChild(buildPrint(heroPhoto, false, true));

    host.appendChild(type);
    host.appendChild(holder);
  }

  /* ----------------------------------------------------------- prints */

  function buildPrint(photo, isScan, eager) {
    var fig = el("figure", "print" + (isScan ? " print--scan" : ""));

    var img = document.createElement("img");
    img.src = "../" + photo.src;
    img.alt = photo.alt;
    img.width = photo.w;
    img.height = photo.h;
    img.style.setProperty("--ar", photo.w + " / " + photo.h);
    img.decoding = "async";
    img.loading = eager ? "eager" : "lazy";
    if (eager) { img.setAttribute("fetchpriority", "high"); }
    fig.appendChild(img);

    if (photo.caption) {
      fig.appendChild(el("figcaption", "print__caption", photo.caption));
    }
    fig.appendChild(el("span", "print__grain"));
    return fig;
  }

  function buildAlbum() {
    var host = document.getElementById("chapters");
    var scanned = 0;

    data.chapters.forEach(function (chapter) {
      var section = el("section", "chapter");
      section.setAttribute("aria-labelledby", "chapter-" + chapter.id);

      var head = el("div", "chapter__head");
      head.appendChild(el("div", "chapter__rule"));
      var title = el("h3", "chapter__title", chapter.title);
      title.id = "chapter-" + chapter.id;
      head.appendChild(title);
      if (chapter.note) { head.appendChild(el("p", "chapter__note", chapter.note)); }
      section.appendChild(head);

      var spread = el("div", "spread");
      var placed = 0;

      data.photos.forEach(function (photo, index) {
        if (photo.chapter !== chapter.id) { return; }
        /* the five landscape scans are the old prints: heavier, yellower
           stock. The photograph itself is never touched. */
        var isScan = photo.w / photo.h > 1.2;
        if (isScan) { scanned++; }

        var plate = el("div", "plate");
        lay(plate, PRINTS[index] || FALLBACK);
        /* A caption is her children's words about the photograph. Prints may
           overlap at the corners, which is the whole point of a table, but an
           overlap that swallows a caption is lost content. Overlap comes from
           a later plate pulling upward, so captioned prints ride above every
           plate that follows them. */
        if (photo.caption) { plate.style.setProperty("--z", String(40 - index)); }
        plate.appendChild(buildPrint(photo, isScan, index < 2));
        if (!reduceMotion) {
          plate.classList.add("reveal");
          plate.style.setProperty("--delay", (placed % 4) * 70 + "ms");
        }
        spread.appendChild(plate);
        placed++;
      });

      section.appendChild(spread);
      host.appendChild(section);
    });
    return scanned;
  }

  /* ---------------------------------------------------------- letters */

  function arrowIcon() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "arrow");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M2.5 8h11M9 3.5 13.5 8 9 12.5");
    svg.appendChild(path);
    return svg;
  }

  function fillBody(host, tribute, cls) {
    var body = el("div", cls || "sheet__body");
    tribute.paragraphs.forEach(function (text) {
      body.appendChild(el("p", null, text));
    });
    host.appendChild(body);
  }

  function buildLetters() {
    var pile = document.getElementById("pile");
    var slip = document.getElementById("slip-list");

    data.tributes.forEach(function (tribute, order) {
      var spec = LETTERS[tribute.id] || FALLBACK;
      var long = words(tribute.paragraphs) > FOLD_AT;

      var article = el("article", "letter stock-" + spec.stock + (spec.fold ? " fold-" + spec.fold : ""));
      article.id = "letter-" + tribute.id;
      article.setAttribute("aria-labelledby", "author-" + tribute.id);
      lay(article, spec);

      var sheet = el("div", "sheet");
      var paper = el("div", "sheet__paper");

      if (tribute.relation) { paper.appendChild(el("p", "letter__relation", tribute.relation)); }
      var author = el("h3", "letter__author", tribute.author);
      author.id = "author-" + tribute.id;
      paper.appendChild(author);
      if (tribute.heading) { paper.appendChild(el("p", "letter__heading", tribute.heading)); }
      paper.appendChild(el("div", "letter__hair"));

      if (tribute.salutation) {
        paper.appendChild(el("p", "letter__salutation", tribute.salutation));
      }

      if (long) {
        /* folded: what shows on the table is the line she needs to read */
        if (tribute.pullQuote) {
          paper.appendChild(el("blockquote", "letter__quote", tribute.pullQuote));
        }
        var flap = el("div", "letter__flap");
        var open = el("button", "letter__open");
        open.type = "button";
        open.appendChild(document.createTextNode("Read the whole letter"));
        open.appendChild(arrowIcon());
        open.setAttribute("aria-label", "Read the whole letter from " + tribute.author);
        open.addEventListener("click", function () { openReader(tribute, open); });
        flap.appendChild(open);
        paper.appendChild(flap);
      } else {
        /* short: present in full, right here, nothing folded away */
        fillBody(paper, tribute);
        if (tribute.signoff) {
          paper.appendChild(el("p", "letter__signoff", tribute.signoff));
        }
      }

      if (spec.fold) { paper.appendChild(el("span", "sheet__crease")); }
      sheet.appendChild(paper);
      article.appendChild(sheet);

      if (!reduceMotion) {
        article.classList.add("reveal");
        article.style.setProperty("--delay", (order % 2) * 90 + "ms");
      }
      pile.appendChild(article);

      var item = document.createElement("li");
      var link = el("a", "slip__link");
      link.href = "#letter-" + tribute.id;
      link.appendChild(document.createTextNode(tribute.author));
      if (tribute.relation) { link.appendChild(el("span", null, tribute.relation)); }
      item.appendChild(link);
      slip.appendChild(item);
    });

    var inner = el("div", "slip__inner");
    var nav = document.getElementById("slip");
    inner.appendChild(document.getElementById("slip-title"));
    inner.appendChild(slip);
    nav.appendChild(inner);
  }

  /* ----------------------------------------------------- reading view */

  var reader = document.getElementById("reader");
  var readerBody = document.getElementById("reader-body");
  var readerRelation = document.getElementById("reader-relation");
  var lastOpener = null;
  var canModal = !!(window.HTMLDialogElement && reader && typeof reader.showModal === "function");

  function openReader(tribute, opener) {
    lastOpener = opener || null;
    readerRelation.textContent = tribute.relation || "";
    while (readerBody.firstChild) { readerBody.removeChild(readerBody.firstChild); }

    var author = el("h2", "letter__author", tribute.author);
    author.id = "reader-author";
    readerBody.appendChild(author);
    if (tribute.heading) { readerBody.appendChild(el("p", "letter__heading", tribute.heading)); }
    readerBody.appendChild(el("div", "letter__hair"));
    if (tribute.salutation) { readerBody.appendChild(el("p", "letter__salutation", tribute.salutation)); }
    fillBody(readerBody, tribute);
    if (tribute.signoff) { readerBody.appendChild(el("p", "letter__signoff", tribute.signoff)); }

    document.body.classList.add("is-reading");
    if (canModal) {
      reader.showModal();
    } else {
      reader.classList.add("reader--fallback");
      reader.setAttribute("open", "");
      reader.setAttribute("role", "dialog");
      reader.setAttribute("aria-modal", "true");
    }
    readerBody.scrollTop = 0;
    readerBody.focus();
  }

  function closeReader() {
    document.body.classList.remove("is-reading");
    if (canModal && reader.open) {
      reader.close();
    } else {
      reader.removeAttribute("open");
      reader.classList.remove("reader--fallback");
    }
    if (lastOpener) { lastOpener.focus(); lastOpener = null; }
  }

  function wireReader() {
    if (!reader) { return; }
    document.getElementById("reader-close-top").addEventListener("click", closeReader);
    document.getElementById("reader-close-bottom").addEventListener("click", closeReader);
    reader.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeReader();
    });
    reader.addEventListener("click", function (event) {
      if (event.target === reader) { closeReader(); }
    });
    if (!canModal) {
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && reader.hasAttribute("open")) { closeReader(); }
      });
    }
  }

  /* ---------------------------------------------------------- closing */

  function buildClose() {
    var host = document.getElementById("close");
    host.appendChild(el("div", "close__rule"));
    host.appendChild(el("p", "close__from", data.person.fromAll));
    /* Glue each separator to the name before it with a non breaking space, so
       a wrapped line can never open with a stranded dot. The ordinary space
       after the dot stays the only break opportunity. */
    var names = data.tributes.map(function (t) { return t.author; }).join(" · ");
    host.appendChild(el("p", "close__names", names));
  }

  /* --------------------------------------------------------- settling */

  /* Anything that has reached the viewport settles, and anything already
     past it settles too, so a fast flick down the page can never leave a
     photograph or a letter invisible. */
  function settle() {
    var pending = [];
    var nodes = document.querySelectorAll(".reveal");
    var i;
    for (i = 0; i < nodes.length; i++) { pending.push(nodes[i]); }

    if (reduceMotion || !window.requestAnimationFrame) {
      for (i = 0; i < pending.length; i++) { pending[i].classList.add("is-settled"); }
      return;
    }

    var queued = false;

    function check() {
      queued = false;
      var edge = (window.innerHeight || document.documentElement.clientHeight) * 0.94;
      var waiting = [];
      for (var j = 0; j < pending.length; j++) {
        if (pending[j].getBoundingClientRect().top < edge) {
          pending[j].classList.add("is-settled");
        } else {
          waiting.push(pending[j]);
        }
      }
      pending = waiting;
      if (!pending.length) {
        window.removeEventListener("scroll", request);
        window.removeEventListener("resize", request);
      }
    }

    function request() {
      if (queued) { return; }
      queued = true;
      window.requestAnimationFrame(check);
    }

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    window.addEventListener("load", request);
    check();
  }

  buildHero();
  buildAlbum();
  buildLetters();
  buildClose();
  wireReader();
  settle();
})();
