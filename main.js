class Hamburger {
    static SIZE_SMALL = { name: "small", price: 15, calories: 200 }
    static SIZE_MEDIUM = { name: "medium", price: 20, calories: 300 }
    static SIZE_LARGE = { name: "large", price: 30, calories: 400 }

    static STUFFING_CHEESE = { name: "Cheese", price: 10, calories: 20 };
    static STUFFING_SALAD = { name: "Salad", price: 20, calories: 5 };
    static STUFFING_POTATO = { name: "Potato", price: 15, calories: 10 };

    static TOPPING_SPICE = { name: "Spice", price: 15, calories: 0 };
    static TOPPING_MAYO = { name: "Mayo", price: 20, calories: 5 };

    constructor(size, stuffing) {
        if (!size || !stuffing) {
            throw new Error("Size and stuffing are required");
        }
        this.size = size;
        this.toppings = [];
        this.stuffing = [];
        this.price = 0;
        this.calories = 0;

        switch (size) {
            case Hamburger.SIZE_SMALL:
                this.size = Hamburger.SIZE_SMALL.name;
                this.name = "Small Hamburger";
                this.price += Hamburger.SIZE_SMALL.price;
                this.calories += Hamburger.SIZE_SMALL.calories;
                break;
            case Hamburger.SIZE_MEDIUM:
                this.size = Hamburger.SIZE_MEDIUM.name;
                this.name = "Medium Hamburger";
                this.price += Hamburger.SIZE_MEDIUM.price;
                this.calories += Hamburger.SIZE_MEDIUM.calories;
                break;
            case Hamburger.SIZE_LARGE:
                this.size = Hamburger.SIZE_LARGE.name;
                this.name = "Large Hamburger";
                this.price += Hamburger.SIZE_LARGE.price;
                this.calories += Hamburger.SIZE_LARGE.calories;
                break;
        }

        switch (stuffing) {
            case Hamburger.STUFFING_CHEESE:
                this.name += " with " + Hamburger.STUFFING_CHEESE.name;
                this.price += Hamburger.STUFFING_CHEESE.price;
                this.calories += Hamburger.STUFFING_CHEESE.calories;
                this.stuffing.push(Hamburger.STUFFING_CHEESE);
                break;
            case Hamburger.STUFFING_SALAD:
                this.name += " with " + Hamburger.STUFFING_SALAD.name;
                this.price += Hamburger.STUFFING_SALAD.price;
                this.calories += Hamburger.STUFFING_SALAD.calories;
                this.stuffing.push(Hamburger.STUFFING_SALAD);
                break;
            case Hamburger.STUFFING_POTATO:
                this.name += " with " + Hamburger.STUFFING_POTATO.name;
                this.price += Hamburger.STUFFING_POTATO.price;
                this.calories += Hamburger.STUFFING_POTATO.calories;
                this.stuffing.push(Hamburger.STUFFING_POTATO);
                break;
        }
    }

    addTopping(topping) {
        if (topping.name) {
            this.toppings.push(topping);
            this.price += topping.price;
            this.calories += topping.calories;
        }
    }

    addStuffing(stuffing) {
        if (stuffing.name) {
            this.stuffing.push(stuffing);
            this.price += stuffing.price;
            this.calories += stuffing.calories;
        }
    }

    calculatePrice() {
        console.log("Price: " + this.price + " euros");
    }

    calculateCalories() {
        console.log("Calories: " + this.calories + " kcal");
    }

    summary() {
        console.log("Name: " + this.name);
        console.log("Price: " + this.price + " euros");
        console.log("Calories: " + this.calories + " kcal");
        console.log("Toppings: ");
        for (let i = 0; i < this.toppings.length; i++) {
            console.log(this.toppings[i].name);
        }
        console.log("Stuffing: ");
        for (let i = 0; i < this.stuffing.length; i++) {
            console.log(this.stuffing[i].name);
        }
    }
}


const smallHam = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
const medHam = new Hamburger(Hamburger.SIZE_MEDIUM, Hamburger.STUFFING_POTATO)
const largeHam = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD)



