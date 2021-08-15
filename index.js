
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


// ChunkArray

// const chunckArr = (arr,num) => {
//   //add a counter arr 
//   let counter = [];
//   while(arr.length > 0){
//     counter.push(arr.splice(0,num))
//   }
//   return counter;
// }

// chunckArr([1,2,3,4,5,6,7],3);

// const chunckArr = (arr,num) => {

//   let chunked = [];
//   //loop over 
//     for(i=0; i<arr.length; i+=num){
//       if(num < 0){
//         return `input + intiger`
//       }
//       else{
//       chunked.push(arr.slice(i, num + i))
//     }
//   }
//   return chunked;
// }


// chunckArr([1,2,3,4,5,6,7],2);

// const chunckArr = (arr,num) => {
//   //int a var to store array
//   let chunked = [];
//   // set starting point for index
//   i = 0;
//   //loop while index is less than array length
//   while(i<arr.length){
//     //check if its a negative num, if is negative return nothing
//     if(num < 0){
//       return `input positive num`;
//     }
//     //else return the cuncked arr
//     else{
//     //slice out from the index to the insex + length (num)
//     //push to chuncked arr
//     chunked.push(arr.slice(i, i + num));
//     // increment by length of num
//     i += num
//     }
   
//   }
//   return chunked;
// }


// chunckArr([1,2,3,4,5,6,7],2);

// const flattenArr = (arr) => {
//   //can use js method flat
//   // return arr.flat(arr.length)

//   //using reduce
//   return arr.reduce((a,b) => a.concat(b))
// }

// flattenArr([[1,3],[3,4],[4,3],[4,5],[6,7]])

// Anagram

// const isAnagram = (str1,str2) => {
//   return helper(str1) === helper(str2)
// }

// //helper function
// const helper = (str) => {
//   return str
//             .replace(/[^\w]/g,'')
//             .toLowerCase()
//             .split('')          
//             .sort()
//             .join('')
// }

// // isAnagram('elbow','below');
// isAnagram('Dormitory', 'dirty room##');


// letter changes

// const letterChanges = (str) =>{
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char){
//     if(char === 'z' || char === 'Z'){
//       return 'a'
//     }
//     else{
//       return String.fromCharCode(char.charCodeAt() + 1)
//     }
//   })
//   newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel){
//     return vowel.toUpperCase()
//   })
//   return newStr;
// }

// letterChanges('hello there')