
// 자바스크립트는 arraylist가 없어요~ 
// 기본 자료 구조는 Array 배열입니다 이걸 잘하려면 배열을 잘 찾아야해요 ?! 

// const myArray = [1,2,3,4]

// // 기본 for구문, for는 자바랑 같음
// for(var i=0, i<10; i++) {

// }

// 기본 for구문대신에 forEach를 이용
// myArray = 배열을 반복해, forEach() = 각각
// 처리할 때에는 ()안에  function 함수가 나와요 
// 세미콜론은 없어요!
// myArray.forEach(function (data) {
//     // java의 sysout와 같음
//     console.log('결과는 : ' + data) 
//     // log 컨트롤 space 빈칸 네모 --> 자동완성기능
//     console.log();
// })

// 여기는 그냥 자스의 메모장 같은 역할을 하는 곳이라서
// 엔진을 찾아와서 실행을 시키는 걸 해야해요~~~~ 

// code runner 를 데려와요 와하하 
// 일단 먼저 node.js를 설치해서 이걸 이용해서 실행해봅시다.

// 반드시 저장을 하고 실행을 해야해요!

// 경고창을 띄워요
// alert()은 browser가 가지고 있는 API, ()안에 내용을 화면에 띄워줘요
alert('소리없는 아우성')

// node.js를 이용해서 그냥 JAVASCRIPT CODE를 실행시킬거에요
//변수 선언 해보기
var result 
// java script 변수는 특이한 성질을 가지고 있어요
// hosting 이라는 특성이 있어요
// 내가 변수를 선언하면 undifined라는 걸로 초기화가 돼요
// 문자열 아니고 JS의 primitive value 

// 자바에서는 아래의 사항이 변수를 밑에 만들고 한다? 이거 오류
console.log(result);
// JS에서는 에러가 아니에요~ 그 이유는 'hoisting' 때문이에요
// JS에서는 2개의 phase로 실행되요
// 1번째 phase는 -> creating phase라고 해요!
// 변수 선언, 함수 선언, 클래스 선언, 다 하는데 그걸 create phase라고 해요 >< 
// 모든 선언구문을 찾아서 시별자를 변수에 매핑시켜요
// 위에서 부터 모든 과정이 지나면 처음으로 다시 돌아가서 코드를 실행해요
// 2번째 phase는 execution phase라고 해요! 
var result = 100; 