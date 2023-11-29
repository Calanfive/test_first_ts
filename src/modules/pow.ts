export function puissance(a:number, b:number){

    if (b < 0) {
        throw new Error("a power can't be negative")
    }

    let res = 1
     
    for (let i = 0; i < Math.abs(b); i++) {
        res *= Math.abs(a)        
    }

    return res
}