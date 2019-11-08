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
    punch: 5,
    kick: 10,
    scream: 1
  },
  items: []
}
let items = {

}
function scream(enemy) {
  if (enemy.health > 0) {
    enemy.health -= 1
    enemy.hits++
    console.log("weaker!")
  }
  update();
}
function cry(enemy) {
  if (enemy.health > 0) {
    enemy.health -= 5
    enemy.hits++
    console.log("weaker!")
  }
  update();
}
function update() {
  let playerHealthElement = document.getElementById("playerHealth")
  let playerHitElement = document.getElementById("playerHits")
  let enemyHealthElement = document.getElementById("enemyHealth")
  let enemyHitElement = document.getElementById("enemyHits")


  playerHealthElement.textContent = "Health: " + player.health.toString()
  playerHitElement.textContent = "Hits: " + player.hits.toString()
  enemyHealthElement.textContent = "Health: " + enemy.health.toString()
  enemyHitElement.textContent = "Hit: " + enemy.hits.toString()
}
function reset() {
  player.health = 100;
  player.hits = 0;
  enemy.health = 100;
  enemy.hits = 0;
  update();
}
