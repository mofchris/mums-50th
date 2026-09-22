# PRODUCT.md

## What this is

A private one-page birthday gift. A son built it for his mother's 50th birthday. She opens a
link on her phone when she wakes up and finds eighteen photographs of her own life and twelve
letters that her husband, her four children, and eight friends wrote for her.

It is not a product, a portfolio, or a campaign. Nobody is being converted. The only success
condition is that she feels seen.

## Who opens it

**Her.** Fifty today. Nigerian, Igbo. A teacher and a trader who built a cooperative. Opens it
on a phone, almost certainly first thing in the morning, probably alone, probably emotional.
Not a heavy technology user. She will not know to hover, drag, or discover. Anything that
requires her to figure out an interface is a failure.

**Then everyone else.** Her children and friends will open it on phones and laptops right
after she does, looking for their own letter and for the photographs they have not seen in
twenty years.

## The content, fixed

- **18 photographs.** Five are scanned prints from her twenties and thirties, landscape, grainy,
  with the marks of real paper on them. Thirteen are phone photographs from recent years,
  portrait, two of them unusually narrow. Chronological order is already resolved in
  `data/content.js` and is correct.
- **12 tributes.** Order is fixed and meaningful: her husband Chike, then the four children in
  birth order (CC, Uche, Somi, Ifeoma), then Dammy who the family counts as a daughter, then
  the friends, closing with Oghenero. Two letters are very long. Four are only a few lines.
  That imbalance is real and the design has to hold both without making the short ones look
  like an afterthought.
- Every word is a real person's writing. Voice, pidgin, Igbo, emojis and capital letters are
  preserved deliberately.

## Hard constraints

1. **No photograph may ever be cropped.** No `object-fit: cover`, no fixed-aspect tiles, no
   uniform grid cells that trim a face. Every image is shown whole, at its own aspect ratio.
   This is the single strongest instruction from the client.
2. **No em dashes or en dashes anywhere**, in interface copy, tribute text, comments, or docs.
3. The headline says **"Mummy"**. Her given name is not used in display type.
4. Ships to **GitHub Pages at a project path**, so every asset reference is relative. It must
   also work by double-clicking `index.html` from the filesystem.
5. **No build step, no framework, no dependencies.** Plain HTML, CSS, and one classic script.
6. No music autoplay, no login, no upload form, no invented dates or ages.
7. Real accessibility: keyboard reachable, visible focus, labelled controls, honest alt text,
   and a reduced-motion path that still shows everything.

## Verification

`node tools/check.mjs` is the done gate. It asserts the data contract, that all 18 photo files
exist, that no page uses a site-root path or `object-fit: cover`, and that no em dash has crept
into the project.
