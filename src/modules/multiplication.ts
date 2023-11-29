export function multiple(a: number, b: number): number{
    if(a === 0 || b === 0){
        return 0
    }
    
    if (a === 1) {
        return b
    }
    else if(b === 1){
        return a
    }

    let res = 0

    for (let i = 0; i < Math.abs(b); i++) {
        res += Math.abs(a)        
    }

    if(Math.sign(a) === Math.sign(b)){
        return res
    }
    else {
        return -res
    };
};