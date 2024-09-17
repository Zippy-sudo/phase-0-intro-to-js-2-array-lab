const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();  
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCat1 = cats.slice();
    newCat1.push(name);
    return newCat1;
}

function prependCat(name) {
    const newCat2 = cats.slice();
    newCat2.unshift(name);
    return newCat2
}

function removeLastCat() {
    const newCat3 = cats.slice();
    newCat3.pop();
    return newCat3;
}

function removeFirstCat() {
    const newCat4 = cats.slice();
    newCat4.shift();
    return newCat4;
}