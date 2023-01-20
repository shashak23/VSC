// hoisting은 var, let, const 몽땅 일어나는 현상 

let myVar = 1;      // 전역변수 global variable 

{ // 해당 scope 내에서 계산이 일어나요 

    console.log(myVar);
    let myVar = 100;

}
console.log(myVar);