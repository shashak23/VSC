
// 버튼 클릭 이벤트
// 함수 선언문 - event handler
function myFunc(){
  
  // jquery를 이용해서 ajax를 호출
  // ajax()함수를 이용해서 호출해요
  // 그런데 호출할 때 여러가지 정보를 넣어야 해요
  // 여러가지 정보를 객체리터럴로 이용해서
  // 객체로 만들어서 인자로 전달
  $.ajax({
     url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
     // async: 비동기방식으로 호출할 것인지? 동기방식으로 호출할 것인기? 
     // default는 (뭐냐면 어싱크가 싱크로나이제이션이어서) 비동기이고 true야
     // 비동기가 뭘까? (동기 vs 비동기 / non-sync?)
     async: true,

     // 서버쪽 프로그램에게 전달할 데이터를 명시해요
     // 여러개를 전달해야하기 때문에 객체를 이용해요
     // 데이터는 아래와 같이 넘겨요
     data: {
        key: 'c605b931f51009d4c53d47069e5b40bd',
        targetDt: '20230119'
     } ,
     // type은 AJAX호출의 방식으로 GET이나 POST를 명시하면 되요
     type: 'GET' ,
     // 호출결과를 어떤 데이터 형식으로 받은건지 설정
     // default값이 json이에요
     dataType: 'json',
     // 이런 내용을 가지고 호출하면 결국 둘 중의 하나에요
     // 성공하던가 실패하던가
     // 어떤 이름으로 받을지는 fucntion() 괄호에 넣음되요
     success: function(data){
        // console.log('호출 성공');

        // 정확히 어디에 위치한가를 찾기 ! 
        // 근데 제일 순위가 높은 영화가 배열의 [0]째에 있으니까
        // {18} 다시 18개의 프로퍼티가 있는 객체! 
        // movieNm이라는 key 값을 access해야하니까
        // 여기까지 찍기 
        //console.log(data.boxOfficeResult.dailyBoxOfficeList[0].movieNm);

        // 1등인 영화 제목을 html의 원하는 곳에 넣기
        $('div > div').text(title);

     }, 
        // 성공하면 서버가 보내준 josn 문자열을 
        // jQuery가 자바스크립트 객체로 바뀌어요 
        // 그리고 그 객체를 success의 함수의 인자로 전달!
        // 자기가 알아서 객체화를 시켜요!

     error: function(){
        console.log('호출 실패');
     }

  });

}