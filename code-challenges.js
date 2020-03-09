// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const leet = (speak) => {
    let code = speak.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0")
    return (code)
}
console.log(leet(secretCodeWord1))
console.log(leet(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.
var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const aCheck = (words) => {
   let checked = words.filter(words => words.match(/[a]+/gi) )
    return checked
}

console.log(aCheck(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.
var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
// var handCheck = (/[1-9]+/g)
// const fullHouse = (cards, handCheck) => {
//      if cards.reduce(((n, x) => n + (x === handcheck), 0) === 2) && cards.reduce(((n, x) => n + (x === handcheck), 0) === 3)
//      return "Full House!"
//      else
//      return "Draw Again"
// }

// console.log(fullHouse(hand1)
// console.log(fullHouse(hand2)

// I can't tell if I'm overthinking this or if I'm on the write track here. I'll ask in office hours.