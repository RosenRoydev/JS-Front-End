function createClass(input){
    let cats = [];
    for(let values of input) {
        values = values.split(' ');
        let name = values[0];
        let age = values[1];

        class Cat{
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
            meow(){
                console.log(`${cat.name}, age ${cat.age} says Meow`)
            };
        }
        let cat = new Cat(name,age);
        cats.push(cat);
    }
    for(let cat of cats) {
        cat.meow();
    }
}
createClass(['Candy 1', 'Poppy 3', 'Nyx 2'])