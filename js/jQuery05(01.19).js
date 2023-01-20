function myFunc() {
    //새로운 element를 jQuery를 이용해서 생성
    let li = $('<li></li>').text('이순신')    
    // = <li>이순신</li>
    
    // 이렇게 만들어진 jquery객체를 내가 원하는 곳에
    // 부착할 수 있어요
    // 사용하는 method는 4개에요
    // 1. append() : 자식으로 붙이고 제일 마지막 자식으로 붙여요
    // 그래서 붙여야 할 li를 생성을 했으면 append 다음에 넣는다!!
    // $('ul').append(li)

    // 2. prepend() : 자식으로 붙이고 제일 앞에 자식으로 붙여요
    // $('ul').preped(li)

    // 3. before() : 형제로 붙이고 맨 뒤의 앞에 붙이는 거니까
    // 맨 뒷자리에 있는 애를 찾고 그 앞에 붙인다는 개념
    // $('ul > li:last').before(li)

    // 4. after() : 형제로 붙이고 바로 다음에 붙여지는 것
    // $('ul > li:first').after(li)


    // 이미지 붙이기
    // < img src(속성) = './js/car.jpg'> // 사실 이미지는 끝나는 태그가 없어요
    let myImg = $('<img />').attr('src','./image/car.jpg');
    $('ul').after(myImg)
    // 끝나는 태그가 없는 거는 <img /> 이렇게 쓰면 됨
}

function addHandler() {
    // 1.이벤트 핸들러를 붙일 element를 찾아보아요
    // <li>이길동<li>을 찾아요
    // 그 다음에 이베트 핸들러를 특정 이벤트에 등록해요
    // ()안에 있는 마지막 애를 on클릭하면 뒤에 넣어줘
    // $('ul > li:list').on('click', function() {
    //     console.log('강감찬이 클릭되었어요');
    // } )  

    // 위의 형태가 기본이지만 이걸 축약해서 써보는 걸로
    // // on기능 부분을 축약함
    // $('ul>li:list').click(function() {
    //     console.log('강감찬이 클릭되었어요!');
    // })

   // 마지막으로 주의해야 할 점 3가지
}