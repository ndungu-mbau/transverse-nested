/* eslint-disable no-console */
const transverse = require('../lib');

const obj = {
  hi: {
    hello: {
      world: {
        my: {
          name: {
            is: 'Nelson'
          }
        }
      }
    }
  }
};

console.log('Transverse and return single leaf value');
console.log(transverse(obj, 'hi.hello.world.my.name.is'));

console.log('Transverse and return an object');
console.log(transverse(obj, 'hi.hello.world.my'));

console.log('Return undefined if some prop does not exist, even halfway, instead of error');
console.log(transverse(obj, 'hi.hello.everyone.my.name.is'));
