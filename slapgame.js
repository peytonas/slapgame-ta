let player = {
  name: "morty",
  health: 100,
  hits: 0,
  attacks: {
    cry: 5,
    kick: 10,
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
    kick: 10,
    scream: 1
  },
  items: []
}
let items = {

}
function zap(player) {
  if (player.health > 0) {
    player.health -= 5
    // @ts-ignore
    playerHealthBarElement.value -= 5;
  }
  player.hits++
  console.log("ouch!")
  update();
}
function scream(enemy) {
  if (enemy.health > 0) {
    enemy.health -= 1
    // @ts-ignore
    enemyHealthBarElement.value -= 1;
  }
  enemy.hits++
  console.log("weaker!")
  update();
}
function cry(enemy) {
  if (enemy.health > 0) {
    enemy.health -= 5
    // @ts-ignore
    enemyHealthBarElement.value -= 5;
  }
  enemy.hits++
  console.log("weaker!")
  update();
}

let playerHealthElement = document.getElementById("playerHealth")
let playerHealthBarElement = document.getElementById("playerHealthBar")
let playerHitElement = document.getElementById("playerHits")
let enemyHealthElement = document.getElementById("enemyHealth")
let enemyHealthBarElement = document.getElementById("enemyHealthBar")
let enemyHitElement = document.getElementById("enemyHits")

function update() {
  playerHealthElement.textContent = "Health: " + player.health.toString()
  playerHitElement.textContent = "Hits: " + player.hits.toString()
  enemyHealthElement.textContent = "Health: " + enemy.health.toString()
  enemyHitElement.textContent = "Hit: " + enemy.hits.toString()
}
function reset() {
  player.health = 100;
  // @ts-ignore
  playerHealthBarElement.value = 100;
  player.hits = 0;
  enemy.health = 100;
  // @ts-ignore
  enemyHealthBarElement.value = 100;
  enemy.hits = 0;
  update();
}
