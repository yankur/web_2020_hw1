function maxTotal(entries) {
    entries.sort((a, b) => b-a);
    const arrSum = entries => entries.slice(0,5).reduce((a, b) => a + b, 0);
    return arrSum(entries);
}


// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // 43
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));   // 100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));   // 40