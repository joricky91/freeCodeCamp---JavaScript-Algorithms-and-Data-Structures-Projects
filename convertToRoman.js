function convertToRoman(num) {
  const romanNumeral = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let roma = "";
  const decimal = Object.keys(romanNumeral).reverse();
  
  decimal.forEach(key => {
    while (key <= num){
      roma += romanNumeral[key];
      num -= key;
    }
  }); 
 return roma;
}

console.log(convertToRoman(36))