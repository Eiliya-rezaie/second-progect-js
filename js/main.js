function tryagain(){
    console.log(`if you wanna try again , press f5`)
} 
// x => x=5 => 1+2+3+4+5=?
function sum(){
    let sumx=0;
    let x=Number(prompt(`enter x`));
    for(let i=1;i<=x;i++){
        sumx+=i
    }
    console.log(sumx)
    tryagain();
}
//

// divisor
// x => x%===0 && count x%
function divisor(){
    let count=0;
    let x=Number(prompt(`enter x`));
    for(let i=1;i<=x;i++){
        if(x%i===0){
            console.log(`${i} is divisor of ${x}`)
            count++
        }
    }
    console.log(`number divisor of x is ${count}`);
    tryagain();
}
//

// prime number
// x => just x%1===0 && x%x===0
function prime_number() {
    let count_prime=0;
    let x=Number(prompt(`enter x`));
    for(let i=1;i<=x;i++){
        if(x%i===0){
            console.log(`${x} % ${i} = 0`);
            count_prime++;
        }
    }
    if(count_prime===2){
        console.log(`x has ${count_prime} divisor`)
        console.log(`${x} is a prime number`);
    }else{
        console.log(`x has ${count_prime} divisor`)
        console.log(`${x} is a composite number`);
    }
    tryagain();
}

//
// factorial
// x=5 => 5*4*3*2*1
function factorial(){
    let sum=1;
    let x=Number(prompt(`enter x`));
    for(let i=1;i<=x;i++){
        sum*=i;
    }
    console.log(`factorial ${x} is ${sum}`);
    tryagain();
}
//

//
// fibo sequence
// 1 1 2 3 5 8 13 21 ,....
// a b c
//   a b c
//     a b c
//       a b c
// 1+1=2 >> 1+2=3 >> 2+3=5 >> 3+5=8 ,....
function fibo(){
    let a=1;
    let b=1;
    let c=0;
    let sum=0;
    let x=Number(prompt(`pleas enter number for fibo`))
    for(let i=1;i<=x;i++){
        // console.log(`c is ${c} before`);
        c=a+b
        // console.log(`c is ${c}`);
        a=b
        // console.log(`a is ${a}`);
        b=c  
        // console.log(`b is ${b}`);
        // c=0
    }
    console.log(` your fibo is ${c}`)
    tryagain();
}
