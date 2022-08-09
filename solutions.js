// 1)

// as you can see toyota2 does not have a logModel function
// borrow that function from toyota1 and call i, so it console.logs "Toyota Rav4"



const toyota1 = {
  model: 'Toyota',
  type: 'Camry',
  logModel(){
      console.log(this.model, this.type);
  }
}



const toyota2 = {
  model: 'Toyota',
  type: 'Rav4',
}

 toyota1.logModel.call(toyota2) 

// 2)

// The following code does not work turn it into working code


const flights = {

  flights: [],

  priorityFlights: [],

  scheduleFlight(flight){
      this.flights.push(flight);
  },

  removeFlight(flight){
    
      this.flights = this.flights.filter(flightFilter);
      function flightFilter(f){
          if (flight === f){
              return this.priorityFlights.includes(flight);
          }
          return true
      }
  },

  makePriorityFlight(flight){
      this.priorityFlights.push(flight);
  }

}

flights.removeFlight('1')
flights.scheduleFlight('1');

flights.makePriorityFlight('1');

console.log(flights.flights);


// 3)

// CarConstructor creates cars but what if someone decides to call it without new keyword,
// write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
// new keyword it logs "please call me with new keyword" if not it creates a car

function CarConstructor(model, year){
  this.mode = model;
  this.year = year;
  if (!new.target)  {
  console.log('please call me with new keyword')   
  } 
}


// 4)

// make a new array out of objArr so that every object has the same logName function that is declared below
// use logName function do not create your own


const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

function logName(){
    console.log(this.name);
}


const objArr1 = [...objArr]
for (const key in objArr) {
  objArr1[key].logName = logName.bind(objArr1[key])  
}

// 5

// use foreach method and use arrayOfObjectNames function to log the fallowing objects names from the array;


const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

function logArrayObjectNames(){
    console.log(this.name);
}

arrayOfObjectNames.forEach(item => {
  item.logArrayObjectNames=logArrayObjectNames.call(item)

})



// 6) for above mentioned arrayOfObjectNames Return an array of functions that when called would log each objects name
// use Array.map and logArrayObjectNames function

const mappedFunc = arrayOfObjectNames.map((item) => {  
  return logArrayObjectNames.bind(item,item.name)

  }
 );

mappedFunc.forEach(i => i()); // this would print 1, 2, 3



//7 please take a look at the following

// this is just an example of object that you will still need to create by calling CreateCar constructor

const exampleOfAlreadyCreatedObject = {
  id: 1,
  model: 'Toyota',
  year: '1996',
  color: 'red',
  driveTrain: '4x4',
}


function CreateCar(id, model, year, color, driveTrain){
  // please implement CreateCar function so it creates cars with properties
     this.id=id ,
     this.model=model
     this.year=year ,
     this.color=color ,
     this.driveTrain=driveTrain
}

// // please take a look at the the inventory object and implement the missing methods

 const inventory = {

     cars: [],

    addCar(car) {
//     // addCar function would add a car to the cars array
//     // please implement it here
     this.cars.push(car)
  },

   removeCar(id) {
//     // removeCar function would remove a car from cars array
//     // please implement it here
       this.cars.pop(id)
   },

   listCars() {
//     // listCars function would list all the cars
//     // you simply need to log all the cars
        this.cars.forEach(item => console.log(item)
     )
     },

       listCarsByConditionCallback(conditionCallback) {
//     //     // this function should accept a parameter conditionCallback, which is a function,
//     //     // the conditionCallback would be called on every car with that car passed to conditionCallback
//     //     // if conditionCallback returns true then the car is logged into console.
//     //     // please implement it
    
     let obj = Object(this.cars)
  
     for (const key in obj) {
      let car = obj[key]

      for (const i in car) {
        if (conditionCallback.call(this, car, i, car[i])) {
          return car
        }
      }
      
    }
  }
}
  




inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
inventory.removeCar(2);
inventory.listCars();
console.log(inventory.listCarsByConditionCallback( (car) => car.model === 'Toyota' && car.year === '1996' ))


//8
// Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be
// added as properties when the Song constructor function is used. The Song function should also have a method called
// play When called, the play function should console.log the name of that specific song preceded by the
// word 'Playing:'.
// NOTE that play function should be the same for all instances of the Song constructor


function Song(title, artist) {
  this.title = title,
    this.artist = artist,
    this.play = function () {
       console.log(':Playing'+this.title )
       
    }
}

const song = new Song('numb','Linkin Park')






//9
//  mkdir Workshop_4
//  git init
//  git branch x_branch


//10
//  mkdir Workshop_4
//  git init
//  git branch rename_me
//  git branch  delete_me
//  git checkout branch rename_me
//  git branch -m renamed_branch
//  git branch -D  delete_me





const checkKnow = {
  surname: 'surname',
  name: 'checkKnow',
  foo: {
      name: 'foo',
      logName(){
          console.log(this.surname);
      }
  },
  boo(){
      const obj = {
          name: 'boo method',
          check: () => {
              console.log(this.name);
          }
      }
      obj.check();
  }
}


checkKnow.foo.logName();

checkKnow.boo();


// logName - this-ը  foo object է ,որը չունի surname property հետևաբար լօգա անում undefined
// check ը  errow function է, որը չունի իր this-ը, this-ը վերցնում է իր վերևի function-ից boo()-ից որ this-ը checkKnow  object է