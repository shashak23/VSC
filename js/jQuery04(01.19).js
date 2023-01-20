function myFunc() {
    //$('#innerDiv').remove(); // 삭제하기 

    //$('#innerDiv').hide(); // 숨기기 

    // 숨겨져 있는거 다시 보이게 하려면 .show()

    // 후손만 삭제하는 것
    $('#innerDiv').empty();

}

function display_input() {
    alert($('#myID').val());
}