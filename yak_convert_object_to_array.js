function toArr(entries) {
    return Object.keys(entries).map(function (key) {
        return [String(key), entries[key]];
    });
}

// console.log(toArr({ key1: 'value1', key2: 'value2' }));
// console.log(toArr({}));