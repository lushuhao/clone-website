/**
 * Created by hello on 2017/3/1.
 */

Zepto(function ($) {
    $.getJSON('account/data.json', '?time='+new Date().getTime(), function (data) {
        let name = data.name;

        document.getElementById("num").innerHTML = name;

        var clipboard = new Clipboard('.btn', {
            text: () => name
        });

        clipboard.on('success', alert('微信号已复制，请打开微信，点击右上角+号，选择添加朋友，粘贴搜索'));

        clipboard.on('error', (e) => console.log(e));
    });


    // $.ajax({
    //     type: 'GET',
    //     url: 'account/data.json',
    //     data: '?time=' + new Date().getTime(),
    //     dataType: 'json',
    //     timeout: 300,
    //     success: function (data) {
    //         let name = data.name;
    //
    //         document.getElementById("num").innerHTML = name;
    //
    //         var clipboard = new Clipboard('.btn', {
    //             text: () => name
    //         });
    //
    //         clipboard.on('success', (e) => console.log(e));
    //
    //         clipboard.on('error', (e) => console.log(e));
    //     },
    //     error: (e) => console.log(e)
    // })
})

