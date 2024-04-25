/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 
// write the function name
// declare an if statement to compare the conditions
//remove statements and look up for the word in emoji
//when the wwordd got an emoji object replace with the emoji
//if not write an else statement to return the original emoji


const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}
function emojifyWord(word){
    if(word.startsWith(':') && word.endsWith(':'))//colon removal
    {
        const emojiWord = word.slice[1, -1];
        
    
    if(emojiWord in emojis)// check if the emoji is in the object
    
        return emojis[emojiWord];
    }
//retun the original word
return word;
}
//
 console.log(emojifyWord(":party:"));
    console.log(emojifyWord(":flower:"));
    console.log(emojifyWord("elephant"));