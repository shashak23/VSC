
// 어떤 날짜를 가져와도 검색이 되게끔 변수로 미리 잡아두기 함수 만들기 

function Function(){
    $('tbody').empty();
    // var targetDt = $("form-control form-control-dark w-100 rounded-0 border-0").val();
    var targetDt ='20230101'

    // if(window.event.keyCode ==13){   // onkeyup : 키를 누르고 뗐을때 작동하는 건데
        // keycode=13 이게 엔터여서 
    $.ajax({
        url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        async: true,
        data: {
           key: 'c605b931f51009d4c53d47069e5b40bd',
           targetDt: targetDt
        } ,

        type: 'GET' ,
        dataType: 'json',

        // 영화 정보 어떻게 반복시킬건지
        // 영화 정보 어떻게 붙일건지
        success: function(data){
            // 10개를 다 붙이자!
            // console.log(data.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
           for(var i=0; i < 10; i++){
            // 서버에서 받아온 데이터를 4개의 공간에 저장을 하는 거고
           let title= data.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
           let rank= data.boxOfficeResult.dailyBoxOfficeList[i].rank;
           let audi= data.boxOfficeResult.dailyBoxOfficeList[i].audiAcc;
           let opendt= data.boxOfficeResult.dailyBoxOfficeList[i].openDt;
           let button = $('<button></button>').text('삭제').addClass('btn btn-danger').css('color','red');
           let checkBox = $('<input />').attr('type', 'checkbox').appendTo($("<td></td>"));

           // html의 tb의 자식으로 붙음
           // html 형식으로 바꾸는 것 <td>로 변경
           let tr = $("<tr></tr>");    // <tr>
           let ranktd = $("<td></td>").text(rank)   // <td>1</td>
           let imgtd = $("<td></td>");   
           let titletd = $("<td></td>").text(title)  // <td>title</td> 
           let auditd = $("<td></td>").text(audi)  // <td>title</td> 
           let opendttd = $("<td></td>").text(opendt)  // <td>title</td> 

           //tr하나로 td들을 묶고
           tr.append(checkBox);
           tr.append(ranktd);
           tr.append(imgtd);
           tr.append(titletd);
           tr.append(auditd);
           tr.append(opendttd);
           tr.append(button);

           //하나의 tr이 되서 붙는다 
           $('tbody').append(tr);

        }
        }, 
        // 에러뜨면 어떻게 나올건지 하고 
        error: function(){
           console.log('호출 실패');
        }
        
     });

// }
}

function Function2() {
    if(window.event.keyCode ==13){
        Function();
    }
}


// // 버튼을 클릭했을 때 이벤트를 하는 함수
// function myFunc() {

//     // 여기다가 json연결 넣고
//     $.ajax({
//         url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
//         async: true,
//         data: {
//            key: 'c605b931f51009d4c53d47069e5b40bd',
//            targetDt: '20230119' 
//         } ,

//         type: 'GET' ,
//         dataType: 'json',

//         // 영화 정보 어떻게 반복시킬건지
//         // 영화 정보 어떻게 붙일건지
//         success: function(data){
//             // 10개를 다 붙이자!

//            let title= data.boxOfficeResult.dailyBoxOfficeList[0].movie;
//            let rank= data.boxOfficeResult.dailyBoxOfficeList[0].rank;
//            let audi= data.boxOfficeResult.dailyBoxOfficeList[0].audiAcc;
//            let opendt= data.boxOfficeResult.dailyBoxOfficeList[0].openDt;

//            // html의 tb의 자식으로 붙음
//            let tr = $("<tr></tr>");    // <tr>
//            let ranktd = $("<td></td>").text(rank)   // <td>1</td>
//            let imgtd = $("<td></td>");   
//            let titletd = $("<td></td>").text(title)  // <td>title</td> 
           
//            tr.append(ranktd);
//            tr.append(imgtd);
//            tr.append(titletd);

//            $('tbody').append(tr);

//         }, 
//         // 에러뜨면 어떻게 나올건지 하고 
//         error: function(){
//            console.log('호출 실패');
//         }
   
//      });
// }


// // data를 가져오고 title은 그대로 없으면 될것 같고 해당일자의 박스 오피스 순위 rank 
// // 관람객수 audiAcc를 서서 붙이고 