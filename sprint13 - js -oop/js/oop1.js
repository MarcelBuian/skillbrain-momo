const obj1 = {
    nume: "Caine",
    varsta: 3,
    // getDescription: () => {  },
};

class Animal {
    constructor(nume, varsta) {
        this.nume = nume;
        this.varsta = varsta;
    }

    // Metodă pentru sunetul pe care îl face animalul
    faceSunet() {
        console.log("Acest animal face un sunet.");
    }

    getDescriere() {
        return `Acesta este ${this.nume}, are ${this.varsta} ani.`;
    }

    // Metodă pentru descrierea animalului
    descrie() {
        console.log(this.getDescriere());
    }

    setVarsta(varstaNoua) {
        this.varsta = varstaNoua;
    }

    incrementVarsta() {
        this.varsta = this.varsta + 1;
        // Acelasi lucru scris mai usor:
        // this.varsta++;
        // this.varsta += 1;
    }
}

class Caine extends Animal {
    constructor(nume, varsta, rasa) {
        // super inseamna constructorul parintelui (Animal)
        super(nume, varsta);
        this.rasa = rasa;
    }

    // Suprascrie metoda faceSunet specific pentru Caine
    faceSunet() {
        console.log("Ham! Ham!");
    }

    // Metodă specifică pentru Caine
    alerg() {
        console.log(`${this.nume} aleargă fericit!`);
    }

    // Am suprascris getDescriere cu ce exista in Animal + ceva nou
    getDescriere() {
        return `${super.getDescriere()} Este de rasa ${this.rasa}.`;
    }
}

class Pisica extends Animal {
    constructor(nume, varsta, culoare, esteMascul) {
        // super inseamna constructorul parintelui (Animal)
        super(nume, varsta);
        this.culoare = culoare;
        this.esteMascul = esteMascul;
    }

    // Suprascrie metoda faceSunet specific pentru Pisica
    faceSunet() {
        console.log("Miau! Miau!");
    }

    // Metodă specifică pentru Pisica
    toarce() {
        if (this.esteMascul) {
            console.log(`${this.nume} toarce mulțumit.`);
        } else {
            console.log(`${this.nume} toarce mulțumita.`);
        }
    }

    getDescriere = () => `${super.getDescriere()} Este de culoare ${this.culoare}.`;
}

const dog1 = new Caine("Rex", 6, "German Shepherd");

dog1.descrie();
dog1.alerg();
dog1.faceSunet();

dog1.incrementVarsta();
dog1.descrie();

dog1.setVarsta(10);
dog1.descrie();


const cat1 = new Pisica("Kisa", 2, "bruneta", false);
cat1.descrie();
cat1.toarce();


const cat2 = new Pisica("Tom", 5, "negru", true);
cat2.descrie();
cat2.toarce();