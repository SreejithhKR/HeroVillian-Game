function getDiceRollArray(diceCount){
    return new Array (diceCount).fill(0).map(function(){ 
       return Math.floor(Math.random()*9+1)
    })
    }

    function getDicePlaceholderHtml(diceCount){
      return new Array(diceCount).fill(0).map(function(){
         return `<div class = "placeholder-dice"></div>`
      }).join('')
      
    }
    
    getDiceRollArray()

    export {getDiceRollArray, getDicePlaceholderHtml}