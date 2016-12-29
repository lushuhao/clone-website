/**
 * Created by lu on 2016/12/29.
 */

// 兼容IE，定义根据ClassName获取元素的方法
function getByClassName(obj, cls) {
  var elements = obj.getElementsByTagName("*");
  var result = [];
  for ( let i=0; i < elements.length; i++){
    if (elements[i].className == cls){
      result.push(elements[i]);
    }
  }
  return result;
}

function hasClass( obj, cls ) {
  return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
}

function removeClass( obj, cls ) {
  if ( hasClass( obj, cls )){
    // remove
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    obj.className = obj.className.replace(reg, "");
  }
}

function addClass( obj, cls ) {
  if ( !hasClass( obj, cls )) {
    obj.className += " " + cls;
  }
}

window.onload = function () {
      window.onscroll = function () {

        var top = document.body.scrollTop || document.documentElement.scrollTop;

        var menus = document.getElementById("menu").getElementsByTagName("a");

        var items = getByClassName(document.getElementById("content"), "item");

        var currentId = "";

        for ( let i = 0; i < items.length; i++) {
          var _item = items[i];
          var _itemTop = _item.offsetTop;

          if (top > _itemTop - 400) {
            currentId = _item.id;
          } else {
            break;
          }
        }

        if (currentId) {
          //给正确的menu下的a元素class赋值
          for (let j = 0; j < menus.length; j++) {
            var _menu = menus[j];
            var _href = _menu.href.split("#");

            if ( _href[_href.length -1] != currentId) {
              removeClass(_menu, "current");
            } else {
              addClass(_menu, "current");
            }

          }
        }
      }
    }