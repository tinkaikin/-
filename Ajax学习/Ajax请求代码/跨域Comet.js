//还不完善

function 跨域comet(url, progress3, finished4) {
    let xhr = new XMLHttpRequest();
    let received = 0;
    xhr.open('get', url, true);
    xhr.onreadystatechange = function() {
        let result;
        if(xhr.readyState == 3){
            result = xhr.responseText.substring(received);
            received += result.length;
            progress3(result);
        }else if(xhr.readyState == 4){
            finished4(xhr.responseText);
        }
    }
    xhr.send(null);
    return xhr;
}