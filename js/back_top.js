/**
 * Created by lu on 2016/12/21.
 */

$(document).ready(function () {
  $(window).scroll(function () {
    var h = $(window).outerHeight();
    var osTop = $(window).scrollTop();
    if (osTop > h){
      $("#btn").show();
    }else{
      $("#btn").hide();
    }
  });

  $("#btn").click(function () {
    $("html,body").animate({scrollTop:0},"slow", "linear");
  });
});

/*jQuery(document).ready(function($) {

  $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');// 这行是 Opera 的补丁, 少了它 Opera 是直接用跳的而且画面闪烁 by willin

  $('#top').click(function(){
    $body.animate({scrollTop: $('#header').offset().top}, 1000);
    return false;// 返回false可以避免在原链接后加上#
  });

});*/
