import characterData from "./data.js"
import { Character } from "./Character.js"


const hero1 = new Character(characterData.hero)

const villian1 = new Character(characterData.villian)


function Render(){
   document.getElementById(hero1.elementId).innerHTML = hero1.getCharacterHtml()
   document.getElementById(villian1.elementId).innerHTML = villian1.getCharacterHtml()
}
Render()

function attkBtn(){
   hero1.getDiceHtml()
   villian1.getDiceHtml()

   hero1.takeDamege(villian1.currentDiceScore)
   villian1.takeDamege(hero1.currentDiceScore)

   Render()

   if(hero1.defeated ===true || villian1.defeated ===true){
      endGame()
   }
}

function endGame(){
   const endMessage = hero1.score === 0 && villian1.score === 0 ? 'No Winners' : hero1.score > 0 ? 'Hero Wins' : 'Villian Wins'
   const endEmoji = hero1.score === 0 && villian1.score === 0 ? '🏳️' : hero1.score > 0 ? '🦸‍♀️' : '🦹‍♀️'
   document.body.innerHTML = 
   `<div class = "end-game">
   <h2>Game Over</h2>
   <h3>${endMessage}</h3>
   <p class = "end-emoji">${endEmoji}</p>
   </div>`
}


document.getElementById('attack-button').addEventListener('click' ,attkBtn)
