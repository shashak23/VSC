// var keyword 같은 scope내에서 중복선언이 가능해요

// var x = 100;
// var y = 200;
// // 같은 스코프 내에서 중복 선언이 가능하다. <-> java
// var x = 300;  // var가 없는 것으로 간주
// var y;  // 이런 경우는 무시해요(위에께 없어지는 게 아니구)

// var keyword는function level scope만을
// local scope로 인정해요

var x = 1;

if(true) {
// scope가 블럭으로 다르게 잡으면 var x는 각자 다른 변수가 되는 것이다!
    var x = 100;
}

console.log(x); // 100 function level scope라서 

var x = 1;

// 자바는 함수가 없고 메소드가 있지요? 자바의 메소드는 클래스 안에 있잖아요?
// <-> 자스는 함수형 언어(함수를 기반으로 하는 언어)에요.

// 특정 코드를 묶어서 사용하기 위해 함수를 많이 사용해요!
// 일반적으로 자스에서 함수는 메소드와 같은 기능을 하는데?!! 독립적으로 사용이 가능해요!
// 함수를 만들 때에는 function keyword를 이용
// 함수가 나오면 뒤에는 식별자가 나와요 ★★
function myFunc() { // 위의x와 블럭안의x는 다른 x에요 why? 블럭 개념이 아니고 함수 개념이어서 다름!

    var x = 200;
    console.log(x);

}
console.log(x);  // 이런 코드 찾아가랑
myFunc();      // 여기서 ()는 'myFunc를 찾아서 실행시키세요.' 라는 뜻
console.log(x);  // 이런 코드 찾아가랑
// 시작하면 자스는 선언된 식별자를 위에서부터 찾아요!
// 맨 위 x를 찾고 공간을 할당해요

// 그러니가 우리가 변수를 선언하잖아요? 그럼 필드는 보통 자스의 메모리에 이름으로 들어가고
// 우리가 알아 볼 수 있도록 선언된 변수(값)이 구분이 되는거고
// 실제로 메모리에는 필드가 'undefined'되는 거에요!

// undefined는 자스에서 primitie type의 앖으로 immutable(불변)이에요
// x를 바꾸고 싶다? 그럼 x를 아예 바꿔서 한다... 이게 무슨 말이지 

// x로 인해 바뀐 undefined 됐던 메모리 공간은 garbage collector(gc)에 의해서 청소가 돼요.
// 

