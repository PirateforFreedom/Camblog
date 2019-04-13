
function jumpstakroom() {
    var bthome = document.getElementById('personbar-name');
    var usernamer = bthome.innerHTML;
    window.location.href = "CBpersonroom.aspx?username=" + usernamer;
}
function jumpFollowerroom() {
    var username = getQueryString("username");
    //var username='jack'
    window.location.href = "CBpersonfollower.aspx?username=" + username;
}
function jumpFollowingrroom() {
    var username = getQueryString("username");
    //var username='jack'
    window.location.href = "CBpersonfollowing.aspx?username=" + username;
}
function followsomeone() {
    var bthome5 = document.getElementById('ToFollowsbutton');
    bthome5.innerHTML = "Following";
    bthome5.style.color = "red";
    usernameonline='jack'
    var bthome5 = document.getElementById('Label3');
    bthome5.innerHTML = "1";
    var folloingname = 'jack'
    var folloingnameby = 'tom'
    $.ajax({
        type: "POST",   //访问WebService使用Post方式请求
        contentType: "application/json", //WebService 会返回Json类型
        url: "WebService.asmx/Updatefollowingforuser", //调用WebService的地址和方法名称组合 ---- WsURL/方法名
        data: "{folloingusername:'" + folloingname + "',onerbyuser:'" + folloingnameby + "'}",         //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到       
        dataType: 'json',
        success: function (result) {     //回调函数，result，返回值

            var json = result.d
            if (json == "no") {
                alert("输入的密码或用户名不对");
               
            }
            else {
                //alert(result.d);
            }
        }
    });
}
//获取cooki中的用户名
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
        //return decodeURI(r[2]); //解决中文乱码问题
    }
}
//动态加载时加载信息
function onload_information() {
    
    //调用参数
    var usernameonline = getQueryString("username");
    var pictrue_path = '';
    $.ajax({
        url: "WebService.asmx/GetUserInformation",
        type: "Post",
        dataType: "xml",
        data: { username: usernameonline },
        success: function (data) {
            var str = "";
            var str2 = ""
            $.each($.find("Table1", data), function () {
                strpictrue = $(this).find("user_pictrue").text();
                pictrue_path = strpictrue;
                strpostsum = $(this).find("user_posts_num").text();
                strstatement = $(this).find("statement").text();
                strdate_time = $(this).find("date_time").text();
                strcountry = $(this).find("country").text();
                var strfollowing = $(this).find("user_following_num").text();
                var strfollower = $(this).find("user_follower_num").text();
                var bthome = document.getElementById('personbar-picture');
                bthome.style.backgroundImage = "url(" + strpictrue + ")";
                var bthome1 = document.getElementById('pprofile-picture');
                bthome1.style.backgroundImage = "url(" + strpictrue + ")";
                var bthome1 = document.getElementById('personbar-name');
                bthome1.innerHTML = usernameonline;
                var bthome5 = document.getElementById('pprofile-name');
                bthome5.innerHTML = usernameonline;
                var bthome5 = document.getElementById('pprofile-statement');
                bthome5.innerHTML = strstatement;
                var bthome5 = document.getElementById('pprofile-location');
                bthome5.innerHTML = strcountry;
                var bthome5 = document.getElementById('pprofile-date');
                bthome5.innerHTML = strdate_time;
                var bthome5 = document.getElementById('Tweetsbutton');
                bthome5.style.color = "dodgerblue";
                var bthome2 = document.getElementById('Label1');
                bthome2.innerHTML = strpostsum
                bthome2.style.color = "dodgerblue";
                var bthome2 = document.getElementById('Label2');
                bthome2.innerHTML = strfollowing
                var bthome2 = document.getElementById('Label3');
                bthome2.innerHTML = strfollower
            });
        }
    });
    
    $.ajax({
        url: "WebService.asmx/GetDataSetforpersonpostforuser",
        type: "Post",
        dataType: "xml",
        data: { username1: usernameonline },
        success: function (data) {
            var strpostcontent = "";
            var strpostdate = ""
            $.each($.find("Table1", data), function () {
                strpostcontent = $(this).find("user_post_content").text();
                strpostdate = $(this).find("user_post_date").text();
                
                add_divonload(strpostcontent, strpostdate, pictrue_path, usernameonline)
            });
        }
    });
  

}
function Homebutton_onmouseover() {
    var bthome= document.getElementById('Homebutton');
    bthome.style.color = "dodgerblue";
    bthome.style.cursor = "pointer";
    var bdivline= document.getElementById('bhome-line');
    bdivline.style.backgroundColor = "dodgerblue";
    
}
function Homebutton_onmouseout() {
    var redhome= document.getElementById('Homebutton');
    redhome.style.backgroundColor = "white";
    redhome.style.color = "#666666";
    var bdivline= document.getElementById('bhome-line');
    bdivline.style.backgroundColor = "white";
}
function Tweetsbutton_onmouseover(){
    var bttweet = document.getElementById('Tweetsbutton');
    bttweet.style.color = "dodgerblue";
    bttweet.style.cursor = "pointer";
    var btsnumber = document.getElementById('btweets-number');
    btsnumber.style.color = "dodgerblue";
    
    var bdivline = document.getElementById('btweets-line');
    bdivline.style.backgroundColor = "dodgerblue";

}
function Tweetsbutton_onmouseout (){
    var redtweet = document.getElementById('Tweetsbutton');
    redtweet.style.backgroundColor = "white";
    redtweet.style.color = "#666666";
  
    var bdivline = document.getElementById('btweets-line');
    bdivline.style.backgroundColor = "white";
    var btsnumber = document.getElementById('btweets-number');
    btsnumber.style.color = "#666666";
}
function Followingbutton_onmouseover() {
    var btfo = document.getElementById('Followingbutton');
    btfo.style.color = "dodgerblue";
    btfo.style.cursor = "pointer";
    var btsnu = document.getElementById('bfollowing-number');
    btsnu.style.color = "dodgerblue";
    var bdivline = document.getElementById('bfollowing-line');
    bdivline.style.backgroundColor = "dodgerblue";

}
function Followingbutton_onmouseout() {
    var redf = document.getElementById('Followingbutton');
    redf.style.backgroundColor = "white";
    redf.style.color = "#666666";
    var bdivl = document.getElementById('bfollowing-line');
    bdivl.style.backgroundColor = "white";
    var btsn = document.getElementById('bfollowing-number');
    btsn.style.color = "#666666";
}
function Followersbutton_onmouseover() {
    var btf = document.getElementById('Followersbutton');
    btf.style.color = "dodgerblue";
    var btsn = document.getElementById('bfollowers-number');
    btsn.style.color = "dodgerblue";
    btf.style.cursor = "pointer";
    var bdivl = document.getElementById('bfollowers-line');
    bdivl.style.backgroundColor = "dodgerblue";

}
function Followersbutton_onmouseout() {
    var redf = document.getElementById('Followersbutton');
    redf.style.backgroundColor = "white";
    redf.style.color = "#666666";
    var bdivl = document.getElementById('bfollowers-line');
    bdivl.style.backgroundColor = "white";
    var btsn = document.getElementById('bfollowers-number');
    btsn.style.color = "#666666";
}
function get_cookie(Name) {
    var search = Name + "="//查询检索的值
    var returnvalue = "";//返回值
    if (document.cookie.length > 0) {
        sd = document.cookie.indexOf(search);
        if (sd != -1) {
            sd += search.length;
            end = document.cookie.indexOf(";", sd);
            if (end == -1)
                end = document.cookie.length;
            //unescape() 函数可对通过 escape() 编码的字符串进行解码。
            returnvalue = unescape(document.cookie.substring(sd, end))
        }
    }
    return returnvalue;
}
var detail_div = 1;
var detailfrist_div = 0;
var totallike = 0;
var totaltweet = 0;
function add_divonload(txtet, str2, str3, usernameonline) {

    detailfrist_div++;
    var person_contentflydiv = document.createElement('div');
    person_contentflydiv.id = "detailsfrist" + detailfrist_div;
    var styleflydiv = document.createAttribute('style');
    person_contentflydiv.setAttributeNode(styleflydiv);
    person_contentflydiv.style.width = "100%";
    person_contentflydiv.style.height = "70%";
    person_contentflydiv.style.backgroundColor = "white"
    person_contentflydiv.style.borderBottomStyle = "solid";
    person_contentflydiv.style.borderBottomWidth = "0.1px";
    person_contentflydiv.style.borderTopStyle = "solid";
    person_contentflydiv.style.borderTopWidth = "0.1px";
    person_contentflydiv.style.borderBottomColor = "#E0E0E0";
    person_contentflydiv.style.borderTopColor = "#E0E0E0";
    person_contentflydiv.style.cssFloat = "left"
    detail_div++;
    var person_contentflydiv_picbar = document.createElement('div');
    person_contentflydiv_picbar.id = "details" + detail_div;
    var stylepicbar = document.createAttribute('style');
    person_contentflydiv_picbar.setAttributeNode(stylepicbar);
    person_contentflydiv_picbar.style.width = "12%";
    person_contentflydiv_picbar.style.height = "100%";
    person_contentflydiv_picbar.style.cssFloat = "left";
    person_contentflydiv.appendChild(person_contentflydiv_picbar);
    detail_div++;
    var person_contentflydiv_pic = document.createElement('div');
    person_contentflydiv_pic.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_pic.setAttributeNode(stylepic);
    person_contentflydiv_pic.style.width = "72%";
    person_contentflydiv_pic.style.height = "35%";
    person_contentflydiv_pic.style.marginLeft = "22%";
    person_contentflydiv_pic.style.marginTop = "12%";
    person_contentflydiv_pic.style.cssFloat = "left";
    person_contentflydiv_pic.style.borderRadius = "50%";
    person_contentflydiv_pic.style.backgroundImage = "url(" + str3 + ")";
    person_contentflydiv_picbar.appendChild(person_contentflydiv_pic);
    detail_div++;
    var person_contentflydiv_namebar = document.createElement('div');
    person_contentflydiv_namebar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_namebar.setAttributeNode(stylepic);
    person_contentflydiv_namebar.style.width = "88%";
    person_contentflydiv_namebar.style.height = "25%";
    person_contentflydiv_namebar.style.cssFloat = "left";
    person_contentflydiv.appendChild(person_contentflydiv_namebar);
    detail_div++;
    var person_contentflydiv_name = document.createElement('div');
    person_contentflydiv_name.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_name.setAttributeNode(stylepic);
    person_contentflydiv_name.style.width = "15%";
    person_contentflydiv_name.innerHTML = usernameonline;
    person_contentflydiv_name.style.height = "45%";
    person_contentflydiv_name.style.cssFloat = "left";
    person_contentflydiv_name.style.marginLeft = "2%";
    person_contentflydiv_name.style.marginTop = "2%";
    person_contentflydiv_name.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_name.style.fontSize = "17px";
    person_contentflydiv_name.style.fontWeight = "bold";
    person_contentflydiv_namebar.appendChild(person_contentflydiv_name);
    detail_div++;
    var person_contentflydiv_date = document.createElement('div');
    person_contentflydiv_date.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_date.setAttributeNode(stylepic);
    person_contentflydiv_date.style.width = "45%";
    person_contentflydiv_date.innerHTML = "Post by " + str2;
    person_contentflydiv_date.style.height = "45%";
    person_contentflydiv_date.style.cssFloat = "left";
    person_contentflydiv_date.style.marginLeft = "2%";
    person_contentflydiv_date.style.marginTop = "2%";
    person_contentflydiv_date.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_date.style.fontSize = "15px";
    person_contentflydiv_date.style.color = "#A0A0A0";
    person_contentflydiv_namebar.appendChild(person_contentflydiv_date);
    detail_div++;
    var person_contentflydiv_txtbar = document.createElement('div');
    person_contentflydiv_txtbar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_txtbar.setAttributeNode(stylepic);
    person_contentflydiv_txtbar.style.width = "88%";

    person_contentflydiv_txtbar.style.height = "60%";
    person_contentflydiv_txtbar.style.cssFloat = "left";
    person_contentflydiv.appendChild(person_contentflydiv_txtbar);
    detail_div++;
    var person_contentflydiv_txt = document.createElement('div');
    person_contentflydiv_txt.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_txt.setAttributeNode(stylepic);
    person_contentflydiv_txt.style.width = "88%";
    person_contentflydiv_txt.innerHTML = txtet;
    person_contentflydiv_txt.style.height = "30%";
    person_contentflydiv_txt.style.cssFloat = "left";
    person_contentflydiv_txt.style.marginLeft = "2%";
    person_contentflydiv_txt.style.fontFamily = "sans-serif";
    person_contentflydiv_txt.style.fontSize = "15px";
    person_contentflydiv_txt.style.color = "#101010";
    person_contentflydiv_txtbar.appendChild(person_contentflydiv_txt);
    detail_div++;
    var person_contentflydiv_botombar = document.createElement('div');
    person_contentflydiv_botombar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_botombar.setAttributeNode(stylepic);
    person_contentflydiv_botombar.style.width = "88%";
    person_contentflydiv_botombar.style.height = "15%";
    person_contentflydiv_botombar.style.cssFloat = "left";
    person_contentflydiv.appendChild(person_contentflydiv_botombar);
    detail_div++;
    var person_contentflydiv_button = document.createElement('button');
    person_contentflydiv_button.type = "button"
    person_contentflydiv_button.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_button.setAttributeNode(stylepic);
    person_contentflydiv_button.style.width = "13%";
    person_contentflydiv_button.innerHTML = "Like"
    person_contentflydiv_button.style.height = "100%";
    person_contentflydiv_button.style.cssFloat = "left";
    person_contentflydiv_button.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_button.style.fontSize = "15px";
    person_contentflydiv_button.style.color = "#A0A0A0";
    person_contentflydiv_button.style.border = "none";
    person_contentflydiv_button.style.outline = "none";
    person_contentflydiv_button.onmouseover = function person_contentflydiv_button_onmouseover() {
        var bt = document.getElementById(person_contentflydiv_button.id);
        bt.style.color = "dodgerblue";
        bt.style.cursor = "pointer"
        var bt1 = document.getElementById(person_contentflydiv_label.id);
        bt1.style.color = "dodgerblue";
    }
    person_contentflydiv_button.onmouseout = function person_contentflydiv_button_onmouseout() {
        var red = document.getElementById(person_contentflydiv_button.id);
        red.style.backgroundColor = "white";
        red.style.color = "#A0A0A0";
        var bdiv = document.getElementById(person_contentflydiv_label.id);
        bdiv.style.backgroundColor = "white";
        bdiv.style.color = "#A0A0A0";

    }
    person_contentflydiv_button.onclick = function person_contentflydiv_button_onclik() {
        totallike++;
        var bdiv = document.getElementById(person_contentflydiv_label.id);
        bdiv.innerHTML = totallike;

    }
    person_contentflydiv_botombar.appendChild(person_contentflydiv_button);
    detail_div++;
    var person_contentflydiv_label = document.createElement('label');
    person_contentflydiv_label.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_label.setAttributeNode(stylepic);
    person_contentflydiv_label.style.width = "10%";
    person_contentflydiv_label.innerHTML = "0"
    person_contentflydiv_label.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_label.style.fontSize = "15px";
    person_contentflydiv_label.style.color = "#A0A0A0";
    person_contentflydiv_label.style.height = "100%";
    person_contentflydiv_label.style.cssFloat = "left";
    person_contentflydiv_label.style.fontWeight = "bold";
    person_contentflydiv_botombar.appendChild(person_contentflydiv_label);
    if (totaltweet == 0) {
        document.getElementById("person-content-fly").appendChild(person_contentflydiv);
        detail_div++;
        totaltweet++;
        document.getElementById("Label1").innerHTML = totaltweet;
    }
    else {
        var th = detailfrist_div - 1;
        var st = "detailsfrist" + th;
        //alert(th);
        var mubiao = document.getElementById(st);
        mubiao.parentNode.insertBefore(person_contentflydiv, mubiao);
        detail_div++;
        totaltweet++;
        document.getElementById("Label1").innerHTML = totaltweet;

    }
}