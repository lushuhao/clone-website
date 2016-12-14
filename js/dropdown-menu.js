/**
 * Created by lu on 2016/12/13.
 */
$(window).on('load',function () {
  dropDown();
})

function dropDown() {
  $('#drop').click(function () {
    $(this).children('ul').stop().slideDown();
  });
  $('#drop li').hover(function () {
    $(this).children('div').toggle();
  });
}
