// Code your solutions in this file
function writeCards(names, gift) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${gift} gift!`);
}
function countDown(num) {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
        console.log("Please provide a positive integer.");
        return;
    }

    while (num >= 0) {
        console.log(num);
        num--;
    }
}

