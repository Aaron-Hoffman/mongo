require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb+srv://AaronHoffman:Exitmeno123@cluster0.2jsjv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  age: Number,
  favoriteFoods: [String]
})


let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Aaron",
    age: "29",
    favoriteFoods: ["Soy sauce", "Pizza", "Curry"]
  });

  person.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
    });

};

const arrayOfPeople = [
  {name: 'Henry', age: 83, favoriteFoods: ['Roastbeef', 'Meatloaf', 'English Muffin']},
  {name: 'Mary', age: 32, favoriteFoods: ['Sushi', 'Fries', 'Salad']},
  {name: 'Noreen', age: 54, favoriteFoods: ['Whiskey', 'Steak', 'Asparagus']}
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.error(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, peopleFound) {
    if (err) return console.error(err);
    done(null, peopleFound);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, personFound) {
    if (err) return console.error(err);
    done(null, personFound);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({id: personId}, function(err, personFound) {
    if (err) return console.error(err);
    done(null, personFound)
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
