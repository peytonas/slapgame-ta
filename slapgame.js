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
  attackMegaSeed: { name: "Attack Mega Seed", modifier: 15 },
  serum: { name: "Serum", modifier: 20 }
}
function zap(player) {
  if (player.health > 0) {
    player.health -= enemy.attacks.zap
    // @ts-ignore
    playerHealthBarElement.value -= enemy.attacks.zap;
  }
  player.hits++
  update();
}
function scream(enemy) {
  if (enemy.health > 0) {
    enemy.health -= player.attacks.scream
    // @ts-ignore
    enemyHealthBarElement.value -= player.attacks.scream;
  }
  enemy.hits++
  update();
}
function cry(enemy) {
  if (enemy.health > 0) {
    enemy.health -= player.attacks.cry
    // @ts-ignore
    enemyHealthBarElement.value -= player.attacks.cry;
  }
  enemy.hits++
  update();
}
function attackMegaSeed(player) {
  let btn = document.getElementById("ams")
  if (player.hits > 10) {
    btn.removeAttribute("disabled")
    player.attacks.scream += items.attackMegaSeed.modifier
    player.attacks.cry += items.attackMegaSeed.modifier
  } else {
    player.attacks.scream = 1
    player.attacks.cry = 5
  }
  update()
}
function serum(player) {
  let btn = document.getElementById("ser")
  if (player.health <= 35) {
    btn.removeAttribute("disabled")
    player.health += items.serum.modifier
    player.hits -= items.serum.modifier
    playerHealthBarElement.value += items.serum.modifier
  } else {
    player.health = player.health
  }
  update()
}
function lovePotion(enemy) {
  let btn = document.getElementById("lp")
  if (player.hits >= 15) {
    btn.removeAttribute("disabled")
    enemy.attacks.zap = 0;
    console.log("WEAKENED!");
  } else {
    enemy.attacks.zap = 5
  }
  update();
}
function butterRobot() {
  let btn = document.getElementById("pass-butter")
  // @ts-ignore
  btn.play()

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
function gameOver() {
  if (player.health <= 0) {
    alert("YOU LOSE")
    reset();
  }
}
