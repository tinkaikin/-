

//url: www.baidu.com
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



// 普通传入key 和 val-------------------
//url: www.baidu.com
//key: a
//val: 123
//拼接后是 :www.baidu.com?a=123
function 地址拼接参数(url,key,val) {
    url += (url.indexOf("?") == -1? "?": "&");
    url += encodeURIComponent(key) + "=" + encodeURIComponent(val);
    return url;
}

//把json格式拆开
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