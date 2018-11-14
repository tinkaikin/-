

//1.检测withCredentials



function 跨域请求(请求类型, url, 回调函数, 失败函数) {
    let 请求 = 兼容CORS的请求(请求类型, url);
    if(请求){
        请求.onload = function() {
            回调函数(请求.responseText)
        }
        请求.onerror = function() {
            失败函数();
        }
        请求.send();
    }
}
function 兼容CORS的请求(请求类型, url) {
    let xhr = new XMLHttpRequest();
    if("withCredentials" in xhr) {
        xhr.open(请求类型, url, true);
    }else if(typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(请求类型, url);
    }else {
        xhr = null;
    }
    return xhr;
};
