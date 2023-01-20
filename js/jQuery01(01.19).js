// select에서 눌러서 선택을 하는 건데 이게 이벤트가 발생하는 거잖아요
// 발생하는 이벤트를 자스의 함수 선언문을 통해서 하기 
function myFunc(){
    //console.log($(event.target).text());
    // 이 안에 event객체가 자동으로 전달
    // event객체는 event가 발생되었을 때
    // event의 세부정보를 가지고 있는 객체에요
    // event.target => event source를 지칭

    // event.target을 여기에다가 쓰면 documents object가 되죠
    // 이벤트 메소드를 이용해서 처리할 수 있꼬
    $('div').text($('select > option : selected').text()) // "div에 대한 내용을 저기로 바꾸세요"
    // $('select > option : selected').text() // 이렇게 해야 "여러개 중에 내가 선택한 것"이라는 뜻
}