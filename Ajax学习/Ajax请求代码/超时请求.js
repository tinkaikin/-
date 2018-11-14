function 超时设定(callback,地址){
    let xhr = createXHR();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4){
            try{
                if((xhr.status >= 200 && xhr.status < 300)|| xhr.status ==304){
                    callback(xhr.responseText);
                }else {
                    alert('404')
                }
            } catch(ex){
                xhr.ontimeout();
            }
        }
    }

    xhr.open('get', 地址 , true);
    xhr.timeout = 1000;
    xhr.ontimeout = function() {
        alert('超时');
    }
    xhr.send(null);
}

