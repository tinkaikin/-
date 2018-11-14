

const ajaxqq = function(类型,地址,数据=null,函数回调, type='json', 异步=true) {
    let method = 类型.toLocaleLowerCase(); //大写改小写了
    let xhr = createXHR();
    if(method == "get"){
        let url = 地址拼接对象(地址,数据);
        xhr.open("get",url,异步);
        xhr.send(null);
    }else if(method == "post"){
        let data = 对象数据拆开(数据);
        xhr.open("post",地址,异步);
        if(数据 != null){
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        xhr.send(data);
    }
    
    返回结果(xhr, 函数回调, type);
}

const getqq = function(地址, 数据=null, 函数回调, type='json', 异步=true) {
    let xhr = createXHR();
    let url = 地址拼接对象(地址,数据);
        xhr.open("get",url,异步);
        xhr.send(null);
        返回结果(xhr, 函数回调, type);
}

const postqq = function(地址, 数据=null, 函数回调, type='json', 异步=true) {
    let xhr = createXHR();
    let data = 对象数据拆开(数据);
        xhr.open("post",地址,异步);
        if(数据 != null){
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        xhr.send(data);
        返回结果(xhr, 函数回调, type);
}


// ===============================================================================



//实例XMLHttpRequest
//结果放回 new XMLHttpRequest();
const createXHR = (function() {
    if(typeof XMLHttpRequest != "undefined") {
        return function() {
            return new XMLHttpRequest();
        };
    } else if(typeof ActiveXObject != "undefind") {
        return function(){
            if(typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],
                    i,len;
                    len = versions.length;
                for(i=0; i<len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex){
    
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        }
    }else{
        throw new Error("No XHR object avaiable.")
    }
    
})();

//onreadystatechange = 结果判定
//跟上面一起的
function 返回结果(xhr, 函数回调, type) {
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4){
            if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                if(type == null){
                    函数回调(xhr.responseText);
                }
                if(type == 'xml'){
                    函数回调(xhr.responseXML);
                }
                if(type == 'json'){
                    let v = JSON.parse(xhr.responseText)
                    函数回调(v);
                }
            }else{
                alert("404")
            }
        }
    }
}
//url: www.baidu.com    get用
//data: {a:123,b:456}
//拼接后是 :www.baidu.com?a=123&b=456
function 地址拼接对象(url,data) {
    if(data != null){
        url += (url.indexOf("?") == -1? "?": "&");
        url += 对象数据拆开(data);
        return url;
    }
    return url;
}

//把json格式拆开        post用
//data : {a:123,b:456}
//结果 : 'a=123&b=456'
function 对象数据拆开(data) {
    let newData = '';
    for (const key in data) {
        if (data.hasOwnProperty(key)) {

            let val = encodeURIComponent(data[key]);
            let name = encodeURIComponent(key);
            newData += `${name}=${val}&`
        }
    } 
    newData = newData.slice(0,newData.length-1);
    return newData;
}


//time 时间 过多少时间后停止请求  1000;
//函数
function 超时请求(xhr, time, 超时后执行方法) {
    xhr.timeout = time;
    xhr.ontimeout = 超时后执行方法;
}