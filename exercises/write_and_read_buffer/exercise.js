const Exercise = require('workshopper-exercise');
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');
const crypto = require('crypto');

var exercise = new Exercise();
exercise = filecheck(exercise);
exercise = execute(exercise);

exercise.addSetup(function (mode, callback) {
  var rand_buf = crypto.randomBytes(4);
  var rand_num = rand_buf.readUInt32BE(0);
  exercise.submissionArgs = [rand_num];
  exercise.solutionArgs = [rand_num];
  process.nextTick(callback);

});

exercise = comparestdout(exercise);

module.exports = exercise;
