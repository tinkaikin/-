

//获取表单的key 和 val值
const 数据data = function(表单id,另外添加) {
    var form = document.getElementById(表单id);
    var data = new FormData(form);  //2级
    // let data = serialize(form);   //1级
    if(另外添加 != null) {
        data =  data.append(另外添加);
    }
    return data;
}
