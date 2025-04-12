class StringBuilder {
    // Приватна властивість
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }
// Повертає значення value
    getValue() {
        return this.#value;
    }
// Додає рядок в кінець 
    padEnd(str) {
        this.#value = this.#value + str;
    }
// Додає рядок на початок 
    padStart(str) {
        this.#value = str + this.#value;
    }
// Додає рядок на початок в кінець 
    padBoth(str) {
        this.#value = str + this.#value + str;
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
