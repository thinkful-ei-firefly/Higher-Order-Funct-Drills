'use strict';

function reduce(words){

let newString = '';

words.forEach(word => {
    if (word.length === 3) {
        newString += ' ';
    } else {
        newString += word[word.length - 1].toUpperCase();
    }
});


return newString;
}

const message = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

console.log(reduce(message.split(' ')));