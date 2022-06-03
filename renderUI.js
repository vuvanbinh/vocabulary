
export default function renderSelect(arr) {
    let selectTypeVocab = ` <select 
    style="width: 150px; height: 30px;border-radius: 5px; 
    "name="chooseVocabTypeSelect" 
    id="chooseVocabTypeSelect">
     `;
    
    for (let i = 0; i < arr.length; i++) {
        selectTypeVocab += `<option value="${arr[i].id}">${arr[i].value}</option>`
    }

    selectTypeVocab += `</select>`;

    return selectTypeVocab;
}
