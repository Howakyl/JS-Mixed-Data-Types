//1) Data Types
// * A light switch that can be either on or off.

// I would use an object, boolean, and function.
    const lightSwitch = {
        lightOn: true,
        turnOffLight () {
            if (this.lightOn) {
                return this.lightOn = false;
            } else return this.lightOn = true;
        }
    };

// * A user's email address.
//I would save a string to a variable.
const email = 'foo@bar.com';

// * A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//I would use an object, booleans, and strings

const spaceship = {
    hull: 'titanium',
    laserBlasters: true,
    tractorBeam: true,
    warpDrive: true
}

// * A list of student names from our class.
// I would use an array with strings

const class2020 = ['Bob', 'Tim', 'Sally'];

// * A list of student names from our class, each with a location.
//I would make objects with stings inside of them.
const student1 = {
    name: 'Bob',
    location: 'Seattle'
}
const student2 = {
    name: 'Tim',
    location: 'Seattle'
}

// * A list of student names from our class, each with a location and each with a list of favorite tv shows.
//I would use multiple objects, with strings, and arrays for the shows.
const student3 = {
    name: 'Bob',
    location: 'Seattle',
    favoriteShows: ['Friends', 'The Office']
}
const student4 = {
    name: 'Tim',
    location: 'Seattle',
    favoriteShows: ['Mythbusters', 'Top Gear']
}

/////////////////////////////////////////////////////

//2. Take it easy

//1)
const rainbowColors = ['red', 'orange', 'yellow' , 'green', 'blue' , 'indigo', 'violet'];
//2) 
console.log(rainbowColors[4]);
//3)
const me = {
    name: 'Kyle',
    favoriteFood: 'Stroganoff',
    hobby: 'video games',
    currentTown: 'Issaquah',
    favoriteDataType: 'Objects!'
};
//4)
console.log(me.hobby);