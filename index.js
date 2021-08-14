
// Loongest word

// const longestWord = (str) => {
//   let newStr = str.toLowerCase().match(/[a-z0-9]+/g)
//   let wordCount = 0
//   let word = ''
//   for(i=0;i<newStr.length;i++){
//     if(newStr[i].length > wordCount){
//       wordCount = newStr[i].length;
//       word = newStr[i]
//     }
//   }
//   return `${word} - is longest word in string, wordcount: ${wordCount}.`;
// }

// longestWord("Hello there, abcdef my name is Dilshan")
////////////////////////////////////////////////////////////////// 

// const longestWord = (str) => {
// //filter the array
//   const strArr = str.toLowerCase().match(/[a-z0-9]+/g);
//   console.log(strArr)

//   //sort by length
//   const sortArr = strArr.sort((a,b) =>{
//     return b.length - a.length 
//   })
//   console.log(sortArr)

//   //filter through to check if more than 1 longest word and put into array
//   //filter creates a new array with the function passesd onto it
//   const longestWordArr = sortArr.filter(word => word.length === sortArr[0].length)
//   console.log(longestWordArr)

//   //check if more than one longest word
//   if(longestWordArr.length === 1){
//     // return the word
//     return longestWordArr[0]
//   }
//   else{
//     return longestWordArr;
//   }

// }

// longestWord("Hello there, abcde my name is Dilshan")