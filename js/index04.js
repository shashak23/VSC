
let i = 100;   // i는 시작부터 끝까지 영향을 미치는 값 -- 지속적으로 살아있다 -- 전역변수 global variavble

function myFunc() {

    let i = 10;     // i는 지역변수

    for(let i=0; i<10; i++) {
        console.log(i);        // 0 1 2 

    }

    console.log(i);    // 10
}

myFunc();

console.log(i);  // 자스의 scope개념을 명확하게 알자구요 :)