
<!DOCTYPE html>
<html>
<head runat="server">
    <link href="css/CBSign_upcss.css" rel="stylesheet" type="text/css" />
    <meta charset="utf-8"> 
     <script type="text/javascript" src ="Scripts/jquery-3.4.0.min.js"></script>
    <script type="text/javascript" src="js/CBSign_upjs.js">
    </script>
    <title>Camblog</title>
</head>


<body onload="document.forms.exactinfo.nickname.focus()">
<h1 class="back"></h1>
<h2 class="title"><i>注册信息填写</i></h2>
<div class="content">
    <form name="exactinfo" id="form2"  runat="server">
        <div class="info">
            <table style="margin:0 auto;">
                <div class="listinfo" style="margin-top:30px;">
                    <input class="border" value="xcss"type="text" id="nickname" name="nickname" placeholder="用户名,长度为6到12字符"
                           onblur="checkName()">
                </div>
                <span id="nicknamespan" class="errorinfo"></span>
                <div class="listinfo">
                    <input class="border" value="111111"onblur="checkPassword()" id="password1" type="password" name="password" placeholder="密码,长度为6到16字符" nam="pwd"><br>
                </div>
                <span id="password1span" class="errorinfo"></span>
                <div class="listinfo">
                    <input id="password2" value="111111"onblur="checkpassword2()" class="border" type="password"  placeholder="再次输入密码"><br>
                </div>
                <span id="password2span" class="errorinfo"></span>
                <div class="listinfo">
                    <input id="realname" value="sfe" onblur="checkRealName()" class="border" type="text" name="name" placeholder="真实姓名"><br>
                    <span id="realnamespan" class="errorinfo">
                    </span>
                </div>
                <div class="listinfo">

                    <input id="specialty" value="afe" onblur="checkSpecialty()" class="border" type="text" name="specialty" placeholder="专业"><br>
                    <span id="specialtyspan" class="errorinfo"></span>
                </div>
                  <div class="listinfo">

                    <input id="country" value="afe" onblur="checkCountry()" class="border" type="text" name="country" placeholder="国家"><br>
                    <span id="countryspan" class="errorinfo"></span>
                </div>
                <div class="listinfo">

                    <input id="school" value="sdfe" onblur="checkSchool()" class="border" type="text" name="school" placeholder="学校"><br>
                    <span id="schoolspan" class="errorinfo"></span>
                </div>

                <div class="listinfo">

                    <input id="email" value="123@qq.com"onblur="checkEmail()" class="border" type="text" name="email" placeholder="邮箱，如123@qq.com"><br>
                    <span id="emailspan" class="errorinfo"></span>
                </div>
                <div class="listinfo">
                    <p>出生日期：</p>
                    <input id="birth" class="border" type="date" name="birth" 
                           style="width: 200px;"><br>
                </div>
                <div class="listinfo">
                    <p>入学年份：</p>
                    <input id="enrolltime" class="border" type="date" name="enrolltime"><br>
                </div>
                <div class="listinfo" style="margin-top:30px;">
                    <form> 性别:<input id="man"  type="radio" name="sex1" value="male" checked="checked">M
                        <input id="women" type="radio" name="sex1" value="female">F
                    </form>
                </div>
            </table>
        </div>
        <div class="buttonteam">
            <button type="button" class="button1"  onclick="checkAll()">确定</button>
            <button type="button" class="button1" style="padding: 7px;margin-left: 50px;width:70px"
                onclick="location.href='CBmainpage.aspx'">返回</button>
        </div>
    </form>
</div>
</body>
</html>