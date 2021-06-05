import { Calc } from "./calc";

describe('Calc', () => {
    let calc;
    beforeEach(() => {
         calc = new Calc();
    })
    
    it('should add', () => {
        const oper1 = 4;
        const oper2 = 3;
        const result = calc.add(oper1, oper2);
        expect(result).toBe(7);
    })

    it('should minus', () => {
        const oper1 = 6;
        const oper2 = 3;
        const result = calc.minus(oper1, oper2);
        expect(result).toBe(3)
    })

    afterEach(() => {
        calc = null;
    })
})