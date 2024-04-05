//? ELEMENTS

// Start Game
const startBtnEl = document.querySelector('#start')
const startBtnEl2 = document.getElementsByName('button')
const imgCoverHeadEl = document.querySelector('#imgCoverHeadline')
const gameCoverEl = document.querySelector('#gameCover')

// Game board
const scoreTextEl = document.querySelector('#score')
const gameSectEl = document.querySelector('#game')
const gameMazeEl = document.querySelector('#gameMaze')
const lifeTextEl = document.querySelector('#life')
const levelTextEl = document.querySelector('#level')
const levelIconsEl = document.querySelector('#levelIcons')

//? VARIABLES

// 1 ––– SETUP

const mazeSetup = {
  mazeTileWidthPx: '16px',
  mazeTileHeightPx: '16px',
  level1: {
    mazeWidth: 29,
    mazeHeight: 31,
    mazeTilesPath: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 59, 64, 70, 74, 80, 85, 88, 93, 99, 103, 109, 114, 117, 122, 128, 132, 138, 143, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 175, 180, 183, 193, 196, 201, 204, 209, 212, 222, 225, 230, 233, 234, 235, 236, 237, 238, 241, 242, 243, 244, 248, 249, 250, 251, 254, 255, 256, 257, 258, 259, 267, 273, 277, 283, 296, 302, 306, 312, 325, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 341, 354, 357, 367, 370, 383, 386, 396, 399, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 441, 444, 454, 457, 470, 473, 483, 486, 499, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 515, 528, 531, 541, 544, 557, 560, 570, 573, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 610, 615, 621, 625, 631, 636, 639, 644, 650, 654, 660, 665, 668, 669, 670, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 692, 693, 694, 699, 702, 705, 715, 718, 721, 728, 731, 734, 744, 747, 750, 755, 756, 757, 758, 759, 760, 763, 764, 765, 766, 770, 771, 772, 773, 776, 777, 778, 779, 780, 781, 784, 795, 799, 810, 813, 824, 828, 839, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868],
    mazeTilesGhostHQ: [361,362,363,389,389,390,391,392,393,418,419,420,421,422,447,448,449,450,451],
    mazeTilesWall: [],
  },
}

const mazeAlertText = {
  start: 'Ready!',
  end: 'Game Over',
}

// characters' start tiles and directions
const actorsStateSetup = {
  level1: {
    pac: {
      tile: 681,
      dir: 'w',
    },
    gh1: {
      tile: 333,
      dir: 'e',
    },
    gh2: {
      tile: 418,
      dir: 'n',
    },
    gh3: {
      tile: 420,
      dir: 's',
    },
    gh4: {
      tile: 422,
      dir: 'n',
    },
  },
}

const itemsSetup = {
  dots: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 59, 64, 70, 74, 80, 85, 93, 99, 103, 109, 117, 122, 128, 132, 138, 143, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 175, 180, 183, 193, 196, 201, 204, 209, 212, 222, 225, 230, 233, 234, 235, 236, 237, 238, 241, 242, 243, 244, 248, 249, 250, 251, 254, 255, 256, 257, 258, 259, 267, 283, 296, 312, 325, 341, 354, 370, 383, 399, 412, 428, 441, 457, 470, 486, 499, 515, 528, 544, 557, 573, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 610, 615, 621, 625, 631, 636, 639, 644, 650, 654, 660, 665, 669, 670, 673, 674, 675, 676, 677, 678, 679, 683, 684, 685, 686, 687, 688, 689, 692, 693, 699, 702, 705, 715, 718, 721, 728, 731, 734, 744, 747, 750, 755, 756, 757, 758, 759, 760, 763, 764, 765, 766, 770, 771, 772, 773, 776, 777, 778, 779, 780, 781, 784, 795, 799, 810, 813, 824, 828, 839, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868],
  pows: [88, 114, 668, 694],
}

// ghost status options
const ghStates = ['hunt', 'flee1', 'flee2', 'return']

// score allocation
const scoreSetup = {
  dot: 10,
  pow: 50,
  ghosts: [200, 4000, 800, 1600],
}

// player start status
const playerStateSetup = {
  playing: false,
  score: 0,
  life: 3,
  level: 1,
  levelIcons: '',
}

// timer setups in milliseconds
const timers = {
  startGamePause: 3000,
  endGamePause: 3000,
  pacMoveSpeed: 500,
  ghMoveSpeed: 500,
  ghFlee1Duration: 4000,
  ghFlee2Duration: 3000,
}

// 2 ––– PLAY

// at game start, copy from var playerStateSetup
let playerStateNow = {}
// at game start, copy from var actorsStateSetup
let actorsStateNow = {}

let gameInProgress = false
let progressCounter = 0
let gameLevelNow = 'level1'
let ghStateNow = 'hunt'

let mazeTileIndex = []

let mazeTile = ''
let randomDir = ''

//? ON PAGE LOAD

function onLoad() {
  resetGame()
  drawMaze()
}

//? EXECUTION

function startGame() {
  // resetGame()
  // drawMaze()
  showMaze()
  showPlayerState()
  gameInProgress = true
  playerStateNow.playing = gameInProgress
  pacMoveNow()
  // gh1Move()
}

// initialise variables for a new game
function resetGame() {
  // removeAllActors()
  actorsStateNow = {}
  playerStateNow = {}
  actorsStateNow = Object.assign({}, actorsStateSetup)
  playerStateNow = Object.assign({}, playerStateSetup)
}

// show current score and game level
function showPlayerState() {
  scoreTextEl.innerText = playerStateNow.score
  lifeTextEl.innerText = playerStateNow.life
  levelTextEl.classList.add('levelNow')
  levelTextEl.innerText = playerStateNow.level
  levelIconsEl.innerText = playerStateNow.levelIcons
}

// draw the game tiles in the game grid, add actors at start positions
function drawMaze() {
  for (let i = 0; i < (mazeSetup[gameLevelNow].mazeWidth * mazeSetup[gameLevelNow].mazeHeight); i++) {
    mazeTile = document.createElement('div')
    mazeTile.innerText = i
    mazeTile.dataset.index = i
    mazeTile.classList.add('tile')
    mazeTile.style.width = mazeSetup.mazeTileWidthPx
    mazeTile.style.height = mazeSetup.mazeTileHeightPx
    mazeTileIndex.push(mazeTile) // add current index to the mazeTileIndex array
    gameMazeEl.append(mazeTile) // show game setup on screen
  }
  addPaths()
  addGhostHQ()
  addItems()
  startPositions()
}

// add dots and power pills to maze
function addItems() {
  itemsSetup.pows.forEach(function(p) {
    mazeTileIndex[p].classList.add('pow')
  })
  itemsSetup.dots.forEach(function(d) {
    mazeTileIndex[d].classList.add('dot')
  })
}

// define areas for paths
function addPaths() {
  mazeSetup[gameLevelNow].mazeTilesPath.forEach(function(f) {
    mazeTileIndex[f].classList.add('path')
  })
}

// define area for ghost HQ
function addGhostHQ() {
  mazeSetup[gameLevelNow].mazeTilesGhostHQ.forEach(function(hq) {
    mazeTileIndex[hq].classList.add('ghostHQ')
  })
}

// place characters at their start positions
function startPositions() {
  mazeTileIndex[actorsStateNow[gameLevelNow].gh1.tile].classList.add('gh1')
  mazeTileIndex[actorsStateNow[gameLevelNow].gh2.tile].classList.add('gh2')
  mazeTileIndex[actorsStateNow[gameLevelNow].gh3.tile].classList.add('gh3')
  mazeTileIndex[actorsStateNow[gameLevelNow].gh4.tile].classList.add('gh4')
  mazeTileIndex[actorsStateNow[gameLevelNow].pac.tile].classList.add('pac')
}

// hide start button and cover panel
function showMaze() {
  startBtnEl.setAttribute('disabled', true)
  startBtnEl.style.display = 'none'
  imgCoverHeadEl.style.display = 'none'
  gameCoverEl.style.display = 'none'
}

// clear tiles of all characters
// function removeAllActors() {
//   forEach
//   mazeTile.classList.remove('pac')
// }

// move pacman
function pacMoveCtrl(e) {
  // console.log(e)
  mazeTileIndex[actorsStateNow[gameLevelNow].pac.tile].classList.remove('pac')
  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === '8') {
    pacMoveN()
  } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === '2') {
    pacMoveS()
  } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === '4') {
    pacMoveE()
  } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === '6') {
    pacMoveW()
  } else {
    // put pacman back in same position if an unassigned key was pressed
    mazeTileIndex[actorsStateNow[gameLevelNow].pac.tile].classList.add('pac')
  }
}

// pac move directions
function pacMoveN() {
  actorsStateNow[gameLevelNow].pac.tile -= mazeSetup[gameLevelNow].mazeWidth
  mazeTileIndex[actorsStateNow[gameLevelNow].pac.tile].classList.add('pac')
  // console.log('up: ' + actorsStateNow[gameLevelNow].pac.tile)
}
function pacMoveS() {
  actorsStateNow[gameLevelNow].pac.tile += mazeSetup[gameLevelNow].mazeWidth
  mazeTileIndex[actorsStateNow[gameLevelNow].pac.tile].classList.add('pac')
  // console.log('down: ' + actorsStateNow[gameLevelNow].pac.tile)
}
function pacMoveE() {
  (actorsStateNow[gameLevelNow].pac.tile)--
  mazeTileIndex[actorsStateNow[gameLevelNow].pac.tile].classList.add('pac')
  // console.log('left: ' + actorsStateNow[gameLevelNow].pac.tile)
}
function pacMoveW() {
  (actorsStateNow[gameLevelNow].pac.tile)++
  mazeTileIndex[actorsStateNow[gameLevelNow].pac.tile].classList.add('pac')
  // console.log('right: ' + actorsStateNow[gameLevelNow].pac.tile)
}

// mazeTileIndex[actorsStateNow[gameLevelNow].gh1.tile].classList.contains('pac')

// move ghosts randomly
function gh1Move() {
  mazeTileIndex[actorsStateNow[gameLevelNow].gh1.tile].classList.remove('gh1')
  getRandomDir()

}

function gh1MoveN() {
  actorsStateNow[gameLevelNow].gh1.tile -= mazeSetup[gameLevelNow].mazeWidth
  mazeTileIndex[actorsStateNow[gameLevelNow].gh1.tile].classList.add('gh1')
}
function gh1MoveS() {
  actorsStateNow[gameLevelNow].gh1.tile += mazeSetup[gameLevelNow].mazeWidth
  mazeTileIndex[actorsStateNow[gameLevelNow].gh1.tile].classList.add('gh1')
}
function gh1MoveE() {
  (actorsStateNow[gameLevelNow].gh1.tile)--
  mazeTileIndex[actorsStateNow[gameLevelNow].gh1.tile].classList.add('gh1')
}
function gh1MoveW() {
  (actorsStateNow[gameLevelNow].gh1.tile)++
  mazeTileIndex[actorsStateNow[gameLevelNow].gh1.tile].classList.add('gh1')
}

// get a random direction of travel
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomDir() {
  const minCeiled = Math.ceil(1)
  const maxFloored = Math.floor(4)
  switch (Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)) {
    case 1: randomDir = 'n'
      break
    case 2: randomDir = 'e'
      break
    case 3: randomDir = 's'
      break
    case 4: randomDir = 'w'
      break
    default: randomDir = 'w'
  }
}

//? EVENTS

startBtnEl.addEventListener('click', startGame)
function pacMoveNow() {
  document.addEventListener('keydown', pacMoveCtrl)
}
window.addEventListener('load', onLoad)