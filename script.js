/* Recipe items */
var bf = {
  elem: document.getElementById("bf"),
  name: "B.F. Sword",
  img: document.getElementById("bf").src,
}

var cv = {
  elem: document.getElementById("cv"),
  name: "Chain Vest",
  img: document.getElementById("cv").src,
}

var gb = {
  elem: document.getElementById("gb"),
  name: "Giant's Belt",
  img: document.getElementById("gb").src,
}

var rod = {
  elem: document.getElementById("rod"),
  name: "Needlessly Large Rod",
  img: document.getElementById("rod").src,
}

var nc = {
  elem: document.getElementById("nc"),
  name: "Negatron Cloak",
  img: document.getElementById("nc").src,
}

var rec = {
  elem: document.getElementById("rec"),
  name: "Recurve bow",
  img: document.getElementById("rec").src,
}

var sg = {
  elem: document.getElementById("sg"),
  name: "Sparring Gloves",
  img: document.getElementById("sg").src,
}

var spat = {
  elem: document.getElementById("spat"),
  name: "Spatula",
  img: document.getElementById("spat").src,
}

var tear = {
  elem: document.getElementById("tear"),
  name: "Tear of the Goddess",
  img: document.getElementById("tear").src,
}

var all = {
  elem: document.getElementById("all"),
  img: document.getElementById("all").src,
}

var baseItems = [bf, cv, gb, rod, nc, rec, sg, spat, tear];

/*var as = "Attack Speed"
var ad = "Attack Damage"
var sd = "Spell Damage"
var am = "Armor"
var mr = "Magic Resist"
var hp = "Health"
var mn = "Mana"
var csc = "Critical Strike Chance"
var dc = "Dodge Chance"*/

/* Full items */
var ba = {
  elem: document.getElementById("ba"),
  name: "Berserker’s Axe",
  img: document.getElementById("ba").src,
  stats: "+10% Critical Strike Chance \xa0 +10% Dodge Chance",
  desc: "Wearer is also a Berserker.",
  item1: sg.name,
  item1Img: sg.img,
  item2: spat.name,
  item2Img: spat.img
}

var botrk = {
  elem: document.getElementById("botrk"),
  name: "Blade of the Ruined King",
  img: document.getElementById("botrk").src,
  stats: "+15% Attack Speed",
  desc: "Wearer is also a Blademaster.",
  item1: rec.name,
  item1Img: rec.img,
  item2: spat.name,
  item2Img: spat.img
}

var bt = {
  elem: document.getElementById("bt"),
  name: "Bloodthirster",
  img: document.getElementById("bt").src,
  stats: "+15 Attack Damage \xa0 +25 Magic Resist",
  desc: "Basic Attacks heal the wearer for 50% of the damage dealt.",
  item1: bf.name,
  item1Img: bf.img,
  item2: nc.name,
  item2Img: nc.img
}

var bv = {
  elem: document.getElementById("bv"),
  name: "Bramble Vest",
  img: document.getElementById("bv").src,
  stats: "+50 Armor",
  desc: "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 100/140/200 magic damage to all nearby enemies (once every 1 second maximum).",
  item1: cv.name,
  item1Img: cv.img,
  item2: cv.name,
  item2Img: cv.img
}

/*var cb = {
  elem: document.getElementById("cb"),
  name: "Cursed Blade",
  img: document.getElementById("cb").src,
  stats: "+20 Magic Resist \xa0 +20% Attack Speed",
  desc: "Basic Attacks have a 20% chance on-hit to decrease the target' star level by 1 for the rest of combat.",
  item1: nc.name,
  item1Img: nc.img,
  item2: rec.name,
  item2Img: rec.img
}*/

/*var d = {
  elem: document.getElementById("d"),
  name: "Darkin",
  img: document.getElementById("d").src,
  stats: "+40 Mana",
  desc: "Wearer is also a Demon.",
  item1: tear.name,
  item1Img: tear.img,
  item2: spat.name,
  item2Img: spat.img
}*/

var db = {
  elem: document.getElementById("db"),
  name: "Deathblade",
  img: document.getElementById("db").src,
  stats: "+30 Attack Damage",
  desc: "Whenever the wearer kills or participates in killing an enemy, gain +15 Attack Damage for the remainder of combat. This effect can stack any number of times.",
  item1: bf.name,
  item1Img: bf.img,
  item2: bf.name,
  item2Img: bf.img
}

var dc = {
  elem: document.getElementById("dc"),
  name: "Dragon's Claw",
  img: document.getElementById("dc").src,
  stats: "+50 Magic Resist",
  desc: "Wearer gains 50% resistance to magic damage.",
  item1: nc.name,
  item1Img: nc.img,
  item2: nc.name,
  item2Img: nc.img
}

var fon = {
  elem: document.getElementById("fon"),
  name: "Force of Nature",
  img: document.getElementById("fon").src,
  stats: "No stats given",
  desc: "Wearer's team gains +1 maximum team size.",
  item1: spat.name,
  item1Img: spat.img,
  item2: spat.name,
  item2Img: spat.img
}

var fh = {
  elem: document.getElementById("fh"),
  name: "Frozen Heart",
  img: document.getElementById("fh").src,
  stats: "+25 Armor \xa0 +20 Mana",
  desc: "Reduces the Attack Speed of nearby enemies by 40% (stacking increases the radius of this effect).",
  item1: cv.name,
  item1Img: cv.img,
  item2: tear.name,
  item2Img: tear.img
}

var fm = {
  elem: document.getElementById("fm"),
  name: "Frozen Mallet",
  img: document.getElementById("fm").src,
  stats: "+400 Health",
  desc: "Wearer is also a Glacial.",
  item1: gb.name,
  item1Img: gb.img,
  item2: spat.name,
  item2Img: spat.img
}

var gs = {
  elem: document.getElementById("gs"),
  name: "Giant Slayer",
  img: document.getElementById("gs").src,
  stats: "+15 Attack Damage \xa0 +15% Attack Speed",
  desc: "The wearer's basic attacks deal an additional 9% of the target's current health as physical damage.",
  item1: bf.name,
  item1Img: bf.img,
  item2: rec.name,
  item2Img: rec.img
}

var ga = {
  elem: document.getElementById("ga"),
  name: "Guardian Angel",
  img: document.getElementById("ga").src,
  stats: "+15 Attack Damage \xa0 +25 Armor",
  desc: "When the wearer dies, they cleanse negative effects and revive with up to 400 Health after a 2 second delay. This effect can trigger once per combat.",
  item1: bf.name,
  item1Img: bf.img,
  item2: cv.name,
  item2Img: cv.img
}

var grb = {
  elem: document.getElementById("grb"),
  name: "Guinsoo's Rageblade",
  img: document.getElementById("grb").src,
  stats: "+20% Spell Damage \xa0 +15% Attack Speed",
  desc: "Basic Attacks grant the wearer +5% bonus Attack Speed for the rest of combat. This effect can stack any number of times.",
  item1: rod.name,
  item1Img: rod.img,
  item2: rec.name,
  item2Img: rec.img
}

var hoj = {
  elem: document.getElementById("hoj"),
  name: "Hand of Justice",
  img: document.getElementById("hoj").src,
  stats: "+20 Mana \xa0 +10% Critical Strike Chance \xa0 +10% Dodge Chance",
  desc: "At the beginning of each planning phase, the wearer gains one of the following: Basic Attacks and Spells deal +50% Damage or Basic Attacks heal 50 Health on-hit.",
  item1: tear.name,
  item1Img: tear.img,
  item2: sg.name,
  item2Img: sg.img
}

var hgb = {
  elem: document.getElementById("hgb"),
  name: "Hextech Gunblade",
  img: document.getElementById("hgb").src,
  stats: "+15 Attack Damage \xa0 +20% Spell Damage",
  desc: "Basic Attacks and spells heal the wearer for 33% of the damage dealt.",
  item1: bf.name,
  item1Img: bf.img,
  item2: rod.name,
  item2Img: rod.img,
}

var h = {
  elem: document.getElementById("h"),
  name: "Hush",
  img: document.getElementById("h").src,
  stats: "+25 Magic Resist \xa0 +20 Mana",
  desc: "Basic Attacks have a 20% chance to silence the target on-hit, preventing the enemy from gaining mana for 4 seconds.",
  item1: nc.name,
  item1Img: nc.img,
  item2: tear.name,
  item2Img: tear.img
}

var ig = {
  elem: document.getElementById("ig"),
  name: "Iceborn Gauntlet",
  img: document.getElementById("ig").src,
  stats: "+25 Armor \xa0 +20% Dodge Chance",
  desc: "After casting a spell, the wearer’s next Basic Attack freezes the target for 2.5 seconds.",
  item1: cv.name,
  item1Img: cv.img,
  item2: sg.name,
  item2Img: sg.img
}

var ic = {
  elem: document.getElementById("ic"),
  name: "Inferno’s Cinder",
  img: document.getElementById("ic").src,
  stats: "+20% Spell Damage",
  desc: "Wearer is also an Inferno.",
  item1: rod.name,
  item1Img: rod.img,
  item2: spat.name,
  item2Img: spat.img
}

var ie = {
  elem: document.getElementById("ie"),
  name: "Infinity Edge",
  img: document.getElementById("ie").src,
  stats: "+15 Attack Damage \xa0 +20% Critical Strike Chance",
  desc: "The wearer gains +100% Critical Strike Damage.",
  item1: bf.name,
  item1Img: bf.img,
  item2: sg.name,
  item2Img: sg.img
}

var is = {
  elem: document.getElementById("is"),
  name: "Ionic Spark",
  img: document.getElementById("is").src,
  stats: "+20% Spell Damage \xa0 +25 Magic Resist",
  desc: "Enemies within 3 hexes that cast a spell are zapped, taking magic damage equal to 225% of their max Mana.",
  item1: rod.name,
  item1Img: rod.img,
  item2: nc.name,
  item2Img: nc.img
}

var jg = {
  elem: document.getElementById("jg"),
  name: "Jeweled Gauntlet",
  img: document.getElementById("jg").src,
  stats: "+20% Spell Damage \xa0 +20% Critical Strike Chance",
  desc: "The wearer's spells can critically strike.",
  item1: rod.name,
  item1Img: rod.img,
  item2: sg.name,
  item2Img: sg.img
}

/*var kv = {
  elem: document.getElementById("kv"),
  name: "Knight's Vow",
  img: document.getElementById("kv").src,
  stats: "+40 Armor",
  desc: "Wearer is also a Knight.",
  item1: cv.name,
  item1Img: cv.img,
  item2: spat.name,
  item2Img: spat.img
}*/

var lw = {
  elem: document.getElementById("lw"),
  name: "Last Whisper",
  img: document.getElementById("lw").src,
  stats: "+15% Attack Speed \xa0 +20% Critical Strike Chance",
  desc: "Critical hits reduce the target’s Armor by 90% for 3 seconds. This effect does not stack.",
  item1: rec.name,
  item1Img: rec.img,
  item2: sg.name,
  item2Img: sg.img
}

var lotis = {
  elem: document.getElementById("lotis"),
  name: "Locket of the Iron Solari",
  img: document.getElementById("lotis").src,
  stats: "+25 Armor \xa0 +20% Spell Damage",
  desc: "When combat begins, the wearer and all allies within 2 hexes in the same row gain a shield that blocks 250/275/350 damage for 8 seconds.",
  item1: cv.name,
  item1Img: cv.img,
  item2: rod.name,
  item2Img: rod.img
}

var le = {
  elem: document.getElementById("le"),
  name: "Luden's Echo",
  img: document.getElementById("le").src,
  stats: "+20% Spell Damage \xa0 +20 Mana",
  desc: "When the wearer deals damage with their spell, the first target hit and up to 3 nearby enemies are dealt an additional 150/175/225 magic damage.",
  item1: rod.name,
  item1Img: rod.img,
  item2: tear.name,
  item2Img: tear.img
}

var mc = {
  elem: document.getElementById("mc"),
  name: "Mage’s Cap",
  img: document.getElementById("mc").src,
  stats: "+20 Mana",
  desc: "Wearer is also a Mage.",
  item1: tear.name,
  item1Img: tear.img,
  item2: spat.name,
  item2Img: spat.img
}

/*var mi = {
  elem: document.getElementById("mi"),
  name: "Mittens",
  img: document.getElementById("mi").src,
  stats: "+20% Critical Strike Chance \xa0 +20% Dodge Chance",
  desc: "Wearer is also a yordle.",
  item1: sg.name,
  item1Img: sg.img,
  item2: spat.name,
  item2Img: spat.img
}*/

var mo = {
  elem: document.getElementById("mo"),
  name: "Morellonomicon",
  img: document.getElementById("mo").src,
  stats: "+20% Spell Damage \xa0 +200 Health",
  desc: "When the wearer deals damage with their spell, they burn the target, dealing 18% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 80% for the duration of the burn.",
  item1: rod.name,
  item1Img: rod.img,
  item2: gb.name,
  item2Img: gb.img
}

/*var pd = {
  elem: document.getElementById("pd"),
  name: "Phantom Dancer",
  img: document.getElementById("pd").src,
  stats: "+20% Attack Speed \xa0 +20 Armor",
  desc: "Wearer dodges all Critical Strikes.",
  item1: rec.name,
  item1Img: rec.img,
  item2: cv.name,
  item2Img: cv.img
}*/

var q = {
  elem: document.getElementById("q"),
  name: "Quicksilver",
  img: document.getElementById("q").src,
  stats: "+25 Magic Resist \xa0 +20% Dodge Chance",
  desc: "The wearer is immune to crowd control.",
  item1: nc.name,
  item1Img: nc.img,
  item2: sg.name,
  item2Img: sg.img
}

var rd = {
  elem: document.getElementById("rd"),
  name: "Rabadon's Deathcap",
  img: document.getElementById("rd").src,
  stats: "+40% Spell Damage",
  desc: "Wearer gains +75% Spell Power Amplification.",
  item1: rod.name,
  item1Img: rod.img,
  item2: rod.name,
  item2Img: rod.img
}

var rfc = {
  elem: document.getElementById("rfc"),
  name: "Rapid Firecannon",
  img: document.getElementById("rfc").src,
  stats: "+30% Attack Speed",
  desc: "Wearer gains +100% Attack Range.",
  item1: rec.name,
  item1Img: rec.img,
  item2: rec.name,
  item2Img: rec.img
}

var red = {
  elem: document.getElementById("red"),
  name: "Red Buff",
  img: document.getElementById("red").src,
  stats: "+200 Health \xa0 +25 Armor",
  desc: "Wearer's Basic Attacks burn the target on-hit, dealing 18% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 80% for the duration of the burn.",
  item1: gb.name,
  item1Img: gb.img,
  item2: cv.name,
  item2Img: cv.img
}

var r = {
  elem: document.getElementById("r"),
  name: "Redemption",
  img: document.getElementById("r").src,
  stats: "+200 Health \xa0 +20 Mana",
  desc: "When the wearer falls below 30% Health, nearby allies are healed for 1200 Health after a 2.5 second delay. This effect can trigger once per combat.",
  item1: gb.name,
  item1Img: gb.img,
  item2: tear.name,
  item2Img: tear.img
}

/*var rc = {
  elem: document.getElementById("rc"),
  name: "Repeating Crossbow",
  img: document.getElementById("rc").src,
  stats: "+20% Attack Speed \xa0 +20% Critical Strike Chance",
  desc: "When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants additional +30% Attack Speed and +30% Critical Strike Chance for the remainder of combat. This effect can stack any number of times.",
  item1: rec.name,
  item1Img: rec.img,
  item2: sg.name,
  item2Img: sg.img
}*/

var rh = {
  elem: document.getElementById("rh"),
  name: "Runaan's Hurricane",
  img: document.getElementById("rh").src,
  stats: "+25 Magic Resist \xa0 +15% Attack Speed",
  desc: "Basic Attacks fire an additional missile at another nearby enemy, dealing 60% of the wearer's Attack damage and applying on-hit effects.",
  item1: nc.name,
  item1Img: nc.img,
  item2: rec.name,
  item2Img: rec.img
}

var se = {
  elem: document.getElementById("se"),
  name: "Seraph's Embrace",
  img: document.getElementById("se").src,
  stats: "+40 Mana",
  desc: "After casting their spell, the wearer restores 20 Mana.",
  item1: tear.name,
  item1Img: tear.img,
  item2: tear.name,
  item2Img: tear.img
}

var sos = {
  elem: document.getElementById("sos"),
  name: "Spear of Shojin",
  img: document.getElementById("sos").src,
  stats: "+15 Attack Damage \xa0 +20 Mana",
  desc: "After casting their spell, the wearer's Basic Attacks restore 18% of their Maximum Mana.",
  item1: bf.name,
  item1Img: bf.img,
  item2: tear.name,
  item2Img: tear.img
}

var ss = {
  elem: document.getElementById("ss"),
  name: "Statikk Shiv",
  img: document.getElementById("ss").src,
  stats: "+15% Attack Speed \xa0 +20 Mana",
  desc: "Every third Basic Attack from the wearer deals 85 magical damage to 3/4/5 enemies.",
  item1: rec.name,
  item1Img: rec.img,
  item2: tear.name,
  item2Img: tear.img
}

var sb = {
  elem: document.getElementById("sb"),
  name: "Sword Breaker",
  img: document.getElementById("sb").src,
  stats: "+25 Armor \xa0 +25 Magic Resist",
  desc: "Wearer's Basic Attacks have a 25% chance to disarm the target for 3 seconds, preventing that enemy from Basic Attacking.",
  item1: cv.name,
  item1Img: cv.img,
  item2: nc.name,
  item2Img: nc.img
}

/*var sotd = {
  elem: document.getElementById("sotd"),
  name: "Sword of the Divine",
  img: document.getElementById("sotd").src,
  stats: "+20 Attack Damage \xa0 +20% Attack Speed",
  desc: "Each second, the wearer has a 7% chance to gain 100% Critical Strike.",
  item1: bf.name,
  item1Img: bf.img,
  item2: rec.name,
  item2Img: rec.img
}*/

var tol = {
  elem: document.getElementById("tol"),
  name: "Talisman of Light",
  img: document.getElementById("tol").src,
  stats: "+25 Magic Resist",
  desc: "Wearer is also a Light.",
  item1: nc.name,
  item1Img: nc.img,
  item2: spat.name,
  item2Img: spat.img
}

var tg = {
  elem: document.getElementById("tg"),
  name: "Thief's Gloves",
  img: document.getElementById("tg").src,
  stats: "+20% Critical Strike Chance \xa0 +20% Dodge Chance",
  desc: "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.",
  item1: sg.name,
  item1Img: sg.img,
  item2: sg.name,
  item2Img: sg.img
}

/*var t = {
  elem: document.getElementById("t"),
  name: "Thornmail",
  img: document.getElementById("t").src,
  stats: "+40 Armor",
  desc: "When the wearer is hit by a Basic Attack, they reflect 100% of the mitigated damage as magic damage.",
  item1: cv.name,
  item1Img: cv.img,
  item2: cv.name,
  item2Img: cv.img
}*/

var th = {
  elem: document.getElementById("th"),
  name: "Titanic Hydra",
  img: document.getElementById("th").src,
  stats: "+200 Health \xa0 +15% Attack Speed",
  desc: "Basic Attacks deal an additional 3% of the wearer's Maximum Health as magic damage to the target and adjacent enemies behind them.",
  item1: gb.name,
  item1Img: gb.img,
  item2: rec.name,
  item2Img: rec.img
}

var tr = {
  elem: document.getElementById("tr"),
  name: "Titan’s Resolve",
  img: document.getElementById("tr").src,
  stats: "+25 Armor \xa0 +15% Attack Speed",
  desc: "When the wearer is hit or inflicts a critical hit, they gain a 2% stacking damage bonus, up to 100%. At 50 stacks, the wearer gains 25 Armor and Magic Resistance, and increases in size. Resets every round.",
  item1: cv.name,
  item1Img: cv.img,
  item2: rec.name,
  item2Img: rec.img
}

var tc = {
  elem: document.getElementById("tc"),
  name: "Trap Claw",
  img: document.getElementById("tc").src,
  stats: "+200 Health \xa0 +20% Dodge Chance",
  desc: "At the beginning of combat, the wearer gains a shield that blocks the first enemy spell that hits them. The enemy that breaks the shield is stunned for 4 seconds.",
  item1: gb.name,
  item1Img: gb.img,
  item2: sg.name,
  item2Img: sg.img
}

var wm = {
  elem: document.getElementById("wm"),
  name: "Warden’s Mail",
  img: document.getElementById("wm").src,
  stats: "+25 Armor",
  desc: "Wearer is also a Warden.",
  item1: cv.name,
  item1Img: cv.img,
  item2: spat.name,
  item2Img: spat.img
}

var wa = {
  elem: document.getElementById("wa"),
  name: "Warmog's Armor",
  img: document.getElementById("wa").src,
  stats: "+400 Health",
  desc: "Wearer regenerates 6% of their missing Health per second.",
  item1: gb.name,
  item1Img: gb.img,
  item2: gb.name,
  item2Img: gb.img
}

var yg = {
  elem: document.getElementById("yg"),
  name: "Youmuu's Ghostblade",
  img: document.getElementById("yg").src,
  stats: "+30 Attack Damage",
  desc: "Wearer is also an Assassin.",
  item1: bf.name,
  item1Img: bf.img,
  item2: spat.name,
  item2Img: spat.img
}

/*var y = {
  elem: document.getElementById("y"),
  name: "Yuumi",
  img: document.getElementById("y").src,
  stats: "+40% Spell Damage",
  desc: "Wearer is also a Sorcerer.",
  item1: rod.name,
  item1Img: rod.img,
  item2: spat.name,
  item2Img: spat.img
}*/

var zh = {
  elem: document.getElementById("zh"),
  name: "Zeke's Herald",
  img: document.getElementById("zh").src,
  stats: "+15 Attack Damage \xa0 +200 Health",
  desc: "When combat begins, the wearer and all allies within 2 hexes in the same row gain +15% Attack Speed for the rest of combat.",
  item1: bf.name,
  item1Img: bf.img,
  item2: gb.name,
  item2Img: gb.img
}

var z = {
  elem: document.getElementById("z"),
  name: "Zephyr",
  img: document.getElementById("z").src,
  stats: "+200 Health \xa0 +25 Magic Resist",
  desc: "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 6 seconds.",
  item1: gb.name,
  item1Img: gb.img,
  item2: nc.name,
  item2Img: nc.img
}

var fullItems = [ba, botrk, bt, bv, db, dc, fon, fh, fm, gs, ga, grb, hoj, hgb, h, ig, ic, ie, is, jg, lw,
  lotis, le, mc, mo, q, rd, rfc, red, r, rh, se, sos, ss, sb, tol, tg, th, tr, tc, wm, wa, yg, zh, z];

/* Function that creates the canvas for the item builder. */
function itemBuilder(fullItem) {

  let canvas = document.getElementById("screen");

  var itemName = document.createElement("txt");
  itemName.appendChild(document.createTextNode(fullItem.name));
  itemName.id = "itemName";
  canvas.appendChild(itemName);

  var itemImg = document.createElement("img");
  itemImg.src = fullItem.img;
  itemImg.id = "itemImg";
  itemImg.className = "border";
  canvas.appendChild(itemImg);

  var itemInfo = document.createElement("txt");
  var hr = document.createElement("hr");
  itemInfo.appendChild(document.createTextNode(fullItem.stats));
  itemInfo.appendChild(hr);
  itemInfo.appendChild(document.createTextNode(fullItem.desc));
  itemInfo.id = "itemInfo";
  canvas.appendChild(itemInfo);

  var recipeList = document.createElement("txt");
  var hr2 = document.createElement("hr");
  recipeList.appendChild(document.createTextNode("Recipe list"));
  recipeList.appendChild(hr2);
  recipeList.id = "recipeList";
  hr2.id = "recipeListHR";
  canvas.appendChild(recipeList);

  var recItem1 = document.createElement("txt");
  recItem1.appendChild(document.createTextNode(fullItem.item1));
  recItem1.id = "recItem1";
  canvas.appendChild(recItem1);

  var recItem1Img = document.createElement("img");
  recItem1Img.src = fullItem.item1Img;
  recItem1Img.id = "recItem1Img";
  recItem1Img.className = "border";
  canvas.appendChild(recItem1Img);

  var plus = document.createElement("txt");
  plus.appendChild(document.createTextNode("+"));
  plus.id = "plus";
  canvas.appendChild(plus);

  var recItem2 = document.createElement("txt");
  recItem2.appendChild(document.createTextNode(fullItem.item2));
  recItem2.id = "recItem2";
  canvas.appendChild(recItem2);

  var recItem2Img = document.createElement("img");
  recItem2Img.src = fullItem.item2Img;
  recItem2Img.id = "recItem2Img";
  recItem2Img.className = "border";
  canvas.appendChild(recItem2Img);
}

/* Function that draws the item builds onto the canvas. */
function drawItemBuilds() {
  
  let canvas = document.getElementById("screen");

  // Loop to draw the canvas for each item when they are clicked.
  for (let i = 0; i < fullItems.length; i++) {
    fullItems[i].elem.addEventListener("click", function () {
      canvas.innerHTML = ""; // resets canvas
      itemBuilder(fullItems[i]);
    })
  }
}

/* Function that gets the full items that can be built from base items. */
function itemsToList(baseItem) {

  let fullItemGrid = document.getElementById("fullItemGrid");
  
  // Loop that adds the full items that can be built from base items onto the item grid.
  for (let i = 0; i < fullItems.length; i++) {
    if (fullItems[i].item1 == baseItem.name || fullItems[i].item2 == baseItem.name) {
      let fullItem = document.createElement("object");
      fullItem.appendChild(fullItems[i].elem);
      fullItem.className = "box border";
      fullItemGrid.appendChild(fullItem)
    }
  }
}

/* Function that updates the item grid and lists the full items that can be built from the selected base item. */
function updatefullItemGrid() {

  let fullItemGrid = document.getElementById("fullItemGrid");

  // Loop that updates the item grid for each base item when they are clicked.
  for (let i = 0; i < baseItems.length; i++) {
    baseItems[i].elem.addEventListener("click", function() {
      fullItemGrid.innerHTML = "";
      itemsToList(baseItems[i]);
    })
  }

  // Lists all the full items in the item grid when the all button is clicked.
  all.elem.addEventListener("click", function() {
    fullItemGrid.innerHTML = "";
    for (let i = 0; i < fullItems.length; i++) {
      let fullItem = document.createElement("object");
      fullItem.appendChild(fullItems[i].elem);
      fullItem.className = "box border";
      fullItemGrid.appendChild(fullItem)
    }
  })
}

drawItemBuilds();
updatefullItemGrid();