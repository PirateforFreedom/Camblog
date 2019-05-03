<!doctype html>
<html>

<head>
     <link href="css/CBPersonInformation.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
       

        #cvs {
            border: 1px solid #000;
           
        }
    </style>
</head>

<body>
        <script type="text/javascript" src ="Scripts/jquery-3.4.0.min.js"></script>
        <script type="text/javascript" src ="js/CBPersonInformation.js"></script>
        <script>            
            
            
        </script>
		<h1 class="back"></h1>
<h2 class="title"><i>个人详细信息</i></h2>
<div class="content">
    <form name="exactinfo" id="form2"  runat="server">
        <div class="info">
            <table style="margin:0 auto;">
               
               <div class="listinfo" style="margin-top:30px;">       
                   <image id ="cvs" src = "/picture/anonymous.jpg"width="100" height ="100" onload="javascript:DrawImage(this,100,100)"></image>
               </div>
                 <div class="listinfo" style="margin-top:30px;">
                     <span>上传头像<input type="file" accept="image/jpeg,image/png" style="margin:30;background-color: aquamarine" id="upload" " /></span>
                 </div>  
                自我介绍：  <input class="border" type="text" id="statement" name="nickname" placeholder="用户名,长度为6到12字符"
                           onblur="checkName()">
                <div class="listinfo" style="margin-top:30px;">
                    昵称： <input class="border" type="text" id="nickname" name="nickname" placeholder="用户名,长度为6到12字符"
                           onblur="checkName()">
                </div>
                <span id="nicknamespan" class="errorinfo"></span>                                            
                <div class="listinfo">
                    专业： <input id="specialty"  onblur="checkSpecialty()" class="border" type="text" name="specialty" placeholder="专业"><br>
                    <span id="specialtyspan" class="errorinfo"></span>
                </div>
                  <div class="listinfo">

                    国家： <input id="country"  onblur="checkCountry()" class="border" type="text" name="country" placeholder="国家"><br>
                    <span id="countryspan" class="errorinfo"></span>
                </div>
                <div class="listinfo">

                    学校： <input id="school" onblur="checkSchool()" class="border" type="text" name="school" placeholder="学校"><br>
                    <span id="schoolspan" class="errorinfo"></span>
                </div>

                <div class="listinfo">

                    邮箱： <input id="email" onblur="checkEmail()" class="border" type="text" name="email" placeholder="邮箱，如123@qq.com"><br>
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
