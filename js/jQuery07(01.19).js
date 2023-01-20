function innerFunc(){
    alert('버튼이 클릭클릭!');
    event.stopPropagation();   // 여기서 전파하기 말라고 상위에게 전달이 안되도록 함
}

function outerFunc(){
    alert('div가 클릭클릭!');
}