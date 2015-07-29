const Exercise = require('workshopper-exercise');
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');

var exercise = new Exercise();

exercise = filecheck(exercise);
exercise = execute(exercise);
exercise = comparestdout(exercise);

module.exports = exercise;
