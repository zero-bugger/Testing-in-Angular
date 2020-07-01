import { myAdd } from './myadd'
import { myMul } from './mymul'


describe('Pipe: add', () => {
    it('add 2 inputs', () => {
      let add = new myAdd();
      expect(add.transform(10,20)).toEqual(30);
    });

    it('multiply 2 inputs', () => {
        let mul = new myMul();
        expect(mul.transform(10,20)).toEqual(200);
      });
  
  });