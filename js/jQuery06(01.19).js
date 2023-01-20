
// document라는 javascript가 제공하는 문서객체가 있어요!
// document는 DOM을 지칭하는 문서객체에요
// 다큐먼트가 준비가 됐다면 = 돔이 만들어졌다는 건 = 브라우저가 HTML을 다 읽음
// 모두 읽어서 파싱까지 끝냈다는 그 시점이다...

// 이런 코드가 워낙 많이 쓰이거든요
//  $(document).ready(function() {
//     // 각각의 li에 클릭에 따른 기능을 붙일거야
//     $('ul > li').on('click',function() {
//         alert('안녕하세요!');
//     })
// })

// 위의 모든 내용을 축약으로 - call back으로 넣어줌
// 축약으로 $() 이렇게 표편하고 이게 document.ready 를 붙임
$(function() {
    // 각각의 li에 클릭에 따른 기능을 붙일거야
    $('ul > li').on('click',function() {
        // alert('안녕하세요!');
        // 만약 jQuery event 처리에서
        // event handler 안에서 this가 나오면
        // event source 에 대한 문서 객체 
        alert($(this).text()) // 홍길동을 누르면 그게 event source가 됨
        // this가 제이ㅣ쿼리에서 이벤트 처리를 쉽에 해주는데
        // 이걸 무조건 이해해야해요!
        // 여기서 this는 이전 this랑은 달라요!
    })
})

// this의 의미는 크게 3가지로 나타낼 수 있어요
// 1. 일반함수에서 this => window 객체(전역객체)
// 2. 객체의 함수에서 this => 함수를 호출한 객체를 지칭
// 3. 생성자 함수에서 this => 생성자 함수가 생성하는 객체를 지칭


function myFunc() {
    alert('링크가 눌렸어요!');  // 연결시 팝업도 뜨게 하는 방법
    event.preventDefault(); // 막는 방법
}
