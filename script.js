const result = document.querySelector('.result')
const scoreOne = document.querySelector('#score-one')
const scoreTwo = document.querySelector('#score-two')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Resultado = Deu empate!'
    } else if (
        (human === 'paper' && machine === 'stone') ||
        (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        scoreOne.innerHTML = humanScoreNumber 

        result.innerHTML = 'Resultado = Você ganhou!'
    } else {

        machineScoreNumber++
        scoreTwo.innerHTML = machineScoreNumber

        result.innerHTML = 'Resultado = Você perdeu!'
    }

}

