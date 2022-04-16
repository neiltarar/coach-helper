// Auto password generator for Express Session Secret Key

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]

const numbers = [
    '0', '1', '2', '3',
    '4', '5', '6', '7',
    '8', '9'
]

const specialChar = [
    '!', '@', '#', '$',
    '%', '^', '&', '*',
    '(', ')', '_', '{',
    '+'
]

let password = []

for (i = 0; i < 32; i++) {
    let randNum = Math.floor(Math.random() * 195)
    if (randNum % 2 === 0) {
        let randNum = Math.floor(Math.random() * alphabet.length)
        randNum % 2 === 0 ? password.push(alphabet[randNum]) : password.push(alphabet[randNum].toUpperCase()) 
    }else if( randNum % 3 === 0) {
        let randNum = Math.floor(Math.random() * numbers.length)
        password.push(numbers[randNum])
    }else{
        let randNum = Math.floor(Math.random() * specialChar.length)
        password.push(specialChar[randNum])
    }
}

console.log(password.join(''))
