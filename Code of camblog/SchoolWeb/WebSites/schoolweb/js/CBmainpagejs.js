
//总体功能：验证用户身份
//输入：用户名和密码
//返回：yes或no
function VerifyUserbutton() {
    var usernametxt = document.getElementById("usertxt").value;
    var userpasswordtxt = document.getElementById("passwordtxt").value; 
            $.ajax({
                type: "POST",   //访问WebService使用Post方式请求
               contentType: "application/json", //WebService 会返回Json类型
               url: "WebService.asmx/VerifyUser", //调用WebService的地址和方法名称组合 ---- WsURL/方法名
                data: "{username:'" + usernametxt + "',password:'" + userpasswordtxt + "'}",         //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到       
                dataType: 'json',
                success: function (result) {     //回调函数，result，返回值
                    
                    var json = result.d
                    if (json == "no")
                    {
                         alert("输入的密码或用户名不对");
                         document.getElementById("usertxt").value="";
                         document.getElementById("passwordtxt").value="";
                    }
                    else
                    {
                        document.cookie = "username=" + usernametxt;
                        window.location.href = "CBinforshareroom.aspx";
                    }
                }
            });
}