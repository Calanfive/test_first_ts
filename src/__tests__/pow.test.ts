import { describe, expect, test } from 'vitest'
import { puissance } from '../modules/pow';

describe("puissance", () => {
    describe("classic", () => {
        test("carre", () => {
            expect(puissance(2, 2)).toEqual(4);
            expect(puissance(10,3)).toEqual(1000);
        });
    });

    describe("signs", () => {
        describe("different signs", () => {
            test("negative first", () => {
                expect(puissance(-2, 2)).toEqual(4);
            });

            test("negative second", () => {
                expect(() => puissance(2, -2)).toThrow(Error);
             });

        describe("two negatives", () => {
            test("negative second", () => {
                expect(() => puissance(-2, -2)).toThrow(Error);
                });
            });
        });
    })

    describe("cas particuliers", () => {
        describe("zero", () => {
            test("byZero", () => {
                expect(puissance(0, 0)).toEqual(1);
                expect(puissance(1, 0)).toEqual(1);
                expect(puissance(10, 0)).toEqual(1);
            });
        });

        describe("one", () => {

            const number = 999

            test("byOne", () => {
                expect(puissance(number, 1)).toEqual(number);
                }, 10
            );
        
                
            test("byN", () => {
                expect(puissance(1, number)).toEqual(1);
                }, 10
            );
        });
    });
});