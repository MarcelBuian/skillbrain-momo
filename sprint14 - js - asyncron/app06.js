// Crearea unei promisiuni simple

const getNewPromise = (name) => {
    return new Promise((resolve, reject) => {

        const seconds = Math.random() * 10;

        if (seconds < 1) {
            reject(name + " maxSeconds este prea mic: " + seconds);
        }

        setTimeout(() => resolve(name + " Success cu maxSeconds = " + seconds), seconds * 1000);
    });
}


// Folosirea promisiunii
// console.log("Inceperea programului");

const promise1 = getNewPromise("Primul promise");
const promise2 = getNewPromise("Al doilea promise");
const promise3 = getNewPromise("Al treilea promise");

promise1
    .then(result => {
        console.log("Aici suntem in then");
        console.log(result);
    })
    .catch(error => {
        // Afișează eroarea când promisiunea este respinsă
        console.log("Aici suntem in catch");
        console.log(error);
    });


promise2
    .then(result => {
        console.log("Aici suntem in then");
        console.log(result);
    })
    .catch(error => {
        // Afișează eroarea când promisiunea este respinsă
        console.log("Aici suntem in catch");
        console.log(error);
    });

promise3
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