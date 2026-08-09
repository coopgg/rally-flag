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
        "Eutechnology isn't the centerpiece, but it's along for the same ride: Gift of the Ley Lines spawns a breach off rapid Void kills, and Techeun's Foresight triggers a detonation off your next Void weapon final blow after grabbing one \u2014 both fire constantly once Turncoat has a room weakened.",
        "Watch the Overwhelming Power timer \u2014 reload or stow Turncoat before it starts damaging you, then swap back in once Latent Power refills."
      ],
      recommendedArtifactPerks: ["Power from Pain", "Void Renewal", "Supernova"],
      whyItWorks: "Every piece here solves a problem for the piece next to it. Turncoat's Weaken is the best part of the gun but does nothing for your own survivability on its own \u2014 Power from Pain fixes that by turning Weakened kills straight into Devour, and Devour's own 50% heal (doubled by Feed the Void) is what makes playing aggressively with Turncoat sustainable instead of risky. Actual Grandeur then ties your Super regen to the exact thing Devour already has you doing \u2014 getting final blows \u2014 so Nova Bomb keeps coming back without a separate ability rotation to manage. The artifact and Eutechnology both run on Void breaches, and between Power from Pain, Void Renewal, and Eutechnology's own Gift of the Ley Lines, breaches show up constantly once the loop is moving \u2014 Supernova then spends each one on a weakening pulse that sets up the next kill. Nothing in this build is fighting for the same trigger; Weaken, Devour, Super regen, and breach generation all come from the same handful of kills.",
      tags: ["Weaken", "Devour", "Ad-Clear", "Boss Damage", "High Survivability"]
    },
    {
      title: "Ionic Overclock",
      slug: "ionic-overclock",
      mobalyticsUrl: "",
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
      recommendedArtifactPerks: ["Amped Up", "Thunderous Retort", "Shock and Awe", "Lightning Strikes Twice"],
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
        name: "Stoicism (Spirit of Synthoceps + Spirit of Inmost Light)",
        slot: "Class Item",
        itemHash: 266021826,
        perkName: "Spirit of Synthoceps + Spirit of Inmost Light",
        perkDesc: "Spirit of Synthoceps boosts melee damage while you're surrounded. Spirit of Inmost Light speeds up regeneration of whichever ability type you used most recently, so the whole kit keeps cycling."
      },
      exoticWeapon: {
        name: "Khvostov 7G-0X",
        weaponType: "Auto Rifle",
        itemHash: 4129629253,
        perkName: "The Right Choice",
        perkDesc: "Every 7th round in the magazine deals bonus damage and ricochets to a nearby target, clearing ads passively so you're not spending ability energy just to finish off stragglers between slams."
      },
      armorSet: { name: "CODA", slug: "coda" },
      artifact: { name: "Hunter's Journal", slug: "hunters-journal" },
      loop: [
        "Consecration launches you up and slams down, igniting the area — Knockout turns that same melee into instant healing on the kill.",
        "Spirit of Synthoceps makes the slam hit harder whenever you're surrounded, and Spirit of Inmost Light speeds the recharge of whichever ability you just used, so the next slam is rarely far off.",
        "CODA's 2-piece and 4-piece turn alternating Light, Dark, or Kinetic final blows into grenade or melee energy plus a window of damage resistance \u2014 a second, independent source of the exact fuel this build already runs on.",
        "Khvostov handles ad clear between slams so ability energy never gets spent on chip damage, while Hunter's Journal's Shieldcrush and Transference perks pour still more melee and grenade energy back in while transcendent.",
        "Thundercrash closes out boss damage phases once the loop has you topped off."
      ],
      recommendedArtifactPerks: ["Shieldcrush", "Transference", "Counter Energy"],
      whyItWorks: "This build works because every source of power in it points back at the same two abilities: melee and grenade. Consecration and Knockout form the core loop, Synthoceps and Inmost Light accelerate it, and CODA's set bonus generates the identical resource from a completely different trigger (elemental final blows instead of ability use). Layer Hunter's Journal's ability-energy perks on top and there's rarely a moment where melee or grenade isn't ready \u2014 which is exactly why this is the current default endgame Titan loadout rather than a niche pick.",
      tags: ["Ability Loop", "Add Clear", "Boss Damage", "Prismatic"]
    },
    {
      title: "Contagion Chain",
      slug: "contagion-chain",
      mobalyticsUrl: "",
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
      armorSet: { name: "Thunderhead", slug: "thunderhead" },
      artifact: { name: "Tablet of Ruin", slug: "tablet-of-ruin" },
      loop: [
        "Necrotic Grip poisons whatever you melee, and killing a poisoned target spreads the poison again to anyone standing near it.",
        "Osteo Striga does the same thing at range \u2014 precision hits or a final blow trigger its own poison burst, and thanks to Necrotic Grip, those kills spread the poison too, so melee and gunfire feed the same chain instead of two separate effects.",
        "Run this on Strand (Arcane Needle melee, three charges) or the Prismatic exotic class item route with Spirit of Necrotic, and every melee charge is another chain started.",
        "Thunderhead's 2-piece grants point-blank damage resistance off a grenade activation \u2014 useful cover for staying in melee range \u2014 and its 4-piece turns unraveled kills into grenade energy, so Strand suspend/sever effects loop back into more melee charges.",
        "Tablet of Ruin's Unraveling Orbs and Horde Shuttle mods add Strand Unraveling Rounds and Threadling generation on top, so the artifact is clearing adds through the same Strand debuffs the build is already applying."
      ],
      recommendedArtifactPerks: ["Unraveling Orbs", "Horde Shuttle", "Vile Weave"],
      whyItWorks: "Necrotic Grip and Osteo Striga are almost always recommended together because they're the same mechanic twice: one poisons at melee range, the other at range, and each one's kills re-trigger the other's spread. That's what makes a couple of poisoned enemies enough to clear a full room. Thunderhead and Tablet of Ruin don't add a new mechanic on top \u2014 they just make the existing Strand suspend/sever side of the kit (which you're already applying to poisoned targets) generate more of the melee energy this build was already built around.",
      tags: ["Poison", "Add Clear", "Strand", "Melee Loop"]
    },
    {
      title: "One Shot, One Kill",
      slug: "one-shot-one-kill",
      mobalyticsUrl: "",
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
        "Hunter's Journal's Sniper's Meditation stacks bonus sniper damage, stability, and reload on hit, and Incendiary Rifle Rounds scorches targets on Solar sniper precision hits \u2014 both stacking directly onto the same shots this build already lives on."
      ],
      recommendedArtifactPerks: ["Sniper's Meditation", "Incendiary Rifle Rounds", "Radiant Orbs"],
      whyItWorks: "The reason this pairing has stayed relevant for years is that Bungie built an explicit interaction between the two items rather than leaving them to synergize by coincidence: wearing Nighthawk changes what Still Hunt's own built-in Golden Gun does. That means the exotic weapon and exotic helmet are reinforcing the exact same mechanic instead of two unrelated bonuses, which is rare even among iconic Destiny 2 combos. Lustrous and Hunter's Journal then support that mechanic from two different angles \u2014 survivability so you can keep lining up precision shots, and raw sniper stats once you do.",
      tags: ["Boss Damage", "Precision", "Solar", "Burst Damage"]
    },
    {
      title: "Frostwall",
      slug: "frostwall",
      mobalyticsUrl: "",
      class: "Titan",
      subclass: "Stasis",
      tagline: "Slide into a melee and the ground turns to ice \u2014 shatter it and the whole room goes with it.",
      exoticArmor: {
        name: "Synthoceps (team play) or Wormgod Caress (solo)",
        slot: "Gauntlets",
        itemHash: 241462142,
        perkName: "Synthoceps: Increased Melee Damage / Wormgod Caress: Burning Fists",
        perkDesc: "Synthoceps boosts melee and Super damage while surrounded by 2+ combatants \u2014 easy to trigger with teammates funneling adds toward you. Wormgod Caress instead ramps up melee damage with your own consecutive melee kills, which suits chaining slide-melees solo without relying on being surrounded."
      },
      exoticWeapon: {
        name: "Ice Breaker (or Fighting Lion)",
        weaponType: "Sniper Rifle",
        itemHash: 1111334348,
        perkName: "Enhanced Container Rounds",
        perkDesc: "Precision final blows or shattering a frozen target trigger a Solar ignition. Final blows or assists with any other weapon or ability have a chance to refill its magazine, so it rarely runs dry. Fighting Lion is the team-play alternative \u2014 its bouncing, remote-detonated grenades shatter crystals from a distance across a wider area."
      },
      armorSet: { name: "Seventh Seraph", slug: "seventh-seraph" },
      artifact: { name: "Slayer Baron Apothecary Satchel", slug: "slayer-baron-apothecary-satchel" },
      loop: [
        "Sliding into a charged melee (Howl of the Storm) launches a wave of Stasis energy that freezes targets and creates Stasis crystals all around you, refunding melee energy on the kill so you can do it again almost immediately.",
        "Tectonic Harvest turns every Stasis shard you pick up into Frost Armor, and while you have Frost Armor, Stasis or Kinetic final blows have a chance to shatter the target outright \u2014 chaining through whatever's standing nearby.",
        "Slayer Baron's Crystalline Converter stacks up off those same shards and empowers your next Stasis melee to drop multiple crystals at once instead of one, while Hail the Storm makes shattering crystals or frozen targets hit harder and throw damaging ice shards outward \u2014 two more layers on the same chain. Frost Renewal shares Frost Armor with nearby allies when you take a critical hit, which is the actual \"team play\" payoff.",
        "Seventh Seraph's 4-piece, Rasputin's Reprisal, triggers off \u2014 among other things \u2014 destroying a construct, and the game quietly classifies Stasis crystals as constructs. Since you're already shattering crystals constantly, this fires a Solar detonation that damages nearby combatants and heals allies almost every time you break one.",
        "Ice Breaker turns every frozen or shattered kill into an Ignition on top of the shatter, and its own ammo economy means it's rarely empty when there's a crowd worth converting into one big explosion."
      ],
      recommendedArtifactPerks: ["Wind Chill", "Crystalline Converter", "Hail the Storm", "Frost Renewal"],
      whyItWorks: "Seventh Seraph wasn't built with Stasis in mind \u2014 its 4-piece is written around \"destroying a construct,\" and most players would assume that means Warmind Cells or similar. Stasis crystals happen to qualify too, so a set that looks unrelated turns into a second detonation source stacked on top of a build that's already generating Frost Armor and shatters from three other places at once (Tectonic Harvest, Slayer Baron's mods, and your own slide-melee loop). That's what makes it feel close to invincible while also clearing the room: nearly everything you do is simultaneously your damage, your healing, and your next charge of melee energy.",
      tags: ["Frost Armor", "Shatter", "Stasis", "Ad Clear", "Survivability"]
    },
    {
      title: "Endless Barrage",
      slug: "endless-barrage",
      mobalyticsUrl: "",
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
        "One Thousand Voices steps in for anything that survives: its beam superheats targets for a delayed scorch explosion, and Tablet of Ruin's Particle Reconstruction partially refills its magazine and adds bonus damage on sustained Fusion Rifle hits."
      ],
      recommendedArtifactPerks: ["Particle Reconstruction", "Elemental Siphon", "Perpetual Destruction"],
      whyItWorks: "This build stacks three separate systems that all do the same thing: get Blade Barrage back as fast as possible. Shards of Galanor refunds Super energy on its own, Iron Battalion's set bonus refunds more from a completely different trigger (any final blow while the Super is active, not just knife or Blade Barrage hits), and Crackshot keeps the ability economy topped up in between. With all three running at once, the Super stops being an occasional cooldown-gated tool and starts functioning like a weapon you can throw out almost on demand.",
      tags: ["Super Regen", "Boss Damage", "Solar", "Ad Clear"]
    },
    {
      title: "Chain Ignition",
      slug: "chain-ignition",
      mobalyticsUrl: "",
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
        "Every tick of Scorch and every Ignition you cause hands back melee energy through Rites of Ember, so simply letting Scorch cook (or landing Daybreak knives) keeps your melee coming back almost as fast as you spend it.",
        "Lustrous's 4-piece, Cauterize, heals you off rapid Solar final blows \u2014 and Ignitions chaining through a crowd count as exactly that, so the same Scorch spread that's refunding melee energy is also keeping you topped up on health.",
        "That healing then triggers Lustrous's 2-piece, Photogalvanic, which gives your Solar weapons increased flinch resistance, handling, and reload \u2014 One Thousand Voices included \u2014 right when you need to stay locked on target through a damage phase.",
        "Hunter's Journal isn't a guessed pairing here \u2014 its Solar Fulmination mod is documented to explicitly double both the melee energy Dawn Chorus grants from Ignitions and the Ignition's own damage.",
        "One Thousand Voices handles whatever survives the ad clear: its beam superheats targets for a delayed scorching explosion that plugs directly into the same Scorch/Ignition economy everything else in the build already runs on."
      ],
      recommendedArtifactPerks: ["Solar Fulmination", "Radiant Orbs", "Elemental Siphon"],
      whyItWorks: "This build works because Ignitions aren't just damage here \u2014 they're the resource that keeps the melee (and therefore more Scorch, and therefore more Ignitions) coming back. Dawn Chorus turns the ability economy and the damage into the same loop, and Lustrous closes it into a full circle: rapid Solar kills from that same Ignition spread heal you (Cauterize), and that healing buffs the Solar weapon you're using to keep the spread going (Photogalvanic). Hunter's Journal is one of the rare cases where an artifact mod was built to interact with one specific, years-old exotic helmet by name rather than a general damage type.",
      tags: ["Ignition", "Scorch", "Ability Loop", "Solar"]
    },
    {
      title: "Guided Tether",
      slug: "guided-tether",
      mobalyticsUrl: "",
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
        "Keep firing Hierarchy through the ring until the damage phase ends."
      ],
      recommendedArtifactPerks: ["Argent Quiver", "Semi-Auto Striker", "Elemental Coalescence"],
      whyItWorks: "This build stacks three separate multipliers onto the same bow instead of one: Moebius Quiver's own damage bonus against tethered targets, the Guidance Ring's homing and distance-scaling seekers, and Orpheus Rig's extra volley and duration that keeps the tether covering the whole damage phase instead of half of it. Implement of Curiosity reinforces the neutral game around it \u2014 Argent Quiver turns every bow reload into a damage and reload buff, and Semi-Auto Striker builds Armor Charge off the same precision hits that are already charging the Guidance Ring, so the exact shots doing the damage are also building the artifact's own resource.",
      tags: ["Boss Damage", "Void", "Tether", "Precision"]
    },
    {
      title: "Eternal Knighthawk",
      slug: "eternal-knighthawk",
      mobalyticsUrl: "",
      class: "Hunter",
      subclass: "Prismatic",
      tagline: "The same Golden Gun/Still Hunt burst as the Solar version, plus a free invisibility loop Prismatic lets you bolt on for nothing.",
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
      armorSet: { name: "Reverie Dawn", slug: "reverie-dawn" },
      artifact: { name: "Hunter's Journal", slug: "hunters-journal" },
      loop: [
        "Golden Gun on Prismatic fires precision rounds while Still Hunt charges its own built-in Golden Gun separately from precision hits and Orbs of Power \u2014 two burst-damage windows layered on top of each other instead of one.",
        "Celestial Nighthawk collapses both into a single overpowered shot instead of a 3-round burst. Targets it kills explode and refund Super energy, and precision final blows shave more time off the cooldown on top of that.",
        "Between those windows, the Void aspect Stylish Executioner turns any elementally-debuffed kill \u2014 melee, grenade, whatever's on hand \u2014 into invisibility, and your next melee while invisible weakens the target. That's free crowd control and survivability Prismatic lets you take without giving up anything from the Solar side of the kit.",
        "Reverie Dawn's Protective Wish kicks in automatically under pressure, and rapid final blows (which this build has no shortage of) end it early to cure you on demand instead of waiting out the timer.",
        "Hunter's Journal's Sniper's Meditation stacks bonus sniper damage, stability, and reload on hit, and Incendiary Rifle Rounds scorches targets on Solar sniper precision hits \u2014 both landing on the exact same Still Hunt shots the build already revolves around."
      ],
      recommendedArtifactPerks: ["Sniper's Meditation", "Incendiary Rifle Rounds", "Radiant Orbs"],
      whyItWorks: "The Nighthawk/Still Hunt core is the same developer-built interaction as the pure Solar version \u2014 wearing Nighthawk directly changes what Still Hunt's own charged shot does, which is rare even among iconic Destiny 2 combos. Running it on Prismatic instead of Solar Gunslinger doesn't cost anything: since Prismatic lets you mix an aspect from another subclass, Stylish Executioner rides along as pure upside, adding an invisibility/weaken loop for ad clear and survivability between damage windows that a pure Solar build simply doesn't have access to.",
      tags: ["Boss Damage", "Prismatic", "Precision", "Invisibility"]
    }
  ];

  return { BUILDS };
})();