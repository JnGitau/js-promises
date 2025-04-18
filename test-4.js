console.log("Program Started...");
 const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({data:"Hello, friend!", Error:null})
    },5000)
 });

 console.log(myPromise);
 console.log("program in progress...");

 myPromise.then((value) => {
    console.log(value)

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("First promise chain complete!")
        }, 2000);
    }).then((val) => {
        console.log(val)
   
   return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Second promise chain complete!")
        },10000)
   }).then((secondval) => {
    console.log(secondval)
   })
    })
 });