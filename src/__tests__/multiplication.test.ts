import { describe, expect, test } from 'vitest'
import { multiple } from '../modules/multiplication';

describe("multiple", () => {
    describe("simple case null", () => {
        test("byZero", () => {
            expect(multiple(1, 0)).toEqual(0);
            expect(multiple(0, 1)).toEqual(0);
            expect(multiple(-1, 0)).toEqual(0);
            expect(multiple(0, -1)).toEqual(0);
        });
    });
    
    describe("simple case one", () => {
        test("byOne", () => {
            expect(multiple(1, 2)).toEqual(2);
            expect(multiple(2, 1)).toEqual(2);
        });
    });

    describe("other cases by upper", () => {
        describe("same sign", () => {
            test("positives", () => {
                expect(multiple(3, 3)).toEqual(9);
            })
            test("negatives", () => {
                expect(multiple(-2, -5)).toEqual(10);
            })
        });

        test("with negative first", () => {
            expect(multiple(-2, 5)).toEqual(-10);
        });
        
        test("with negative second", () => {
            expect(multiple(2, -5)).toEqual(-10);
        });
    });

});

