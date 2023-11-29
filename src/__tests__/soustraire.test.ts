import { describe, expect, test } from 'vitest'
import { substraction } from '../modules/substraction';

describe("Soustract", () => {
    describe("Soustract only for small numbers", () => {
      describe("errors on parameters", () => {
        test("", () => {
          expect(() => smallNumberSubstraction(0, -1)).toThrow(Error);
        });
  
        test("", () => {
          expect(() => smallNumberSubstraction(-1, 2)).toThrow(Error);
        });
  
    describe("Soustract all numbers", () => {
        test("", () => {
          expect(smallNumberSubstraction(2, -1)).not.toEqual(1);
        });
      });
    });
});
});

function smallNumberSubstraction(arg0: number, arg1: number): any {
    throw new Error('Function not implemented.');
}
