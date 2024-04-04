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
  level: 1,
  mazeWidth: 28,
  mazeHeight: 31,
  mazeTileWidthPx: '16px',
  mazeTileHeightPx: '16px',
  mazeTilesPath: [],
  mazeTilesGhostHQ: [],
  mazeTilesWall: [],
}

const mazeAlertText = {
  start: 'Ready!',
  end: 'Game Over',
}

// characters' start tile and directions
const actorsStateSetup = {
  pac: {
    tile: 657,
    dir: 'w',
  },
  gh1: {
    tile: 321,
    dir: 'e',
  },
  gh2: {
    tile: 403,
    dir: 'n',
  },
  gh3: {
    tile: 405,
    dir: 's',
  },
  gh4: {
    tile: 407,
    dir: 'n',
  },
}

const itemsSetup = {
  dots: [],
  pow: [],
}

// ghost status options
const ghStates = ['hunt', 'flee1', 'flee2', 'return']

// score allocation
const scoreSetup = {
  dot: 10,
  pow: 50,
  ghosts: [200, 4000, 800, 1600],
}

const playerStateSetup = {
  playing: false,
  score: 0,
  life: 3,
  level: 1,
}

// timer setups in milliseconds
const timers = {
  startGamePause: 3000,
  endGamePause: 3000,
  ghFlee1Duration: 4000,
  ghFlee2Duration: 3000,
}

// 2 ––– PLAY

let gameInProgress = false

// At start, copy from var playerStateSetup
let playerStateNow = {}

// At start, copy from var actorsStateSetup
let actorsStateNow = {}

let ghStateNow = 'hunt'

let progressCounter = 0

const mazeTileIndex = []

let mazeTile = ''

//? ON PAGE LOAD

function onLoad() {
  resetGame()
  drawMaze()
}

//? EXECUTION

// initialise variables for a new game
function resetGame() {
  actorsStateNow = {}
  playerStateNow = {}
  actorsStateNow = Object.assign({}, actorsStateSetup)
  playerStateNow = Object.assign({}, playerStateSetup)
}

// draw the game tiles in the game grid
function drawMaze() {
  for (let i = 0; i < (mazeSetup.mazeWidth * mazeSetup.mazeHeight); i++) {
    mazeTile = document.createElement('div')
    mazeTile.innerText = i
    mazeTile.dataset.index = i
    mazeTile.classList.add('tile')
    mazeTile.style.width = mazeSetup.mazeTileWidthPx
    mazeTile.style.height = mazeSetup.mazeTileHeightPx
    mazeTileIndex.push(i) // add current index to the mazeTileIndex array
    startPositions(i)
    gameMazeEl.append(mazeTile) // show game setup on screen
  }
}

function startGame() {
  // resetGame()
  // drawMaze()
  showMaze()
  // pacMoveCtrl()
}

// hide start button and cover panel
function showMaze() {
  startBtnEl.setAttribute('disabled', true)
  startBtnEl.style.display = 'none'
  imgCoverHeadEl.style.display = 'none'
  gameCoverEl.style.display = 'none'
}

// place characters at their start positions
function startPositions(i) {
  if (i === actorsStateSetup.pac.tile) {
    mazeTile.classList.add('pac')
  } else if (i === actorsStateSetup.gh1.tile) {
    mazeTile.classList.add('gh1')
  } else if (i === actorsStateSetup.gh2.tile) {
    mazeTile.classList.add('gh2')
  } else if (i === actorsStateSetup.gh3.tile) {
    mazeTile.classList.add('gh3')
  } else if (i === actorsStateSetup.gh4.tile) {
    mazeTile.classList.add('gh4')
  }
}

// move pacman
function pacMoveCtrl(e) {
  // console.log(e)

  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === '8') {
    // console.log('up')
  } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === '6') {
    (actorsStateNow.pac.tile)++
    console.log(actorsStateNow.pac.tile)
    // console.log(mazeTileIndex)
  } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === '2') {
    // console.log('down')
  } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === '4') {
    (actorsStateNow.pac.tile)--
    console.log(actorsStateNow.pac.tile)
  } else {
    // console.log('key not assigned')
  }

}

function pacMove(i) {
  if (i === actorsStateNow.pac.tile) {
    mazeTile.classList.add('pac')
  }
}


//? EVENTS

startBtnEl.addEventListener('click', startGame)
document.addEventListener('keydown', pacMoveCtrl)
window.addEventListener('load', onLoad)

// console.log()
