
function myFunc(){
    // console.log($('ul > li').text());
    $('ul > li').each(function(idx,item) {
        // idx: 0~1씩 증가하는 순번
        // item: 현재 사용되는 문서객체(document object)
        console.log($(item).text());
        // 우리는 제이쿼리를 할거니까
        // 제이쿼리 객체를 문서로 연결
        // 해당 문서를 제이쿼리 객체로 변경!
        // 이렇게 해야 각 문자로 찍힘
        
    });
    // $에서 실행된 것 함수가 실행하고 * 반복(선택 다 될때까지)
    // $에서 선택된 것을 fucntion함수 처리하고 이런 식!
}

function removeBtn() { // 버튼 중에 disabled속성이 있는 것 
    // $('button[disabled]').removeAttr('disabled');  속성의 값을 알아내세요
    // alert($('button[disabled]').attr('data-author'));  속성의 값을 변경하게요
    // 속성의 값을 변경하게요 , 두개면 뒤에 있는 걸로 인자를 바꿈
    alert($('button[disabled]').attr('data-author','신사임당'));
}