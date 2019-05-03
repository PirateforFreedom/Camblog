
function checkName() {
    var name = document.getElementById("nickname").value;
    var spanNode = document.getElementById("nicknamespan");
    //用户名的规则： 昵称的长度为1-15，包含任意的字母、数字、中文，不可以使用其他符号
    var reg = /^([\u4e00-\u9fa5]|[a-zA-Z0-9]){1,15}$/i;
    if (reg.test(name)) {
        //符合规则  
        spanNode.innerHTML = "输入符合规范".fontcolor("green");
        document.getElementById("nicknamespan").className = "errorinfo";
        return true;
    } else {
        //不符合规则  
        spanNode.innerHTML = "昵称的长度为1-15，包含任意的字母、数字、中文，不可以使用其他符号".fontcolor("red");
        document.getElementById("nicknamespan").className = "errorinfo";
        return false;
    }
}
function checkPassword() {
    var password1 = document.getElementById("password1").value;
    var spanNode1 = document.getElementById("password1span");

    //密码的规则： 6-16，包含任意的字母、数字，不可以使用其他符号
    var reg = /^([a-zA-Z0-9]){6,16}$/i;
    if (reg.test(password1)) {
        //符合规则  
        spanNode1.innerHTML = "输入符合规范".fontcolor("green");
        document.getElementById("password1span").className = "errorinfo";
        return true;
    } else {
        //不符合规则  
        spanNode1.innerHTML = "密码的长度为 6-16，包含任意的字母、数字，不可以使用其他符号".fontcolor("red");
        document.getElementById("password1span").className = "errorinfo";
        return false;
    }
}
function checkpassword2() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var spanNode2 = document.getElementById("password2span");
    if (password1 === password2 && password2 != "") {
        spanNode2.innerHTML = "输入符合规范".fontcolor("green");
        document.getElementById("password2span").className = "errorinfo";
        return true;
    } else {
        spanNode2.innerHTML = "两次输入密码不一致,或输入密码为空".fontcolor("red");
        document.getElementById("password2span").className = "errorinfo";
        return false;
    }

}
function checkRealName() {
    var name = document.getElementById("realname").value;
    var spanNode = document.getElementById("realnamespan");
    //用户名的规则： 包含任意的字母中文，不可以使用其他符号
    var reg = /^([\u4e00-\u9fa5]|[a-zA-Z]){1,15}$/i;
    if (reg.test(name)) {
        //符合规则  
        spanNode.innerHTML = "输入符合规范".fontcolor("green");
        document.getElementById("realnamespan").className = "errorinfo";
        return true;
    } else {
        //不符合规则  
        spanNode.innerHTML = "包含任意中文,英文，不可以使用其他符号".fontcolor("red");
        document.getElementById("realnamespan").className = "errorinfo";
        return false;
    }
}
function checkSpecialty() {
    var specialty = document.getElementById("specialty").value;
    var spanNode = document.getElementById("specialtyspan");
    var reg = /^([\u4e00-\u9fa5]|[a-zA-Z]){1,15}$/i;
    if (reg.test(specialty)) {
        //符合规则  
        spanNode.innerHTML = "输入符合规范".fontcolor("green");
        document.getElementById("specialtyspan").className = "errorinfo";
        return true;
    } else {
        //不符合规则  
        spanNode.innerHTML = "包含任意中文,英文，不可以使用其他符号".fontcolor("red");
        document.getElementById("specialtyspan").className = "errorinfo";
        return false;
    }
}
function checkCountry() {
    var country = document.getElementById("country").value;
    var spanNode = document.getElementById("countryspan");
    var reg = /^([\u4e00-\u9fa5]|[a-zA-Z]){1,15}$/i;
    if (reg.test(country)) {
        //符合规则  
        spanNode.innerHTML = "输入符合规范".fontcolor("green");
        document.getElementById("countryspan").className = "errorinfo";
        return true;
    } else {
        //不符合规则  
        spanNode.innerHTML = "包含任意中文,英文，不可以使用其他符号".fontcolor("red");
        document.getElementById("countryspan").className = "errorinfo";
        return false;
    }
}
function checkSchool() {
    var school = document.getElementById("school").value;
    var spanNode = document.getElementById("schoolspan");
    var reg = /^([\u4e00-\u9fa5]|[a-zA-Z]){1,15}$/i;
    if (reg.test(school)) {
        //符合规则  
        spanNode.innerHTML = "输入符合规范".fontcolor("green");
        document.getElementById("schoolspan").className = "errorinfo";
        return true;
    } else {
        //不符合规则  
        spanNode.innerHTML = "包含任意中文,英文，不可以使用其他符号".fontcolor("red");
        document.getElementById("schoolspan").className = "errorinfo";
        return false;
    }
}
function checkEmail() {
    var email = document.getElementById("email").value;
    var spanNode = document.getElementById("emailspan");
    var reg = /^[a-z0-9]\w+@[a-z0-9]+(\.[a-z]{2,3}){1,2}$/i;
    if (reg.test(email)) {
        //符合规则  
        spanNode.innerHTML = "输入符合规范".fontcolor("green");
        document.getElementById("emailspan").className = "errorinfo";
        return true;
    } else {
        //不符合规则  
        spanNode.innerHTML = "请输入正确邮箱格式".fontcolor("red");
        document.getElementById("emailspan").className = "errorinfo";
        return false;
    }
}
function init() {
    alert("ddddddd");
}
function getBirth() {
    var date = document.getElementById("birth").value;
    if (date == "") {
        alert("所选日期为空");
        return false;
    }
    return true;

}
function getenroll() {
    var date = document.getElementById("enrolltime").value;
    if (date == "") {
        alert("所选日期为空");
        return false;
    }
    return true;
}
function getSex() {
    var radioValue = $('input[name="sex1"]:checked').val();
    alert(radioValue);
    return true;
}
function VerifyName() {
    var name = document.getElementById("nickname").value;
    $.ajax({
        type: "POST",   //访问WebService使用Post方式请求
        contentType: "application/json", //WebService 会返回Json类型
        url: "WebService.asmx/VerifyNickname", //调用WebService的地址和方法名称组合 ---- WsURL/方法名
        data: "{nickname:'" + name + "'}",         //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到       
        dataType: 'json',
        success: function (result) {     //回调函数，result，返回值
           
            var json = result.d
            
            if (json == "yes") {
                alert("用户名已被注册");
                document.getElementById("nickname").value = "";
                
            }
            else {
                
            
            }
        }
    });
}
function InsertInformation() {
    var name = document.getElementById("nickname").value;
    var pass = document.getElementById("password1").value;
    var realname = document.getElementById("realname").value;
    var specialty = document.getElementById("specialty").value;
    var country = document.getElementById("country").value;
    var school = document.getElementById("school").value;
    var email = document.getElementById("email").value;
    var birth = document.getElementById("birth").value;
    var enroll = document.getElementById("enrolltime").value;
    var sex = $('input[name="sex1"]:checked').val();
    $.ajax({
        type: "POST",   //访问WebService使用Post方式请求
        contentType: "application/json", //WebService 会返回Json类型
        url: "WebService.asmx/InsertPersonInformation", //调用WebService的地址和方法名称组合 ---- WsURL/方法名
        data: "{nickname:'" + name +"',user_picture:'/picture/"+ name+ ".jpeg',pass:'"+ pass+"',realname:'"+realname+"',specialty:'"+specialty+"',school:'" +
            school+"',email:'"+email+"',birth:'"+birth+"',enroll:'"+enroll+"',sex:'"+sex+ "',country:'"+country+"'}",         //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到       
        dataType: 'json',
        success: function (result) {     //回调函数，result，返回值
            var json = result.d
            if (json == "yes") {
                alert("用户名已注册成功,请重新登录");                
            }
            else {
                alert("请重新注册")
            }
        }
    });
}
function SaveImage() {
     var username = document.getElementById("nickname").value;
    var file = document.getElementById("upload").files[0]; //获取上传文件列表中第一个文件   
    var reader = new FileReader(); //实例一个文件对象
    reader.readAsDataURL(file); //把上传的文件转换成url
    reader.onload = function (e) {
        //当文件读取成功便可以调取上传的接口
        var image = new Image();
        // 设置src属性 
        image.src = e.target.result;
        var max = 200;
        // 绑定load事件处理器，加载完成后执行，避免同步问题

        // 获取 canvas DOM 对象 
        document.getElementById("cvs").src = this.result;
       
        alert(username+"  de");
        $.ajax({
            type: "POST",   //访问WebService使用Post方式请求
            ContentType: "application/json", //WebService 会返回Json类型
            url: "WebService.asmx/SaveImage", //调用WebService的地址和方法名称组合 ---- WsURL/方法名                      
            data: { image: image.src, name: username },
            dataType: 'json',
            success: function (result) {//回调函数，result，返回值
                var r = result.d;
                if (r == "yes") {
                    alert("right");
                } else {
                    alert("errpr");
                }
            }

        });
    };
}


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
function checkAll() {
    var name = checkName();
    var pass1 = checkPassword();   
    var pass2 = checkpassword2();    
    var realname = checkRealName();   
    var specialty = checkSpecialty();   
    var school = checkSchool();    
    var email = checkEmail();   
    var birth = getBirth();    
    var enroll = getenroll();    
    var country = checkCountry();    
    var nickname = VerifyName();
    if (name && pass1 && pass2 && realname && specialty && school && email && birth && enroll && country ) {
        if (nickname == "yes") {
            if (SaveImage() == 'yes') {
                InsertInformation();
                return true;
            } else {
                alert("保存图片错误");
            }               
        }     
    } else {
        alert("您还有信息未正确输入,请重新输入");
        return false;
    }
}
