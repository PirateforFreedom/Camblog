
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
        data: "{nickname:'" + name + "',pass:'"+ pass+"',realname:'"+realname+"',specialty:'"+specialty+"',school:'" +
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
    if (name && pass1 && pass2 && realname && specialty && school && email && birth && enroll && country) {
        alert("yes");
        InsertInformation();
        return true;
    } else {
        alert("您还有信息未正确输入,请重新输入");
        return false;
    }
}
