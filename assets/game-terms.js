/* ============================================================
   Game term highlighting — italicizes known buff/debuff names
   wherever they appear in guide text, so they stand out from
   the surrounding prose without needing to hand-tag every mention.

   Add new terms here as more raid/dungeon guides reference them —
   this file is shared by raid-guide.html and dungeon-guide.html.
   ============================================================ */
window.GameTerms = (function(){
  // type: "buff" | "debuff"
  const TERMS = [
    { term: "Engulfed in Darkness", type: "debuff" },
    { term: "Weight of Darkness", type: "debuff" },
    { term: "Enlightened", type: "buff" },
    { term: "Chalice of Light", type: "buff" }
  ];

  // Longest terms first, so a multi-word term is matched whole rather
  // than getting split up by a shorter term that's a substring of it.
  const sortedTerms = [...TERMS].sort((a, b) => b.term.length - a.term.length);

  function escapeRegex(s){
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Wraps every occurrence of a known term in the given text with a
  // styled <em>. Safe to call on plain guide-text strings (objective,
  // roles, individual steps, wipe text, advanced tactics).
  function highlight(text){
    if (!text) return text;
    let result = text;
    sortedTerms.forEach(({ term, type }) => {
      const pattern = new RegExp("\\b" + escapeRegex(term) + "\\b", "g");
      result = result.replace(pattern, '<em class="term-' + type + '">' + term + '</em>');
    });
    return result;
  }

  return { TERMS, highlight };
})();
