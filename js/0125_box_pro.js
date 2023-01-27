
// // 교수님 st 박스오피스 순위 실습

function myFunction(){
    // 날짜를 가져와서 ajax를 호출하기 
    $.ajax({
        async: true, // 당연히 비동기
        url:'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        type: 'GET', // 기본적인 확인 사항 type - GET / POST 인지 
        timeout: 3000,   // 1/1000단위로 초를 적어요, 이걸 안적으면 서버가 데이터를 보내줄 때까지 기다림
        data: { 
            // 서버쪽을 호출할 때 넘겨줘야하는 값
            key: 'c605b931f51009d4c53d47069e5b40bd',
            targetDt: ($('[type=date]').val()).replace(/-/g,'')
            // 날짜를 선택하게 하기 위해서는
            // 2023-01-01 <-> 20230101 을 맞추기 위해 yyyymmdd로 설정, 대쉬(-)를 공백으로
            // 정규식을 이용하여 문자열 치환 - replace() 방식
            // /-/g = 슬레쉬(/)의 안에 있는 데쉬(-)를 찾아서 g(바꿔라), 뒤의 '' (이것)으로
        },
        dataType: 'json', // 사실 안써도 되는데 why? default값이 json이에요~ 요즘에는 특히~ 
        success: function (data){
            $('tbody').empty();
            alert('성공')
            // 성공하면 당연히 서버는 결과값을 json 문자열로 전달가호
            // 그러면 이 무자열을 받아서 무자열을 분석해서 결과처리를 해야해요
            // 이 json 문자열 처리가 쉽지 않아요
            // json과 자스가 생긴게 비슷하니까 쉽게 바꾸고 객체로 변경해서 우리에게 함수의 인자로 전달!
            
            // 이 json을 분석하는 것 api 의 응답예시를 확인!! 
            // 확인하면 data -> object {1} 이 나에게 반환된다!!
            let arr = data.boxOfficeResult.dailyBoxOfficeList;
            // 배열안에 각 요소에 대해서 함수를 호추(call back)
            $.each(arr, function(idx, item){
                     // idx: 반복할 때마다 숫자가 증가하느냐
                     // item: 반복할 때마다 추출되는 배열안에 있는 원소
                     // 데이터를 정상적으로 가져오는지 확인
                    //  console.log(item.movieNm);
                     // 화면에 적절한 형태로 띄우기 
                     // 왜 ajax를 쓰는가 -> 화면이 그대로 남아 데이터도 남아 있게 되어서~ (화면이 바뀌는게 아니라서)
                
                //      <tr>
                //      <td>1,001</td>
                //      <td><img src=""></td>  // 이미지 넣기 
                //      <td>data</td>
                //      <td>placeholder</td>
                //      <td>text</td>
                //      <td><button class='btn btn-danger">삭제</td> // 삭제버튼만들기 
                //  </tr>

                // 노동집약적이지만 html의 위의 부분을 각각 설정
                let tr = $("<tr></tr>");     // <tr></tr>
                let ranktd = $("<td></td>").text(item.rank);   // <td>text(item.rank)</td>
                // 포스터, 이미지 카테고리 넣기
                let postertd = $("<td></td>"); 
                let posterImg = $('<img/>')
                postertd.append(posterImg);
                // 이미지를 가져오기 위한 ajax를 호출해야 해요
                $.ajax({
                    async: true,
                    url: 'https://dapi.kakao.com/v2/search/image',
                    type: 'GET',
                    data: {
                        query: item.movieNm +'포스터'
                    },
                    headers: { // 내 키 값 넣어주기 - 인증과 관련된 것이라 형식에 맞게 써야함
                        Authorization: 'KakaoAK 2809648d816ef75bda83cde086b23c4f'
                    },
                    success: function(data){
                        // console.log('이미지 검색 성공');
                        // closure 사용하기
                        // why? non-blocking - 비동기 , ajax의 특징이 기다리지 않는건데
                        // ajax를 수행하고 결과가 오지 않은 채로 그대로 수행되고
                        // 그대로 수행하고 갖다 붙이면서 1회가 끝나면 이미지를 붙여요
                        // 이미지가 기존에 지역변수였는데 기존의 지역변수가 날라가고
                        // 두번째에 ajax의 안에 있는 success로 인해
                        // 마지막의 동작은 실행시키는 ajax로 인식을 하지 않고 
                        // 남아버려서 이미지 ajax의 동작과 결과가 모두 실행이 되는 것임
                        // 이미지가 결국 data에 맞는 걸로 끼워 들어가고 
                        // 워낙 빨리 들어가다(클로져가 빨리 실행되다)보니까 검색이 한번에 되는 것으로 나옴
                        let imgurl = data.documents[0].thumbnail_url;
                        posterImg.attr('src',imgurl);  
                        // 배열의 첫번째니까 [0]으로 가져오고
                        // 이미지를 가져오기
                        // 그럼 이제 posterImg에 넣기
                    },
                    error: function(){
                        alert('이미지 검색 실패')
                    }

                });

                let titletd = $("<td></td>").text(item.moviNm);   
                let audtd = $("<td></td>").text(item.audiCnt);
                let opendt = $("<td></td>").text(item.openDt);
                // 삭제버튼만들기
                let deletedt = $("<td></td>");
                let delBtn = $("<button></button>").text('삭제').addClass('btn btn-danger');
                deletedt.append(delBtn);
                delBtn.click(function(){
                    // jQuery event 처리방식에서만 이벤트 핸들러에 this가 등장하면
                    // this는 event source 문서객체를 지칭해요
                    // 여기서는 fucntion()이 this이고 문서객체이다
                    // 일반적인 document를 jqeury형식으로 바꾸는 거니까
                    // 결국 여기서 말하는 this 는 delete이다
                    // 근데 우리는 한 행을 지워야하는 거니까 this의 부모 < td의 부모 < tr!
                    // 를 찾아가는 코드를 넣고 지우는 메소드를 넣고! 
                    $(this).parent().parent().remove();
                });   
                // delBtn.on('click')의 축약버전 'delBtn.click()
                // 삭제버튼에 클릭 이벤트에 대한 이벤트 핸들러를 등록해 줘요! (onclick 안씁니다?!)
                // 뭘 만들어서 어디에 붙여줄지는 정확히 설정
                tr.append(ranktd);
                tr.append(postertd);
                tr.append(titletd);
                tr.append(audtd);
                tr.append(opendt);
                // 삭제 버튼 붙이기(정확히는 삭제버튼이 붙여진 deletedt를 넣기)
                tr.append(deletedt);
                // 어디에 붙여줄지를 재명시 - why? tbody > tr > td 이런 순으로 속해있기 때문에
                $('tbody').append(tr);

                })
        },
        error: function(){
            alert('실패')
        } 
     });
    // 그런데 지금 클릭한 게 링크 <a> 인데 
    // 링크는 default event를 가지고 있어요
    // 그래서 default event를 하지 말아야 하고 막아줘야 해요
    // url 속성으로 마구 넘어가는 일을 막기 위해 : event.preventDefault(); 입력
    event.preventDefault(); 
} 

