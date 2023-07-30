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

function decode(expr) {
  const array = [];

  for (let i = 0; i < expr.length; i += 10) {
    array.push(expr.slice(i, i + 10));
  }

  let string = "";

  for (let i = 0; i < array.length; i++) {
    let word = "";

    for (let j = 0; j < array[i].length - 1; j += 2) {
      if (array[i][j] + array[i][j + 1] === "10") {
        word += ".";
      } else if (array[i][j] + array[i][j + 1] === "11") {
        word += "-";
      } else if (array[i][j] + array[i][j + 1] === "00") {
        word += "";
      }
    }
    string += MORSE_TABLE[word] ? MORSE_TABLE[word] : " ";
  }
  return string;
}

module.exports = {
  decode,
};
