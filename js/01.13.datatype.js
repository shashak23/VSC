// primitive type

// 1. number type
// //    정수와 시수를 구분하기 않아요
// let myVar = 1.0        // 실수 -> number
// console.log(myVar == 1);       // true
// console.log(3 /2 );
// console.log(10 / 0) ;  //infinity 무한대 상수값 -- 이런거는 안써요
// console,log(10*'Hello');   // Not a Number, 산술연산불가 , NAN 이거는 씀


// // 2. String type 
// var myStr = '아우성!!'        // JS 일반적인 형태
// myStr = "소리없는"            // 이것도 사용이 가능

// myStr = '이것은 \n소리없는 \n아우성!'     // \n 은 줄바꿈 기호

// myStr = `이것은 
// 소리없는
// 아우성`   // `` 를 사용하면 문자열을 여러줄로 표현 가능

// myStr = '이것은 소리없는 아우성!'  // 이렇게도 사용이 가능

// let test = 100
// myStr = `현재 test의 값은 ${test}입니다`   // 백틱?을 이용하는게 좀 더 편하다
// myStr = '현재 test의 값은 ' + test + '입니다.'

// console.log(myStr)

// // 3. boolean type - true, false 두개의 값만 제공
// var test1 = true

// // 4. undefined type - 사용할 수 있는 값이 undefined 밖에 없어요 
// // 이 값은 우리가 사용하는게 아니에요
// // JS에 의해서 사용이 되요

// // 5 null type - 사용할 수 있는 값이 null 밖에 없어요
// // 이거는 우리가 사용할 수 있는 값입니다
// test = null;

// // 6. symbol type 
// // ES6(ECMAScript 2015)에 추가된 타입이에요
// // 다른 값과 중복되지 않는 unique한 값을 표현

// let mySymbol1 = Symbol("소리없는 아우성!");
// let mySymbol2 = Symbol("소리없는 아우성!");

// console.log(mySymbol1 == mySymbol2);     // 결과를 도출하려고 해도 무슨 값인지 안알랴줌

// reference type(함수, 객체, 배열)은 수업이 진행되면서 알아봅시다~!

// let str = 'hello'; // 자바에서는 프리미티브 벨류인데, 자스에서는 아님
// // str이라고 생성된 문자열을 배열처럼 쓰고 있음
// // 메소드를 인스턴스 객체처럼 쓰고 있음
// console.log(str[0]);    // h  -- > 배열처럼 씀
// console.log(str.length);    // 5   --> 어떻게? 
// console.log(str.toUpperCase());   // HELLO --> 객체가 가지고 있는 메소드를 호출하여 씀 

// JS는 primitive value에 대해 객체처럼 사용하면 갑자기 primitive wrapper object가 생성됨
// 뒤에 있는 primitive value가 어떤 거인지에 따라서 객체가 달라져요

// let str = 'hello';

// str[0] = 'H';     // 0을 H로 바꿀거에요

// console.log(str);    // 여기서 자바는 HELLO라고 인식을 하지만 JS는 안됨

// // Object, property 해 보기 
// // 값을 변수에 저장함
// let myObj = {

//     'name' : '홍길동',
//     'age' : 20,
//     'address' : '서울'
//     'myInfo'  : function () {   // 익명 함수 -- 대부분 이렇게 많이 써요

//         console.log('소리없는 아우성');

//     } 

// }   

console.log(myObj.name);   // 홍길동
myObj.myInfo();   // 코드안에 있는 블럭을 실행시켜라

// 객체 literal로 객체를 살펴보고 있는데요
let obj = {
    name : '홍길동',
    10 : 200        // key값에는 문자열을 써야해요 대신 value에는 아무거나 다 쓸 수 있어요 

// }

// 객체를 사용하는 방식 1
console.log(obj['name']);  // 문자열로 명확하게 작성해줘야해요~! 'name'과 '10'이 동일하게 사용될 수 잇음
// console.log(obj.name); 과 윗줄과 console.log(obj['10']); 은 동일함
// console.log(obj['10']); 객체를 사용하는 방식 2 

// typeof 연산자: 값이 데이터 타입을 알려주는 역할
// console.log(typeof 100);   // number
// console.log(typeof 'Hello')  // string 
// console.log(typeof undefined); // undefined
// console.log(typeof true);  // boolean 
// console.log(typeof Synbol()); //symbol
// console.log(typeof[1,2,3]); // object 

// console.log(typeof null);  // null이 나와야하는데 object라고 해요 JS의 대표적인 오류!

// // 함수의 기본 표현
// let myFunc = function haha() {    

// }

// console.log(typeof myFunc); // reference type이니까 object라고 나오는게 정상인데

// 함수를 정의하는 가장 대표적인 방법의 함수 선언문 = 함수 구문 , 리터럴이 아님
// function myFunc(a,b){
//     return a + b ;
// }

// // 함수 표현식, 리터럴이 아님
// let aa = function() {

// }

// // // Function 생성자 함수를 이용한 함수 생성방식 -- 잘 안 씀
// // // x,y 인자를 두 개 받아서 함수를 만들어주는 function을 이용해서 함수를 만듦
// // let bb = new Function('x','y','return x + y');

// 화살표 함수 Arrow Function
// 자바의 람다 e-> () 의 원형
// let cc = (x,y) => { 
//     return x + y 
// };

// // -----------------------------------------------

// function myFunc1(a,b) {
//     return a + b; 

// }

// console.log(myFunc1(10,20));   // 30

// // 함수는 이름 갖고 호출하는 게 아니어서 이런 에러가 나요!
// (function myFunc2(a,b) {
//     return a + b; 

// })

// console.log(myFunc3(10,20));  // 30 , JS에서 함수는 레퍼런스의 변수를 가지고 호출하는 것!
// console.log(myFunc4(10,20));  // 실행이 안됨

// 함수 선언문 (리터럴이 아님)
// function myFunc3(a,b) {
//     return a + b; 

// }

// // 함수 표현식
// let myFunc4 = function(a,b) {
//     return a + b; 
// }

// function add(x,j) {
//     // 함수는 눈에 보이지 않지만 내장 배열이 있어요 
//     // 그 이름이 arguments 라고 정해져있어요 
//     return x + y;
// }

// // console.log(add(10));  // 여기서 두 개가 아닌 하나만 준다면? 인자의 개수가 상관없이 이름만 맞으면 무조건 콜 :)  

// function add() {
//     return arguments[0] + arguments[1];
// }

// console.log(add(10,20,30,40)); // 30 

// IIFE 즉시 실행 함수
// 함수를 만들자마다 실핸할 건데 전체를 구냥 ()에 넣어버려 
// (function add(){
//     let x = 10;
//     let y = 20;

//     console.log(x + y);
// }()); // 얘는 한번 쓰고 버려진단 말이죠? 
// {} 함수내에서 진행된 () 지역변수이다
// 변수의 scope를 제어할 수 있어요!
// js의 특성인 전역 scope의 공유 문제를 해결할 수 있습니다...

// function outer(){
//     let x = 1;

//     //중첩함수
//     function inner(){
//         let y = 2;
//         console.log(x + y) ; // 여기서 x는 y의 상위 scope니까 쓸 수 있어요
//     }
//     inner();  // 이렇게 해야 3이 찍혀요 
// }

// outer(); 
// 외부에서 호출은 안돼요 closer에 연결이 되요.

// Call Back -- JS에서 가장 많이 사용되는 코드
// 프로그램을 하나 만들거에요
// 숫자를 하나 입력으로 줘서 0부터 해당 숫자까자ㅣ
// console에 출력하는 아주 간단한 프로그램 작성
function repeat(n) {

     for(let i=0; i<n; i++){
     console.log(i);
   }
}

function repeat_(n) {

    for(let i=0; i<n; i++){
        if(i % 2 == 1) {
    console.log(i);
        }
  }
}

repeat(3);

// 프로그래밍 언어에서 일급시민이라는 용어가 잇어요
// 위의 두 블럭을 합쳐보아요 
function repeat(n,f){
    for(let i=o; i<n; i++) {
        f(i);  // 중첩함수 구조는 아니지만 공통된 로직을 작성하고
               // 경우에 따라서 변화되는 로직을 추상화해서 외부함수로 배치함
    } // 어떻게 수행된다는 전체로직이 있엄
}  // 고차함수 Higher-Order Function
// 이런식의 유지보수와 확장성이 있는 JS의 코드이다. ★★
let printAll = function(i){
    console.log(i);
} // callback function (우리가 아는 콜백은 다른 함수에 기어들어가서, 한 부분으로 들어가서 사악 바꾸는 것)
let printOdd = function(i){
    if(i%2 == 1) console.log(i);
}
let printEven = function(i){   // 짝수만!
    if(i%2 == 0) console.log(i);
}

repeat(10, printOdd);