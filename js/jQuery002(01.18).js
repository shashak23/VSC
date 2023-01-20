function func(){
    console.log($('#apple').text());
    console.log($('#apple +li').text());
    console.log($('ul > li.myList').text());    
    console.log($('[type]').attr('id')); 

    //console.log($('form > input').attr('id'));
    // 앞에서 찾은 것 중에 첫번째 . 상태 선택자.
    console.log($('ol > li:first').text());

    // 첫번째꺼 나온 거 이후 + li
    console.log($('ol > li:first + li').text());

    console.log($('ol > li:last').text());
}