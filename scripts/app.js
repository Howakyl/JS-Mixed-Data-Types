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

/////////////////////////////////////////////////////

//3. Crazy Object!

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  };

  //1)
  console.log(crazyObject.taco[1].salsa[5]);
  //2)
  console.log(crazyObject.larry.quotes[0]);
  //3) 
  console.log(crazyObject.larry.characters[2].favourtieHobby);
  //4)
  console.log(crazyObject.larry.nicknames[1]);
  //5)
  console.log(crazyObject.larry.characters[1]);

/////////////////////////////////////////////////////

//4. Object-ception

const inception = {
  reality: {
      dreamLayer1: {
          dreamLayer2: {
              dreamLayer3: {
                  dreamLayer4: {
                      dreamLayer5: {
                          dreamLayer6: {
                              limbo: "Joseph Gordon Levitt"
                         }
                      }
                  }
              }
          }
      }
  }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception);

