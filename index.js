#!/usr/bin/env node

const workshopper = require('workshopper');
const path        = require('path');

function fpath (f) {
    return path.join(__dirname, f);
}

workshopper({
  name        : 'seccamp2015-buffer-workshopper',
  title       : 'Security Camp 2015 Buffer Workshopper',
  subtitle    : 'Exercises for Buffer in TLS/HTTP2 Lecture',
  appDir      : __dirname,
  menuItems   : [],
  exerciseDir : fpath('./exercises/'),
//  languages: ['ja', 'en']
  languages: ['ja']
});
