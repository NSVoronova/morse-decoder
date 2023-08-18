const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const newArray = expr.match(new RegExp(`.{1,10}`, 'g'));
    const modifiedArray = newArray.map(item => {
      const index = item.indexOf('1');
      return index >= 0 ? item.substring(index) : item;
    });
    let morseArray = modifiedArray.map((i)=>{
      if (i === "**********") {
        return i;
      } else {
        let iArray = i.match(/.{1,2}/g);
        let newIArray = iArray.map((item)=>{
          return item === "10" ? "." : "-";
        });
        newStr = newIArray.join("");
        return newStr;
      }
    });
    console.log(morseArray);
    let strMorseArray = morseArray.map((a)=>{
      if (a in MORSE_TABLE){
      return MORSE_TABLE[a];
      } else {
        return " "
      }
    });
     return strMorseArray.join("");
  

    // write your solution here
}

module.exports = {
    decode
}