function SaveImage() {
    var username = document.getElementById("nickname").value;
    var input1 = document.getElementById("upload");
    if (typeof FileReader === 'undefined') {
        //result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
        input1.setAttribute('disabled', 'disabled');
    } else {
        input1.addEventListener('change', readFile, false);
    }


        var file = this.files[0]; //获取上传文件列表中第一个文件
        if (!/image\/\w+/.test(file.type)) {
            //图片文件的type值为image/png或image/jpg
            alert("文件必须为图片！");
            return false;
        }
        // console.log(file);
        var reader = new FileReader(); //实例一个文件对象
        reader.readAsDataURL(file); //把上传的文件转换成url

        //当文件读取成功便可以调取上传的接口

        reader.onload = function (e) {
            var img_base = reader.result;
            console.log("%s", img_base);

            var image = new Image();
            // 设置src属性 
            image.src = e.target.result;
            var max = 200;
            // 绑定load事件处理器，加载完成后执行，避免同步问题
           
                // 获取 canvas DOM 对象 
                document.getElementById("cvs").src = this.result;
                $.ajax({
                    type: "POST",   //访问WebService使用Post方式请求

                    ContentType: "application/json", //WebService 会返回Json类型
                    url: "WebService.asmx/SaveImage", //调用WebService的地址和方法名称组合 ---- WsURL/方法名

                    // data: "{image:'" + "123" + "'}",
                    data: { image: image.src, name: username },
                    dataType: 'json',
                    success: function (result) {//回调函数，result，返回值
                        var r = result.d;
                        if (r == "yes") {
                            alert("right");
                        } else {
                            alert("error");
                        }
                    }

                });

            };
        };
    

/**
 * 图片按宽高比例进行自动缩放
 * @param ImgObj
 *     缩放图片源对象
 * @param maxWidth
 *     允许缩放的最大宽度
 * @param maxHeight
 *     允许缩放的最大高度
 * @usage 
 *     调用：<img src="图片" onload="javascript:DrawImage(this,100,100)">
 */
function DrawImage(ImgObj, maxWidth, maxHeight) {
    var image = new Image();
    //原图片原始地址（用于获取原图片的真实宽高，当<img>标签指定了宽、高时不受影响）
    image.src = ImgObj.src;
    // 用于设定图片的宽度和高度
    var tempWidth;
    var tempHeight;

    if (image.width > 0 && image.height > 0) {
        //原图片宽高比例 大于 指定的宽高比例，这就说明了原图片的宽度必然 > 高度
        if (image.width / image.height >= maxWidth / maxHeight) {
            if (image.width > maxWidth) {
                tempWidth = maxWidth;
                // 按原图片的比例进行缩放
                tempHeight = (image.height * maxWidth) / image.width;
            } else {
                // 按原图片的大小进行缩放
                tempWidth = image.width;
                tempHeight = image.height;
            }
        } else {// 原图片的高度必然 > 宽度
            if (image.height > maxHeight) {
                tempHeight = maxHeight;
                // 按原图片的比例进行缩放
                tempWidth = (image.width * maxHeight) / image.height;
            } else {
                // 按原图片的大小进行缩放
                tempWidth = image.width;
                tempHeight = image.height;
            }
        }
        // 设置页面图片的宽和高
        ImgObj.height = tempHeight;
        ImgObj.width = tempWidth;
        // 提示图片的原来大小
        ImgObj.alt = image.width + "×" + image.height;
    }
}