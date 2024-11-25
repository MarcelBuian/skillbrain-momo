// Crearea unei promisiuni simple

const getNewPromise = (name) => {
    return new Promise((resolve, reject) => {

        const seconds = Math.random() * 5;

        // if (seconds < 1) {
        //     reject(name + " maxSeconds este prea mic: " + seconds);
        // }

        setTimeout(() => resolve(name + " Success cu maxSeconds = " + seconds), seconds * 1000);
    });
}

const promise1 = getNewPromise("Primul promise");
const promise2 = getNewPromise("Al doilea promise");
const promise3 = getNewPromise("Al treilea promise");

promise1.then(result => {
    console.log(result);
})

promise2.then(result => {
    console.log(result);
})

promise3.then(result => {
    console.log(result);
})

console.log("Sfarsit de program");