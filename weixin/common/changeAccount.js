/**
 * Created by hello on 2017/3/1.
 */

window.onload = function () {
    document.getElementById("num").innerHTML = account;

    var clipboard = new Clipboard('.btn', {
        text: function () {
            return account;
        }
    });

    clipboard.on('success', function (e) {
        console.log(e)
    });

    clipboard.on('error', function (e) {
        console.log(e)
    })

};


