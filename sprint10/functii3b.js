// functie care este pura:
const getListWithoutFirstElement = (list) => {

    const listNew = [...list];

    listNew.shift();

    return listNew;
}

const getListWithoutSecondElement = (list) => {
    let newList = [];
    newList.push(list[0]);

    const restOfList = list.slice(2);

    newList = newList.concat(restOfList);

    return newList;
}

const list = [1, 2, 3, 4];

const listFaraPrimulElement = getListWithoutFirstElement(list);
const listFaraAlDoileaElement = getListWithoutSecondElement(list);

console.log("listFaraPrimulElement", listFaraPrimulElement);
console.log("listFaraAlDoileaElement", listFaraAlDoileaElement);