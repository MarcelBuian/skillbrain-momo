// Crearea unei promisiuni simple

const getNewPromise = (name) => {
    return new Promise((resolve, reject) => {

        const seconds = Math.random() * 5;

        if (seconds < 1) {
            reject(name + " maxSeconds este prea mic: " + seconds);
        }

        setTimeout(() => resolve(name + " Success cu maxSeconds = " + seconds), seconds * 1000);
    });
}



// new Promise((resolve, reject)

// Folosirea promisiunii
// console.log("Inceperea programului");

const promise1 = getNewPromise("Primul promise");
const promise2 = getNewPromise("Al doilea promise");
const promise3 = getNewPromise("Al treilea promise");

const promiseAll = Promise.all([promise1, promise2, promise3]);

promiseAll
    .then(result => {
        console.log("Aici suntem in then");
        console.log(result);
    })
    .catch(error => {
        // Afișează eroarea când promisiunea este respinsă
        console.log("Aici suntem in catch");
        console.log(error);
    });

console.log("Sfarsit de program");