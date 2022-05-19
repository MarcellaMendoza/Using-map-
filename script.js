const conspiratorList = ['Brutus', 'Antony', 'Cassius', 'Calpurnia', 'Portia',]


const conspiratorHtml = conspiratorList.map(function(conspirator) {
  return (`<div class="box">${conspirator}</div>`)
})

///join is added to the end of conspirator html

document.getElementById('list').innerHTML = conspiratorHtml.join("")







////////////////Example of join///////////////////////////
const fruitArray = ["apple", "banana", "orange", "grapes"]

const fruitArrayString = fruitArray.join(", ")

console.log(fruitArrayString)





// const conspiratorHtml = [] 

// for (let i = 0; i < conspiratorList.length; i++){
//     conspiratorHtml.push(`<div class="box">${conspiratorList[i]}</div>`)
// }

// document.getElementById('list').innerHTML = conspiratorHtml









////////////////////Example Of Map////////////////////

// const priceInEuros = [120, 183, 134, 159, 238, 429]
// const exchangeRate = 1.13


//Map()
// const priceInDollars = priceInEuros.map(function(euroCost){
//   return (euroCost * exchangeRate)
// })

// console.log(priceInDollars)



// //For loop
// const priceInDollars = []

// for (let i=0; i<priceInEuros.length; i++) {
//   priceInDollars.push((priceInEuros[i]*exchangeRate))
// }

// console.log(priceInDollars)


