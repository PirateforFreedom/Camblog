/*
跳转到个人信息编辑页面
*/
function jumpEdit() {
    var usernamer = getQueryString("username");
    window.location.href = "CBPersonInformation.aspx?username=" + usernamer;
}
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
function GetUserInformation_for_onload(usernameonline) {
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
                bthome5.innerHTML = "Statement:" + strstatement;
                var bthome5 = document.getElementById('pprofile-location');
                bthome5.innerHTML = "From Coutry:" + strcountry;
                var bthome5 = document.getElementById('pprofile-date');
                bthome5.innerHTML = "Join Time:" + strdate_time;
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
}
function GetDataSetforpersonpostbynameonload(usernameonline) {
    var totaltweet = -1;
    var detailfrist_div = 0;
    var likenumdd
    $.ajax({
        url: "WebService.asmx/GetDataSetforpersonpostforuser",
        type: "Post",
        dataType: "xml",
        async: false,
        data: { username1: usernameonline },
        success: function (data) {
            var strpostcontent = "";
            var strpostdate = ""
            var usernamer1 = ""
            var picturer = ""
            var user_post_personsd = ""

            $.each($.find("Table1", data), function () {

                strpostcontent = $(this).find("user_post_content").text();
                strpostdate = $(this).find("user_post_date").text();
                usernamer1 = $(this).find("user_name").text();

                user_post_personsd = $(this).find("user_post_personsd").text();
                likenumdd = $(this).find("user_post_like_num").text();
                picturer = $(this).find("user_pictrue").text();
                strpostcontent = strpostcontent.replace(/brHH/g, "<br>");
                strpostcontent = strpostcontent.replace(/\s/g, "&nbsp;");
                totaltweet++;
                detailfrist_div++;
                // alert(likenumdd)
               add_divonload(totaltweet, detailfrist_div, strpostcontent, strpostdate, picturer, usernamer1, user_post_personsd, likenumdd)
            });

        }
    });
}
//动态加载时加载信息
function onload_information() {
   
    //取用户信息
   
  // 
    //调用参数
    var usernameonline = getQueryString("username");
    GetUserInformation_for_onload(usernameonline)
    GetDataSetforpersonpostbynameonload(usernameonline);
  
  

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

function add_divonload(totaltweet, detailfrist_div, txtet, str2, str3, usernamer, user_post_personsd, likenumdd) {

    //创建最动态内容div
    // alert(likenumdd)
    var person_contentflydiv = document.createElement('div');
    person_contentflydiv.id = "detailsfrist" + detailfrist_div;
    var styleflydiv = document.createAttribute('style');
    person_contentflydiv.setAttributeNode(styleflydiv);
    person_contentflydiv.style.width = "100%";
    person_contentflydiv.style.height = "auto";
    person_contentflydiv.style.backgroundColor = "white"
    person_contentflydiv.style.borderBottomStyle = "solid";
    person_contentflydiv.style.borderBottomWidth = "0.1px";
    person_contentflydiv.style.borderTopStyle = "solid";
    person_contentflydiv.style.borderTopWidth = "0.1px";
    person_contentflydiv.style.borderBottomColor = "#E0E0E0";
    person_contentflydiv.style.borderTopColor = "#E0E0E0";
    person_contentflydiv.style.cssFloat = "left"
    //创建含有发布内容的div
    detail_div++;
    var person_contentflydiv_txtbar = document.createElement('div');
    person_contentflydiv_txtbar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_txtbar.setAttributeNode(stylepic);
    person_contentflydiv_txtbar.style.width = "100%";
    person_contentflydiv_txtbar.style.height = "60%";
    person_contentflydiv_txtbar.style.cssFloat = "left";
    person_contentflydiv.appendChild(person_contentflydiv_txtbar);
    //创建含有图片的div
    detail_div++;
    var person_contentflydiv_picbar = document.createElement('div');
    person_contentflydiv_picbar.id = "details" + detail_div;
    var stylepicbar = document.createAttribute('style');
    person_contentflydiv_picbar.setAttributeNode(stylepicbar);
    person_contentflydiv_picbar.style.width = "65px";
    person_contentflydiv_picbar.style.height = person_contentflydiv.style.height;
    person_contentflydiv_picbar.style.cssFloat = "left";
    person_contentflydiv_txtbar.appendChild(person_contentflydiv_picbar);
    //创建承载图片的div
    detail_div++;
    var person_contentflydiv_pic = document.createElement('div');
    person_contentflydiv_pic.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_pic.setAttributeNode(stylepic);
    person_contentflydiv_pic.style.width = "50px";
    person_contentflydiv_pic.style.height = "50px";
    person_contentflydiv_pic.style.marginLeft = "22%";
    person_contentflydiv_pic.style.marginTop = "12%";
    person_contentflydiv_pic.style.cssFloat = "left";
    person_contentflydiv_pic.style.borderRadius = "50%";
    person_contentflydiv_pic.style.backgroundImage = "url(" + str3 + ")";
    person_contentflydiv_picbar.appendChild(person_contentflydiv_pic);
    detail_div++;
    //创建含有名字内容，发布日期的div
    var person_contentflydiv_namebar = document.createElement('div');
    person_contentflydiv_namebar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_namebar.setAttributeNode(stylepic);
    person_contentflydiv_namebar.style.width = "88%";
    person_contentflydiv_namebar.style.height = "25%";
    person_contentflydiv_txtbar.appendChild(person_contentflydiv_namebar);

    //创建承载名字的button
    detail_div++;
    var person_contentflydiv_button1 = document.createElement('button');
    person_contentflydiv_button1.type = "button"
    person_contentflydiv_button1.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_button1.setAttributeNode(stylepic);
    person_contentflydiv_button1.style.width = "10%";
    person_contentflydiv_button1.innerHTML = usernamer
    person_contentflydiv_button1.style.height = "45%";
    person_contentflydiv_button1.style.marginLeft = "0.5%";
    person_contentflydiv_button1.style.marginTop = "2%";
    person_contentflydiv_button1.style.fontSize = "17px";
    person_contentflydiv_button1.style.fontWeight = "bold";
    person_contentflydiv_button1.style.cssFloat = "left";
    person_contentflydiv_button1.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_button1.style.border = "none";
    person_contentflydiv_button1.style.outline = "none";
    person_contentflydiv_button1.onmouseover = function person_contentflydiv_button_onmouseover() {
        var bt = document.getElementById(person_contentflydiv_button1.id);
        bt.style.color = "dodgerblue";
        bt.style.cursor = "pointer"

    }
    person_contentflydiv_button1.onmouseout = function person_contentflydiv_button_onmouseout() {
        var red = document.getElementById(person_contentflydiv_button1.id);
        red.style.backgroundColor = "white";
        red.style.color = "	#000000";

    }
    person_contentflydiv_button1.onclick = function person_contentflydiv_button_onclik() {
        window.location.href = "CBpersonroom.aspx?username=" + usernamer;
    }
    person_contentflydiv_namebar.appendChild(person_contentflydiv_button1);
    detail_div++;
    //创建承载发布日期的div
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
    //创建承载发布内容的div
    var person_contentflydiv_txt = document.createElement('div');
    person_contentflydiv_txt.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_txt.setAttributeNode(stylepic);
    person_contentflydiv_txt.style.width = "85%";
    person_contentflydiv_txt.innerHTML = txtet;
    person_contentflydiv_txt.style.cssFloat = "left";
    person_contentflydiv_txt.style.marginLeft = "13%";
    person_contentflydiv_txt.style.marginTop = "-20px";
    person_contentflydiv_txt.style.fontFamily = "sans-serif";
    person_contentflydiv_txt.style.fontSize = "15px";
    person_contentflydiv_txt.style.color = "#101010";
    person_contentflydiv_txtbar.appendChild(person_contentflydiv_txt);
    detail_div++;
    //创建底部button栏
    var person_contentflydiv_botombar = document.createElement('div');
    person_contentflydiv_botombar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_botombar.setAttributeNode(stylepic);
    person_contentflydiv_botombar.style.width = "130px";
    person_contentflydiv_botombar.style.height = "25px";
    person_contentflydiv_botombar.style.cssFloat = "left";
    person_contentflydiv_botombar.style.marginLeft = "12%";
    person_contentflydiv_botombar.style.marginTop = "15px";
    person_contentflydiv_txtbar.appendChild(person_contentflydiv_botombar);
    detail_div++;
    //创建like button
    var person_contentflydiv_button = document.createElement('button');
    person_contentflydiv_button.type = "button"
    person_contentflydiv_button.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_button.setAttributeNode(stylepic);
    person_contentflydiv_button.style.width = "28%";
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
       // likenumdd++;
       // var bdiv = document.getElementById(person_contentflydiv_label.id);
      //  bdiv.innerHTML = likenumdd;
       // insertlikes(user_post_personsd, likenumdd)
    }
    person_contentflydiv_botombar.appendChild(person_contentflydiv_button);
    detail_div++;
    //创建like button的计数显示标签
    var person_contentflydiv_label = document.createElement('label');
    person_contentflydiv_label.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_label.setAttributeNode(stylepic);
    person_contentflydiv_label.style.width = "15%";
    // alert(likenum)
    person_contentflydiv_label.innerHTML = likenumdd;
    person_contentflydiv_label.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_label.style.fontSize = "15px";
    person_contentflydiv_label.style.color = "#A0A0A0";
    person_contentflydiv_label.style.height = "100%";
    person_contentflydiv_label.style.cssFloat = "left";
    person_contentflydiv_label.style.fontWeight = "bold";
    person_contentflydiv_label.style.marginLeft = "9%";
    person_contentflydiv_label.style.marginTop = "3%";
    person_contentflydiv_botombar.appendChild(person_contentflydiv_label);
    detail_div++;
    //创建comment button
    var person_contentflydiv_buttoncomment = document.createElement('button');
    person_contentflydiv_buttoncomment.type = "button"
    person_contentflydiv_buttoncomment.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_buttoncomment.setAttributeNode(stylepic);
    person_contentflydiv_buttoncomment.style.width = "28%";
    person_contentflydiv_buttoncomment.innerHTML = "Reply"
    person_contentflydiv_buttoncomment.style.height = "100%";
    person_contentflydiv_buttoncomment.style.cssFloat = "left";
    person_contentflydiv_buttoncomment.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_buttoncomment.style.fontSize = "15px";
    person_contentflydiv_buttoncomment.style.color = "#A0A0A0";
    person_contentflydiv_buttoncomment.style.border = "none";
    person_contentflydiv_buttoncomment.style.outline = "none";
    person_contentflydiv_buttoncomment.onmouseover = function person_contentflydiv_button_onmouseover() {
        var bt = document.getElementById(person_contentflydiv_buttoncomment.id);
        bt.style.color = "dodgerblue";
        bt.style.cursor = "pointer"

    }
    person_contentflydiv_buttoncomment.onmouseout = function person_contentflydiv_button_onmouseout() {
        var red = document.getElementById(person_contentflydiv_buttoncomment.id);
        red.style.backgroundColor = "white";
        red.style.color = "#A0A0A0";

    }
    person_contentflydiv_buttoncomment.onclick = function person_contentflydiv_button_onclik() {
        Clinkcommentbutton_event(txtet, str2, str3, usernamer, user_post_personsd, likenumdd);

    }
    person_contentflydiv_botombar.appendChild(person_contentflydiv_buttoncomment);
    if (totaltweet == 0) {
        document.getElementById("person-content-fly").appendChild(person_contentflydiv);
    }
    else {
        var th = detailfrist_div - 1;
        var st = "detailsfrist" + th;
        var mubiao = document.getElementById(st);
        mubiao.parentNode.insertBefore(person_contentflydiv, mubiao);

    }
}
function Clinkcommentbutton_event(txtet, str2, str3, usernamer, user_post_personsd, likenumdd) {

    //创建含有comment覆盖全屏的的div
    //var usernameower = get_cookie("username");
    var person_contentflydivglobe = document.createElement('div');
    person_contentflydivglobe.id = "detailsfristqw";
    var styleflydiv = document.createAttribute('style');
    person_contentflydivglobe.setAttributeNode(styleflydiv);
    person_contentflydivglobe.style.width = "100%";
    person_contentflydivglobe.style.height = "100%";
    person_contentflydivglobe.style.position = "fixed";
    person_contentflydivglobe.style.top = "0";
    person_contentflydivglobe.style.left = "0";
    person_contentflydivglobe.style.zIndex = "500";
    person_contentflydivglobe.style.background = "rgba(0,0,0,0.5)";
    document.body.appendChild(person_contentflydivglobe);
    //创建含有comment的div
    var person_contentflydivcommt = document.createElement('div');
    person_contentflydivcommt.id = "detailsfristqw1";
    var styleflydiv = document.createAttribute('style');
    person_contentflydivcommt.setAttributeNode(styleflydiv);
    person_contentflydivcommt.style.width = "50%";
    person_contentflydivcommt.style.height = "91%";
    person_contentflydivcommt.style.marginLeft = "25%";
    person_contentflydivcommt.style.marginTop = "4%";
    person_contentflydivcommt.style.position = "absolute";
    person_contentflydivcommt.style.backgroundColor = "white";
    person_contentflydivcommt.style.overflowY = "auto";
    person_contentflydivcommt.style.borderRadius = "9px";
    //  border-radius:9px;
    document.body.style.overflow = "hidden";
    person_contentflydivglobe.appendChild(person_contentflydivcommt);
    //创建close button
    var person_contentflydiv_buttonclose = document.createElement('button');
    person_contentflydiv_buttonclose.type = "button"
    person_contentflydiv_buttonclose.id = "detailsqws";
    var stylepic = document.createAttribute('style');
    person_contentflydiv_buttonclose.setAttributeNode(stylepic);
    person_contentflydiv_buttonclose.style.width = "5%";
    person_contentflydiv_buttonclose.innerHTML = "Close"
    person_contentflydiv_buttonclose.style.height = "5%";
    person_contentflydiv_buttonclose.style.marginLeft = "94%";
    person_contentflydiv_buttonclose.style.marginTop = "1%";
    person_contentflydiv_buttonclose.style.border = "none";
    person_contentflydiv_buttonclose.style.outline = "none";
    person_contentflydiv_buttonclose.style.borderRadius = "9px";
    person_contentflydiv_buttonclose.style.backgroundColor = "white";
    person_contentflydiv_buttonclose.style.color = "dodgerblue"
    person_contentflydiv_buttonclose.onclick = function person_contentflydiv_button_onclik1() {
        var bgObj = document.getElementById("detailsfristqw");
        document.body.removeChild(bgObj);
        document.body.style.overflowY = "auto";
    }
    person_contentflydivglobe.appendChild(person_contentflydiv_buttonclose);
    //创建comment中的发布信息显示的div
    detail_div++;
    var person_contentflydivabsolute = document.createElement('div');
    person_contentflydivabsolute.id = "details" + detail_div;
    var styleflydiv = document.createAttribute('style');
    person_contentflydivabsolute.setAttributeNode(styleflydiv);
    person_contentflydivabsolute.style.width = "100%";
    person_contentflydivabsolute.style.height = "auto";
    person_contentflydivabsolute.style.backgroundColor = "white"
    person_contentflydivabsolute.style.borderBottomStyle = "solid";
    person_contentflydivabsolute.style.borderBottomWidth = "0.1px";
    person_contentflydivabsolute.style.borderTopStyle = "solid";
    person_contentflydivabsolute.style.borderTopWidth = "0.1px";
    person_contentflydivabsolute.style.borderBottomColor = "#E0E0E0";
    person_contentflydivabsolute.style.borderTopColor = "#E0E0E0";
    person_contentflydivabsolute.style.cssFloat = "left"
    person_contentflydivcommt.appendChild(person_contentflydivabsolute);
    //创建comment中的发布信息显示文本的div
    detail_div++;
    var person_contentflydiv_txtbarabsolute = document.createElement('div');
    person_contentflydiv_txtbarabsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_txtbarabsolute.setAttributeNode(stylepic);
    person_contentflydiv_txtbarabsolute.style.width = "100%";
    person_contentflydiv_txtbarabsolute.style.height = "60%";
    person_contentflydiv_txtbarabsolute.style.cssFloat = "left";
    person_contentflydivabsolute.appendChild(person_contentflydiv_txtbarabsolute);
    detail_div++;
    //创建comment中的发布信息包含图片的div
    var person_contentflydiv_picbarabsout = document.createElement('div');
    person_contentflydiv_picbarabsout.id = "details" + detail_div;
    var stylepicbar = document.createAttribute('style');
    person_contentflydiv_picbarabsout.setAttributeNode(stylepicbar);
    person_contentflydiv_picbarabsout.style.width = "65px";
    person_contentflydiv_picbarabsout.style.height = person_contentflydivabsolute.style.height;
    person_contentflydiv_picbarabsout.style.cssFloat = "left";
    person_contentflydiv_txtbarabsolute.appendChild(person_contentflydiv_picbarabsout);
    detail_div++;
    //创建comment中的发布信息承载图片的div
    var person_contentflydiv_picabsolute = document.createElement('div');
    person_contentflydiv_picabsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_picabsolute.setAttributeNode(stylepic);
    person_contentflydiv_picabsolute.style.width = "50px";
    person_contentflydiv_picabsolute.style.height = "50px";
    person_contentflydiv_picabsolute.style.marginLeft = "22%";
    person_contentflydiv_picabsolute.style.marginTop = "12%";
    person_contentflydiv_picabsolute.style.cssFloat = "left";
    person_contentflydiv_picabsolute.style.borderRadius = "50%";
    person_contentflydiv_picabsolute.style.backgroundImage = "url(" + str3 + ")";
    person_contentflydiv_picbarabsout.appendChild(person_contentflydiv_picabsolute);
    detail_div++;
    //创建comment中的发布信息包含名字，发布日期的div
    var person_contentflydiv_namebarabsout = document.createElement('div');
    person_contentflydiv_namebarabsout.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_namebarabsout.setAttributeNode(stylepic);
    person_contentflydiv_namebarabsout.style.width = "88%";
    person_contentflydiv_namebarabsout.style.height = "25%";
    person_contentflydiv_txtbarabsolute.appendChild(person_contentflydiv_namebarabsout);
    detail_div++;
    //创建comment中的发布信息包含名字的button
    var person_contentflydiv_button1absolute = document.createElement('button');
    person_contentflydiv_button1absolute.type = "button"
    person_contentflydiv_button1absolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_button1absolute.setAttributeNode(stylepic);
    person_contentflydiv_button1absolute.style.width = "10%";
    person_contentflydiv_button1absolute.innerHTML = usernamer
    person_contentflydiv_button1absolute.style.height = "45%";
    person_contentflydiv_button1absolute.style.marginLeft = "0.5%";
    person_contentflydiv_button1absolute.style.marginTop = "2%";
    person_contentflydiv_button1absolute.style.fontSize = "17px";
    person_contentflydiv_button1absolute.style.fontWeight = "bold";
    person_contentflydiv_button1absolute.style.cssFloat = "left";
    person_contentflydiv_button1absolute.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_button1absolute.style.border = "none";
    person_contentflydiv_button1absolute.style.outline = "none";
    person_contentflydiv_button1absolute.onmouseover = function person_contentflydiv_button_onmouseover() {
        var bt = document.getElementById(person_contentflydiv_button1absolute.id);
        bt.style.color = "dodgerblue";
        bt.style.cursor = "pointer"

    }
    person_contentflydiv_button1absolute.onmouseout = function person_contentflydiv_button_onmouseout() {
        var red = document.getElementById(person_contentflydiv_button1absolute.id);
        red.style.backgroundColor = "white";
        red.style.color = "	#000000";

    }
    person_contentflydiv_button1absolute.onclick = function person_contentflydiv_button_onclik() {
        window.location.href = "CBpersonroom.aspx?username=" + usernamer;
    }
    person_contentflydiv_namebarabsout.appendChild(person_contentflydiv_button1absolute);
    detail_div++;
    //创建comment中的发布信息包含日期的div
    var person_contentflydiv_dateabsolute = document.createElement('div');
    person_contentflydiv_dateabsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_dateabsolute.setAttributeNode(stylepic);
    person_contentflydiv_dateabsolute.style.width = "45%";
    person_contentflydiv_dateabsolute.innerHTML = "Post by " + str2;
    person_contentflydiv_dateabsolute.style.height = "45%";
    person_contentflydiv_dateabsolute.style.cssFloat = "left";
    person_contentflydiv_dateabsolute.style.marginLeft = "2%";
    person_contentflydiv_dateabsolute.style.marginTop = "2%";
    person_contentflydiv_dateabsolute.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_dateabsolute.style.fontSize = "15px";
    person_contentflydiv_dateabsolute.style.color = "#A0A0A0";
    person_contentflydiv_namebarabsout.appendChild(person_contentflydiv_dateabsolute);
    detail_div++;
    //创建comment中的发布信息承载文本的div
    var person_contentflydiv_txtabsolute = document.createElement('div');
    person_contentflydiv_txtabsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_txtabsolute.setAttributeNode(stylepic);
    person_contentflydiv_txtabsolute.style.width = "85%";
    person_contentflydiv_txtabsolute.innerHTML = txtet;
    person_contentflydiv_txtabsolute.style.cssFloat = "left";
    person_contentflydiv_txtabsolute.style.marginLeft = "13%";
    person_contentflydiv_txtabsolute.style.marginTop = "-20px";
    person_contentflydiv_txtabsolute.style.fontFamily = "sans-serif";
    person_contentflydiv_txtabsolute.style.fontSize = "15px";
    person_contentflydiv_txtabsolute.style.color = "#101010"
    person_contentflydiv_txtbarabsolute.appendChild(person_contentflydiv_txtabsolute);
    detail_div++;
    //创建comment中的发布信息底部button的div
    var person_contentflydiv_botombarabsolute = document.createElement('div');
    person_contentflydiv_botombarabsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_botombarabsolute.setAttributeNode(stylepic);
    person_contentflydiv_botombarabsolute.style.width = "130px";
    person_contentflydiv_botombarabsolute.style.height = "25px";
    person_contentflydiv_botombarabsolute.style.cssFloat = "left";
    person_contentflydiv_botombarabsolute.style.marginLeft = "12%";
    person_contentflydiv_botombarabsolute.style.marginTop = "15px";
    person_contentflydiv_txtbarabsolute.appendChild(person_contentflydiv_botombarabsolute);
    detail_div++;
    //创建comment中的发布信息 like button
    var person_contentflydiv_buttonabsolute = document.createElement('button');
    person_contentflydiv_buttonabsolute.type = "button"
    person_contentflydiv_buttonabsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_buttonabsolute.setAttributeNode(stylepic);
    person_contentflydiv_buttonabsolute.style.width = "28%";
    person_contentflydiv_buttonabsolute.innerHTML = "Like"
    person_contentflydiv_buttonabsolute.style.height = "100%";
    person_contentflydiv_buttonabsolute.style.cssFloat = "left";
    person_contentflydiv_buttonabsolute.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_buttonabsolute.style.fontSize = "15px";
    person_contentflydiv_buttonabsolute.style.color = "#A0A0A0";
    person_contentflydiv_buttonabsolute.style.border = "none";
    person_contentflydiv_buttonabsolute.style.outline = "none";
    person_contentflydiv_buttonabsolute.onmouseover = function person_contentflydiv_button_onmouseover() {
        var bt = document.getElementById(person_contentflydiv_buttonabsolute.id);
        bt.style.color = "dodgerblue";
        bt.style.cursor = "pointer"
        var bt1 = document.getElementById(person_contentflydiv_labelabsolute.id);
        bt1.style.color = "dodgerblue";
    }
    person_contentflydiv_buttonabsolute.onmouseout = function person_contentflydiv_button5_onmouseout() {
        var red = document.getElementById(person_contentflydiv_buttonabsolute.id);
        red.style.backgroundColor = "white";
        red.style.color = "#A0A0A0";
        var bdiv = document.getElementById(person_contentflydiv_labelabsolute.id);
        bdiv.style.backgroundColor = "white";
        bdiv.style.color = "#A0A0A0";
    }
    person_contentflydiv_buttonabsolute.onclick = function person_contentflydiv_button5_onclik() {
        // totallike++;
        // var bdiv = document.getElementById(person_contentflydiv_labelabsolute.id);
        //  bdiv.innerHTML = totallike;
    }
    person_contentflydiv_botombarabsolute.appendChild(person_contentflydiv_buttonabsolute);
    detail_div++;
    //创建comment中的发布信息 计数 label
    var person_contentflydiv_labelabsolute = document.createElement('label');
    person_contentflydiv_labelabsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_labelabsolute.setAttributeNode(stylepic);
    person_contentflydiv_labelabsolute.style.width = "15%";
    person_contentflydiv_labelabsolute.innerHTML = likenumdd
    person_contentflydiv_labelabsolute.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_labelabsolute.style.fontSize = "15px";
    person_contentflydiv_labelabsolute.style.color = "#A0A0A0";
    person_contentflydiv_labelabsolute.style.height = "100%";
    person_contentflydiv_labelabsolute.style.cssFloat = "left";
    person_contentflydiv_labelabsolute.style.fontWeight = "bold";
    person_contentflydiv_labelabsolute.style.marginLeft = "9%";
    person_contentflydiv_labelabsolute.style.marginTop = "3%";
    person_contentflydiv_botombarabsolute.appendChild(person_contentflydiv_labelabsolute);
    detail_div++;


    //创建comment中的输入评论的div
    var personcont_titlebarbsolute = document.createElement('div');
    personcont_titlebarbsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    personcont_titlebarbsolute.setAttributeNode(stylepic);
    personcont_titlebarbsolute.style.width = "100%";
    personcont_titlebarbsolute.style.height = "54px";
    personcont_titlebarbsolute.style.cssFloat = "left";
    personcont_titlebarbsolute.style.backgroundColor = "#F0F8FF";
    personcont_titlebarbsolute.style.borderTopColor = "#E0E0E0";
    personcont_titlebarbsolute.style.borderTopStyle = "solid";
    personcont_titlebarbsolute.style.borderTopWidth = "1px";
    person_contentflydivcommt.appendChild(personcont_titlebarbsolute);
    detail_div++;
    //创建comment中的包含图片的的div
    var personcont_titlevedixbarabsolute = document.createElement('div');
    personcont_titlevedixbarabsolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    personcont_titlevedixbarabsolute.setAttributeNode(stylepic);
    personcont_titlevedixbarabsolute.style.width = "12%";
    personcont_titlevedixbarabsolute.style.height = "100%";
    personcont_titlevedixbarabsolute.style.cssFloat = "left";
    personcont_titlevedixbarabsolute.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    personcont_titlevedixbarabsolute.style.fontSize = "18px";
    personcont_titlevedixbarabsolute.style.fontWeight = "bold";
    personcont_titlebarbsolute.appendChild(personcont_titlevedixbarabsolute);
    detail_div++;
    //创建comment中的承载图片的的div
    var bthomep = document.getElementById('pprofile-picture');
    // bthome.style.backgroundImage = "url(" + strpictrue + ")";
    // alert(bthomep.style.backgroundImage)
    var pprofile_picture1absolute = document.createElement('div');
    pprofile_picture1absolute.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    pprofile_picture1absolute.setAttributeNode(stylepic);
    pprofile_picture1absolute.style.width = "46%";
    pprofile_picture1absolute.style.height = "38px";
    pprofile_picture1absolute.style.cssFloat = "left";
    pprofile_picture1absolute.style.borderRadius = "50%";
    pprofile_picture1absolute.style.marginLeft = "45%";
    pprofile_picture1absolute.style.marginTop = "14%";
    pprofile_picture1absolute.style.backgroundImage = bthomep.style.backgroundImage;
    personcont_titlevedixbarabsolute.appendChild(pprofile_picture1absolute);
    detail_div++;
    //创建comment中的包含输入文本的div
    var person_content_txtabsolute = document.createElement('div');
    person_content_txtabsolute.id = "detailswer" + detail_div;
    var stylepic = document.createAttribute('style');
    person_content_txtabsolute.setAttributeNode(stylepic);
    person_content_txtabsolute.style.width = "88%";
    person_content_txtabsolute.style.height = "48px";
    person_content_txtabsolute.style.cssFloat = "left";
    person_content_txtabsolute.style.marginTop = "3px";
    personcont_titlebarbsolute.appendChild(person_content_txtabsolute);
    detail_div++;
    //创建comment中的输入文本的多行输入框
    var textmabsolute = document.createElement('textarea');
    textmabsolute.id = "textm";
    var stylepic = document.createAttribute('style');
    textmabsolute.setAttributeNode(stylepic);
    textmabsolute.style.width = "98%";
    textmabsolute.style.height = "65%";
    textmabsolute.style.cssFloat = "left";
    textmabsolute.style.marginTop = "1%";
    textmabsolute.style.outline = "none";
    textmabsolute.style.borderColor = "LightSkyBlue";
    textmabsolute.style.textAlign = "left";
    textmabsolute.onfocus = function txtareonfous() {
       // var bthome = document.getElementById(personcont_titlebarbsolute.id);
     //   bthome.style.height = "100px";
     //   var bthome = document.getElementById(person_content_txtabsolute.id);
      //  bthome.style.height = "85px";
      //  var bthomewe = document.getElementById(textmabsolute.id);
      //  textmabsolute.style.borderColor = "red";
       // textmabsolute.style.borderStyle = "solid";
       // textmabsolute.style.height = "99%";
       // var bthome = document.getElementById(txtbuttonbarsolute.id);
      //  bthome.style.display = "block"
    }
    textmabsolute.onblur = function txtareonflur() {
       // if (textmabsolute.value == "") {
        //    var bthome = document.getElementById(personcont_titlebarbsolute.id);
        //    bthome.style.height = "54px";
        ///    var bthome = document.getElementById(person_content_txtabsolute.id);
        //    bthome.style.height = "30px";
        ///    // var bthome = document.getElementById(textmabsolute.id);
         ///   textmabsolute.style.borderColor = "LightSkyBlue";
        //    textmabsolute.style.borderStyle = "solid";
        //    textmabsolute.style.height = "99%";
       //     var bthome1 = document.getElementById(txtbuttonbarsolute.id);
          //  bthome1.style.display = "none"
       // }
    }
    person_content_txtabsolute.appendChild(textmabsolute);
    detail_div++;
    //创建comment中的包含button的bar的div
    var txtbuttonbarsolute = document.createElement('div');
    txtbuttonbarsolute.id = "detailswer" + detail_div;
    var stylepic = document.createAttribute('style');
    txtbuttonbarsolute.setAttributeNode(stylepic);
    txtbuttonbarsolute.style.width = "100%";
    txtbuttonbarsolute.style.height = "48px";
    txtbuttonbarsolute.style.cssFloat = "left";
    txtbuttonbarsolute.style.backgroundColor = "#F0F8FF";
    txtbuttonbarsolute.style.display = "none"
    txtbuttonbarsolute.style.borderTopStyle = "none"
    person_contentflydivcommt.appendChild(txtbuttonbarsolute);
    detail_div++;
    //创建comment中的包含button的div
    var ToFollowsolute = document.createElement('div');
    ToFollowsolute.id = "detailswer" + detail_div;
    var stylepic = document.createAttribute('style');
    ToFollowsolute.setAttributeNode(stylepic);
    ToFollowsolute.style.width = "15%";
    ToFollowsolute.style.height = "35px";
    ToFollowsolute.style.cssFloat = "left";
    ToFollowsolute.style.marginTop = "1%";
    ToFollowsolute.style.marginLeft = "84%";
    txtbuttonbarsolute.appendChild(ToFollowsolute);
    detail_div++;
    //创建comment中的button reply
    var ToFollowsbuttonabsolute = document.createElement('button');
    ToFollowsbuttonabsolute.type = "button"
    ToFollowsbuttonabsolute.id = "details" + detail_div;
    ToFollowsbuttonabsolute.disabled=true
    var stylepic = document.createAttribute('style');
    ToFollowsbuttonabsolute.setAttributeNode(stylepic);
    ToFollowsbuttonabsolute.style.width = "100%";
    ToFollowsbuttonabsolute.innerHTML = "Reply"
    ToFollowsbuttonabsolute.style.height = "100%";
    ToFollowsbuttonabsolute.style.borderRadius = "18px"
    ToFollowsbuttonabsolute.style.backgroundColor = "dodgerblue"
    ToFollowsbuttonabsolute.style.color = "white"
    ToFollowsbuttonabsolute.style.borderColor = "dodgerblue"
    ToFollowsbuttonabsolute.style.borderStyle = "solid"
    ToFollowsbuttonabsolute.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    ToFollowsbuttonabsolute.style.fontSize = "15px";
    ToFollowsbuttonabsolute.style.border = "none";
    ToFollowsbuttonabsolute.style.outline = "none";
   
    ToFollowsbuttonabsolute.onclick = function addcontentdiv_onclik() {
        addcommentdiv(textmabsolute.value, user_post_personsd, usernamer);
        textmabsolute.value = "";
    }
    ToFollowsolute.appendChild(ToFollowsbuttonabsolute);
    detail_div++;
    //创建评论挂接点
    var person_content_flysolute = document.createElement('div');
    person_content_flysolute.id = "detailswerolp";
    var stylepic = document.createAttribute('style');
    person_content_flysolute.setAttributeNode(stylepic);
    person_content_flysolute.style.width = "100%";
    person_content_flysolute.style.height = "200px";
    person_content_flysolute.style.cssFloat = "left";
    person_contentflydivcommt.appendChild(person_content_flysolute);
    onload_information_for_comment(user_post_personsd);
}