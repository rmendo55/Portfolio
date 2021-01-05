$(document).ready(function() {
    $(".description-item1").mouseover(function() {
            $(".title1").hide();
            $(".summary1").show();
    });
    $(".description-item1").mouseout(function() {
            $(".summary1").hide();
            $(".title1").show();
    });
});