function avgWordLengthCalc(inpString) {
    let re = new RegExp('[^a-zA-Z]');
    let wordArray = inpString.split(re);
    wordArray = wordArray.filter(function (el) {
        return el !== '';
    });
    console.log(wordArray);
    let lengthSum = 0;

    for (let i = 0; i < wordArray.length; i++) {
        lengthSum += wordArray[i].length;
    }

    const result = (lengthSum/wordArray.length).toFixed(2);
    if (isNaN(result) || result === undefined) {
        return 0;
    } else {
        return result;
    }
}


// console.log(avgWordLengthCalc("q w e r t y.")); // 1.00
// console.log(avgWordLengthCalc("The reduce method executes a reducer function.")); // 5.57
// console.log(avgWordLengthCalc("callback is called, accumulator!")); // 6.75
// console.log(avgWordLengthCalc("")); // 0