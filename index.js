// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). Strings 
// passed in will consist of only letters and spaces. Spaces will be included only when more 
// than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords = (str) => {
    let newWord = []
    let arr = str.split(" ")
    for(let el of arr){
        if(el.length >= 5){
            let reverse = el.split("").reverse().join("")
            newWord.push(reverse)
        }else{
            newWord.push(el)
        }
    }
    return newWord.join(" ")
}

spinWords( "Hey fellow warriors" )

//Solution 2 

const spinWords = (str) => {
    return str.split(" ").map((w) => w.length >= 5 ? w.split("").reverse().join("") : w).join(" ")
}

spinWords( "Hey fellow warriors" )