console.log("program started");
const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("program Complete!");
    }, 3000);
    
});
myPromise.then((result) => {
    console.log(result);
})

