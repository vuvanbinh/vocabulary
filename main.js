import { data, listTypesVocalName } from './data.js'
import renderSelect from './renderUI.js'

let copyArray = [];
let vocabType = ''

window.onload = () => {
    loadItems()
}
document.getElementById("chooseTypeVocab").innerHTML = renderSelect(listTypesVocalName)

function loadItems() {
    const vocab = document.getElementById('chooseVocabTypeSelect').value;
    copyArray = [...data[vocab]]
    vocabType = vocab
    renderVietnamese()
}

document.getElementById("chooseVocabTypeSelect").onchange = () => {
    loadItems()
}

function getRandomVocabulary() {
    var randomVocabulary = copyArray[Math.floor(Math.random() * copyArray.length)]
    copyArray = copyArray.filter(ele => ele.english !== randomVocabulary.english);
    console.log(copyArray.length);
    if (copyArray.length === 0) copyArray = [...data[vocabType]]
    return randomVocabulary;
}

function renderVietnamese() {
    var vocabulary = getRandomVocabulary()
    document.getElementById("renderVietnamese").innerHTML = vocabulary ? vocabulary.vietnamese : ''
    document.getElementById("renderEnglish").innerHTML = ''
}

function renderEnglish() {
    var vocabType = document.getElementById('chooseVocabTypeSelect').value;
    var vietnamese = document.getElementById("renderVietnamese").innerHTML
    data[vocabType].map(vocabulary => {
        if (vocabulary.vietnamese === vietnamese)
            document.getElementById("renderEnglish").innerHTML = vocabulary.english
        return
    })
}

function say(message) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = message.innerHTML.includes(" (") ? message.innerHTML.split(" (")[0] : message;
    window.speechSynthesis.speak(speech)
}


const inputElement = document.getElementById("inputEnglish")

let check = false;

 inputElement.addEventListener('keydown', (event) => {
    if ((event.which == 13 || event.keyCode == 13) && check) {
        renderVietnamese()
        document.getElementById("renderEnglish").innerHTML = ''
        inputElement.value = ''
    }
})

inputElement.oninput = () => {
    var englishLabel;
    var vietnamese = document.getElementById("renderVietnamese").innerHTML
    data[vocabType].map(vocabulary => {
        if (vocabulary.vietnamese === vietnamese)
            englishLabel = vocabulary.english
    })
    var inputText = inputElement.value
    if (englishLabel) {
        englishLabel = englishLabel.split(" (")[0]
        if (englishLabel.toLowerCase() === inputText.toLowerCase()) {
            inputElement.style.color = 'green'
            renderEnglish() // show endlish result
            say(document.getElementById("renderEnglish")) 
            check = true;
        } else {
            inputElement.style.color = 'red'
            document.getElementById("renderEnglish").innerHTML = ''
        }

    }

}

document.getElementById("getVocabulary").onclick = () => { renderVietnamese() }
document.getElementById("renderVietnamese").onclick = () => { renderEnglish() }
document.getElementById("renderEnglish").onclick = () => { say(document.getElementById("renderEnglish")) }
