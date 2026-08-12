/* ============================================================
   Suggested builds — single source of truth.
   Every build cross-references data already on the site (armor set
   slugs from sets-data.js, artifact slugs from artifacts-data.js) plus
   independently-researched exotic armor/weapon facts. Exotic item
   hashes are pulled the same way weapon hashes are on the God Rolls
   page: from the numeric ID in a light.gg item URL, cross-checked
   against a second source (destinytracker.com) before use.
   ============================================================ */
window.BuildsData = (function(){
  const BUILDS = [
    {
      title: "Weakened Prey",
      slug: "weakened-prey",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/614cdbe0-6de7-4a1b-8f87-5b9b9d754cc1",
      class: "Warlock",
      subclass: "Void",
      tagline: "Turncoat weakens everything in sight, Devour cleans it up, and Skull of Dire Ahamkara turns every kill into more Super energy.",
      exoticArmor: {
        name: "Skull of Dire Ahamkara",
        slot: "Helmet",
        itemHash: 3050017626,
        perkName: "Actual Grandeur",
        perkDesc: "After casting a Nova Bomb, briefly gain a free cast of a fast-moving but weaker Nova Bomb: Lance. Your Nova Bomb: Cataclysm is empowered if detonated with another Nova Bomb. Nova Bomb final blows and weapon final blows while you have Devour grant Super energy."
      },
      exoticWeapon: {
        name: "Turncoat",
        weaponType: "Hand Cannon",
        itemHash: 253843484,
        perkName: "Latent Power",
        perkDesc: "Dealing damage builds Latent Power; precision hits and final blows build more. At full power, hold [Alternate Weapon Action] to trigger Unleashed Power, empowering the weapon with increased rate of fire and hip-fire accuracy and causing shots to weaken targets. After a short time, it becomes Overwhelming Power, which deals damage to you over time. Reload or stow the weapon to end these effects."
      },
      armorSet: { name: "Eutechnology", slug: "eutechnology" },
      artifact: { name: "Slayer Baron Apothecary Satchel", slug: "slayer-baron-apothecary-satchel" },
      loop: [
        "Turncoat builds Latent Power just from shooting \u2014 precision hits and final blows fill it fastest. Once it's full, hold the alt weapon action to trigger Unleashed Power: faster rate of fire, better hip-fire, and every shot Weakens whatever it hits (a real 15% PvE damage debuff that also blinds the target).",
        "Power from Pain (artifact) turns those Weakened kills into Devour and a Void breach at the same time \u2014 so the moment Turncoat starts weakening a room, kills start feeding both your survivability and Eutechnology's breach economy automatically.",
        "Devour final blows restore half your health and extend Devour's own duration, and Feed the Void doubles that strength for Warlocks \u2014 so once it's rolling, staying aggressive is what keeps you alive, not a reason to back off.",
        "Actual Grandeur ties Super regen directly to Devour: Nova Bomb and weapon final blows while Devoured grant Super energy, and after casting Nova Bomb: Cataclysm you get a free follow-up Nova Bomb: Lance. Landing kills while Devoured is what gets Nova Bomb back faster.",
        "Void Renewal (artifact) keeps the breach supply going even after Power from Pain isn't the one triggering it \u2014 Void final blows while Devour is active have a chance to drop another breach. Supernova (artifact) then makes picking one of those breaches up empower your next Void hit into a wide weakening pulse, which loops straight back into the start of this whole chain.",
        "Eutechnology isn't the centerpiece, but it's along for the same ride: Gift of the Ley Lines spawns a breach off rapid Void kills, and Techeun's Foresight triggers a detonation off your next Void weapon final blow after grabbing one \u2014 both fire constantly once Turncoat has a room weakened. Served Cold (artifact) turns every one of those breach pickups into melee energy on top.",
        "Watch the Overwhelming Power timer \u2014 reload or stow Turncoat before it starts damaging you, then swap back in once Latent Power refills."
      ],
      recommendedArtifactPerks: ["Power from Pain", "The Thick of It", "Void Renewal", "Curative Orbs", "Total Carnage", "Supernova", "Served Cold"],
      whyItWorks: "Every piece here solves a problem for the piece next to it. Turncoat's Weaken is the best part of the gun but does nothing for your own survivability on its own \u2014 Power from Pain fixes that by turning Weakened kills straight into Devour, and Devour's own 50% heal (doubled by Feed the Void) is what makes playing aggressively with Turncoat sustainable instead of risky. Actual Grandeur then ties your Super regen to the exact thing Devour already has you doing \u2014 getting final blows \u2014 so Nova Bomb keeps coming back without a separate ability rotation to manage. The artifact and Eutechnology both run on Void breaches, and between Power from Pain, Void Renewal, and Eutechnology's own Gift of the Ley Lines, breaches show up constantly once the loop is moving \u2014 Supernova then spends each one on a weakening pulse that sets up the next kill. Nothing in this build is fighting for the same trigger; Weaken, Devour, Super regen, and breach generation all come from the same handful of kills.",
      tags: ["Weaken", "Devour", "Ad-Clear", "Boss Damage", "High Survivability"]
    },
    {
      title: "Ionic Overclock",
      slug: "ionic-overclock",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/93c52f4f-7219-4266-962b-e4cdee6db2f7",
      class: "Warlock",
      subclass: "Arc",
      tagline: "A self-feeding Ionic Trace loop that keeps Chaos Reach topped up and jolting everything downrange.",
      exoticArmor: {
        name: "Geomag Stabilizers",
        slot: "Boots",
        itemHash: 2808445048,
        perkName: "Close Enough",
        perkDesc: "Damaging targets with Chaos Reach extends its duration. Collecting Ionic Traces grants you energy for Chaos Reach."
      },
      exoticWeapon: {
        name: "Delicate Tomb",
        weaponType: "Fusion Rifle",
        itemHash: 374573733,
        perkName: "Tempest Cascade",
        perkDesc: "Collecting an Ionic Trace overcharges this weapon's next shot, dealing bonus damage and jolting the target on hit. Final blows have a chance to generate another Ionic Trace, and powerful or Guardian kills always do."
      },
      armorSet: { name: "Luminopotent", slug: "luminopotent" },
      artifact: { name: "NPA Repulsion Regulator", slug: "npa-repulsion-regulator" },
      loop: [
        "Delicate Tomb's final blows drop Ionic Traces on their own, and every trace you pick up overcharges its next shot to jolt whatever you hit.",
        "Jolting something (or finishing off an already-jolted target) triggers Luminopotent's 4-piece, Shock and Clear, which drops another Ionic Trace right back on the ground.",
        "Every trace you collect also feeds Geomag Stabilizers' Close Enough, charging Chaos Reach faster, and Luminopotent's 2-piece speeds up Delicate Tomb's handling, reload, and vent while you're amplified so you're rarely not shooting.",
        "Slot the artifact's Amped Up and Shock and Awe mods and the loop reinforces itself: staying amplified longer means more jolts, and Arc final blows while amplified throw out an extra lightning burst that jolts even more targets."
      ],
      recommendedArtifactPerks: ["Amped Up", "Thunderous Retort", "Shatter Orbs", "Targeting Autoloader", "Sustained Fire", "Shock and Awe", "Lightning Strikes Twice"],
      whyItWorks: "Every piece in this build either makes an Ionic Trace or spends one, so the loop never runs dry: Delicate Tomb seeds traces, Luminopotent's 4-piece refunds them on a jolt kill, and Geomag Stabilizers turns every trace you pick up into Chaos Reach energy. Thunderous Retort from the artifact then adds bonus Super damage on top, since staying amplified (which Amped Up extends) qualifies for the buff — so the same loop that keeps your super charged also makes it hit harder when you cast it.",
      tags: ["Ionic Trace", "Chaos Reach", "Ability Uptime", "Boss Damage"]
    },
    {
      title: "Perpetual Slam",
      slug: "perpetual-slam",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/2a4a7a64-b61c-45e9-bee3-d0548d766596",
      class: "Titan",
      subclass: "Prismatic",
      tagline: "A melee loop that keeps feeding itself — Consecration slams heal, hit harder, and refund the energy to do it again.",
      exoticArmor: {
        name: "Stoicism (Spirit of Severance + Spirit of Contact)",
        slot: "Class Item",
        itemHash: 266021826,
        perkName: "Spirit of Severance + Spirit of Contact",
        perkDesc: "Spirit of Severance causes melee kills or finishers to release a damaging explosion from the target. Spirit of Contact causes powered melee hits to strike with lightning that jolts nearby enemies \u2014 both trigger off the same Consecration/Frenzied Blade swings this build already throws constantly."
      },
      exoticWeapon: {
        name: "Khvostov 7G-0X",
        weaponType: "Auto Rifle",
        itemHash: 4129629253,
        perkName: "The Right Choice",
        perkDesc: "Every 7th round in the magazine deals bonus damage and ricochets to a nearby target, clearing ads passively so you're not spending ability energy just to finish off stragglers between slams."
      },
      armorSet: { name: "Seventh Seraph", slug: "seventh-seraph" },
      artifact: { name: "Hunter's Journal", slug: "hunters-journal" },
      loop: [
        "Consecration launches you up and slams down, igniting the area \u2014 Knockout turns that same melee into instant healing on the kill.",
        "Spirit of Severance turns every melee kill or finisher into a damaging explosion, and Spirit of Contact adds lightning that jolts nearby enemies on the same swing \u2014 both trigger off Consecration and Frenzied Blade directly.",
        "Glacier Grenade drops Stasis crystals on impact. Seventh Seraph's 4-piece, Rasputin's Reprisal, triggers off destroying a \"construct\" \u2014 which the game quietly classifies Stasis crystals as \u2014 so shattering one fires a Solar detonation that damages nearby combatants and heals allies.",
        "Khvostov handles ad clear between slams so ability energy never gets spent on chip damage. Elemental Siphon, Sustained Fire, and Targeting Autoloader (artifact) all key off it being an Auto Rifle \u2014 Super energy, damage resistance, and reload/damage off the same ad-clear kills.",
        "Solar Fulmination boosts the damage and radius of every Ignition Consecration causes, and Radiant Orbs applies to any Prismatic subclass, so any Orb pickup grants Radiant on top. Shieldcrush and Transference then pour more melee and grenade energy back in while Amplified/Radiant or Transcendent \u2014 which this build hits naturally by mixing a Solar melee with a Stasis grenade.",
        "Thundercrash closes out boss damage phases once the loop has you topped off."
      ],
      recommendedArtifactPerks: ["Elemental Siphon", "Sustained Fire", "Targeting Autoloader", "Radiant Orbs", "Solar Fulmination", "Shieldcrush", "Transference"],
      whyItWorks: "This build works because every source of power in it points back at the same two abilities: melee and grenade. Consecration and Knockout form the core loop, and Spirit of Severance plus Spirit of Contact turn every one of those melee hits into an explosion and a lightning jolt on top of the healing Knockout already provides. Seventh Seraph wasn't built with Stasis in mind \u2014 its 4-piece is written around \"destroying a construct,\" and Glacier Grenade's crystals happen to qualify, turning a grenade you're already throwing into a second detonation and heal source. Hunter's Journal reinforces both the weapon (Khvostov's three Auto Rifle-specific perks) and the ability loop (Solar Fulmination off Consecration's own Ignitions, Shieldcrush and Transference pouring energy back in) \u2014 there's rarely a moment where melee or grenade isn't ready.",
      tags: ["Ability Loop", "Add Clear", "Boss Damage", "Prismatic"]
    },
    {
      title: "Contagion Chain",
      slug: "contagion-chain",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/d80e02f9-d82e-4d10-9477-af305f4855cd",
      class: "Warlock",
      subclass: "Strand",
      tagline: "Poison that spreads itself \u2014 melee hits, gunfire, and every kill they cause all feed the same chain reaction.",
      exoticArmor: {
        name: "Necrotic Grip",
        slot: "Gauntlets",
        itemHash: 2780717641,
        perkName: "Grasp of the Devourer",
        perkDesc: "Melee hits poison targets with a ramping damage-over-time effect. Defeating a poisoned target spreads the poison to nearby enemies \u2014 and extends that same spreading behavior to Osteo Striga's own poison rounds."
      },
      exoticWeapon: {
        name: "Osteo Striga",
        weaponType: "Submachine Gun",
        itemHash: 46524085,
        perkName: "Screaming Swarm + Toxic Overload",
        perkDesc: "Fires tracking toxic projectiles; landing a final blow or several precision hits triggers a burst that poisons everyone nearby \u2014 which then chains into Necrotic Grip's spread."
      },
      armorSet: { name: "Flain", slug: "flain" },
      artifact: { name: "Tablet of Ruin", slug: "tablet-of-ruin" },
      loop: [
        "Necrotic Grip poisons whatever you melee, and killing a poisoned target spreads the poison again to anyone standing near it.",
        "Osteo Striga does the same thing at range \u2014 precision hits or a final blow trigger its own poison burst, and thanks to Necrotic Grip, those kills spread the poison too, so melee and gunfire feed the same chain instead of two separate effects.",
        "Run this on Strand (Arcane Needle melee, three charges) or the Prismatic exotic class item route with Spirit of Necrotic, and every melee charge is another chain started.",
        "Flain's 2-piece (Sinew Stitching) turns the damage you take while brawling at melee range into free Threadlings, and its 4-piece (Knit Together) makes the next several Threadling hits heal you once your shield breaks \u2014 solid survivability for a build that wants you standing in the middle of a poisoned crowd.",
        "Tablet of Ruin's Unraveling Orbs and Horde Shuttle mods add Strand Unraveling Rounds and Threadling generation on top, so the artifact is clearing adds through the same Strand debuffs the build is already applying."
      ],
      recommendedArtifactPerks: ["Unraveling Orbs", "Elemental Siphon", "Vile Weave", "Horde Shuttle", "Gold from Lead", "To Shreds", "Limit Break"],
      whyItWorks: "Necrotic Grip and Osteo Striga are almost always recommended together because they're the same mechanic twice: one poisons at melee range, the other at range, and each one's kills re-trigger the other's spread. That's what makes a couple of poisoned enemies enough to clear a full room. Flain doesn't add a new mechanic on top \u2014 it converts the damage you're already taking at melee range into Threadlings, then heals you off those Threadlings once your shield breaks, which is exactly the kind of support a stand-in-the-crowd poison build needs. Tablet of Ruin's Strand mods clear adds through the same debuffs the build is already applying.",
      tags: ["Poison", "Add Clear", "Strand", "Melee Loop"]
    },
    {
      title: "Marksman's Encore",
      slug: "marksmans-encore",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/d0aac745-abc3-4037-aa34-8c1e28ecf348",
      class: "Hunter",
      subclass: "Solar",
      tagline: "Two Golden Guns for the price of one \u2014 a helmet and a sniper that were designed to be worn together.",
      exoticArmor: {
        name: "Celestial Nighthawk",
        slot: "Helmet",
        itemHash: 1667080810,
        perkName: "Hawkeye Hack",
        perkDesc: "Modifies Golden Gun to fire a single, massively empowered shot instead of three. Precision final blows reduce the Super's cooldown, and defeated targets explode."
      },
      exoticWeapon: {
        name: "Still Hunt",
        weaponType: "Sniper Rifle",
        itemHash: 2905188646,
        perkName: "Cayde's Retribution",
        perkDesc: "Precision hits and Orbs of Power charge up a built-in Golden Gun for this weapon. Wearing Celestial Nighthawk turns that charged shot into a single high-powered blast instead of three successive ones \u2014 giving Hunters two Nighthawk-empowered shots on demand."
      },
      armorSet: { name: "Lustrous", slug: "lustrous" },
      artifact: { name: "Hunter's Journal", slug: "hunters-journal" },
      loop: [
        "Still Hunt charges its own Golden Gun mode from precision hits or Orbs of Power \u2014 while your actual Super charges separately, so you effectively get two burst-damage windows instead of one.",
        "Celestial Nighthawk collapses both into a single overpowered shot rather than a 3-round burst, and precision final blows from either one shave time off your Super's cooldown, keeping the cycle coming back around.",
        "Lustrous's 2-piece grants Solar weapons flinch resistance and faster handling/reload right after you're healed \u2014 exactly what a sniper needs to stay steady through a damage phase \u2014 and its 4-piece heals you back on rapid Solar kills, so landing shots sustains you rather than draining you.",
        "Hunter's Journal's Sniper's Meditation stacks bonus sniper damage, stability, and reload on hit, and Incendiary Rifle Rounds scorches targets on Solar sniper precision hits \u2014 both stacking directly onto the same shots this build already lives on. Sustained Fire and Targeting Autoloader cover Chroma Rush between those windows, Solar Fulmination and Radiant Orbs reinforce the Crackshot/scorch loop, and Shieldcrush turns the build's near-constant Radiant uptime into faster grenade and melee recharge."
      ],
      recommendedArtifactPerks: ["Incendiary Rifle Rounds", "Sustained Fire", "Radiant Orbs", "Solar Fulmination", "Targeting Autoloader", "Sniper's Meditation", "Shieldcrush"],
      whyItWorks: "The reason this pairing has stayed relevant for years is that Bungie built an explicit interaction between the two items rather than leaving them to synergize by coincidence: wearing Nighthawk changes what Still Hunt's own built-in Golden Gun does. That means the exotic weapon and exotic helmet are reinforcing the exact same mechanic instead of two unrelated bonuses, which is rare even among iconic Destiny 2 combos. Lustrous and Hunter's Journal then support that mechanic from two different angles \u2014 survivability so you can keep lining up precision shots, and raw sniper stats once you do.",
      tags: ["Boss Damage", "Precision", "Solar", "Burst Damage"]
    },
    {
      title: "Biotic Storm",
      slug: "biotic-storm",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/3a90d556-dc09-4cfb-a85b-9b96a7b90444",
      class: "Titan",
      subclass: "Stasis",
      tagline: "Slide into a melee and the ground turns to ice \u2014 shatter it and the whole room goes with it.",
      exoticArmor: {
        name: "Synthoceps",
        slot: "Gauntlets",
        itemHash: 241462142,
        perkName: "Biotic Enhancements",
        perkDesc: "When you're surrounded by 2+ combatants, gain increased melee and Super damage, plus improved weapon handling and reload speed \u2014 easy to trigger with teammates funneling adds toward you, which is what makes this the team-play version."
      },
      exoticWeapon: {
        name: "Ice Breaker",
        weaponType: "Sniper Rifle",
        itemHash: 1111334348,
        perkName: "No Backpack + Ice Breaker",
        perkDesc: "No Backpack: final blows or assists with any other weapon or ability have a chance to generate ammo for Ice Breaker, with powerful combatants creating multiple rounds. Ice Breaker (the weapon's own intrinsic): defeating a target causes them to explode; precision final blows or shattering a frozen target instead trigger a Solar ignition. Special ammo, so it isn't competing with Hezen Vengeance's Heavy reserves. Fighting Lion is a viable alternate \u2014 its bouncing, remote-detonated grenades shatter crystals from a distance across a wider area, and unlocks Weakened Clear/Kinetic Impacts on the artifact instead (see Artifact and Perks)."
      },
      armorSet: { name: "Seventh Seraph", slug: "seventh-seraph" },
      artifact: { name: "Slayer Baron Apothecary Satchel", slug: "slayer-baron-apothecary-satchel" },
      loop: [
        "Sliding into a charged melee (Howl of the Storm) launches a wave of Stasis energy that freezes targets and creates Stasis crystals all around you, refunding melee energy on the kill so you can do it again almost immediately.",
        "Tectonic Harvest turns every Stasis shard you pick up into Frost Armor, and while you have Frost Armor, Stasis or Kinetic final blows have a chance to shatter the target outright \u2014 chaining through whatever's standing nearby.",
        "Slayer Baron's Crystalline Converter stacks up off those same shards and empowers your next Stasis melee to drop multiple crystals at once instead of one, while Hail the Storm makes shattering crystals or frozen targets hit harder and throw damaging ice shards outward. Frost Renewal shares Frost Armor with nearby allies when you take a critical hit \u2014 the actual \"team play\" payoff Synthoceps is built around.",
        "Seventh Seraph's 4-piece, Rasputin's Reprisal, triggers off \u2014 among other things \u2014 destroying a construct, and the game quietly classifies Stasis crystals as constructs. Since you're already shattering crystals constantly, this fires a Solar detonation that damages nearby combatants and heals allies almost every time you break one.",
        "Ice Breaker turns every frozen or shattered kill into an Ignition on top of the shatter, and No Backpack keeps it fed from every other kill you're getting \u2014 it's rarely empty when there's a crowd worth converting into one big explosion.",
        "Synthoceps' Biotic Enhancements rewards being surrounded with bonus melee and Super damage plus faster handling and reload \u2014 exactly the situation teammates funneling adds toward you creates."
      ],
      recommendedArtifactPerks: ["Wind Chill", "Crystalline Converter", "Hail the Storm", "Frost Renewal", "Curative Orbs", "Served Cold", "Brain Freeze"],
      whyItWorks: "Seventh Seraph wasn't built with Stasis in mind \u2014 its 4-piece is written around \"destroying a construct,\" and most players would assume that means Warmind Cells or similar. Stasis crystals happen to qualify too, so a set that looks unrelated turns into a second detonation source stacked on top of a build that's already generating Frost Armor and shatters from three other places at once (Tectonic Harvest, Slayer Baron's mods, and your own slide-melee loop). Synthoceps completes the team-play identity: Biotic Enhancements rewards exactly the surrounded-by-teammates-and-adds situation this build creates. That's what makes it feel close to invincible while also clearing the room: nearly everything you do is simultaneously your damage, your healing, and your next charge of melee energy.",
      tags: ["Frost Armor", "Shatter", "Stasis", "Ad Clear", "Team Play"]
    },
    {
      title: "Frozen Fists",
      slug: "frozen-fists",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/7dfc8ae4-129c-41ab-b817-21f7589cf15b",
      class: "Titan",
      subclass: "Stasis",
      tagline: "Solo version of Biotic Storm \u2014 Wormgod Caress trades the crowd-dependent buff for a melee damage ceiling that ramps with every kill.",
      exoticArmor: {
        name: "Wormgod Caress",
        slot: "Gauntlets",
        itemHash: 1203306856,
        perkName: "Burning Fists",
        perkDesc: "Melee or finisher kills grant a stack of Burning Fists (max 5), escalating melee damage that decays if you go 2+ seconds without another kill. At max stacks: +400% base melee damage and +35% PvE weapon damage. Doesn't need teammates or being surrounded \u2014 it needs you to keep the slide-melee chain going, which Howl of the Storm's melee-energy refund already sustains solo."
      },
      exoticWeapon: {
        name: "Ice Breaker",
        weaponType: "Sniper Rifle",
        itemHash: 1111334348,
        perkName: "No Backpack + Ice Breaker",
        perkDesc: "No Backpack: final blows or assists with any other weapon or ability have a chance to generate ammo for Ice Breaker, with powerful combatants creating multiple rounds. Ice Breaker (the weapon's own intrinsic): defeating a target causes them to explode; precision final blows or shattering a frozen target instead trigger a Solar ignition. Fighting Lion is a viable alternate \u2014 its bouncing, remote-detonated grenades shatter crystals from a distance, and unlocks Weakened Clear/Kinetic Impacts on the artifact instead (see Artifact and Perks)."
      },
      armorSet: { name: "Seventh Seraph", slug: "seventh-seraph" },
      artifact: { name: "Slayer Baron Apothecary Satchel", slug: "slayer-baron-apothecary-satchel" },
      loop: [
        "Sliding into a charged melee (Howl of the Storm) launches a wave of Stasis energy that freezes targets and creates Stasis crystals, refunding melee energy on the kill \u2014 the chain that keeps Burning Fists topped off without needing anyone else's help.",
        "Each melee kill stacks Burning Fists further, up to 5 \u2014 escalating melee damage that can one-shot tanky yellow-bar targets at max stacks, plus a real weapon damage bonus once you're past 2 stacks.",
        "Tectonic Harvest turns every Stasis shard into Frost Armor, and Frost Armor gives Stasis or Kinetic final blows a shatter chance \u2014 chaining through whatever's nearby and feeding the next round of shards.",
        "Slayer Baron's Crystalline Converter and Hail the Storm add more crystals per melee and more damage per shatter; Served Cold and Brain Freeze (artifact) turn shard pickups into class ability energy and add slowing crowd control on top.",
        "Seventh Seraph's 4-piece fires a Solar detonation off destroyed Stasis crystals \u2014 which the game quietly classifies as \"constructs\" \u2014 so shattering crystals is simultaneously damage and healing.",
        "Ice Breaker turns every frozen or shattered kill into an Ignition, and its self-sustaining ammo economy means it's rarely dry when there's a crowd worth converting into an explosion."
      ],
      recommendedArtifactPerks: ["Wind Chill", "Crystalline Converter", "Hail the Storm", "Frost Renewal", "Curative Orbs", "Served Cold", "Brain Freeze"],
      whyItWorks: "This is the same Stasis engine as Biotic Storm \u2014 Tectonic Harvest, Howl of the Storm, Seventh Seraph, Slayer Baron all work identically \u2014 but Wormgod Caress changes what the exotic slot is actually for. Synthoceps rewards a situation teammates create (being surrounded); Burning Fists rewards a situation you create yourself (consecutive melee kills), which fits a build that's already chaining slide-melees through Howl of the Storm's own melee-energy refund. The tradeoff is real: Synthoceps is a steadier, always-on buff, while Burning Fists has a much higher ceiling (enough to one-shot tanky yellow bars at max stacks) but decays fast if the kill chain breaks \u2014 which matters more solo, where nobody else is thinning the crowd for you.",
      tags: ["Frost Armor", "Shatter", "Stasis", "Ad Clear", "Solo"]
    },
    {
      title: "Endless Barrage",
      slug: "endless-barrage",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/b3826703-3420-4f36-a90e-d3f01ee7f8f9",
      class: "Hunter",
      subclass: "Solar",
      tagline: "Kill things to build your Super, use your Super to kill things, get your Super back almost instantly.",
      exoticArmor: {
        name: "Shards of Galanor",
        slot: "Gauntlets",
        itemHash: 691578979,
        perkName: "Sharp Edges",
        perkDesc: "Throwing Knife final blows decrease your Super's cooldown. Hits and final blows with Blade Barrage return Super energy after the Super ends \u2014 up to half a full Super back from one good cast."
      },
      exoticWeapon: {
        name: "One Thousand Voices",
        weaponType: "Fusion Rifle",
        itemHash: 2069224589,
        perkName: "Ahamkara's Eye + Unforeseen Repercussions",
        perkDesc: "Charging this weapon unleashes a giant continuous beam of death (Power/Heavy slot). The beam superheats targets on impact, causing a delayed scorching explosion \u2014 the reserve answer for anything ad clear alone doesn't finish."
      },
      armorSet: { name: "Iron Battalion Set", slug: "iron-battalion-set" },
      artifact: { name: "Tablet of Ruin", slug: "tablet-of-ruin" },
      loop: [
        "Blade Barrage throws a volley of solar knives; the Knock 'Em Down aspect adds even more knives to that volley and, while radiant, fully refunds melee energy on a Throwing Knife final blow.",
        "Shards of Galanor's Sharp Edges shortens the Super's cooldown off Throwing Knife final blows, then hands back a chunk of that same Super's energy once Blade Barrage ends \u2014 so landing the volley on a crowd (or a boss) pays for a good portion of the next cast.",
        "Crackshot, the newest Gunslinger aspect, fires up to three scorching shots off your class ability at marked targets and cures you for landing all three \u2014 more Scorch stacking and survivability to bridge the gap between Supers.",
        "Iron Battalion's 4-piece, Supercyclical, refunds still more Super energy for any final blow scored while the Super is active \u2014 a second, independent source of the exact energy Shards of Galanor already returns \u2014 while its 2-piece boosts Primary weapon damage, which pairs well with a Solar auto rifle running Incandescent for its own Scorch explosions.",
        "One Thousand Voices steps in for anything that survives: its beam superheats targets for a delayed scorch explosion, and Tablet of Ruin's Particle Reconstruction partially refills its magazine and adds bonus damage on sustained Fusion Rifle hits.",
        "Ribbontail (Strand, Trace Rifle) runs a second loop alongside the Solar one: Unraveling Orbs grants it Unraveling Rounds off Orb pickups, Harsh Refraction adds bonus Trace Rifle damage against those Unraveled targets, and Horde Shuttle spawns Threadlings off the same Unraveled damage \u2014 which sever targets, and To Shreds turns sustained damage on Severed targets into more Unravel plus Woven Mail on the kill."
      ],
      recommendedArtifactPerks: ["Elemental Siphon", "Unraveling Orbs", "Horde Shuttle", "Harsh Refraction", "Gold From Lead", "Particle Reconstruction", "To Shreds"],
      whyItWorks: "This build stacks three separate systems that all do the same thing: get Blade Barrage back as fast as possible. Shards of Galanor refunds Super energy on its own, Iron Battalion's set bonus refunds more from a completely different trigger (any final blow while the Super is active, not just knife or Blade Barrage hits), and Crackshot keeps the ability economy topped up in between. Elemental Siphon adds a fourth angle \u2014 rapid Ribbontail (Kinetic) kills create Solar elemental pickups since Blade Barrage is the equipped Super, and collecting them feeds Super energy directly. On top of that Solar engine, Ribbontail's Strand damage justifies a second, self-contained loop on the artifact: Unraveling Orbs turns Orb pickups into Unraveling Rounds, Harsh Refraction cashes that in for bonus Trace Rifle damage, and Horde Shuttle/To Shreds turn the same Unravel into Threadlings, Sever, and Woven Mail. With all of this running at once, the Super stops being an occasional cooldown-gated tool and starts functioning like a weapon you can throw out almost on demand \u2014 and Ribbontail is quietly doing its own thing on the side the whole time.",
      tags: ["Super Regen", "Boss Damage", "Solar", "Ad Clear"]
    },
    {
      title: "Chain Ignition",
      slug: "chain-ignition",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/7c98c21a-9122-4689-a941-6ae8ab7937d8",
      class: "Warlock",
      subclass: "Solar",
      tagline: "Every Scorch tick and every Ignition hands back the melee energy to go start another one.",
      exoticArmor: {
        name: "Dawn Chorus",
        slot: "Helmet",
        itemHash: 2316914168,
        perkName: "Rites of Ember",
        perkDesc: "Daybreak projectiles ignite targets on impact instead of just scorching them. Scorch deals additional damage and builds toward more powerful Ignitions. Dealing damage with Scorch or Ignitions grants melee energy."
      },
      exoticWeapon: {
        name: "One Thousand Voices",
        weaponType: "Fusion Rifle",
        itemHash: 2069224589,
        perkName: "Ahamkara's Eye + Unforeseen Repercussions",
        perkDesc: "Charging this weapon unleashes a giant continuous beam of death (Power/Heavy slot). The beam superheats targets on impact for a delayed scorching explosion \u2014 another Ignition source feeding the same loop Dawn Chorus runs on."
      },
      armorSet: { name: "Lustrous", slug: "lustrous" },
      artifact: { name: "Hunter's Journal", slug: "hunters-journal" },
      loop: [
        "Daybreak's projectiles already scorch on impact for any Solar Warlock, but Dawn Chorus's Rites of Ember upgrades that to a full Ignition on hit, and ramps Scorch damage up further on top of it.",
        "Every tick of Scorch and every Ignition you cause hands back melee energy through Rites of Ember, so simply letting Scorch cook (or landing an Incinerator Snap) keeps your melee coming back almost as fast as you spend it.",
        "Hellion's Solar Soul fires on its own during that window, scorching more targets and building toward more Ignitions without any extra input from you.",
        "Lustrous's 4-piece, Cauterize, heals you off rapid Solar final blows \u2014 and Ignitions chaining through a crowd count as exactly that, so the same Scorch spread that's refunding melee energy is also keeping you topped up on health.",
        "That healing then triggers Lustrous's 2-piece, Photogalvanic, which gives your Solar weapons increased flinch resistance, handling, and reload \u2014 One Thousand Voices and The Summoner both included \u2014 right when you need to stay locked on target through a damage phase.",
        "Hunter's Journal's Auto Rifle perks (Sustained Fire, Targeting Autoloader) key directly off The Summoner, Solar Fulmination boosts every Ignition's damage and radius, and Radiant Orbs turns any Orb pickup into Radiant \u2014 which then feeds Shieldcrush's faster grenade and melee recharge on top of everything else.",
        "One Thousand Voices handles whatever survives the ad clear: its beam superheats targets for a delayed scorching explosion that plugs directly into the same Scorch/Ignition economy everything else in the build already runs on."
      ],
      recommendedArtifactPerks: ["Elemental Siphon", "Sustained Fire", "Radiant Orbs", "Solar Fulmination", "Targeting Autoloader", "Shieldcrush", "Press the Advantage"],
      whyItWorks: "This build works because Ignitions aren't just damage here \u2014 they're the resource that keeps the melee (and therefore more Scorch, and therefore more Ignitions) coming back. Dawn Chorus turns the ability economy and the damage into the same loop, Hellion adds a second, passive Ignition source on top of it, and Lustrous closes it into a full circle: rapid Solar kills from that same Ignition spread heal you (Cauterize), and that healing buffs the Solar weapons you're using to keep the spread going (Photogalvanic). The Summoner being an Auto Rifle unlocks real value from Hunter's Journal beyond just Radiant Orbs and Solar Fulmination \u2014 Sustained Fire and Targeting Autoloader both key off it directly, and Shieldcrush turns the build's near-constant Radiant uptime into faster grenade and melee recharge. Press the Advantage rounds out the last slot \u2014 a Tier 1 perk, so it's eligible there even though nothing Tier-3-specific actually fit this build.",
      tags: ["Ignition", "Scorch", "Ability Loop", "Solar"]
    },
    {
      title: "Guided Tangent",
      slug: "guided-tangent",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/8d31b142-89ff-4047-86d7-ae55b67de81c",
      class: "Hunter",
      subclass: "Void",
      tagline: "Charge a bow on ad clear, tether the room, then turn every ring shot loose on the boss.",
      exoticArmor: {
        name: "Orpheus Rig",
        slot: "Boots",
        itemHash: 193869523,
        perkName: "Uncanny Arrows",
        perkDesc: "Provides ability energy \u2014 mostly Super \u2014 for each target tethered by your Shadowshot anchor, and gives Moebius Quiver an extra volley with a longer duration."
      },
      exoticWeapon: {
        name: "Hierarchy of Needs",
        weaponType: "Combat Bow",
        itemHash: 4174431791,
        perkName: "Guidance Ring + Apollonic Tangent",
        perkDesc: "Precision hits and final blows build Guidance Ring energy; at full charge, hip-firing deploys a floating ring in front of you. Arrows fired through it become homing seekers that deal more damage the farther they travel, guided further by your own precision hits."
      },
      armorSet: { name: "Atheon's Memory", slug: "atheons-memory" },
      artifact: { name: "Implement of Curiosity", slug: "implement-of-curiosity" },
      loop: [
        "Before damage, pick off a few precision kills with Hierarchy of Needs to build Guidance Ring energy passively, then stow it and clear the rest of the room with your other weapons.",
        "When damage starts, hip-fire Hierarchy to deploy a Guidance Ring, then fire Moebius Quiver's first volley through it \u2014 tethering, weakening, and suppressing everything downrange.",
        "Keep firing Hierarchy through that same ring: every arrow becomes a homing seeker that hits harder the farther it travels, and your own precision hits keep guiding those seekers home.",
        "Orpheus Rig refunds Super energy for every target your tether caught and hands Moebius Quiver an extra volley plus longer duration, so the second tether comes back fast \u2014 fire it right before the first one's window closes to keep the weaken/suppress (and its damage bonus) covering the whole phase without a gap.",
        "Atheon's Memory's 4-piece, Collective Power, turns sustained damage while you're holding a subclass buff (Invisible off a dodge is the easy one to keep up here) into an Orb of Power \u2014 so the same rotation of ring shots is also feeding the team's Super economy.",
        "Hierarchy of Needs is Solar and its seekers scorch on impact, so Implement of Curiosity's Fever and Chill turns those same precision hits into Radiant, and Radiant Shrapnel then turns sustained damage while Radiant \u2014 or a scorched kill \u2014 into more Solar projectiles on top of the seekers themselves.",
        "Keep firing Hierarchy through the ring until the damage phase ends."
      ],
      recommendedArtifactPerks: ["Semi-Auto Striker", "Fever and Chill", "Elemental Coalescence", "That Fresh Bullets Smell", "Energy Acceleration", "Argent Quiver", "Radiant Shrapnel"],
      whyItWorks: "This build stacks three separate multipliers onto the same bow instead of one: Moebius Quiver's own damage bonus against tethered targets, the Guidance Ring's homing and distance-scaling seekers, and Orpheus Rig's extra volley and duration that keeps the tether covering the whole damage phase instead of half of it. Implement of Curiosity reinforces every weapon in the loadout individually rather than just the neutral game: Semi-Auto Striker and Fever and Chill both key off Hierarchy of Needs' Solar precision hits, Energy Acceleration and That Fresh Bullets Smell both key off Mint Retrograde (a Kinetic micro-missile weapon), and Argent Quiver plus Radiant Shrapnel both reinforce Hierarchy's own reload and scorch mechanics. Every artifact slot ties back to a weapon actually in the loadout \u2014 nothing here is generic filler.",
      tags: ["Boss Damage", "Void", "Tether", "Precision"]
    },
    {
      title: "Double Retribution",
      slug: "double-retribution",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/97587b2e-431b-436a-b4e2-9ba0a7fd2b0a",
      class: "Hunter",
      subclass: "Prismatic",
      tagline: "The same Golden Gun/Still Hunt burst as the Solar version, plus a Strand decoy and a second Arc burst tool Prismatic lets you bolt on for nothing.",
      exoticArmor: {
        name: "Celestial Nighthawk",
        slot: "Helmet",
        itemHash: 1667080810,
        perkName: "Hawkeye Hack",
        perkDesc: "Modifies Golden Gun to fire a single, massively empowered shot instead of three. Precision final blows reduce the Super's cooldown, and defeated targets explode."
      },
      exoticWeapon: {
        name: "Still Hunt",
        weaponType: "Sniper Rifle",
        itemHash: 2905188646,
        perkName: "Cayde's Retribution",
        perkDesc: "Precision hits and Orbs of Power charge up a built-in Golden Gun mode for this weapon. Wearing Celestial Nighthawk turns that charged shot into a single high-powered blast instead of three successive ones."
      },
      armorSet: { name: "Atheon's Memory", slug: "atheons-memory" },
      artifact: { name: "Hunter's Journal", slug: "hunters-journal" },
      loop: [
        "Golden Gun on Prismatic fires precision rounds while Still Hunt charges its own built-in Golden Gun separately from precision hits and Orbs of Power \u2014 two burst-damage windows layered on top of each other instead of one.",
        "Celestial Nighthawk collapses both into a single overpowered shot instead of a 3-round burst. Targets it kills explode and refund Super energy, and precision final blows shave more time off the cooldown on top of that.",
        "Between those windows, Threaded Specter turns activating your class ability (Marksman's Dodge) into a Strand decoy that pulls enemy attention and then detonates into Threadlings, while Snare Bomb suppresses whatever it hits \u2014 crowd control that doesn't touch your Super economy at all.",
        "Ascension lets you consume your class ability energy mid-air to summon Arc Staff, amplifying nearby allies and jolting targets \u2014 a second burst tool that doesn't compete with Golden Gun for the same resource.",
        "Atheon's Memory's 4-piece, Collective Power, turns sustained damage while holding any subclass buff into an Orb of Power \u2014 exactly the kind of DPS-phase payoff this build wants, since it's rarely without a buff active between Ascension's amplify and the general Prismatic buff economy. The 2-piece, Radiolaria Breach, then turns your next broken shield after an Orb pickup into a Health boost and a radiolaria burst \u2014 survivability that comes directly out of the same Orb loop.",
        "M-17 Fast-Talker (Stasis, Kinetic) handles the space between Super windows, and Elemental Siphon turns its rapid kills into Solar pickups \u2014 since Golden Gun is Solar, collecting them feeds Super energy directly."
      ],
      recommendedArtifactPerks: ["Energy Diffusion Substrate", "Incendiary Rifle Rounds", "Elemental Siphon", "Solar Fulmination", "Void Hegemony", "Prismatic Transfer", "Sniper's Meditation"],
      whyItWorks: "The Nighthawk/Still Hunt core is the same developer-built interaction as the pure Solar version \u2014 wearing Nighthawk directly changes what Still Hunt's own charged shot does, which is rare even among iconic Destiny 2 combos. Running it on Prismatic instead of Solar Gunslinger adds two things a pure Solar build can't have at once: Threaded Specter's aggro-pulling decoy plus Snare Bomb's suppress, giving crowd control and safety between damage windows, and Ascension as a second, resource-independent burst tool. Atheon's Memory is a deliberate pick for a DPS-centered build like this one \u2014 Collective Power turns the sustained damage of a boss phase directly into Orbs of Power, and Radiolaria Breach turns those same Orb pickups into survivability. Elemental Siphon closes the loop back to the Super \u2014 M-17's Kinetic kills become Solar pickups that feed Golden Gun directly, so the weapon doing your ad-clear is also charging the Super doing your boss damage.",
      tags: ["Boss Damage", "Prismatic", "Precision", "Invisibility"]
    },
    {
      title: "Skip Charge",
      slug: "skip-charge",
      mobalyticsUrl: "https://mobalytics.gg/destiny-2/profile/coopgg-agudcg/builds/b25b8cea-47f1-46bf-bab3-6235aa7b3e44",
      class: "Hunter",
      subclass: "Arc",
      tagline: "Shinobu's Vow turns Skip Grenade into a self-fueling Bolt Charge loop, and Riskrunner mops up whatever the grenades don't.",
      exoticArmor: {
        name: "Shinobu's Vow",
        slot: "Gauntlets",
        itemHash: 1053737370,
        perkName: "New Tricks",
        perkDesc: "Grants an extra Skip Grenade charge. Skip Grenade damage builds Bolt Charge, and gaining Bolt Charge refunds grenade energy in return. Once Bolt Charge is ready, it heals nearby allies and empowers your next Skip Grenade throw."
      },
      exoticWeapon: {
        name: "Riskrunner",
        weaponType: "Submachine Gun",
        itemHash: 3089417789,
        perkName: "Arc Conductor",
        perkDesc: "Taking Arc damage overcharges the weapon, boosting its damage and granting resistance to incoming Arc damage. Kills extend the overcharged window. While overcharged, shots have a chance to chain lightning between targets and return ammo."
      },
      armorSet: { name: "Exodus Down", slug: "exodus-down" },
      artifact: { name: "Slayer Baron Apothecary Satchel", slug: "slayer-baron-apothecary-satchel" },
      loop: [
        "Throw a Skip Grenade into a group. Spark of Shock jolts everyone it touches, and the grenade damage starts stacking Bolt Charge on Shinobu's Vow.",
        "Bolt Charge loops straight back into grenade energy \u2014 New Tricks refunds Skip Grenade energy as Bolt Charge builds, so you're rarely without a grenade to throw. Spark of Ions and Spark of Discharge convert jolted and Arc kills into Ionic Traces on top of that, keeping the tank topped off.",
        "Every grenade cycle burns through Armor Charge fast. Exodus Down's Repurposed Charge triggers off gaining or spending it, so the constant churn quietly heals you and adds damage resistance without any extra input.",
        "When Bolt Charge is fully stacked, it heals nearby allies and pumps up your next Skip Grenade throw \u2014 useful to time right before you push into a new group.",
        "Swap to Riskrunner for anything the grenades didn't clear. A little incoming Arc damage (or your own grenade splash) triggers Arc Conductor \u2014 damage resistance, chain lightning, and ammo return while it's active. Flow State keeps you Amplified off Jolted kills, so Riskrunner final blows during that window also blind the area via Spark of Beacons \u2014 a second free Blind source on top of Retinal Burn.",
        "Retinal Burn (artifact) spends an Armor Charge on Arc precision hits to Blind targets, and Arc Compounding makes Arc damage hit Blinded targets harder \u2014 both fire naturally while you're already cycling Armor Charge for Exodus Down, so the extra damage is close to free. Trace Evidence adds another Armor Charge source on top, off rapid hits against Jolted or Blinded targets."
      ],
      recommendedArtifactPerks: ["Trace Evidence", "The Thick of It", "Retinal Burn", "Weakened Clear", "Curative Orbs", "Arc Compounding", "Kinetic Impacts"],
      whyItWorks: "Nothing here is fighting over the same resource. Shinobu's Vow's New Tricks and the Spark of Ions/Discharge fragments both feed grenade energy from different triggers (grenade damage vs. Arc/Jolt kills), so Skip Grenade rarely goes on cooldown for long. That same grenade spam burns Armor Charge constantly, and Exodus Down turns that churn into passive healing and damage resistance instead of a resource you have to manage. The artifact perks lean on the exact same Armor Charge cycle \u2014 Retinal Burn spends it to Blind, Arc Compounding cashes that Blind in for bonus Arc damage, and Trace Evidence keeps the Armor Charge supply coming from kills you're already getting. Riskrunner sits on top as the answer for anything that survives the grenade-and-jolt phase, converting a little incoming Arc damage into chain lightning that clears whatever's left.",
      tags: ["Add-Clear", "Ability Spam", "Crowd Control", "Jolt"]
    }
  ];

  return { BUILDS };
})();