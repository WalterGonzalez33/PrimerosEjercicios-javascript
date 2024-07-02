const phrase = prompt("write a phrase: ");

// Ejercicio resuelto con los metodos sugeridos en la consigna (.substring y .charAt)
const vowels = "aeiou";
let phraseVowels = "";
for (let i = 0; i < phrase.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (phrase.charAt(i) === vowels.charAt(j)) {
      phraseVowels += phrase.substring(i, i + 1);
    }
  }
}

// Solución alternativa que quise incluir
const handlerVowels = (phrase) => {
  if (typeof phrase != "string") {
    throw new Error("phrase is not string");
  }
  const phraseToLowerCase = phrase.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let PhraseVowels = [];
  for (let i = 0; i < phraseToLowerCase.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (phraseToLowerCase[i] === vowels[j]) PhraseVowels.push(phrase[i]);
    }
  }
  return PhraseVowels.join("");
};

console.log(phraseVowels);
console.log(handlerVowels(phrase));
