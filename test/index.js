import { assert } from 'chai';
import transverse from '../src';

describe('Transverse Nested Test.', () => {
  it('should get a nested value from the object', () => {
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

    const expectedVal = 'Nelson';

    assert(transverse(obj, 'hi.hello.world.my.name.is') === expectedVal, "Doesn't fetch nested prop");
  });
});
