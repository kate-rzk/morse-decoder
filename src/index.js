const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const DIGIT_TABLE = {
  "00": "",
  "10": ".",
  "11": "-",
};

const decodeLetter = (letter) => {
  return MORSE_TABLE[letter];
};

const decodeLetterInNumbers = (word) => {
  return word.split(/(.{2})/).map(el =>DIGIT_TABLE[el]).join("");
};

const decodeWord = (word) => {
  return word.split(/(.{10})/).map(decodeLetterInNumbers).map(decodeLetter).join("");
};

function decode(expr) {
  // write your solution here
  return expr.trim().split("**********")
  .map(decodeWord).join(" ");
}

module.exports = {
  decode,
};
