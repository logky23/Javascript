// without Cache

// const memoize = func => {
//     const cache = {};
//     return async (...args) => {
//         return await func(...args);
//     }
// };

// with Cache
const memoize = (func) => {
    const cache = {};
    return async (...args) => {
        console.log(cache);
        let strKey = args.join(",");
        if (!cache[strKey]) {
            console.log('adding to cache!');
            cache[strKey] = await func(...args);
        } else {
            console.log('fetching to cache!');
        }
        return cache[strKey];
    }
};

const add = async (...args) => {
    console.log("Heavy task starts");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Heavy task ends");
    return args.reduce((acc, cElement) => acc += cElement, 0);
};

const memoizedAddFunction = memoize(add);

(async () => {
  console.log(await memoizedAddFunction(1, 2, 3));
  console.log(await memoizedAddFunction(1, 2, 3));
  console.log(await memoizedAddFunction(1, 2, 3));
  console.log(await memoizedAddFunction(1, 2, 3));
  console.log(await memoizedAddFunction(1, 2, 3));
  console.log(await memoizedAddFunction(1, 2, 3));
})();
