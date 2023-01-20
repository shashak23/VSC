// 이번에는 let에 대해서 알아보아요
// let은 var와 똑같이 변수를 선언하기 위한 키워드
// ES6에 도입이 됐고요
// 이놈의 가장 큰 차이점은 block level scope이고
// // 우리가 알고 있는 변수 선언 방식을 따른다
// let result = 100; 
// let result = 50;
// let은 같은 scope내에서 중복 선언이 안됩니다


// let이 가지는 가장 큰 특징
let score = 50;            // 바깥쪽 영역에 영향을 주는 score임.
// 1. 임의로 중괄호를 쓸 수 있어요?! 단, 같은 scope가 아닌 경우에만 가능함
// (block 단위로 scope가 달라짐)
{

    let score = 100;
    let myVar = 10; 

}

console.log(score);  // 50
console.log(myVar);  // error