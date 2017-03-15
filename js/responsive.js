$(document).ready(function(){
    $("#menu-btn").click(function() {
        if($('#leftcol:visible').length) {
            $('#leftcol').hide();
            $('#min-topbar').height(80);
        } else {
            $('#leftcol').show();
            $('#min-topbar').height(48);
        }
    });
});
