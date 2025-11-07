const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

//étape 1 fait avec Mathurin
function getLatinCharacterList(text) {
  return text.split("");
}

console.log("getLatinCharacterList", getLatinCharacterList("hello, world"));

//étape 2 fait avec Mathurin

function translateLatinCharacter(character) {
  return latinToMorse[character.toUpperCase()];
}

console.log("translateLatinCharacter", translateLatinCharacter("z"));

// étape 3 fait avec Marie

function encode(text) {
  const array = []; // faire un tableau vide pour stocker le résultat
  const splittedText = getLatinCharacterList(text); // stocker le texte séparé grâce à la fonction dans une variable
  for (let i = 0; i < splittedText.length; i++) {
    // boucler sur le texte
    if (splittedText[i] == " ") {
      // gérer le cas où le caractère est un espace
      array.push("/"); // si c'en est un, alors mettre un / dans le tableau "array" pour représenter l'espace
    } else {
      // si non, traduire le texte directement en morse grâce à la fonction et push le morse dans le tableau
      array.push(translateLatinCharacter(splittedText[i]));
    }
  }
  return array.join(" "); // transformer le tableau en chaine de caractères
}

console.log(encode("Ceci est un test"));

// étape 4 fait avec Marie

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

// fonction pour séparer chaque caractères morse
function getMorseCharacterList(text) {
  return text.split(" ");
}

// fonction pour traduire chaque morse en lettre
function translateMorseCharacter(character) {
  return morseToLatin[character];
}

// décoder de morse à texte
function decode(text) {
  const array = []; // initialiser un tableau pour stocker mon résultat

  const splittedText = getMorseCharacterList(text); // stocker le texte séparé grâce à la fonction dans une variable

  for (let i = 0; i < splittedText.length; i++) {
    // boucler sur le texte
    if (splittedText[i] == "/") {
      // gérer le cas où le morse est un /
      array.push(" "); // auquel cas, alors mettre un espace dans le tableau "array"
    } else {
      // sinon traduire du morse au français grâce à notre fonction, tout en s'assurant que chaque lettre sera en minuscule
      array.push(translateMorseCharacter(splittedText[i]).toLowerCase());
    }
  }
  return array.join(""); // transformer le tableau en chaine de caractères
}

console.log(decode("-.-. . -.-. .. / . ... - / ..- -. / - . ... -"));

// étape 5
//voir input dans index.html

let morseConvert = document.getElementById("convertMorseButton");
let textConvert = document.getElementById("TextConvertButton");
let morseInput = document.getElementById("morseInput");
let textInput = document.getElementById("textInput");
let morseOutput = document.getElementById("morseOutput");
let textOutput = document.getElementById("textOutput");

morseConvert.addEventListener("click", () => {
  const decoded = decode(morseInput.value);
  textOutput.hidden = false;
  textOutput.textContent = `The Morse code " ${morseInput.value} " is transcribed into " ${decoded} "`;
});

textConvert.addEventListener("click", () => {
  const encoded = encode(textInput.value);
  morseOutput.hidden = false;
  morseOutput.textContent = `The text " ${textInput.value} " is transcribed into " ${encoded} "`;
});
