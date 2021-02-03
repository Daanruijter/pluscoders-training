function indexOf(text, pattern) {


    let j = 0
    let matchingIndices = pattern[j]
    let iCounter = 0

for (let i = 0; i < text.length; i ++) {
  console.log(i, "i")
    if(text[i]== matchingIndices ) {
    console.log(text[i])
    console.log((iCounter-i), "counter")
        j+=1
        iCounter+=1
         matchingIndices = pattern[j]
         iCounter = i
        
    }
}

return "next"
}




//test 
console.log(indexOf("    ", ""))

console.log(indexOf("salute 👋 you", "👋"))

console.log(indexOf("Hello, World!", "World"))

    console.log(indexOf("Hello, World!", "ello"))

    console.log(indexOf("Hello, World!", "orld"))

    console.log(indexOf("Hello, World!", ","))

    console.log(indexOf("Hello, World!", "!"))

    console.log(indexOf("Hello, World!", "What?"))

    console.log(indexOf("Hello, World!", "Hola"))





//FIRST THOUGHT
//Making a condition that returns me all matching indexes from pattern in text, put those in an array if this works and find the smallest number in the array
// function indexOf(text, pattern) {


//     for (i = 0; i < pattern.length; i++) {
//         for (j = 0; j < text.length; j++) {
//             if (pattern[i] == text[j] && pattern[pattern.length-1] == text[(j+(pattern.length-1)-i)]) {
//                 console.log(text[j])


//             }
//         }
//     }
// }

// if (pattern[i] == text[j] && pattern[i+1] == text[j+1] && pattern[i+2] == text[j+2]) {
//     console.log(text[j])
//     console.log(text[j+1])
//     console.log(text[j+2])
// }


//NEXT THOUGHT 
//Making a condition that returns me all matching indexes from pattern in text, 
//Put those in an array later on and find the first number in the array.

//Logic
//You need to find where the first letter of the pattern matches one in the text
//You need to be sure that it's not a letter that does not belong to the pattern. 

//Conditions 
//1 The first letter in the pattern (i=0) matches a letter at a certain j in the text
//2 Then the second letter of the pattern at (i=1) needs to match the text at (a certain j +1)
//3 Also the last letter of the pattern at (j=pattern.lenght-1) needs to match the last letter of the pattern in text at .
//index (j+(pattern.length-1)-i)

//Problem: I want to log all the matching indexes (now I'm logging the letters), but the second condition does not hold if 
//you are at the end of the pattern

// function indexOf(text, pattern) {

  //     for (i = 0; i < pattern.length; i++) {
//         for (j = 0; j < text.length; j++) {

//             if (pattern[i] == text[j] && pattern[i+1] == text[j+1] && pattern[pattern.length-1]==text[(j+(pattern.length-1)-i)]) {
//                console.log(text[j])



//             }
//         }
//     }
//     console.log("next")
// }

//THIRD THOUGHT (works pretty good, but has weaknesses, so thinking about another way to solve the problem )
// function indexOf(text, pattern) {


//     //to push the matching indices to the array
//     let indices = []

//     for (i = 0; i < pattern.length; i++) {
//         for (j = 0; j < text.length; j++) {

//             //if the patterns length is 0 (to also capture the first test)
//             if (pattern.length == 1) {
//                 if (pattern[i] == text[j]) {
//                     indices.push(j)
//                 }
//             }

//             //if the patterns length is greater than 1 
//             if (pattern.length > 1) {

//                 //if the outer loop is not at the last letter of the pattern
//                 if (i < pattern.length - 1) {

//                     if (pattern[i] == text[j] && (pattern[i + 1] == text[j + 1])) {

//                         indices.push(j)
//                     }

//                 }
//                 //if the outer loop is at the last letter of the pattern
//                 if (i == pattern.length - 1) {
//                     if (pattern[pattern.length - 1] == text[(j + (pattern.length - 1) - i)]) {
//                         indices.push(j)
//                     }

//                 }
//             }
//         }
//     }

//     console.log("next")

//     //if there is a first item in the array, which is the index what we are looking for, return it, 
//     //else return -1, because the pattern is not found

//     if (indices[0]) { return indices[0] }
//     else return -1
//}

