# Fifty Years in Bloom: Nwando at 50

## Purpose

Create a fiftieth-birthday website for Mum that feels like a guided, emotional journey rather than a page of stacked messages. The experience moves through fifty years, from earlier photographs toward the present, while family tributes appear as letters gathered along the way.

## Core idea

The site is titled **Fifty Years in Bloom**. A fine illustrated vine acts as the thread of time. As the visitor scrolls, the vine grows, photographs appear one at a time, and the light shifts from predawn blue-green to warm celebration gold. The final scene reveals the whole collection as a garden made from the life and people she has nurtured.

The memorable interaction is the transition between photographs: the current image gently recedes into a botanical frame while the next photograph develops into view. Motion is restrained everywhere else.

## Story structure

1. **Opening: Before the garden wakes**
   - Full-screen, quiet introduction.
   - Copy: “Fifty years of becoming. A lifetime of making everything around you bloom.”
   - A single “Begin her story” control starts the experience.
2. **The beginning**
   - The five scanned photographs open the chronology: young love, the early work and home-building years, then becoming a mother.
   - Photographs: `CamScanner 17-09-2026 14.34_41.jpg`, `…_51.jpg`, `…_43.jpg`, `…_24.jpg`, `…_37.jpg`.
   - Their scanned texture is preserved rather than artificially polished; the marks and softness belong to the memories.
3. **Becoming**
   - Earlier-looking digital solo portraits bridge the family archive into the present day.
   - Photographs: `578369b8…`, `91675701…`, `d3bea545…`, `3ba9e2a9…`.
4. **The love she made a home for**
   - Family photographs show her children at visibly younger stages and then growing older.
   - Photographs: `8a99855b…`, `6afe809e…`, `94b55752…`, `c0b4c35d…`.
5. **In full bloom**
   - Confident recent portraits move from everyday brightness into celebration.
   - Photographs: `315feb04…`, `85fbc459…`, `5482df1c…`.
6. **Today**
   - The paired white-and-gold celebration photographs close the timeline.
   - Photographs: `bc3efdbd…`, `5b912ac6…`.
7. **Finale: The garden she grew**
   - A mosaic of all photographs resolves around a final fiftieth-birthday message.
   - Fifty small golden blooms gather around the closing portrait, one for every year, without competing with the photographs.
   - Every tribute author’s name appears as part of the garden; selecting a name opens their full letter.

This ordering is intentionally approximate. Because the source files contain no original dates, the interface will name broad life chapters and will not display invented years or ages.

## Tributes

Tributes live in one easy-to-edit data file. Each entry contains the author’s name, their relationship to Nwando, and the message. During the journey, brief lines from the tributes appear beside selected photographs. Full tributes are opened from the final garden in an accessible letter overlay.

The family order is Chike first, then the children in birth order (CC, Uche/Nwanyikibie, Somi, Ifeoma), then Dammy before the other friends, including Uche's friends Nene and Osato, with Oghenero Agunbiade's community tribute closing the collection. Relationship and birth-order notes used to determine this sequence are not displayed as editorial annotations.

The supplied writing retains each author’s individual voice, spelling choices, humour, emojis, and phrasing. Editing is limited to display-safe paragraph breaks and obvious accidental whitespace.

Placeholder tributes will make the site complete and testable before the final writing arrives. They will be clearly marked in the data file for replacement and will not pretend to be real family messages.

## Visual language

- **Palette:** Midnight Leaf `#102D28`, Rainwashed Green `#315F4C`, Living Green `#6F8F5E`, Sunlit Gold `#D8A84E`, Petal `#F5DED6`, Paper `#FFF9ED`.
- **Type:** a graceful editorial serif for the story and a quiet humanist sans-serif for controls and guidance. Fonts will be loaded with resilient local fallbacks so the page still works offline.
- **Composition:** full-bleed vertical photographs, generous negative space, irregular botanical framing, and a continuous off-center timeline. The image subjects remain the focus; decoration stays at the edges.
- **Image treatment:** no AI alteration of faces. Cropping uses focal-position controls per photograph, with full-image viewing available.
- **Motion:** one orchestrated scroll-driven reveal; action feedback for opening and closing letters; reduced-motion mode becomes a clean crossfade.

## Technical shape

The deliverable is a dependency-free static site: semantic HTML, focused CSS, and small vanilla JavaScript files. Photographs are copied into `assets/photos/` with readable chronological filenames. `tributes.js` is the only file the family needs to edit for messages.

The site must work by opening `index.html` locally and must deploy unchanged to a GitHub Pages project URL. All internal asset references are relative and no server routing is required. It will be responsive, keyboard navigable, screen-reader labelled, and usable with motion disabled.

## Verification

- Confirm all 18 photographs load and remain correctly cropped at phone and desktop widths.
- Confirm the photo order, chapter transitions, tribute letter controls, keyboard focus, and reduced-motion behavior.
- Confirm no horizontal overflow and no missing content with JavaScript unavailable beyond the enhanced interactions.
- Run the repository’s required check command if one is introduced. At present this folder has no repository or verification gate.

## Deliberate limits

- No invented dates or exact ages.
- No em dashes in interface text, tribute copy, metadata, or documentation.
- No music autoplay.
- No upload form, database, login, or admin panel.
- No dependence on a framework or build step under the birthday deadline.
