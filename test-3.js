console.log("program started");

const step1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("step1 one complete")
    }, 3000);
});

console.log(step1);
console.log("program in progress...");

step1
    .then((value) => {
    console.log(value);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("step 2 Complete");
        }, 3000)
    })
    }).then((val) => {
        console.log(val)
    });
