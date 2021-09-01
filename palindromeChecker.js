function palindrome(str) {
    let sentence = str
                   .toLowerCase()
                   .match(/[a-z0-9]/g);
    return sentence.join("") === sentence.reverse().join("");
}
  
console.log(palindrome("eye"))