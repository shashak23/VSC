function myFunc() {
   // 버튼을 누르면 kakao 이미지 검색을 해서 
   // 그 중 첫번째 이미지를 이용해서 DIV에 붙일거에요
   // open api를 사용한 것 처럼 
   // ajax를 호출하고 {객체}로 부르는
   $.ajax({
      async: true,
      url: 'https://dapi.kakao.com/v2/search/image',
      type: 'GET',  // get방식
      headers: {     // 인증키 넣기
         Authorization: 'KakaoAK 2809648d816ef75bda83cde086b23c4f'

      },
      data: {
         query: '아바타2'  // 검색하고 싶은 검색어를 넣는 부분
      },
      dataType: 'json',

      success: function (data) {
         console.log('호출 성공');
         // 검색해서 나올 이미지 경로를 알아낸다음에
         // div를 찾아서 자식으로 붙이고 
         let imgurl = data.documents[0].thumbnail_url; // 배열
         let myImg = $('<img/>').attr('src',imgurl);
         $('div').append(myImg);
      },


      error: function () {
         console.log('호출 실패');
      }
   });

}