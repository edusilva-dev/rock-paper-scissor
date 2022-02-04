const options = ["Pedra", "Papel", "Tesoura"]
let countWins = 0
let countLoses = 0

const onClickButton = () => {
  const countWinsElement = document.getElementById("win__count")
  const countLosesElement = document.getElementById("loss__count")
  const player = document.getElementById('player')
  const bot = document.getElementById('bot')
  
  const buttons = document.querySelectorAll('#buttons button')
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const optionSelected = button.value
      const playerLabel = options[optionSelected-1]
      player.innerText = playerLabel

      const randomOption = Math.floor(Math.random() * 3)
      const botLabel = options[randomOption]
      bot.innerText = botLabel

      const isPlayerWin = pickWinner(playerLabel, botLabel)

      isPlayerWin ? countWins++ : countLoses++
      countWinsElement.innerText = countWins
      countLosesElement.innerText = countLoses
    })
  })
}

onClickButton()

const pickWinner = (playerOption, botOption) => {
  if (playerOption === "Pedra" && botOption === "Tesoura") return true
  if (playerOption === "Papel" && botOption === "Pedora") return true
  if (playerOption === "Tesoura" && botOption === "Papel") return true

  return false
}