import database from './../database/firebase';

export const getWords = () => {
    const itemsRef = database.ref('words');
    return itemsRef;
}
export const saveWord = (word) => {
    database.ref('words').push(word);
}

export const updateWord = (id, word) => {
    database.ref('words'+id).set(word);
}

export const deleteWord = (id) => {
    database.ref('words'+id).remove();
}