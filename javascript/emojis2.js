/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

// loop to go over every word checking words
//if statement to check if the word starts and ends with colon
//concanating statement for strings amd emojis
// true return an emojified phrase
// else return the original phrase
const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}


function emojifyWord(word) {
    // Check if the word starts and ends with a colon
    if (word.startsWith(':') && word.endsWith(':')) {
        // Remove the leading and trailing colons
        const emojiWord = word.slice(1, -1);
        
        // Check if the emojiWord exists in the emojis object
        if (emojiWord in emojis) {
            // Return the corresponding emoji if found
            return emojis[emojiWord];
        }
    }
    // Return the original word if not an emoji shortcode
    return word;
}

function emojiPhrase(phase) {
    const words = phase.split(' ');// split the phase into words
    const emojifiedWords = [];//array to hold emojified words

    for (let word of words){
        emojifiedWords.push(emojifyWord(word));
    }

    return emojifiedWords.join(' ');
}

console.log(emojifyWord(":party:"));
console.log(emojifyWord(":i love my :cat:"));