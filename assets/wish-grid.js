/* ============================================================
   Wish Wall symbol grid v2 — 16 numbered symbols + grid-code parser.

   Important: the reference sheet these were catalogued from was
   itself datamined/"ripped" directly from the game's files (credited
   to a ripper, not a fan illustrator), not fetched through Bungie's
   official API. That's a different situation from the weapon/armor
   icons elsewhere on this site, which the API explicitly provides
   for this kind of use — a rip isn't going through that same
   sanctioned channel. So rather than trace or host the extracted
   art directly, every icon below is an original, simplified design
   of our own, just numbered to match the same 16 positions (reading
   left-to-right, top-to-bottom off the reference sheet). Only the
   PATTERN (which numbered symbol sits in which slot) carries over —
   that's factual game data, not anyone's copyrightable artwork.

   Grid codes: plain text, 4 rows of 5 two-digit numbers, space
   separated. "00" = blank button. "01"-"16" = one of the symbols
   below. Example:
     00 00 00 00 00
     00 06 06 06 00
     00 06 06 02 00
     00 00 00 00 00
   ============================================================ */
window.WishGrid = (function(){

  // 16 original icons — simplified silhouettes, not traced copies.
  const SYMBOLS = {
    1:  '<path d="M12 4 Q18 6 17 12 Q19 16 14 18 L10 15 Q7 12 9 8 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 15 L6 18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
    2:  '<path d="M12 5 Q16 6 15 11 Q17 15 12 17 Q7 15 9 11 Q8 6 12 5 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="6" y1="19" x2="18" y2="19" stroke="currentColor" stroke-width="1.4"/>',
    3:  '<path d="M6 15 Q10 6 15 9 Q13 11 16 12 Q12 14 9 12 Q11 16 6 15 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    4:  '<path d="M5 16 Q9 8 15 10 Q18 11 19 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9" y1="16" x2="9" y2="19" stroke="currentColor" stroke-width="1.4"/><line x1="14" y1="16" x2="14" y2="19" stroke="currentColor" stroke-width="1.4"/>',
    5:  '<path d="M4 12 Q9 6 16 9 Q20 10.5 20 12 Q20 13.5 16 15 Q9 18 4 12 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 9 Q20 15 22 18" fill="none" stroke="currentColor" stroke-width="1.2"/>',
    6:  '<path d="M14 4 Q19 8 16 13 Q19 17 13 19 Q7 18 8 13 Q5 9 10 6 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    7:  '<path d="M9 6 Q16 6 16 12 Q16 18 9 18 Q13 15 13 12 Q13 9 9 6 Z" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="18" r="1" fill="currentColor"/>',
    8:  '<path d="M4 16 Q8 5 12 12 Q16 5 20 16 Q14 12 12 15 Q10 12 4 16 Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    9:  '<path d="M12 12 Q8 6 4 12 Q8 18 12 12 Q16 6 20 12 Q16 18 12 12 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="4.5" cy="12" r="1.1" fill="currentColor"/>',
    10: '<path d="M12 12 Q8 6 4 12 Q8 18 12 12 Q16 6 20 12 Q16 18 12 12 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="4.5" cy="12" r="1.1" fill="currentColor"/><circle cx="19.5" cy="12" r="1.1" fill="currentColor"/>',
    11: '<path d="M4 8 Q10 8 10 12 Q10 16 16 16 Q20 16 20 13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    12: '<path d="M6 7 Q4 12 8 15 Q6 17 8 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M18 7 Q20 12 16 15 Q18 17 16 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="6" cy="7" r="1" fill="currentColor"/><circle cx="18" cy="7" r="1" fill="currentColor"/>',
    13: '<path d="M6 17 L9 10 L12 14 L15 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 6 Q19 5 21 8 Q18 8 17 10" fill="none" stroke="currentColor" stroke-width="1.3"/>',
    14: '<path d="M18 17 L15 10 L12 14 L9 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 6 Q5 5 3 8 Q6 8 7 10" fill="none" stroke="currentColor" stroke-width="1.3"/>',
    15: '<path d="M8 4 Q14 6 12 12 Q14 18 8 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="17" y1="3" x2="17" y2="21" stroke="currentColor" stroke-width="1.3"/>',
    16: '<path d="M16 4 Q10 6 12 12 Q10 18 16 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="3" x2="7" y2="21" stroke="currentColor" stroke-width="1.3"/>'
  };

  // Which family each of the 16 original icons belongs to, so we can
  // color-code them — makes it much easier to tell a bird from a dragon
  // at a glance instead of relying on shape alone.
  const FAMILY = {
    1: "bird", 2: "bird", 3: "bird", 4: "bird",
    5: "fish", 6: "fish", 7: "fish", 8: "fish",
    9: "snake", 10: "snake", 11: "snake", 12: "snake",
    13: "dragon", 14: "dragon", 15: "dragon", 16: "dragon"
  };
  const FAMILY_COLORS = {
    bird:   "#5fc9e8",
    fish:   "#66e29a",
    snake:  "#f2c96a",
    dragon: "#f27a8a"
  };

  function cellSvg(n){
    const filled = n && n > 0;
    if (filled){
      const label = "LW_" + String(n).padStart(2, "0");
      return '<img class="wishgrid-cell filled" src="puzzle-assets/' + label + '.png" alt="Symbol ' + n + '" width="56" height="56">';
    }
    return '<span class="wishgrid-cell blank"></span>';
  }

  // Accepts either a 20-item array of numbers (0 = blank, 1-16 = symbol)
  // or a plain-text code block like:
  //   "00 00 00 00 00\n00 06 06 06 00\n00 06 06 02 00\n00 00 00 00 00"
  function parseGridCode(code){
    const nums = code.trim().split(/\s+/).map(Number);
    if (nums.length !== 20) throw new Error("Grid code must have exactly 20 values, got " + nums.length);
    return nums;
  }

  function renderGrid(grid){
    let nums = grid;
    if (typeof grid === "string") nums = parseGridCode(grid);
    if (!nums || nums.length !== 20) return '';
    const rows = [0, 1, 2, 3].map(r =>
      '<div class="wishgrid-row">' +
        nums.slice(r * 5, r * 5 + 5).map(cellSvg).join("") +
      '</div>'
    ).join("");
    return '<div class="wishgrid">' + rows + '</div>';
  }

  return { renderGrid, parseGridCode, SYMBOLS, FAMILY, FAMILY_COLORS };
})();
