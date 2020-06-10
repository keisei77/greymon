import Perfect from '../src/core/index';
import Head from '../src/core/head';
import Body from '../src/core/body';
import Arms from '../src/core/arms';
import Legs from '../src/core/legs';
import Feet from '../src/core/feet';

const combination = {
  head: Head({
    descriptor: '',
    actions: [
      function nod() {
        console.log('nod');
      },
      function shake() {
        console.log('shake');
      },
    ],
  }),
  body: Body({
    descriptor: '',
    actions: [],
  }),
  arms: Arms({
    descriptor: '',
    actions: [
      function wave() {
        console.log('wave');
      },
      function raise() {
        console.log('raise');
      },
    ],
  }),
  legs: Legs({
    descriptor: '',
    actions: [
      function jump() {
        console.log('jump');
      },
      function run() {
        console.log('run');
      },
    ],
  }),
  feet: Feet({
    descriptor: '',
    actions: [],
  }),
};

const greymon = new Perfect(combination);

console.log(greymon);
