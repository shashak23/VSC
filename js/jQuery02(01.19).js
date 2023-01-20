
function myFunc() {
    alert('버튼이 눌렸어요!');  // 경고창이 뜸
}

function secondFunc() {
    alert('DIC가 눌려어요!');   // 또 다른 팝업창
}

// event handler 
function myMouseEnter() {
    // 1. event가 발생한 객체(event가 발생한 event source)를 찾아야 해요
    // $()를 써서 jquery객체로 변환
    // css처리를 붙여서 할 수 있도록 css를 연결하여 설정
    // $(event.target).css('color','red');
    // $(event.target).css('background-color','yellow');
    // 근데 위에꺼는 사실 비효율적임 ㅋ
    $(event.target).addClass('myEnterStyle');


} 

function myMouseLeave() {
//     $(event.target).css('color','black');
//     $(event.target).css('background-color','white');
       $(event.target).removeClass('myEnterStyle');

}
// 위의 두 작업은 결국엔 하나를 이어붙여서 하는게 아니고
// 두 개의 작업을 서로 따로 하게 됨 -> 성능이 느려짐