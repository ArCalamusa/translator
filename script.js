//* variabili
const langButtons = document.querySelectorAll('.lang-button');
const textInput = document.querySelector('.text-input');
const translationText = document.querySelector('.traslation-text');
const translationFlag = document.querySelector('.tralsation-flag');
const resetButton = document.querySelector('.reset-button');


//! Fa la chiamata GET verso https://mymemory.translated.net/
async function translate(text, lang, flag) {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const result = jsonData.responseData.translatedText;
    console.log(result);
    translationText.innerText = result;
    translationFlag.innerText = flag;
};

//! Funzione reset
function reset() {
    textInput.value = '';
    translationText.innerText = '...';
    translationFlag.innerText = '';
};


langButtons.forEach(function (langButton) {
    langButton.addEventListener('click', () => {
        const text = textInput.value;
        // creo la condizione per far funzionare i pulsanti solo se il campo input non è vuoto
        if (text.length > 0) {
            const lang = langButton.dataset.lang;
            const flag = langButton.innerText;
            translate(text, lang, flag);
        }
    });
});

resetButton.addEventListener('click', reset);