const person1 = {
    name: 'Tofik',
    greet(city, country) {
        console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
    }
};

const person2 = { name: 'Shail' };

person1.greet.call(person2, 'Mumbai', 'India'); 
person1.greet.apply(person2, ['Karachi', 'Pakistan']); 
const newFunc = person1.greet.bind(person2, 'New York', 'USA'); 
newFunc();