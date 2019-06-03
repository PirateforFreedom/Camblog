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

<body onload="onload_information()">
        <script type="text/javascript" src ="Scripts/jquery-3.4.0.min.js"></script>
        <script type="text/javascript" src ="js/CBPersonInformation.js"></script>      
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
                 <div class="listinfo" style="margin-top:30px;">
                介绍：<textarea class="border" id="statement"  style="resize:none;width:200px; height:100px;vertical-align:top" 
                            row ="8" cols ="40"> </textarea >
                    </div>
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
                    
                    <p>出生日期：</p>
                    <p id="birth" type="date" name="birth" 
                           style="width: 100%;text-align: center;"></p><br>                                        
                    <p>入学年份：</p>                    
                    <p id="enrolltime"  type="date" name="enrolltime" style="width: 100%;text-align: center;"><br>
            </table>
        </div>
        <div class="buttonteam">
            <button type="button" class="button1"  onclick="checkAll()">确定</button>
            <button type="button" class="button1" style="padding: 7px;margin-left: 50px;width:70px"
                onclick="backPersonroom()">返回</button>
        </div>
    </form>
</div>
    <script>           
        //获取上传按钮      
            var input1 = document.getElementById("upload");
            if (typeof FileReader === 'undefined') {
                //result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
                input1.setAttribute('disabled', 'disabled');
            } else {
                input1.addEventListener('change', readFile, false);
            }
            function readFile() {              
                var file = this.files[0]; //获取上传文件列表中第一个文件
                if (!/image\/\w+/.test(file.type)) {
                    //图片文件的type值为image/png或image/jpg
                    alert("文件必须为图片！");
                    return false;
                }
                 console.log(file);
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
                    SaveImage();
                };                          
            }
    </script>
</body>

</html>
