
//还没完善,自己瞎写
function jsonp(url, 回调函数) {
    let script = document.createElement('script');
    if(url.indexOf("callback=") != -1 ){
        script.src = url;
    }else {
        script.src = url+"&"+"callback="+回调函数
    }
    // document.body.appendChild(script);
    document.body.insertBefore(script, document.body.firstChild);
}