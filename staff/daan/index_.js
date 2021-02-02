function indexOf(text, pattern) {

  



    for (i = 0; i < pattern.length; i++) {
        for (j = 0; j < text.length; j++) {
            // if (pattern[i] == text[j] && pattern[pattern.length-1] == text[(j+(pattern.length-1)-i)]) {
            //     console.log(text[j])
                
                
            // }
            if (pattern[i] == text[j]) {
                console.log(text[j])
                console.log(j)
                
                
            }
        }
    }
}

//first thought
// function indexOf(text, pattern) {


//     for (i = 0; i < pattern.length; i++) {
//         for (j = 0; j < text.length; j++) {
//             if (pattern[i] == text[j] && pattern[pattern.length-1] == text[(j+(pattern.length-1)-i)]) {
//                 console.log(text[j])
                
                
//             }
//         }
//     }
// }
indexOf("Hello, World!", "Worl")

// if (pattern[i] == text[j] && pattern[i+1] == text[j+1] && pattern[i+2] == text[j+2]) {
//     console.log(text[j])
//     console.log(text[j+1])
//     console.log(text[j+2])
// }