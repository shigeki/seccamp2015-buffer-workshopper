const Exercise = require('workshopper-exercise');
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');
const crypto = require('crypto');

var exercise = new Exercise();
exercise = filecheck(exercise);
exercise = execute(exercise);

exercise.addSetup(function (mode, callback) {
  var rand1 = (crypto.randomBytes(64)).toString('hex');
  exercise.submissionArgs = [rand1];
  exercise.solutionArgs = [rand1];
  process.nextTick(callback);

});

exercise = comparestdout(exercise);

module.exports = exercise;
