function fn(index) {
    if (index === 'a') {
        return 'aaa';
    } else {
        return 'ccc';
    }
}


const xxx = (boolA) => {
    let varA = [];
    let varB = [];
    if (boolA) {
        varB = [{someKey: 1}].map(row => ({
            width: fn(row.someKey)
        }));
        const maxCount = varA.map(lastValue => lastValue);

        const index = varB.map(d => d);
        if (index > -1) {
            console.log(index)
        }
    }
};

xxx(1, 2);