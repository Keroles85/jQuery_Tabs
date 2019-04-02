$(document).ready(function () {  
  $("#tabs li").click(function () {  
    var tab_id = $(this).attr("data-tab");

    $("#tabs li").removeClass("active-link");
    $(".tab-content").removeClass("active-tab");

    $(this).addClass("active-link");
    $("#" + tab_id).addClass("active-tab");
  });
});