var mongoose = require('mongoose');

var ProgramSchema = new mongoose.Schema({
    name: String,
    nameLink: String,
    description: String,
    programLink: String,
    rating: String,
    days: Number,
    weeks: Number,
    format: String,
    experience: String,
    sport: [{type: String}],
    workout: [{day: Number, 
               restDay: String, 
               routine: [{exercise: String, 
                        uniqueSets: String, 
                        setCount: Number,
                        setOne: [{reps: Number, weight: Number}],
                        setTwo: [{reps: Number, weight: Number}],
                        setThree: [{reps: Number, weight: Number}],
                        setFour: [{reps: Number, weight: Number}],
                        setFive: [{reps: Number, weight: Number}]
                }]
              }],
    users: [{username: String, 
             startingNumbers: [{exercise: String, weight: Number}], 
             endingNumbers: [{exercise: String, weight: Number}]
            }]
});

mongoose.model('Program', ProgramSchema);