/* ============================================================
   Puzzle Helper data — reference tools for raid/dungeon secrets
   that are better as an interactive lookup than static guide text
   (Wish Wall codes, Oracle callouts, Gorgon paths, etc.).

   Each tool links back to its raid via `raidSlug` so raid-guide.html
   can show a pointer card, and each tool is looked up here by its
   own `slug` via puzzle-helper.html?tool=...

   `grid` on a wish is a 20-value pattern from wish-grid.js — either
   a plain-text code block ("00 06 06 06 00\n...") or a 20-item array.
   Leave it unset until we've transcribed the real pattern for that
   wish off the reference sheet.
   ============================================================ */
window.PuzzleHelperData = (function(){
  const TOOLS = [
    {
      slug: "wall-of-wishes",
      bannerImage: "puzzle-assets/wall-banner.svg",
      raidSlug: "last-wish",
      raidName: "Last Wish",
      title: "The Wall of Wishes",
      intro: "Before you ever reach Kalli, a hidden branch off the entrance leads to the Wall of Wishes — 20 buttons that can be shot in specific patterns to make one of 15 wishes. Each pattern is scattered somewhere else in the world (sometimes well outside the raid itself), so finding the pattern is really the whole puzzle; once you've seen it, shooting the same arrangement on the Wall triggers that wish. A few wishes teleport your fireteam straight to a later encounter, which is handy for farming a specific fight — just know you can't return to the start of the raid on that character until the weekly reset or a full clear.",
      wishes: [
        { number:1, theme:"To feed an addiction", effect:"Grants an Ethereal Key, used to open a bonus chest in the raid's treasure room.", grid:"05 05 02 02 02\n05 05 00 02 02\n10 10 00 01 01\n10 10 13 01 01" },
        { number:2, theme:"Material validation", effect:"Spawns a chest between the 3rd and 4th encounters.", grid:"01 00 15 00 07\n01 00 15 00 07\n05 00 13 00 07\n05 00 13 00 07" },
        { number:3, theme:"Others to celebrate your success", effect:"Awards the \"Numbers of Power\" emblem.", grid:"01 00 01 00 01\n09 00 09 00 00\n11 00 11 00 11\n11 00 11 00 11" },
        { number:4, theme:"To look athletic and elegant", effect:"Warps your fireteam to the 2nd encounter (Shuro Chi).", grid:"03 03 03 03 03\n11 11 11 11 11\n11 11 00 11 11\n04 04 04 04 04" },
        { number:5, theme:"For a promising future", effect:"Warps your fireteam to the 3rd encounter (Morgeth).", grid:"10 01 02 01 10\n01 01 03 01 01\n00 01 02 01 00\n10 01 02 01 10" },
        { number:6, theme:"To move the hands of time", effect:"Warps your fireteam to the 4th encounter (the Vault).", grid:"01 01 02 01 01\n01 01 00 01 01\n01 01 00 01 01\n01 01 01 01 01" },
        { number:7, theme:"To help a friend in need", effect:"Warps your fireteam to the final encounter (Riven).", grid:"04 01 10 00 02\n04 00 00 11 02\n01 00 00 11 11\n04 00 01 11 02" },
        { number:8, theme:"To stay here forever", effect:"Plays the song \"Hope for the Future.\"", grid:"00 01 02 01 00\n00 01 02 01 00\n00 01 02 01 00\n00 00 00 00 00" },
        { number:9, theme:"To stay here forever", effect:"Adds Failsafe voice lines to moments throughout the raid.", grid:"00 01 01 01 00\n00 01 01 02 00\n00 00 00 00 00\n00 00 00 00 00" },
        { number:10, theme:"To stay here forever", effect:"Adds Drifter voice lines to moments throughout the raid.", grid:"02 02 00 00 01\n02 01 00 00 01\n02 01 00 11 01\n02 01 11 11 01" },
        { number:11, theme:"To stay here forever", effect:"Adds a Grunt Birthday Party-style explosion effect to kills.", grid:"03 00 00 03 02\n05 00 01 10 02\n00 00 00 00 00\n00 00 00 00 00" },
        { number:12, theme:"To open your mind to new ideas", effect:"Adds a unique cosmetic effect around the heads of fireteam members.", grid:"01 01 01 01 01\n01 01 00 01 01\n01 01 00 01 01\n01 01 01 01 01" },
        { number:13, theme:"For the means to feed an addiction", effect:"Unlocks \"Petra's Run,\" the raid's flawless mode.", grid:"01 01 02 01 01\n01 01 00 01 01\n01 01 00 01 01\n01 01 01 01 01" },
        { number:14, theme:"For love and support", effect:"Spawns Ahamkara eggs scattered throughout the raid.", grid:"09 01 02 01 09\n00 00 02 00 00\n01 00 10 00 01\n09 00 01 00 09" }
      ]
    },
    {
      slug: "oryx-extra-chest",
      type: "rune-select",
      raidSlug: "kings-fall",
      raidName: "King's Fall",
      title: "Oryx's Extra Chest",
      referencePoint: "the very start of the raid, beneath the Hive portal platform (face the starting direction before going through)",
      intro: "Before you go through the portal at the start of King's Fall, look beneath the platform and remember the three symbols shown there — those are your targets this week. There are 9 possible rune locations spread across the entire raid, fixed in place run to run, and exactly 3 of them will be the correct ones. Select the 3 you saw below to get their locations in raid order. Shoot each one to activate it (shoot again to undo an accidental hit); once all 3 are lit, you'll see \"The runes accept your offering,\" and a bonus chest with a guaranteed red border weapon spawns after Oryx dies. This must be done in a single continuous clear — no orbiting out and back in.",
      runes: [
        { number:1, icon:"puzzle-assets/KF_01.png", simpleLocation:"Swinging Prisons", detailedLocation:"Jump onto the first swinging prison platform after going through the portal, then turn around — the rune is on the underside of the ledge behind you." },
        { number:2, icon:"puzzle-assets/KF_02.png", simpleLocation:"Tomb Ship Secret Chest", detailedLocation:"Above the door at the secret chest reached partway through the Hive ship jumping puzzle. Rather than passing through the barrier on the final ship, jump off to the left and climb up to the hole in the wall (this door needs two players standing on plates to open)." },
        { number:3, icon:"puzzle-assets/KF_03.png", simpleLocation:"Annihilator Totems, Left Room", detailedLocation:"In the left room of the Annihilator Totems encounter — look up to the balcony/ledge. Can be activated before or after the fight." },
        { number:4, icon:"puzzle-assets/KF_04.png", simpleLocation:"Warpriest, Right Balcony", detailedLocation:"In the Warpriest room, up the stairs to the top-right balcony. Like the Totems rune, this can be hit before or after the boss fight." },
        { number:5, icon:"puzzle-assets/KF_05.png", simpleLocation:"Golgoroth Maze, Final Hole", detailedLocation:"At the very end of Golgoroth's maze — jump across the last hole and look back the way you came." },
        { number:6, icon:"puzzle-assets/KF_06.png", simpleLocation:"Golgoroth Arena, Lower Left Room", detailedLocation:"Inside Golgoroth's arena, in the room on the lower level to the left." },
        { number:7, icon:"puzzle-assets/KF_07.png", simpleLocation:"Piston Wall Secret Chest", detailedLocation:"In the secret chest room off the piston wall jumping puzzle. Follow the wall out to the pillar with small platforms, hold out your ghost to reveal a hidden path, and follow it up to the hole leading to the chest." },
        { number:8, icon:"puzzle-assets/KF_08.png", simpleLocation:"End of Piston Wall, Above Final Door", detailedLocation:"At the very end of the piston wall jumping puzzle, on the ceiling directly above the last door before the final arena." },
        { number:9, icon:"puzzle-assets/KF_09.png", simpleLocation:"Final Room, Above Entrance", detailedLocation:"Inside the Oryx/Sisters arena — turn around and look above the entrance you just walked through." }
      ]
    },
    {
      slug: "extra-chest-crotas-end",
      type: "lr-select",
      raidSlug: "crotas-end",
      raidName: "Crota's End",
      title: "Crota's Extra Chest",
      icon: "puzzle-assets/CE_RB.png",
      referencePoint: "At the very start of the raid, right before you drop down into the Abyss, look out across the Hellmouth. Three pairs of Hive statues are out there, and the order you check them in matters: (1) to the left, on the cliff, (2) to the right, on the balcony by the orange buildings, and (3) to the right and down, in the maw of the Hellmouth. Each pair is two statues \u2014 exactly one of the two is lit. That lit side (left or right) is what tells you which statue to activate at the matching location later in the raid, in the same order below.",
      intro: "Crota's End has a hidden chest that always drops a guaranteed red border (Deepsight) weapon, claimable once per run. Activating the correct statue pops \u201cA choice echoes into the future\u201d on screen; the wrong one tells you that you've made an irredeemable mistake. Get all 3 right and, once Crota is dead, \u201cA balance is reached. To the victor go the final spoils\u201d appears and the chest spawns beside his sword. This must be done in a single continuous clear \u2014 leaving the raid resets the reference statues.",
      pairs: [
        {
          number: 1, name: "Cliff Pair (Bridge Encounter, Starting Side)",
          simpleLocation: "Start of the Bridge Encounter (right after the Abyss)",
          detailedLocation: {
            L: "At the start of the Bridge encounter, stand at the stairs facing the plate that forms the bridge. The two statues aren't next to each other \u2014 one is in a room to your left, the other in a room to your right. Go into the room on the left.",
            R: "At the start of the Bridge encounter, stand at the stairs facing the plate that forms the bridge. The two statues aren't next to each other \u2014 one is in a room to your left, the other in a room to your right. Go into the room on the right."
          }
        },
        {
          number: 2, name: "Balcony Pair (Bridge Encounter, Ending Side)",
          simpleLocation: "Far Side of the Bridge Encounter (where the fight ends)",
          detailedLocation: {
            L: "Once the Bridge encounter ends, stand at the top of the bridge facing the stairs that lead up to the Thrallway. The statues are at the very end of the curved arena, to your left and right. Activate the one on the left.",
            R: "Once the Bridge encounter ends, stand at the top of the bridge facing the stairs that lead up to the Thrallway. The statues are at the very end of the curved arena, to your left and right. Activate the one on the right."
          }
        },
        {
          number: 3, name: "Hellmouth Pair (Final Arena, Above the Crystal Room)",
          simpleLocation: "Final Arena, directly above the crystal room \u2014 must be lit before Crota dies",
          detailedLocation: {
            L: "After defeating Ir Y\u00fbt, the Deathsinger, the last pair is directly above the crystal room. Facing the Oversoul, one statue is above you on the left, the other on the right \u2014 but jumping up to reach them flips your orientation, so be careful which one you actually hit. Activate the one that's on the left when facing the Oversoul from below, before Crota is dead (the chest won't spawn if you do this after he's already dead).",
            R: "After defeating Ir Y\u00fbt, the Deathsinger, the last pair is directly above the crystal room. Facing the Oversoul, one statue is above you on the left, the other on the right \u2014 but jumping up to reach them flips your orientation, so be careful which one you actually hit. Activate the one that's on the right when facing the Oversoul from below, before Crota is dead (the chest won't spawn if you do this after he's already dead)."
          }
        }
      ]
    },
    {
      slug: "extra-chest-vow",
      type: "rune-select",
      raidSlug: "vow-of-the-disciple",
      raidName: "Vow of the Disciple",
      title: "Rhulk's Extra Chest",
      referencePoint: "the totem right as you enter the Pyramid, before the big drop into Disciple's Bog",
      intro: "Vow of the Disciple has a hidden chest that always drops a guaranteed red border (Deepsight) weapon, claimable once per run. The totem shows 3 of these 9 symbols each week (randomly picked from a larger pool the raid uses overall) \u2014 each one has a fixed room somewhere in the raid, marked by a floating \u201cCrux\u201d shard. Shoot the Crux to open the room, then activate the matching symbol inside. Order does matter here in practice: raid encounters are one-way, so once you're past a checkpoint you can't go back for a symbol you missed. The numbers below follow the raid's actual progression \u2014 activate each one as you naturally reach it during a single continuous clear (no checkpoints).",
      runes: [
        { number:1, icon:"puzzle-assets/VotD_06.png", simpleLocation:"Pyramid \u2014 Right After the Big Drop", detailedLocation:"Right after the big drop into the Pyramid, in the direction opposite the first encounter. Turn around after landing to find a door with a Crux beside it \u2014 shoot it to reveal the Pyramid symbol." },
        { number:2, icon:"puzzle-assets/VotD_03.png", simpleLocation:"Give \u2014 Before Acquisition, After the Symbol Room", detailedLocation:"Before the Acquisition encounter, just after the room with all the interactable symbols. Across from where you entered is a door with a Crux above it \u2014 shoot it to reveal the Give symbol inside." },
        { number:3, icon:"puzzle-assets/VotD_01.png", simpleLocation:"Darkness \u2014 Acquisition Encounter Area", detailedLocation:"In the Acquisition encounter area, near the top left: a structure holding a Darkness Crux. Shoot it to open a room on the left side containing the symbol." },
        { number:4, icon:"puzzle-assets/VotD_08.png", simpleLocation:"Traveler \u2014 On the Way to Caretaker", detailedLocation:"Once you complete Acquisition or the Obelisk encounter, continue through the rooms until you enter a room with a reddish tinge from two cubes on black pillars. At the other end of the room will be a locked door. Jump up above the door to find the Crux, shoot it, and go inside the room to find the Traveler symbol." },
        { number:5, icon:"puzzle-assets/VotD_09.png", simpleLocation:"Worship \u2014 Caretaker's Final Stand Room", detailedLocation:"In the same room as the Caretaker's final stand \u2014 the long hallway he teleports to for the last damage phase. Once Caretaker is defeated, the Crux appears near the entrance/first platform on the left; shoot it to open a door on the right holding the Worship symbol." },
        { number:6, icon:"puzzle-assets/VotD_05.png", simpleLocation:"Light \u2014 Jumping Puzzle After Caretaker", detailedLocation:"In the jumping puzzle right after Caretaker. At the first room where a Crux is used to toggle platforms, look to your left to find it \u2014 the door sits just to its right. You'll see a statue lit in orange-red with a white light above it." },
        { number:7, icon:"puzzle-assets/VotD_07.png", simpleLocation:"Stop \u2014 Last Room of That Jumping Puzzle", detailedLocation:"In the last room of the same jumping puzzle (the one with the toggled moving platforms), further along than the Light symbol. Look for a Crux in the back right of the room." },
        { number:8, icon:"puzzle-assets/VotD_02.png", simpleLocation:"Guardian \u2014 After the Exhibition (Obelisk) Encounter", detailedLocation:"After the Exhibition encounter, head up the first set of stairs on your left, then jump across to a ledge on the left. Look for a Crux on your right \u2014 the door is behind a sculpture on the far side of the stairs, hidden from view (hop onto one of the statues if you're having trouble spotting it)." },
        { number:9, icon:"puzzle-assets/VotD_04.png", simpleLocation:"Kill \u2014 Vertical Room Before Rhulk", detailedLocation:"In the vertical room just before the Rhulk encounter. Head to the very top platforms, turn around away from the boss area, and look for a Crux high up on the wall. Shooting it opens a door on your left holding the Kill symbol." }
      ]
    },
    {
      slug: "nezarec-extra-chest",
      type: "ld-select",
      raidSlug: "root-of-nightmares",
      raidName: "Root of Nightmares",
      title: "Nezarec's Extra Chest",
      referencePoint: "the wall of three flowers you pass right as you enter the Pyramid, before the first encounter",
      intro: "Right as you enter Root of Nightmares, a wall of three flowers shows a Light/Darkness pattern \u2014 note it fresh every run, since it resets if anyone leaves. That pattern tells you which color orbs to connect in three separate hidden rooms spread through the raid, in order. Get all three right and you'll see \u201cA great harvest awaits\u2026\u201d with a distinct audio cue; the bonus chest (a guaranteed red border weapon) spawns beside Nezarec's scythe once he's dead. Has to be a single continuous clear \u2014 leaving and coming back resets the reference pattern.",
      positions: [
        { number: 1, name: "Pyramid Interior (Right After Entering)", simpleLocation: "Inside the Pyramid structure, near the start", detailedLocation: "Shortly after entering the Pyramid, before the first encounter, there's a room bathed in light off the main path \u2014 the orbs for this position are inside." },
        { number: 2, name: "Cross the Chasm (Between 2nd and 3rd Encounters)", simpleLocation: "Jumping puzzle between Scission and Macrocosm", detailedLocation: "About halfway through the jumping puzzle connecting the second and third encounters, look for a floating temple area off the beaten path. Head inside to find the orbs." },
        { number: 3, name: "Final Approach (Just Before Nezarec)", simpleLocation: "Hidden room right before the boss room", detailedLocation: "In the branch-and-root climb just before the Nezarec fight, there's a hidden room reached off the main path \u2014 the last set of orbs is inside." }
      ]
    },
    {
      slug: "verity-solver",
      type: "verity-solver",
      raidSlug: "salvations-edge",
      raidName: "Salvation's Edge",
      title: "Verity Tools",
      intro: "Verity is the 4th encounter of Salvation's Edge \u2014 three players get pulled into isolated rooms (\"Inside\"), while the rest stay together (\"Outside\") to dissect three statues into the shapes Inside needs to escape. Two tools live here: the Dissection Solver works out the fewest swaps for the Outside player, and Fireteam Fashion shows everyone's currently equipped gear side by side, handy for telling teammates apart during the Ghost phase.",
      icons: {
        C: "puzzle-assets/SE_C.png",
        S: "puzzle-assets/SE_S.png",
        T: "puzzle-assets/SE_T.png",
        Sphere: "puzzle-assets/SE_CC.png",
        Cylinder: "puzzle-assets/SE_CS.png",
        Cone: "puzzle-assets/SE_CT.png",
        Cube: "puzzle-assets/SE_SS.png",
        Prism: "puzzle-assets/SE_TS.png",
        Pyramid: "puzzle-assets/SE_TT.png"
      }
    }
  ];

  return { TOOLS };
})();