
// var x = "HellO";      // 전역변수 global scope

// // 함수 선언문
// function foo() {

//     var x = "World";   // 지역 변수 local scope, JS에서 함수가 나오면 로컬스코프

//     function bar (){
//         var x = "haha";   // 지역변수 local scope 
//     }
 
//     console.log(x); // 만약 있지도 않은 변수를 여기에서 찍는다? --> 바로 위 함수에서 1차 찾아 --> 없어?
//     // 그럼 이 scope가 포함관계에 있네?(그렇다고 모든 함수가 포함관계는 아니지만 JS는 기본적으로 포함관계를 떠올린다) 
//     // --> 2차로 전역 스코프로 올라가서 찾아 --> 이 과정을 scope chain 이라고 함
//     // scope는 서로 포함관계에 있을 수 있어요 
// }

// foo(); //함수 이름을 쓰는 건 아니다~ 

// console.log(x);

// // 변수x라는 거 놓고 밑에 함수 있고 밑에서 함수 호출하고
// // 한번 돌고 다시 함수 안에 있는 x는 과연 어떤 x인가?
// // engine이 x는 과연 어떤것인가? 
// // 그 변수가 유효한 범위 : scope 
// // 어떻게 변수가 사용되는지 판단 : identifier resolution 식별자 결정
// // 판단하고 유효한 범위로 쓰는 것 : scope 
// // 위의 두 개의 X는 이름은 같지만 사용이 다름
// // scope는 이름을 구분하는 공간이다 scope = name space 네임 스페이스

// var x = 1;

// function foo() {
//     var x = 10;
//     bar();             // foo라는 함수 안에 bar를 호출
// }

// function bar() {
    
//     console.log(x);    // 여기서 하면 x를 냅다 호출하는데
//     // 여기서 찍는 x는 어떤 x일까? 1일까? 10일까?! 
//     // 호출되는 시점을 기준으로 x를 찾을 수 있는 방법1.
//     // 선언된 위치를 기준으로 x를 찾을 수 있는 방법2.
// }
// --------------여기까지 빌드업---------------------------------

// 객체 literal 
// let과  const의 차이는 거의 없고 딱 1개만 다름!
// // cocnst는 재할당이 안됨
// let obj = {   // {안에는 property가! key와 value형태로 구성됨}
//               // key = string : value , 객체 리터럴을 이용해서 객체 생성함
//   myName : '홍길동',
//   myAhe : 20
//   // obj라는 객체를 이용해서 안에 함수(프러퍼티)를 작성했는데
//   // 이미 객체가 할당이 딱 들어가면 고정이 되어서 -- constant 상수 

// } 

// // obj = {};
// // const obj = 10;  // 얘는 10이라는 값만 가지고 있다 --> 효율성이 떨어진다
// // 일단 obj라는 객체가 생성되면 내용을 바꾸는 경우가 있더라도~
// // 그 객체를 바꾸는 일은 잘 없기때문에 객체라고 표현이 되는 건 고정이 된다.
// // (=> 할당이 고정이 되고 재할당이 안되고 객체 내용은 변할 수 있다)
// // 내가 객체를 만들어서 변수해야겠다 하며 const를 스고 
// // let과 const차이는 레퍼런스 타입잉냐 변수이냐에 따라 달라져요 ------ 와? 어려운데?

// // console.log(obj); 
// // console.log(obj.myName);  // 홍길동
// // console.log(obj.[[Prototype]]);  // 에러
// console.log(obj.__protp__);    // 이건 가능

// // 브라우저를 통해서 보기 - live server - f12 - 개발자 노트 


// 생성자 함수
// getownpropertydescroptor 생성자 함수 
// const 변수 잡고 person이라는  
// const person = {
//     name : '홍길동',
//     age : 20

// }

// console.log(person);

// Object.getOwnPropertyDescriptors(object.getOwnPropertyDescriptor()); // 특정 객체만 알려줌
// // object.getOwnPropertyDescriptors : 특정 property의 모든 객체 정보 알려줌


// defineproperty 생성자 함수 
// const person = {}
// // 오브젝트가 가진 이 기능을 이용해서 person을 정의하겠다 
// // (객체 , 프로퍼티 이름=값 , 
// // {4개의 값(value, written, enumatrabl, confogurable => 이걸 모두 객체화한것을 작성} )
// Object.defineProperty(person, 'firstName', {  // 여기는 다시 객체가 됨
//      value : '홍',
//      Writable : true,
//      enumerable : true,   // 여기까지 3개가 많이 쓰여요
//      // 브라우저로 출력할 때 ()안에 값에 따라 나올 수 있는지 역할을 하는 것이 3번째!
//      configurable : true  // -- 얘는 재정의 잘 안함

// });

// // console.log(person.firstName); // 위 내용 출력   홍
// // person.firstName = '최'  // 설정(내용) 바꾸기
// // console.log(person.firstName); // 바뀐 내용 출력   최

// // const person1 = {
// //   firstName : '홍'
// // }
// // 위의 두 가지는 코딩만 다를뿐 같은 내용이다

// // for(Book vo:list) {
// //   //책에 있는거 하나씩 뽑아써요? 아래와 같아요
// // }

// for(let idx in person){
//   console.log(person);      // (key)이면 키값을 뽑아내고 저장하면 결과가 안나와요(있긴한데)
//   // (person)하면 보이긴하는데 분홍색으로 나와요? 
// }


// --------------여태까지는 const obj = {  } 로 객체를 생성했어요

// const person = new Object()   // 여기서 뉴 오브젝트()가 = {} 같은 거지만 내부적인 구조는 달라요(동일한 게 아니다)

// // 내용이 없이니까 내용인 프로퍼티를 넣어줘요
// person.name = '홍길동';
// person.age = 20;
// // 이렇게 넣은 프로퍼티는 default로 박혀요 
// console.log(person);
// // 모든 객체는 프로퍼티를 담고 있기때문에 객체 모습을 띄고 있따.

// 1. 문자열 만들기
// const strObj = new String('소리없는 아우성');
// console.log(strObj);   // 소리없는 아우성, 그냥 string! 
// console.log(typeof strObj);   // 뒤에 있는게 객체니까 obj나옴

// const strObj1 = {
//      name : '홍길동'

// }  
// console.log(typeof strObj);   // 뒤에 있는게 객체니까 obj나옴

// index가 je값이고 length라는 property도 생성하고 기본적인 배여 ㄹmethodㄱ 적용되지 않음
// 그말인즉슨 함수를 가지고 있지 않음

// 2. 숫자 값 만들기
// const numObj = new Number(100);

// console.log(numObj);

// 3. 현재시간으로 객체만들기 --- bulit in에서 가장 많이 사용됨
// const dataObj = new Date();
// console.log(dataObj.toLocaleDateString());   

// 동일한 형태의 객체를 만들려면? 객체별로 복붙해서 만들어야해요? -> 댕고생
// let object1 = {

//   name : '홍길동',
//   age : 20
// }

// let object2 = {

//   name : '신사임당',
//   age : 30
// }

// let object3 = {

//   name : '최길동',
//   age : 40
// }
// 여기서 다른 방식으로 만들려고 한 게 '사용자 정의 생성자 함수'


// 함수 선언문 이용(생성자 함수를 이용해서 생성)
// : 특별한 문법이 있는 것은 아니지만 함수를 만들 때에는 반드시 첫글자를 대문자로!!!
// 2가지 형태로 사용이 가능함
// 1. 일반 함수
// 2. 생성자 함수
// function Person() {

// } 

// const person1 = new Person();
// const person2 = {}

// console.log(person1);
// console.log(person2); // 일반 함수에 냅다 new를 하면 만들수가 있네?

// 일반적으로 생성자 함수의 형태를 알아보아요 , 특징도 함께! 
// 일반함수 circle인 ()값을 가진 객체
// 특징1. this keyword가 나와요
//    여기서 this는 이 생성자 함수로 만들어지는 객체를 지정
// 특징2. return 구문이 없음
// 생성된 객체를 리턴해요 그래서 return을 쓰지 않아요
// function Circle(radius) {
//     this.radius = radius;   // 디스 뒤가 프로퍼티 역할을 함, 함수를 디파인함
//     this.getDiameter = function() { 
//         return 2 * 3.14 * radius;
//     }
// }

// // function getresult(a,b) {
// //   return a + b ;
// // }
// let circle1 = new Circle(5);
// let circle2 = new Circle(10);     

// console.log(circle1);
// console.log(circle1.getDiameter());

// // THIS 형태가 다양한데 1,2,3입니다
// function foo(){       // 얘는 일반인지 생성자인지 아직 알 수 없지만
//     console.log(this);
// }   

// foo();   // 여기서 일반함수로 호출하고 this가 의미하는 것은 전역 객체(window)

// const obj = {

//     foo : foo  // 뒤는 foo(){}함수이고 
// }
// const obj = {   // 함수를 어떻게 쓸 수 있는지 알아봐요~  1. 축약표현  2.  3. -- 추후 에러잡을 때 유용함...

//     foo,  // 1. 위의 함수를 축약해서 쓸 수 있어요 - 축약표현 "foo:foo = foo," 이거야! ---> 이걸 메소드라고 해요 ^^ 와 ㅋㅋㅋ
//     // 객체가 가지고 있는 함수. ES6의 축약표현
//     // 이렇게 축약표현으로 되어 있는 함수를 메소드라고 해요 ^ㅠ^...주륵..
//     // name : '홍길동'
//     // 객체가 가지고 있는 함수들을 - 자바에서는 메소드 (일반론)
//     // ES6에서 메소드는 어떤 특별한 함수, 객체 안에 함수가 있다고 해서 전부 메소드라고 하지 않아
//     // 언제 쓰냐? 1) 축약표현  2) 금요일에 말했던 error 형태
// }

// obj.foo(); // 2. 이런식으로 호출이 됨  {foo:f}  푸가 지치하는 게 있고 함수가 foo이다. 
// // foo: 라는 게 있는데 f가 지칭하는 게 foo라는 함수야 라고 해석..... 어렵다 ㅠㅠ ㅋ

// const obj1 = new foo();  // 위의 function foo를 생성자 함수로 쓰는 객체 
// //3.  만들어진 객체를 obj1으로 찍기 -- foo {} = foo라는 생성자 함수를 만드는 객체
// // 생성자 함수는 new keyword와 함께 사용되고 그리고 그 안에 return 구문이 없어요

// // 예시 잘 봐요 ! ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆
// function Circle1(radius) {

//     this.radius = radius;  
// }

// // new circle(10);  // 이렇게 쓸 목적을 가지고 위에 함수를 쓴거야?
// // 여기까지 하면 위의 함수에 의해서 객체가 만들어지고
// // const Circle = new Circle(10) ;  // 이렇게 써야지 저장이 되고 return을 코드를 안적지만
// // 쓰지 않았음에도 불구하고 암묵적으로 this가 return이 된다.
// const circle3 = Circle1(10); // 일반함수로 호출 했을 때 this는 전역객체(window)!
// console.log(circle1);   // 돌려주는게 없잔항? 그럼 'undefined' 나옴
// why? 함수로 호출됐는데 리턴이 없어서 묵시적응로 undefined가 리턴이 되요.
// <-> 근데 리턴을 return{ }; 을 줬잖아? --> 이 생성자 함수로 객체를 만들고
// -> 아무것도 없는 빈 객체를 리턴하게 되고 --> 원래는 this를 받아야 할 게 
// -> {} 리턴이 됨 => 그래서 여기서는 return을 써서는 안됩니다! 

// 리턴 구문이 있을 때 1)객체->객체 2) 프리미타입->인스턴스 을 리턴하느냐에 따라 달라져
// 두가지 용도로 함수를 다 쓸 수 있고 내가 원하는 생성자 or 일반 함수 형태로 쓸 수 있엉
// 그래서 두 가지로 나눠서 쓰라고 하쥬... ㅠㅠ 하 ㅠㅠㅠㅠㅠㅠㅠ 

// --------------------예시 더 봅시다?!---------------------------------------
// var myName = '홍길동';  // window에 property 등록
// let myAge = 20;         // window에 등록 x

// console.log(myName);
// console.log(window.myName);  // 홍길동
// console.log(window.myAge);   // undefined

// function foo() {
//     console.log(this);   // window객체를 찍겠다는 거! 그 윈도우가 myName!
//     // 윈도우 객체는 생략해서 쓰지 않아여!
// }

// foo();

// 그러니까 가장 큰 차이점은 1. 일반함수: new가 x, return은 o
// 2. 생성자 함수: new가 o, return이 없어도 new 옆에 ()가 도출됨

// 함수 선언문
// function foo() {

// } // 이거 자체가 ㅏ객체이고 foo라는 변수가 만들어져서 가리키는 게 
// // 함수자체에 피러퍼티를 붙일 수 있어요...! 
// // 첫번째 phase에서 foo라는 변수가 생성(묵시적으로)
// foo.myName = '홍길동'
// foo.myFunc = function(){
//     console.log(this);
// }

// console.log(foo.myName);  // 홍길동
// foo.myFunc();  //이때 this는 foo객체를 가리키니까 

// ---------------- 내부 메소드 2개 
// 1. [[Call]] 메소드 : 모든 함수에 붙을 수 있음
// function foo() {

// }
// // foo는 일반함수로 호출이 가능하기 때문에
// // 기본적으로 [[call]]를 가지고 있는 함수
// // foo는 callable
// foo();  // 외부적--큰 문제 없이 실행이 잘 될거에요 내부적--호출됨

// var myVar = 100; //정확하게는 윈도우 전역객체로 붙어이는 프로퍼티 
// myVar();         //이거는 [[call]]이 없어서 에러가 남

// call과 construct의 공통점은 내부로 호출이 됨?

// 2. [[Construct]] 메소드 : 모든 함수에 다 붙을 수 없음 -- 근데 내부 메소드가 붙는 경우@@
// 붙는 경우가 따로 있음  1) 함수 선언문으로 만들었을 때
// function myFunc() {
// }
// var myFunc = function() {   // 2) 함수 표현식: 구별하기 위해서 이름을 안쓰고 익명으로 씀 = 뒤가 하나의 표현식으로 defined 할 수 있게됨
// //이 함수도 결국 construct를 갖고 있는 것입니당. 
// }

// // 3) 클래스 : 내부적으로 야를 잘 모르면 생성자 함수로 봄! 
// class myFunc {
// }

// 결국 1)2)3)는 결국 생성할 수 있는 함수형태로 new와 함께 사용됨. ---> 인스턴스(객체)가 만들어짐
// 그래서 내부적으로 객체가 생성되니까 => construct라고 함

// function myFunc(){

// }
// new myFunc();      // new에 따라서 있으면 [[construct]]호출, 없으면 [[call]]호출
// neww에 따라 다른 메소드를 내부로 호출한다! 

// 근데 이런 call 이나 construct가 안붙는 경우가 있어요~?


// -- 내부 메소드가 안 붙는 경우@@
// 첫. 함수 선언문, callable([[Call]]가지고 있어요!) 
// 두. constructor([[Constructor]] 가지고 있어요!)
// function foo() {

// }
// // 첫. 을 사용할 때에는
// foo();
// // 두.를 사용할 때에는
// new foo();
// // 코드 에러가 없어요~!  => 이말인즉슨, 함수 선언문은 문제가 없음

// // 함수 표현식
// const bar = function() {

// }
// bar();
// new bar();
// // 이것도 둘 다 되요  => 함수 표현식도 일반 or 생성자 함수도 문제가 없음
// 클래스는 나중에 따로~ 

// const obj = {
//     x : function() {}   // 특별한 경우가 아니기때문에 메소드라고 하지 않아요! 
//     // 함수리터럴을 가지고 만든 함수 표현식으로 객체를 만들고 있어요!
//     //메소드가 아니기때문에 가능한 일!
//     //에러가 안남
// }
// new obj.x();  // 메소드가 아니라서 객체생성이 가능

// Arrow-Function
// const myFunc = (a,b) => {return a+b}
// myFunc();    // 이건 쌉가능, [[Call]]이 있어요! Error! 

// var obj = {
//     // myFunc : Function(){}
//     myFunc(){   // 마치 자바처럼 이렇게 쓸 수 있어요^^ 빡치네 ㅋ

//     },  // 얘만 메소드임 --> 범위가 좁음 (일바적론으로 메소드라고 하는데 안에만 메소드임)
//     name : '홍길동'
// }
// new obj.myFunc();   // constructor가 아니라서 객체 생성이 안됨  -->  나중에 프레임워크나 뷰를 쓸 때 에러가 어떤 건지 알 수 있어요^^

// // 함수 선언문 - constructor
// function add(x,y) {
//     return x + y;
// }
// let instance = new add();  // ok

// console.log(instance);     // add {} 나오고 (this가 없으니까 property가 안됨)

// // 함수 선언문 - 
// function createUser(name, age){
//     // 일반적인 방법 - 생성자 함수를 받음
//     // this.name = name;
//     // this.age = age;
    
//     // 프로그램틱하게~ 만드는 방법~ 허허 
//     // return {name, age}  // = return key과 value의 쌍 원래는 'name : name, age : age'임
// } 

// let inst = new createUser('홍길동', 20); // new 없이 써도 되요.
// console.log(inst);

// 함수 선언문 -- 생성자 함수(첫글자 대문자)
// function Circle(radius){
//      this.radius = radius;
//      this.getDiameter = function() {}
//           console.log('haha');

// }

// const circle1 = Circle(10);
// // console.log(circle1);       // new 있는지 없는지 잘 보고 위의 함수가()반영
//                                // circle1은 undefined?

// // console.log(radius);    // 10  사실은 (window.radius) 임
// circle1.getDiameter();      // 결국 error!


// log 와 dir 차이점
// var obj = {
//     name : '홍길동'
// }
// console.log(obj);   // 문자열로 출력
// console.dir(obj);   // 문자열 말고 객체로 출력

function square(number) {
    return number * number;
}

console.log(square);
console.dir(square);