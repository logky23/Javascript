function removeDuplicates(arr) {
    const collection = [];
    for (const char of arr) {
        if (!collection.includes(char)) collection.push(char);
    }
    console.log("removeDuplicates", collection);
}

removeDuplicates([1,2,2,3,4,4]);
