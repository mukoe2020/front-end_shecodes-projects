/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false function isAnagram(str1, str2){
    
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
*/
//if statement if two strings of lowercase
//return true if the word is an anagram
//return false if it isn't

function isAnagram(string1 ,string2){
    // convert strings to lower case
    const lowercasestring1 = string1.toLowerCase();
    const lowercasestring2 = string2.toLowerCase();

    //check if the string lengths is equal
    if (lowercasestring1.length != lowercasestring2.length)
    {
        return false
    }
    //split the strings into arrays of characters
    const string1Array = lowercasestring1.split("").sort().join("");
    const string2Array = lowercasestring2.split("").sort().join("");
    
    //check if the arrays are equal
    return string1Array === string2Array;



}
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("rainbow", "crossbow"));
console.log(isAnagram("pea", "ape"));