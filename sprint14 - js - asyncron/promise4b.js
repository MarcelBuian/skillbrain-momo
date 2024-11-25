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

const result1 = await promise1;
console.log(result1);

const result2 = await promise2;
console.log(result2);

const result3 = await promise3;
console.log(result3);

console.log("Sfarsit de program");