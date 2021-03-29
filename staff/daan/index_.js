function indexOf(text, pattern) {
  let j = 0
  let patternFirstIndex = 0
  let patternLettersNotFoundInTextArray = []

  for (let i = 0; i < text.length; i++) {


    if (text[i] !== pattern[j]) {
      j = 0
      patternLettersNotFoundInTextArray.push(false)
    }

    if (text[i] === pattern[j]) {


      if (j === pattern.length - 1) {
        patternFirstIndex = i - pattern.length + 1
      }

      j += 1

    }
  }

  //If the pattern length is greater than the length of the text 
  //minus the number of times that there is no match between a text letter and the letters in the pattern
  //there is no chance that the pattern is in the text, so return -1

  if (pattern.length > (text.length - patternLettersNotFoundInTextArray.length)) {
    return -1

  }

  //Else, if the pattern is found in the text, return the 
  //index (number) of the first ocurrence in the text where that pattern was found (-1 otherwise).
  else {
    return "The first index of the pattern is in text: " + patternFirstIndex
  }
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


