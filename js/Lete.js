var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂) 看不见我~~看不见我~~';
        clearTimeout(titleTime);
    } else {
        // $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

window.addEventListener('load', function (e) {
    var since = 2019;
    var name = '轩轾';
    var now = new Date();
    var nowYear = now.getFullYear();
    since = since == nowYear ? since : since + " - " + nowYear;
    document.querySelector('.copyright').innerHTML = '©' + since + ' <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> ' + name
})
// $(document).ready(function (e) {
//     $('.copyright').html('©2019 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> 轩轾');
// });