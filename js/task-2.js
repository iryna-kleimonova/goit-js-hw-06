class Storage {
    // Приватна властивість
    #items;
    constructor(items) {
        this.#items = items;
    }

    // Повертає поточні товари
    getItems() {
        return this.#items;
    }

    // Додає новий товар
    addItem(newItem) {
        this.#items.push(newItem);
    }

    // Видаляє товар, якщо він є
    removeItem(itemToRemove) {
        this.#items = this.#items.filter(item => item !== itemToRemove);
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
