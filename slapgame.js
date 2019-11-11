let player = {
  name: "morty",
  health: 100,
  hits: 0,
  attacks: {
    cry: 5,
    scream: 1
  },
  items: []
}
let enemy =
{
  name: "voltamatronMorty",
  health: 100,
  hits: 0,
  attacks: {
    zap: 5,
  },
  items: []
}
let items = {
  attackSeed: { name: "Attack Seed", modifier: 15 },
  serum: { name: "Serum", modifier: 25 }
}
function zap(player) {
  if (player.health > 0) {
    player.health -= enemy.attacks.zap
    // @ts-ignore
    playerHealthBarElement.value -= 5;
  }
  player.hits++
  console.log("ouch!")
  update();
}
function scream(enemy) {
  if (enemy.health > 0) {
    enemy.health -= player.attacks.scream
    // @ts-ignore
    enemyHealthBarElement.value -= 1;
  }
  enemy.hits++
  console.log("weaker!")
  update();
}
function cry(enemy) {
  if (enemy.health > 0) {
    enemy.health -= player.attacks.cry
    // @ts-ignore
    enemyHealthBarElement.value -= 5;
  }
  enemy.hits++
  console.log("weaker!")
  update();
}
function attackSeed(player) {
  player.attacks.scream += items.attackSeed.modifier
  player.attacks.cry += items.attackSeed.modifier
  console.log("Attack up!");
  update()
}
function serum(player) {
  if (player.health <= 50) {
    player.health += 20
    playerHealthBarElement.value += 20
    console.log("Health up!");
    update()
  }
}

let playerHealthElement = document.getElementById("playerHealth")
let playerHealthBarElement = document.getElementById("playerHealthBar")
let playerHitElement = document.getElementById("playerHits")
let enemyHealthElement = document.getElementById("enemyHealth")
let enemyHealthBarElement = document.getElementById("enemyHealthBar")
let enemyHitElement = document.getElementById("enemyHits")

function update() {
  playerHealthElement.textContent = "HEALTH: " + player.health.toString()
  playerHitElement.textContent = "HITS: " + player.hits.toString()
  enemyHealthElement.textContent = "HEALTH: " + enemy.health.toString()
  enemyHitElement.textContent = "HITS: " + enemy.hits.toString()
}
function reset() {
  player.health = 100;
  // @ts-ignore
  playerHealthBarElement.value = 100;
  player.attacks.cry = 5
  player.attacks.scream = 1
  enemy.attacks.zap = 5
  player.hits = 0;
  enemy.health = 100;
  // @ts-ignore
  enemyHealthBarElement.value = 100;
  enemy.hits = 0;
  update();
}
