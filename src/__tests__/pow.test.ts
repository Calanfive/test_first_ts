import { describe, expect, test } from 'vitest'
import { puissance } from '../modules/pow';

describe("puissance", () => {
    describe("classic", () => {
        test("", () => {
            expect(puissance(2, 2)).toEqual(4);
            expect(puissance(10,2)).toEqual(100);
        });
    });
    describe("signs", () => {
        describe("different signs", () => {
            test("negative first", () => {
                expect(puissance(-2, 2)).toEqual(4);
            });

            test("negative second", () => {
                expect(puissance(2, -2)).toEqual(4);
             });

        describe("two negatives", () => {
            test("negative second", () => {
                expect(puissance(-2,-2)).toEqual(100);
                });
            });
        });

    describe("cas particuliers", () => {
        describe("zero", () => {
            test("byZero", () => {
                expect(puissance(0, 0)).toEqual(1);
                expect(puissance(1, 0)).toEqual(1);
                expect(puissance(10, 0)).toEqual(1);
            });
        });

        describe("one", () => {
            test("byOne", () => {
                expect(puissance(0, 1)).toEqual(1);
                expect(puissance(1, 1)).toEqual(1);
                expect(puissance(10, 1)).toEqual(10);
                });
            });
        });
    });
});