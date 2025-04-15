console.log("program started");

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("program fulfilled")
    }, 3000);

    setTimeout(() => {
        reject("program rejected");
    }, 4000);

});

newPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error)
})