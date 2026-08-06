/* ============================================================
   God Rolls data — real weapons the user actually runs, identified
   by their exact Bungie item hash (pulled from light.gg links).
   No guessed weapons, no invented perk names — everything about
   the weapon and its perks is fetched live from Bungie using these
   hashes. `note` is optional personal commentary, not a perk name.
   `raidSlug`/`dungeonSlug` are optional cross-links back to a guide.
   `pairing` is a draft from community meta research — armorSlug
   cross-links to an existing entry in sets-data.js where relevant.
   Meant to be corrected/replaced with the user's own build info.
   ============================================================ */
window.GodRollsData = (function(){
  const WEAPONS = [
    { name:"LIONFISH-4FR", slug:"lionfish-4fr",
      itemHash: 2423071981,
      perkHashes: [3048246338, 1279785143, 461595545, 344235611, 2223800157, 905637376],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Stasis Freeze", "Add Clear"],
      pairing: {
        armorSlug: "crystocrene",
        note: "A Stasis Fusion Rifle built around Chill Clip's slow-into-freeze loop — pairs naturally with any Stasis build leaning on freeze uptime (Hunter's Renewal Grasps, Titan's Cryosthesia 77K). Crystocrene's own 'build Frost Armor while out of combat' identity makes it a thematically snug armor match, even without direct mechanical overlap."
      } },
    { name:"Ribbontail", slug:"ribbontail",
      itemHash: 3576134513,
      perkHashes: [3048246338, 3081681954, 4245865861, 2896748467, 483923727, 622249644],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Strand Threadling", "Add Clear"],
      pairing: {
        armorSlug: "flain",
        note: "A Strand Trace Rifle that fits a sustained add-clear build — Warlock's Weaver's Trance or Hunter's Threadrunner both make good use of a steady stream of Strand kills. Flain (Sundered Doctrine) is a strong armor pairing since its whole kit revolves around spawning and sustaining off Threadlings."
      } },
    { name:"Action Item", slug:"action-item",
      itemHash: 527989828,
      perkHashes: [3966296580, 2680121939, 2617553311, 2078520142, 1209885908, 905637376],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Stasis Freeze", "Add Clear"],
      pairing: {
        armorSlug: "crystocrene",
        note: "Same Stasis-into-freeze idea as LIONFISH-4FR — stacking Frost Armor from a Stasis fragment loadout alongside this weapon's freeze uptime makes for a tanky ad-clear loop. Crystocrene pairs thematically here as well."
      } },
    { name:"Festival Flight", slug:"festival-flight",
      itemHash: 4019651319,
      perkHashes: [3525010810, 2822142346, 3523296417, 831391274, 1198287879, 882794620],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Strand Threadling", "Grenade Build"],
      pairing: {
        armorSlug: "flain",
        note: "Its Sever-on-hit potential (via Slice) fits a grenade-and-melee Strand build especially well on Warlock, where a grenade-focused fragment loadout keeps Sever blanket-applied across a crowd. Flain is again a strong armor match given its Threadling-centric kit."
      } },
    { name:"Mint Retrograde", slug:"mint-retrograde",
      itemHash: 3285784871,
      perkHashes: [3471392239, 2108812838, 102912326, 598607952, 2223800157, 3587454724],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Strand Threadling", "Add Clear"],
      pairing: {
        armorSlug: "flain",
        note: "Similar Strand synergy story to Ribbontail and Festival Flight — Hatchling turns this into a Threadling machine on top of an already-strong neutral game. Pairs well with Flain or any dedicated Threadling-focused Warlock build."
      } },
    { name:"Tinasha's Mastery", slug:"tinashas-mastery",
      itemHash: 247984828,
      perkHashes: [373417387, 1709045111, 561986700, 344235611, 1831023215, 651347274],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Stasis Freeze", "PvE Endgame"],
      pairing: {
        armorSlug: "crystocrene",
        note: "Another Chill Clip carrier — its PvE identity is all about freeze uptime feeding into a Stasis super or shatter-focused build. Crystocrene rounds out the loadout if you're leaning into a full Stasis theme."
      } },
    { name:"Reckless Oracle", slug:"reckless-oracle",
      itemHash: 4158265643,
      perkHashes: [839105230, 3142289711, 2048641572, 3640170453, 2407733996, 622249644],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Flexible", "Add Clear"],
      pairing: {
        armorSlug: null,
        note: "A flexible add-clear primary that isn't tied to a specific element, so it slots into almost any loadout as a reliable default. No obvious single armor pairing here like the rest of the list — this one's really about what exotic and subclass you're already running."
      } },
    { name:"Osteo Striga", slug:"osteo-striga",
      itemHash: 46524085,
      perkHashes: [3250034553, 3142289711, 4015745376, 1067908860, 229096166],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Necrotic Grip", "Poison"],
      pairing: {
        armorSlug: null,
        note: "The classic pairing here is Necrotic Grip on Warlock — poison procs spread between enemies through your melee, turning this into one of the best add-clear tools in the game. No armor set on this site fits since that's an Exotic piece, not a Legendary set bonus, but it's worth calling out anyway."
      } },
    { name:"Commemoration", slug:"commemoration",
      itemHash: 4230965989,
      perkHashes: [3048246338, 3267421167, 461595545, 2896748467, 1501421141],
      raidSlug: "deep-stone-crypt", dungeonSlug: null,
      note: "",
      buildTags: ["Sustained Fire", "Damage Stacking"],
      pairing: {
        armorSlug: null,
        note: "Killing Tally is doing the real work on this roll: weapon kills build up to 3 stacks for up to +30% PvE damage, but stowing or reloading wipes them, so this rewards staying on target with Commemoration rather than swapping weapons mid-fight. Arrowhead Brake and Accurized Rounds keep recoil and range in check to make that sustained trigger time easier. No specific armor or build synergy here \u2014 it's a strong general-purpose add-clear/DPS Machine Gun rather than something built around a particular ability loop."
      } },
    { name:"Hezen Vengeance", slug:"hezen-vengeance",
      itemHash: 2265407516,
      perkHashes: [564443854, 274905539, 3528046508, 3192447905, 716643564],
      raidSlug: "vault-of-glass", dungeonSlug: null,
      note: "",
      buildTags: ["Boss Damage", "Solar"],
      pairing: {
        armorSlug: "aion-adapter",
        note: "A Solar Aggressive Frame Rocket Launcher from Vault of Glass, carrying the Timelost Magazine origin trait that doubles its magazine and reloads from reserves for a while after your Super ends — built for a damage-rotation playstyle. AION Adapter is a fitting armor pairing since its own 2-piece triggers directly off Rocket Launcher (or Grenade Launcher, or micro-missile) final blows, regardless of subclass or element."
      } },
    { name:"Threat Level", slug:"threat-level",
      itemHash: 1523151869,
      perkHashes: [1482024992, 2420895100, 3751912585, 1226351311, 2407733996, 905637376],
      raidSlug: null, dungeonSlug: null,
      note: "",
      buildTags: ["Kinetic", "Boss Damage"],
      pairing: {
        armorSlug: null,
        note: "A Kinetic Rapid-Fire shotgun from Pantheon, popular for its Cascade Point and All-Star combination. This one's real pairing isn't an armor set but an artifact — Encrypted Data Disk's Kinetic Synthesis and Kinetic Rupture perks are built around sustained Kinetic weapon damage, and a Kinetic shotgun getting rapid hits off feeds both directly."
      } },
    { name:"Conspiracy (Honed)", slug:"conspiracy-honed",
      itemHash: 4062069077,
      perkHashes: [1840239774, 807993149, 1546637391, 3078487919, 2957461671, 471689728],
      raidSlug: null, dungeonSlug: null,
      note: "Drops from the Equilibrium dungeon (Renegades) — not yet on the Dungeons page, so no guide link here.",
      buildTags: ["Stasis", "Heat Weapon", "Boss Damage"],
      pairing: {
        armorSlug: "aion-renewal",
        note: "A Stasis Dynamic (Heat) Sniper Rifle from the Equilibrium dungeon — venting heat between shots lets it chain damage without the usual sniper reload downtime. AION Renewal is a natural pairing since it's the Stasis-flavored version of the Rocket/Grenade Launcher speed-boost set, and its 4-piece specifically triggers off being slowed by a Stasis effect, which this weapon's own element can set up on you or nearby allies."
      } },
    { name:"Refurbished A-499", slug:"refurbished-a499",
      itemHash: 3661051060,
      perkHashes: [839105230, 3142289711, 588594999, 3764420437, 4280607931, 905637376],
      altRoll: { itemHash: 593808239, perkHashes: [3048246338, 3267421167, 4116820839, 3528046508, 4280607931, 882794620] },
      raidSlug: null, dungeonSlug: null,
      note: "Light.gg tracks this weapon under a couple of different item hashes (it even has its own \"Compare Entity Versions\" page) — same weapon, different drop/roll-pool versions. Use the alternate roll toggle above to flip between them.",
      buildTags: ["Kinetic", "Boss Damage", "Heavy Sniper"],
      pairing: {
        armorSlug: null,
        note: "The first Legendary Heavy-slot Sniper Rifle in the game — a single-shot 'Disruption' archetype round that can one-shot most targets outright. It's a specialist boss/champion-deletion pick rather than something built around a specific armor synergy, so it slots in as a damage-phase swap alongside whatever exotic and subclass are already doing the heavy lifting."
      } },
    { name:"Duty Bound", slug:"duty-bound",
      itemHash: 260532765,
      perkHashes: [3048246338, 1783397184, 3914874605, 288411554, 2223800157, 3513245618],
      raidSlug: null, dungeonSlug: null,
      note: "A Kinetic Adaptive Frame Auto Rifle reprised in Renegades, obtained from Pinnacle Ops Portal activities — its first meaningful refresh since 2022. It carries a 41-round base magazine, which matters for perks that pay off in a longer mag.",
      buildTags: ["Kinetic", "Add Clear"],
      pairing: {
        armorSlug: null,
        note: "No specific armor synergy called out here — this is a strong general-purpose Kinetic primary rather than a build-defining piece. A Fourth Time's the Charm plus Triple Tap roll turns precision hits into near-constant reload refunds given how large the base magazine already is; Bewildering Burst plus Onslaught leans harder into sustained add clear instead."
      } },
    { name:"Prosecutor", slug:"prosecutor",
      itemHash: 1091550016,
      perkHashes: [3966296580, 1968098204, 169755979, 1720528630, 2415292777, 3513245618],
      raidSlug: null, dungeonSlug: "prophecy",
      note: "An Arc Precision Frame Auto Rifle (450 RPM) tied to the Prophecy dungeon, reissued with a fully reworked perk pool via the Rite of the Nine event. Precision Frames reward pacing your shots rather than holding the trigger down, and the Arc element opens up Dragonfly/Voltshot-style ability synergy that most Kinetic autos don't get.",
      buildTags: ["Arc", "Add Clear", "Precision"],
      pairing: {
        armorSlug: null,
        note: "Dragonfly plus Rolling Storm is the PvE pick — Dragonfly turns precision kills into Arc explosions, and Rolling Storm feeds those explosions into priming Bolt Charge for an Arc-ability-heavy loadout. For PvP, Zen Moment plus Target Lock rewards accurate, sustained-fire duels rather than burst damage."
      } }
  ];

  return { WEAPONS };
})();
