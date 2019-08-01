/* Recipe items */
var bf = {
  name: "B.F. Sword",
  img: "./items/B._F._Sword_item.png"
}

var cv = {
  name: "Chain Vest",
  img: "./items/Chain_Vest_item.png"
}

var gb = {
  name: "Giant's Belt",
  img: "./items/Giant's_Belt_item.png"
}

var rod = {
  name: "Needlessly Large Rod",
  img: "./items/Needlessly_Large_Rod_item.png"
}

var nc = {
  name: "Negatron Cloak",
  img: "./items/Negatron_Cloak_item.png"
}

var rec = {
  name: "Recurve bow",
  img: "./items/Recurve_Bow_item.png"
}

var spat = {
  name: "Spatula",
  img: "./items/Spatula_item.png"
}

var tear = {
  name: "Tear of the Goddess",
  img: "./items/Tear_of_the_Goddess_item.png"
}

/* Full items */
var botrk = {
  elem: document.getElementById("botrk"),
  name: "Blade of the Ruined King",
  img: document.getElementById("botrk").src,
  stats: "+40% Attack Speed",
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
  stats: "+20 Attack Damage \xa0 +20 Magic Resist",
  desc: "Attacks heal for 50% damage.",
  item1: bf.name,
  item1Img: bf.img,
  item2: nc.name,
  item2Img: nc.img
}

var cb = {
  elem: document.getElementById("cb"),
  name: "Cursed Blade",
  img: document.getElementById("cb").src,
  stats: "+20 Magic Resist \xa0 +20% Attack Speed",
  desc: "Attacks have a 20% chance to Shrink (Reduce enemy's star level by 1).",
  item1: nc.name,
  item1Img: nc.img,
  item2: rec.name,
  item2Img: rec.img
}

var d = {
  elem: document.getElementById("d"),
  name: "Darkin",
  img: document.getElementById("d").src,
  stats: "+40 Mana",
  desc: "Wearer is also a Demon.",
  item1: tear.name,
  item1Img: tear.img,
  item2: spat.name,
  item2Img: spat.img
}

var dc = {
  elem: document.getElementById("dc"),
  name: "Dragon's Claw",
  img: document.getElementById("dc").src,
  stats: "+40 Magic Resist",
  desc: "Gain 83% resistance to magic damage.",
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
  desc: "Gain +1 team size.",
  item1: spat.name,
  item1Img: spat.img,
  item2: spat.name,
  item2Img: spat.img
}

var fh = {
  elem: document.getElementById("fh"),
  name: "Frozen Heart",
  img: document.getElementById("fh").src,
  stats: "+20 Armor \xa0 +20 Mana",
  desc: "Adjacent enemies lose 20% Attack Speed.",
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

var ga = {
  elem: document.getElementById("ga"),
  name: "Guardian Angel",
  img: document.getElementById("ga").src,
  stats: "+20 Attack Damage \xa0 +20 Armor",
  desc: "Wearer revives with 1000 Health after a 2 sec delay.",
  item1: bf.name,
  item1Img: bf.img,
  item2: cv.name,
  item2Img: cv.img
}

var grb = {
  elem: document.getElementById("grb"),
  name: "Guinsoo's Rageblade",
  img: document.getElementById("grb").src,
  stats: "+20% Spell Damage \xa0 +20% Attack Speed",
  desc: "Attacks grant 4% Attack Speed. Stacks infinitely.",
  item1: rod.name,
  item1Img: rod.img,
  item2: rec.name,
  item2Img: rec.img
}

var hgb = {
  elem: document.getElementById("hgb"),
  name: "Hextech Gunblade",
  img: document.getElementById("hgb").src,
  stats: "+20 Attack Damage \xa0 +20% Spell Damage",
  desc: "Heal for 25% of all damage dealt.",
  item1: bf.name,
  item1Img: bf.img,
  item2: rod.name,
  item2Img: rod.img,
}

var h = {
  elem: document.getElementById("h"),
  name: "Hush",
  img: document.getElementById("h").src,
  stats: "+20 Magic Resist \xa0 +20 Mana",
  desc: "Attacks have a 50% chance to Silence for 3 seconds.",
  item1: nc.name,
  item1Img: nc.img,
  item2: tear.name,
  item2Img: tear.img
}

var ie = {
  elem: document.getElementById("ie"),
  name: "Infinity Edge",
  img: document.getElementById("ie").src,
  stats: "+40 Attack Damage",
  desc: "Critical Strikes deal +150% damage.",
  item1: bf.name,
  item1Img: bf.img,
  item2: bf.name,
  item2Img: bf.img
}

var is = {
  elem: document.getElementById("is"),
  name: "Ionic Spark",
  img: document.getElementById("is").src,
  stats: "+20% Spell Damage \xa0 +20 Magic Resist",
  desc: "Whenever an enemy casts a spell, they take 150 true damage.",
  item1: rod.name,
  item1Img: rod.img,
  item2: nc.name,
  item2Img: nc.img
}

var kv = {
  elem: document.getElementById("kv"),
  name: "Knight's Vow",
  img: document.getElementById("kv").src,
  stats: "+40 Armor",
  desc: "Wearer is also a Knight.",
  item1: cv.name,
  item1Img: cv.img,
  item2: spat.name,
  item2Img: spat.img
}

var lotis = {
  elem: document.getElementById("lotis"),
  name: "Locket of the Iron Solari",
  img: document.getElementById("lotis").src,
  stats: "+20% Spell Damage \xa0 +20 Armor",
  desc: "On start of combat, allies two spaces to the left and right gain a shield of 250 for 4 seconds.",
  item1: rod.name,
  item1Img: rod.img,
  item2: cv.name,
  item2Img: cv.img
}

var le = {
  elem: document.getElementById("le"),
  name: "Luden's Echo",
  img: document.getElementById("le").src,
  stats: "+20% Spell Damage \xa0 +20 Mana",
  desc: "Spells deal 200 splash damage on hit.",
  item1: rod.name,
  item1Img: rod.img,
  item2: tear.name,
  item2Img: tear.img
}

var m = {
  elem: document.getElementById("m"),
  name: "Morellonomicon",
  img: document.getElementById("m").src,
  stats: "+20% Spell Damage \xa0 +200 Health",
  desc: "Spells burn for 5% of max HP per second and disable healing.",
  item1: rod.name,
  item1Img: rod.img,
  item2: gb.name,
  item2Img: gb.img
}

var pd = {
  elem: document.getElementById("pd"),
  name: "Phantom Dancer",
  img: document.getElementById("pd").src,
  stats: "+20% Attack Speed \xa0 +20 Armor",
  desc: "Wearer dodges all Critical Strikes.",
  item1: rec.name,
  item1Img: rec.img,
  item2: cv.name,
  item2Img: cv.img
}

var rd = {
  elem: document.getElementById("rd"),
  name: "Rabadon's Deathcap",
  img: document.getElementById("rd").src,
  stats: "+40% Spell Damage",
  desc: "+50% Ability Power.",
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
  desc: "Wearer's attacks cannot be dodged. Attack Range is doubled.",
  item1: rec.name,
  item1Img: rec.img,
  item2: rec.name,
  item2Img: rec.img
}

var red = {
  elem: document.getElementById("red"),
  name: "Red Buff",
  img: document.getElementById("red").src,
  stats: "+200 Health \xa0 +20 Armor",
  desc: "Attacks burn for 13% of max HP over 5s and disable healing.",
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
  desc: "Upon reaching 25% health, heal all nearby allies for 1000 Health.",
  item1: gb.name,
  item1Img: gb.img,
  item2: tear.name,
  item2Img: tear.img
}

var rh = {
  elem: document.getElementById("rh"),
  name: "Runaan's Hurricane",
  img: document.getElementById("rh").src,
  stats: "+40 Magic Resist",
  desc: "Summons a spirit who mirrors your attacks, dealing 25% damage. Applies on-hit effects.",
  item1: nc.name,
  item1Img: nc.img,
  item2: spat.name,
  item2Img: spat.img
}

var se = {
  elem: document.getElementById("se"),
  name: "Seraph's Embrace",
  img: document.getElementById("se").src,
  stats: "+40 Mana",
  desc: "Regain 20 mana each time a spell is cast.",
  item1: tear.name,
  item1Img: tear.img,
  item2: tear.name,
  item2Img: tear.img
}

var sos = {
  elem: document.getElementById("sos"),
  name: "Spear of Shojin",
  img: document.getElementById("sos").src,
  stats: "+20 Attack Damage \xa0 +20 Mana",
  desc: "After casting, wearer gains 15% of its max mana per attack.",
  item1: bf.name,
  item1Img: bf.img,
  item2: tear.name,
  item2Img: tear.img
}

var ss = {
  elem: document.getElementById("ss"),
  name: "Statikk Shiv",
  img: document.getElementById("ss").src,
  stats: "+20% Attack Speed \xa0 +20 Mana",
  desc: "Every 3rd attack deals 90 splash magical damage to 3 additional targets.",
  item1: rec.name,
  item1Img: rec.img,
  item2: tear.name,
  item2Img: tear.img
}

var sb = {
  elem: document.getElementById("sb"),
  name: "Sword Breaker",
  img: document.getElementById("sb").src,
  stats: "+20 Magic Resist \xa0 +20 Armor",
  desc: "Basic attacks have a 25% chance to disarm the target for 4 seconds.",
  item1: nc.name,
  item1Img: nc.img,
  item2: cv.name,
  item2Img: cv.img
}

var sotd = {
  elem: document.getElementById("sotd"),
  name: "Sword of the Divine",
  img: document.getElementById("sotd").src,
  stats: "+20 Attack Damage \xa0 +20% Attack Speed",
  desc: "Each second, the wearer has a 5% chance to gain 100% Critical Strike.",
  item1: bf.name,
  item1Img: bf.img,
  item2: rec.name,
  item2Img: rec.img
}

var t = {
  elem: document.getElementById("t"),
  name: "Thornmail",
  img: document.getElementById("t").src,
  stats: "+40 Armor",
  desc: "Reflect 100% of mitigated damage taken from attacks as true damage.",
  item1: cv.name,
  item1Img: cv.img,
  item2: cv.name,
  item2Img: cv.img
}

var th = {
  elem: document.getElementById("th"),
  name: "Titanic Hydra",
  img: document.getElementById("th").src,
  stats: "+200 Health \xa0 +20% Attack Speed",
  desc: "Attacks deal 10% of the wearer's max Health as splash damage.",
  item1: gb.name,
  item1Img: gb.img,
  item2: rec.name,
  item2Img: rec.img
}

var wa = {
  elem: document.getElementById("wa"),
  name: "Warmog's Armor",
  img: document.getElementById("wa").src,
  stats: "+400 Health",
  desc: "Wearer regenerates 6% of missing health per second.",
  item1: gb.name,
  item1Img: gb.img,
  item2: gb.name,
  item2Img: gb.img
}

var yg = {
  elem: document.getElementById("yg"),
  name: "Youmuu's Ghostblade",
  img: document.getElementById("yg").src,
  stats: "+40 Attack Damage",
  desc: "Wearer is also an Assassin.",
  item1: bf.name,
  item1Img: bf.img,
  item2: spat.name,
  item2Img: spat.img
}

var y = {
  elem: document.getElementById("y"),
  name: "Yuumi",
  img: document.getElementById("y").src,
  stats: "+40% Spell Damage",
  desc: "Wearer is also a Sorcerer.",
  item1: rod.name,
  item1Img: rod.img,
  item2: spat.name,
  item2Img: spat.img
}

var zh = {
  elem: document.getElementById("zh"),
  name: "Zeke's Herald",
  img: document.getElementById("zh").src,
  stats: "+20 Attack Damage \xa0 +200 Health",
  desc: "Allies two spaces to the left and right gain +15% Attack Speed.",
  item1: bf.name,
  item1Img: bf.img,
  item2: gb.name,
  item2Img: gb.img
}

var z = {
  elem: document.getElementById("z"),
  name: "Zephyr",
  img: document.getElementById("z").src,
  stats: "+20 Magic Resist \xa0 +200 Health",
  desc: "On start of combat, banish an enemy for 5 seconds.",
  item1: nc.name,
  item1Img: nc.img,
  item2: gb.name,
  item2Img: gb.img
}

var items = [botrk, bt, cb, d, dc, fon, fh, fm, ga, grb, hgb, h, ie, is, kv, lotis,
  le, m, pd, rd, rfc, red, r, rh, se, sos, ss, sb, sotd, t, th, wa, yg, y, zh, z];

// Function that creates the canvas for the item builder.  
function itemBuilder(item) {

  var canvas = document.getElementById("screen");

  var itemName = document.createElement("txt");
  itemName.appendChild(document.createTextNode(item.name));
  itemName.id = "itemName";
  canvas.appendChild(itemName);

  var itemImg = document.createElement("img");
  itemImg.src = item.img;
  itemImg.id = "itemImg";
  itemImg.className = "border";
  canvas.appendChild(itemImg);

  var itemInfo = document.createElement("txt");
  var hr = document.createElement("hr");
  itemInfo.appendChild(document.createTextNode(item.stats));
  itemInfo.appendChild(hr);
  itemInfo.appendChild(document.createTextNode(item.desc));
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
  recItem1.appendChild(document.createTextNode(item.item1));
  recItem1.id = "recItem1";
  canvas.appendChild(recItem1);

  var recItem1Img = document.createElement("img");
  recItem1Img.src = item.item1Img;
  recItem1Img.id = "recItem1Img";
  recItem1Img.className = "border";
  canvas.appendChild(recItem1Img);

  var plus = document.createElement("txt");
  plus.appendChild(document.createTextNode("+"));
  plus.id = "plus";
  canvas.appendChild(plus);

  var recItem2 = document.createElement("txt");
  recItem2.appendChild(document.createTextNode(item.item2));
  recItem2.id = "recItem2";
  canvas.appendChild(recItem2);

  var recItem2Img = document.createElement("img");
  recItem2Img.src = item.item2Img;
  recItem2Img.id = "recItem2Img";
  recItem2Img.className = "border";
  canvas.appendChild(recItem2Img);
}

var canvas = document.getElementById("screen");

/* Loop to draw the canvas for each item when they are clicked. */
for (let i = 0; i < items.length; i++) {
  items[i].elem.addEventListener("click", function () {
    canvas.innerHTML = ""; // resets canvas
    itemBuilder(items[i]);
  })
}