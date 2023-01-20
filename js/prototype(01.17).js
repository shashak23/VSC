// // 함수 선언문
function myFunc(number){  // 함수이름: muFunc

    return 2*number;
}

console.log(myFunc);

// 일반 객체
var obj = {
    name : '홍길동'
}

console.log(obj);

//함수 선언문
function myFunc(number) {
    return 2*number;

}
console.dir(myFunc);


// ---------dir vs log------------


// function myFunc(a,b) {
//     // arguments 유사배열객체 
//     // 유사배열객체는 배열과 유사한 객체
//     // 배열과 생긴게 똑같고 사용도 비슷하게 할 수 있어요
//     // 진짜 배열은 아니에요 그래서 배열이 갖고 있는
//     // 여러가지 기능을 다 갖고 있지 않아요


//     // arguments 함수객체의 property
//     // 가변인자함수를 구현하기 위해서 사용
//     let result = 0;
//     for(let i=0; i<arguments.length; i++) {
//         result += arguments[i];
//     }
//     // return arguments [0] + arguments [1];
//     return result;
// }
// // myFunc(10,20,30,40);
// // 더하고 싶은 만큼의 인자를 결과로 넣어주기
// console.log(sum(10,20));
// console.log(sum(10,20,30));
// console.log(sum(10,20,30,40));

// -------유사 배열 객체 vs rest parameter--------

// 별도의 rest parameter라는 걸 도입했어요 (ES6에)
// ...args = rest parameter
// 특히 arrow function은 arguments가 없어요
// 그래서 arrow function은 rest parameter 사용

// 위의 유사배열객체와 rest parameter 둘 중에는
// 현재 rest parameter가 더 많이 쓰여요

// function sum(...args) {
//     // args로 표현되는 rest parameter는 array이에요
//     let result = 0;
//     for(let i=0; i<arguments.length; i++){
//         result += args[i];
//      } 
//      return result;
// }
// console.log(sum(10,20));
// console.log(sum(10,20,30));
// console.log(sum(10,20,30,40));


// ---------------------prototype 이해하기 ----------------------------


// 함수 선언문 - 생성자 함수
// function Circle(radius) {       // 프로퍼티
//     this.radius = radius;       // 지역변수

//     Circle.prototypegetArea = function(){  // prototype 객체 완성
//         return Math.PI * this.radius ** 2;
   
//     }
// }
// // cicle이라는 함수 객체 안에서 circle1과 circle2라는
// // 새로운 함수를 만들어서 값을 출력
// const circle1 = new Circle(2);   // 자동으로 링크가 prototype에 만들어짐
// const circle2 = new Circle(5);   // 자동으로 링크가 prototype에 만들어짐

// // 같다는 == 이고 내용이 같다는지 확인하는 것인데 다르면 타입을 맞추고
// // 타입을 비교는 안하고 내용이 맞는지 비교하는 것

// // === 이거는 타입독 같고 내용도 같은 것 
// console.log(circle1.radius === circle2.radius);



// function Circle(radius) {       // 프로퍼티
//     this.radius = radius;       // 지역변수

//     Circle.prototypegetArea = function(){  // prototype 객체 완성
//         return Math.PI * this.radius ** 2;
   
//     }
//     Circle.prototype.name = '홍길동';
// }
// const circle1 = new Circle(2);   
// const circle2 = new Circle(5); 

// console.dir(circle1);   // 서클1의 인스턴스 구조를 보쟈!

// console.log(circle1.construnctor === Cirlce);
// console.log(circle1.__proto__.construnctor === Circle);

// constructor는 프로토 타입이고 circle1이 안갖고 있으니까 prototype에 가서
// constructor을 찾고 그것과 Circle이 같나요? 물어보면 맞나요? 하겠쥬?

// console.log(circle1.name, circle2.name);  // 홍길동 홍길동
// // circle1.name = '신사임당'
// // console.log(circle1.name, circle2.name);  // 신사임당 홍길동
// circle1.__proto__.name = '신사임당'
// console.log(circle1.name, circle2.name);

// ===================>결국  prototype은 결국 상속구조를 나타내기 위한 방법

// const obj = {}  // 객체 literal로 만든 빈 객체

// const parent = {x : 1}  //x라는 프로퍼티 키로 1이라는 벨류를 만듦

// // 내부 슬롯을 사용할 수 없으니까 [[]] 대신 __ 사용
// obj.__proto__ = parent

// // 객체가 만들어진 순간 이미 프로토타입이 생성되고
// // 상속구도를 동적으로 받을 수 있어서 가능한 일(바꿀 수 있어요)
// console.log(obj.x);  // 상속되는 상위 프로토타입을 객체를 선택할 수 있어요
// 인스턴스 레벨에서 상속을 표현할 수 있어요 <-> 자바랑은 달라요 
// 엄청 동적이다~~ 자바스크립트는!!

// var obj = {

//     name : '홍길동'
// }
// console.dir(obj);

// -------------------- 생성자 함수 만든거 예시 +--------------------------
// function Circle(radius){
//     this.radius = radius;
// }

// const circle1 = new Circle(1);

// console.dir(circle1);

// --------------------유일한 예외-------------------------------
//객체 만들 때 이렇게도 만들 수 있어요
// const obj = Object.

// // 객체 literal로 생성
// const obj = {};

// const parent = {
//     x : 1
// }

// // 상위 프로토타입 객체를 얻어오기 위해서 아래처럼 하는 건 좋지 않아요
// // obj._proto__.

// Object.getPrototypeOf(obj)           // prototy 객체를 획득
// Object.getPrototypeOf(obj,parent);   // obj의 prototype객체를 parent로 설정

// // 현재 오브제트에는 아무것도 없지만 상속하고 잇어서 .x를 사용할 수 잇어요
// console.log(obj.x);   // 1

// ------------ non-constructor ------------------------------------
// non-constructor인 Arrow function을 하나 만들어서
// // 진짜 이 함수 객체의 prototype 객체가 생성되지 않는지 확인을 해 보자 

// const person = (name) => {   // 여기서 person은 함수객체

//     this.name = name;
// };
// // person의 prototype 찍어보기 -- 없으면 undefined 
// console.log(person.prototype);


// function Circle(radius){
//     this.radius = radius;
// }

// Circle.age = 20;

// const circle1 = new Circle(1);

// console.dir(circle1);
// console.log(circle1.age);   // undefined, 내가 만든 객체에서는 이걸 쓸수가 없어요! 
// 객체르 가지고 프로퍼티에 직접적인 수정은 할 수 없어요
// 이 생성자 함수에 프로퍼티를 등록하면은 쓸 수가 없어요

// 근데 아래와 같이 쓰는게 정상은 아니라서 정상답게 써보자?해서 나온거
//전역에서 제일 위에 혹은 함수안에 제일 위에
// 'user strict'


// ------------strict mode ----------------------------------------------------

// function foo() {
//     x = 10;  // 에러가 아닌 전역변수로 만들어요
//              // window객체의 property로 등록
//              // 암묵적 전역 Implicit Global
//              // 자바스크립트의 특징 
//              // 자바스크립트를 변수선언을 하지 않아도 된다 (암묵적 전역이니까 가능하기한데, 규칙 무시룰)
// }         
// foo(); 

// console.log(x);    // 10 

// --------------------- java script code----------------------------------

// var x = 100;   // 전역코드

// if(true){
//     let x = '홍길동'  // 
// }

// function myFunc(){
//     console.log('hello');   // 함수 내부 코드 

//     function aa(){
//         console.log();   // 중첩 함수 내부에 있는 건 별도 코드임

//     }
// }

// ----------------- Execution Context-----------------------------
// const x = 1;
// function foo(){
//     const y = 2;

//     function bar(){
//         const z = 3;
//         console.log(x + y + z);
//     }
//     bar();
// }
// foo();

// -------------------- new code-------------------------------------
// const x = 1;

// function outer(){
//     const x = 10;       // 위와 다른 스코프임

//     const inner = function() { 
//         console.log(x);        // 이 함수를 만드는 순간 바로 위의 x를 가리킴

//     }
//     return inner;    // 함수가 함수를 리턴하고 있어요 
// }
// const result = outer();  

// result();   // 10이 찍혀요! 1이 되어야 정상인데, 안되는 현상을 closure라고 해요
// 클로저는 정확하게는 함수를 지칭하는 것은 아니지만,
// 클로저는 저 함수를 통해서 이렇게 작용을 해요 라고 편의상 하는 것...
// 기본적인 상황이 엇나가는 형태를 말함!
// why? 렉시컬 범위에 있는 x가 날라갈 위기에 처했는데, inner 함수를 통해 x가 남아있고
// x를 지칭하는 게 남아있어서~ x를 그대로 남겨둬요~~ 
// 스택에서는 빠지지만 렉시칼 범위에는 남겨두는 거에요~~~~ 
// inner에서 x를 가리키며 만들어진 것이 아니라면 날라가고 반대면 안날라가요!
// 날랄가면 closure가 아니에요~! 

// function foo(){
//     const x = 1;
//     const y = 2;

//     function bar () {
//         const z = 3;

//         console.log(z);

//     } return bar ;  // 중첩함수를 다 리턴한다고 해서 다 클로저는 아님
// }

// const result = foo();
// result();  
// 클로져가 존재하기 때문에 프로그램이 뱅글뱅글 돌기만 하는게 아니랍니다~! (나름 장점)

// --------------------클로져를 이용한 간단한 응용----------------------

// let num = 0; // 변수 만들고

// const increase = function(){   // 함수 표현식(리터럴)을 이용해서 함수 만듦
//      return  ++num;
// }

// console.log(increase());   // 호출하기 1
// console.log(increase());   // 2
// console.log(increase());   // 3 
// 간단한 카운터를 만들 수 있어요~

// 외부에서 얘를 건들이지 못하게 하려면? 
// 전역으로 두면 안되고 궁여지책으로 안으로 넣어야해요~~ 그럼 결과가 다 1 됨
// 카운트가 동작을 안하잖아요? 이렇게 하지 말고 초기화를 해야해요!

const increase = (function() {
    let num = 0;  // 지역변수고 다시 만듦
    
    return function(){ // 함수를 리턴
       return ++num;
    } // 요 함수 끝났을 때, 위애에를 만들자마다 실행시키고 싶으면
       // 즉시 실행 함수로 만들기 

} ()); // 실행시키기 , (function 앞에 괄호 더 넣기 (원래는 increase ()() 이거임)

console.log(increase());   // 1
console.log(increase());   // 1 -> 2
console.log(increase());   // 1 -> 3 // 결국 외부에서 변수를 건들이지 못하고 결과도 잘 도출됨