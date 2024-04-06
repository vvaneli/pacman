//? ELEMENTS

// Start Game
const startBtnEl = document.querySelector('#start')
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
    mazeTilesGhostHQ: [361, 362, 363, 389, 389, 390, 391, 392, 393, 418, 419, 420, 421, 422, 447, 448, 449, 450, 451],
    mazeJunctions: [30, 35, 41, 45, 51, 56, 146, 151, 154, 157, 161, 164, 167, 172, 233, 238, 241, 244, 248, 251, 254, 259, 328, 331, 335, 338, 412, 415, 425, 428, 502, 512, 581, 586, 589, 592, 596, 599, 602, 607, 668, 670, 673, 676, 679, 683, 686, 689, 692, 694, 755, 757, 760, 763, 766, 770, 773, 776, 779, 781, 842, 853, 857, 868],
    mazePortals: {
      portal1: [406, 434],
    },
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
      // tile: 602,  / /for testing only
      dir: 'w',
    },
    gh1: {
      // tile: 333,
      // tile: 586,  // for testing only
      // tile: 409,  // near left portal
      tile: 431,  // near right portal
      dir: 'e',
    },
    gh2: {
      tile: 420,
      dir: 'n',
    },
    gh3: {
      tile: (418 + 1),
      dir: 'e',
    },
    gh4: {
      tile: (422 - 1),
      dir: 'w',
    },
  },
}

const itemsSetup = {
  level1: {
    dots: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 59, 64, 70, 74, 80, 85, 93, 99, 103, 109, 117, 122, 128, 132, 138, 143, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 175, 180, 183, 193, 196, 201, 204, 209, 212, 222, 225, 230, 233, 234, 235, 236, 237, 238, 241, 242, 243, 244, 248, 249, 250, 251, 254, 255, 256, 257, 258, 259, 267, 283, 296, 312, 325, 341, 354, 370, 383, 399, 412, 428, 441, 457, 470, 486, 499, 515, 528, 544, 557, 573, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 610, 615, 621, 625, 631, 636, 639, 644, 650, 654, 660, 665, 669, 670, 673, 674, 675, 676, 677, 678, 679, 683, 684, 685, 686, 687, 688, 689, 692, 693, 699, 702, 705, 715, 718, 721, 728, 731, 734, 744, 747, 750, 755, 756, 757, 758, 759, 760, 763, 764, 765, 766, 770, 771, 772, 773, 776, 777, 778, 779, 780, 781, 784, 795, 799, 810, 813, 824, 828, 839, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868],
    pows: [88, 114, 668, 694],
  },
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
  pacMoveSpeed: 100,
  ghMoveSpeed: 100,
  ghFlee1Duration: 4000,
  ghFlee2Duration: 3000,
}

// 2 ––– PLAY

// at game start, copy from var playerStateSetup
let playerStateNow = {}
// at game start, copy from var actorsStateSetup
let actorsStateNow = {}

let gameInProgress = false
let levelNow

let ghStateNow = 'hunt'

const mazeTileIndex = []

let mazeTile = ''
let randomDir = ''

// set intervals for character movement across tiles
let pacMoveInterval
let gh1MoveInterval
let gh2MoveInterval
let gh3MoveInterval
let gh4MoveInterval

// count down the no. of items left in the game
let countDotRemain
let countPowRemain

//? ON PAGE LOAD

function onLoad() {
  resetGame()
  drawMaze()
}

//? EXECUTION

function startGame() {
  showMaze()
  showPlayerState()
  countDotRemain = itemsSetup[levelNow].dots.length
  countPowRemain = itemsSetup[levelNow].pows.length
  gameInProgress = true
  playerStateNow.playing = gameInProgress
  pacMoveNow()
  gh1Move()


}

// initialise variables for a new game
function resetGame() {
  // removeAllActors()
  actorsStateNow = {}
  playerStateNow = {}
  actorsStateNow = Object.assign({}, actorsStateSetup)
  playerStateNow = Object.assign({}, playerStateSetup)
  levelNow = 'level'.concat(playerStateNow.level)
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
  for (let i = 0; i < (mazeSetup[levelNow].mazeWidth * mazeSetup[levelNow].mazeHeight); i++) {
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
  addJunctions()
  addGhostHQ()
  addItems()
  startPositions()
}

// add dots and power pills to maze
function addItems() {
  itemsSetup[levelNow].pows.forEach(function (p) {
    mazeTileIndex[p].classList.add('pow')
  })
  itemsSetup[levelNow].dots.forEach(function (d) {
    mazeTileIndex[d].classList.add('dot')
  })
}

// define areas for paths
function addPaths() {
  mazeSetup[levelNow].mazeTilesPath.forEach(function (f) {
    mazeTileIndex[f].classList.add('path')
  })
}

// define junctions
function addJunctions() {
  mazeSetup[levelNow].mazeJunctions.forEach(function (j) {
    mazeTileIndex[j].classList.add('junction')
  })
}

// define area for ghost HQ
function addGhostHQ() {
  mazeSetup[levelNow].mazeTilesGhostHQ.forEach(function (hq) {
    mazeTileIndex[hq].classList.add('ghostHQ')
  })
}

// place characters at their start positions
function startPositions() {
  mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.add('gh1')
  mazeTileIndex[actorsStateNow[levelNow].gh2.tile].classList.add('gh2')
  mazeTileIndex[actorsStateNow[levelNow].gh3.tile].classList.add('gh3')
  mazeTileIndex[actorsStateNow[levelNow].gh4.tile].classList.add('gh4')
  mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac')
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
  clearInterval(pacMoveInterval)
  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === '8') {
    // clearInterval(pacMoveInterval)
    pacMoveN()
  } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === '2') {
    // clearInterval(pacMoveInterval)
    pacMoveS()
  } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === '6') {
    // clearInterval(pacMoveInterval)
    pacMoveE()
  } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === '4') {
    // clearInterval(pacMoveInterval)
    pacMoveW()
  } else {
    // put pacman back in same position if an unassigned key was pressed
    mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac')
  }
}

// check if pacman is at portal tile (406, 434)
// mazeSetup[levelNow].mazePortals.portal1[0]
// mazeSetup[levelNow].mazePortals.portal1[1]
// if (mazeTileIndex[mazeSetup[levelNow].mazePortals.portal1[1]].classList.contains('pac')) {
//   mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pac');
//   (actorsStateNow[levelNow].pac.tile) = (mazeSetup[levelNow].mazePortals.portal1[0]);
//   mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac');
// } else {

// if (actorsStateNow[levelNow].pac.tile === 406) {
// actorsStateNow[levelNow].pac.tile = 434
// } else

// if (mazeTileIndex[406].classList.contains('pac')) {
//   mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pac');
//   (actorsStateNow[levelNow].pac.tile) = (mazeSetup[levelNow].mazePortals.portal1[0]);
//   mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac');
// } else {


// pac move directions
function pacMoveN() {
  pacMoveInterval = setInterval(function () {
    // console.log('pac up 1: ' + pacMoveInterval)
    if (mazeTileIndex[(actorsStateNow[levelNow].pac.tile) - (mazeSetup[levelNow].mazeWidth)].classList.contains('path')) {
      eatItems(
        endGame()
      )
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pac')
      actorsStateNow[levelNow].pac.tile -= mazeSetup[levelNow].mazeWidth
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac')
    } else {
      clearInterval(pacMoveInterval)   // clears time interval when pacman hits a wall
    }
    // console.log('up: ' + actorsStateNow[levelNow].pac.tile)
  }, timers.pacMoveSpeed)
  // console.log('pac up 2: ' + pacMoveInterval)
}
function pacMoveS() {
  pacMoveInterval = setInterval(function () {
    if (mazeTileIndex[(actorsStateNow[levelNow].pac.tile) + (mazeSetup[levelNow].mazeWidth)].classList.contains('path')) {
      eatItems()
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pac')
      actorsStateNow[levelNow].pac.tile += mazeSetup[levelNow].mazeWidth
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac')
    } else {
      clearInterval(pacMoveInterval)
    }
    // console.log('down: ' + actorsStateNow[levelNow].pac.tile)
  }, timers.pacMoveSpeed)
}
function pacMoveE() {
  pacMoveInterval = setInterval(function () {
    if (actorsStateNow[levelNow].pac.tile === mazeSetup[levelNow].mazePortals.portal1[1]) {
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pac');
      actorsStateNow[levelNow].pac.tile = mazeSetup[levelNow].mazePortals.portal1[0]
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac');
    } else if (mazeTileIndex[(actorsStateNow[levelNow].pac.tile) + 1].classList.contains('path')) {
      eatItems()
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pac');
      (actorsStateNow[levelNow].pac.tile)++;
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac');
    } else {
      clearInterval(pacMoveInterval)
    }
    // console.log('left: ' + actorsStateNow[levelNow].pac.tile)
  }, timers.pacMoveSpeed)
}
function pacMoveW() {
  pacMoveInterval = setInterval(function () {
    if (actorsStateNow[levelNow].pac.tile === mazeSetup[levelNow].mazePortals.portal1[0]) {
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pac');
      actorsStateNow[levelNow].pac.tile = mazeSetup[levelNow].mazePortals.portal1[1]
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac');
    } else if (mazeTileIndex[(actorsStateNow[levelNow].pac.tile) - 1].classList.contains('path')) {
      eatItems()
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pac');
      (actorsStateNow[levelNow].pac.tile)--;
      mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.add('pac');
    } else {
      clearInterval(pacMoveInterval)
    }
    // console.log('right: ' + actorsStateNow[levelNow].pac.tile)
  }, timers.pacMoveSpeed)
}

// mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.contains('pac')

// get a random direction of travel
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomDir() {
  const minCeiled = Math.ceil(1)
  const maxFloored = Math.floor(4)
  switch (Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)) {
    case 1: return randomDir = 'n'
    case 2: return randomDir = 's'
    case 3: return randomDir = 'e'
    case 4: return randomDir = 'w'
    default: return randomDir = 'w'
  }
}
// move ghost1 randomly
function gh1Move() {
  switch (actorsStateNow[levelNow].gh1.dir = getRandomDir()) {
    case 'n': gh1MoveN()
      break
    case 's': gh1MoveS()
      break
    case 'e': gh1MoveE()
      break
    case 'w': gh1MoveW()
      break
  }
}
function gh1MoveN() {
  gh1MoveInterval = setInterval(function () {
    // console.log('gh1 N1: ' + gh1MoveInterval)
    // if the next tile has certain css class(es), remove ghost img in this tile, update index to that next tile, add ghost image in new tile
    if ((mazeTileIndex[(actorsStateNow[levelNow].gh1.tile) - (mazeSetup[levelNow].mazeWidth)].classList.contains('path')) || (mazeTileIndex[(actorsStateNow[levelNow].gh1.tile) - (mazeSetup[levelNow].mazeWidth)].classList.contains('ghostHQ'))) {
      mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.remove('gh1')
      actorsStateNow[levelNow].gh1.tile -= mazeSetup[levelNow].mazeWidth
      mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.add('gh1')
      // if (mazeTileIndex[(actorsStateNow[levelNow].gh1.tile)].classList.contains('juntion')) { // at a junction, choose a new direction at random
      //   clearInterval(gh1MoveInterval)
      //   gh1Move()
      // }
    } else {
      clearInterval(gh1MoveInterval)
      gh1Move() // choose a new direction
    }
  }, timers.ghMoveSpeed)
  // console.log('gh1 N2: ' + gh1MoveInterval)
}
function gh1MoveS() {
  gh1MoveInterval = setInterval(function () {
    // console.log('gh1 S1: ' + gh1MoveInterval)
    if ((mazeTileIndex[(actorsStateNow[levelNow].gh1.tile) + (mazeSetup[levelNow].mazeWidth)].classList.contains('path')) || (mazeTileIndex[(actorsStateNow[levelNow].gh1.tile) + (mazeSetup[levelNow].mazeWidth)].classList.contains('ghostHQ'))) {
      mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.remove('gh1')
      actorsStateNow[levelNow].gh1.tile += mazeSetup[levelNow].mazeWidth
      mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.add('gh1')
    } else {
      clearInterval(gh1MoveInterval)
      gh1Move() // choose a new direction
    }
  }, timers.ghMoveSpeed)
  // console.log('gh1 S2: ' + gh1MoveInterval)
}
function gh1MoveE() {
  gh1MoveInterval = setInterval(function () {
    // console.log('gh1 E1: ' + gh1MoveInterval)
    // first check if ghost is at the right portal tile
    if (actorsStateNow[levelNow].gh1.tile === mazeSetup[levelNow].mazePortals.portal1[1]) {
      mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.remove('gh1');
      actorsStateNow[levelNow].gh1.tile = mazeSetup[levelNow].mazePortals.portal1[0]
      mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.add('gh1');
    } else
      if ((mazeTileIndex[(actorsStateNow[levelNow].gh1.tile) - 1].classList.contains('path')) || (mazeTileIndex[(actorsStateNow[levelNow].gh1.tile) - 1].classList.contains('ghotHQ'))) {
        mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.remove('gh1');
        (actorsStateNow[levelNow].gh1.tile)--;
        mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.add('gh1');
      } else {
        clearInterval(gh1MoveInterval)
        gh1Move() // choose a new direction
      }
  }, timers.ghMoveSpeed)
  // console.log('gh1 E2: ' + gh1MoveInterval)
}
function gh1MoveW() {
  gh1MoveInterval = setInterval(function () {
    // console.log('gh1 W1: ' + gh1MoveInterval)
    // first check if ghost is at the left portal tile
    // if (actorsStateNow[levelNow].gh1.tile === mazeSetup[levelNow].mazePortals.portal1[0]) {
    //   mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.remove('gh1');
    //   actorsStateNow[levelNow].gh1.tile = mazeSetup[levelNow].mazePortals.portal1[1]
    //   mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.add('gh1');
    // } else
    if ((mazeTileIndex[(actorsStateNow[levelNow].gh1.tile) + 1].classList.contains('path')) || (mazeTileIndex[(actorsStateNow[levelNow].gh1.tile) + 1].classList.contains('ghotHQ'))) {
      mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.remove('gh1');
      (actorsStateNow[levelNow].gh1.tile)++;
      mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.add('gh1');
    } else {
      clearInterval(gh1MoveInterval)
      gh1Move() // choose a new direction
    }
  }, timers.ghMoveSpeed)
  // console.log('gh1 W2: ' + gh1MoveInterval)
}
function gh1MoveWPortal() {
  if (actorsStateNow[levelNow].gh1.tile === mazeSetup[levelNow].mazePortals.portal1[0]) {
    mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.remove('gh1');
    actorsStateNow[levelNow].gh1.tile = mazeSetup[levelNow].mazePortals.portal1[1]
    mazeTileIndex[actorsStateNow[levelNow].gh1.tile].classList.add('gh1');
    gh1MoveW()
  } else {
    gh1MoveW()
  }
}

// pac eats dots

function eatItems() {
  console.log('1 score: ' + playerStateNow.score + ' / dots: ' + countDotRemain + ' / pows: ' + countPowRemain)
  if (mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.contains('dot')) {
    mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('dot')
    playerStateNow.score += scoreSetup.dot
    scoreTextEl.innerText = playerStateNow.score
    countDotRemain -= 1
  } else if (mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.contains('pow')) {
    mazeTileIndex[actorsStateNow[levelNow].pac.tile].classList.remove('pow')
    playerStateNow.score += scoreSetup.pow
    scoreTextEl.innerText = playerStateNow.score
    countPowRemain -= 1
  }
  console.log('2 score: ' + playerStateNow.score + ' / dots: ' + countDotRemain + ' / pows: ' + countPowRemain)
}

function endGame() {
  // if ((countDotRemain && countPowRemain) === 0) {
  //   console.log('pac win at ' + levelNow)
  //   playerStateNow.level += 1
  //   levelTextEl.innerText = playerStateNow.level
  //   // levelNow = 'level'.concat(playerStateNow.level)
  //   console.log('playerStateNow is ' + playerStateNow.level)
  //   return
  // }
}


//? EVENTS

startBtnEl.addEventListener('click', startGame)
function pacMoveNow() {
  document.addEventListener('keydown', pacMoveCtrl)
}
window.addEventListener('load', onLoad)