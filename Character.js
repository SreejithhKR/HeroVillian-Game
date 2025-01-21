import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

function Character(data){
    Object.assign(this ,data)
    this.diceArray = getDicePlaceholderHtml(this.diceCount)


    this.getDiceHtml = function(){
      this.currentDiceScore = getDiceRollArray(this.diceCount)
      this.diceArray = this.currentDiceScore.map((num)=> `<div class = "dice">${num}</div>`).join('')
    }

    this.takeDamege = function(attackScoreArray){
      const attackScore = attackScoreArray.reduce((first, total) =>first + total)
      this.score -= attackScore
      if(this.score <= 0){
        this.score  = 0

        this.defeated = true
      }

    }

    this.getCharacterHtml = function(){
    const {elementId, name, avatar, score, diceCount} = this
    return `<div class="character-card">
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}"/>
    <p class="score">Score: <b> ${score} </b></p>
    <div class="dice-container">
    ${this.diceArray}
    </div>
    
    </div>`
 
    }
 }

 export {Character}