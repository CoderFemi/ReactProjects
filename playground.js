// PARENT CLASS
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    
    getBio() {
        return `My name is ${this.name}, and I am ${this.age} years old.`
    }
}

// EXTENDED/CHILD CLASS
class Student extends Person {
    constructor(name, age, school, doubleTeacherAge) {
        super(name, age)
        this.school = school
        this.props = { doubleTeacherAge }
    }
    getStudentBio() {
        return super.getBio() + ` I attend ${this.school}.`
    }
    render() {
        return this.props.doubleTeacherAge()
    }
}

const personOne = new Person('John', 29)
// console.log(personOne.name)
// console.log(personOne.getBio())

const studentOne = new Student('Giovani', 23, 'Lakewood')
// console.log(studentOne.getStudentBio())

// THIS BINDING BREAKING AND RESTORATION EXAMPLE
const btn = {
    onclick: undefined
}

btn.onclick = studentOne.getStudentBio.bind(studentOne)

// console.log('reassigned', btn.onclick())

// ANOTHER EXTENDED CHILD CLASS
class Teacher extends Person {
    // EXPERIMENT TO UNDERSTAND METHOD PROPS
    doubleAge() {
        return this.age * 2
    }
    render() {
        const studentTwo = new Student('Jameson', 15, 'Wuthering Heights', this.doubleAge.bind(this))
        console.log(studentTwo)
        console.log(studentTwo.render())
    }
}
const teacherOne = new Teacher('Paulinho', 40)

// console.log(teacherOne.render())

// FUNCTIONAL CLASS ALTERNATIVE
const Human = (head, eyes) => {
    return {
        head,
        eyes,
        describeMe() {
            return `I have ${this.head} head and ${this.eyes} eyes`
        }
    }

}

const humanOne = Human('one', 'two')
// console.log(humanOne.describeMe())


// DESTRUCTURING EXAMPLES
const myCar = { type: 'Tesla', origin: 'United State of America' }
const cars = [
    { type: 'Honda', origin: 'Japan' },
    { type: 'Toyota', origin: 'Japan' },
    { type: 'Peugeot', origin: 'France' },
    { type: 'Audi', origin: 'Germany' },
    { type: 'Nissan', origin: 'Japan' },
    { type: 'Volkswagen', origin: 'Germany' },
    { type: 'Tesla', origin: 'America' }
]

const [carOne, carTwo, carThree, carFour, carFive, carSix] = cars
// console.log(carOne.origin)
const findCar = ([carOne, carTwo, carThree]) => {
    console.log(`My car is a ${carOne.type}, made in ${carOne.origin}`)
}
// findCar(cars)

const findMyCar = ({ type, origin }) => {
    console.log(`My car is a ${type}, made in ${origin}`)
}

findMyCar(myCar)