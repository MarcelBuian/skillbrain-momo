const student = {
    firstName: 'Alin',
    lastName: 'Trinc',
};

// cuvantul "this" nu poate fi apelat in functii arrow, doar in cele clasice
student.getFullName = function getName() {
    return this.firstName + ' ' + this.lastName;
};


console.log(student.getFullName());
