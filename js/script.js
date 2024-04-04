//? Elements

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

//? Variables

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

// characters' start positions and directions
const actorsStateSetup = {
  pac: {
    startTile: 657,
    startDir: 'w',
  },
  gh1: {
    startTile: 321,
    startDir: 'e',
  },
  gh2: {
    startTile: 403,
    startDir: 'n',
  },
  gh3: {
    startTile: 405,
    startDir: 's',
  },
  gh4: {
    startTile: 407,
    startDir: 'n',
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

//? On Page Load

// function drawMaze() {
// draw the game tiles in the game grid
for (let i = 0; i < (mazeSetup.mazeWidth * mazeSetup.mazeHeight); i++) {
  const mazeTile = document.createElement('div')
  mazeTile.innerText = i
  mazeTile.dataset.index = i
  mazeTile.classList.add('tile')
  mazeTile.style.width = mazeSetup.mazeTileWidthPx
  mazeTile.style.height = mazeSetup.mazeTileHeightPx
  // place characters at their start positions
  if (i === actorsStateSetup.pac.startTile) {
    mazeTile.classList.add('pac')
  }
  if (i === actorsStateSetup.gh1.startTile) {
    mazeTile.classList.add('gh1')
  }
  if (i === actorsStateSetup.gh2.startTile) {
    mazeTile.classList.add('gh2')
  }
  if (i === actorsStateSetup.gh3.startTile) {
    mazeTile.classList.add('gh3')
  }
  if (i === actorsStateSetup.gh4.startTile) {
    mazeTile.classList.add('gh4')
  }
  // show in the html
  gameMazeEl.append(mazeTile)
  // console.log(mazeTile)
}

// }



//? Execution

function startGame() {
  startBtnEl.setAttribute('disabled', true)
  startBtnEl.style.display = 'none'
  imgCoverHeadEl.style.display = 'none'
  gameCoverEl.style.display = 'none'
}

function pacMove(e) {
  //  console.log(e)
}


//? Events
startBtnEl.addEventListener('click', startGame)
document.addEventListener('keydown', pacMove)

// console.log()

//? keycode
// left arrow 	37
// up arrow 	38
// right arrow 	39
// down arrow 	40
// w = 87
// a = 65
// s = 83
// d = 68