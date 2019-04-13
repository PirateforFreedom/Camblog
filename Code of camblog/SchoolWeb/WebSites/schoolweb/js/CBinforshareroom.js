
//总体功能：加载大厅页面时，从数据库取用户信息和所有用户发布的信息
//输入：用户名
//返回：用户信息和发布的信息
function onload_information() {
    var bthome2 = document.getElementById('Homebutton');
    bthome2.style.color = "dodgerblue"
    var bthome2 = document.getElementById('bhome-line');
    bthome2.style.backgroundColor= "dodgerblue"
   var usernameonline = get_cookie("username");
    var pictrue_path = '';
    var usernamer567;
    //取用户信息
    $.ajax({
        url: "WebService.asmx/GetUserInformation",
        type: "Post",
        dataType: "xml",
        data: { username: usernameonline },
        success: function (data) {
            var strfollowingsum = "";
            var strpostsum = ""
            var strfollowersum = "";
            $.each($.find("Table1", data), function () {
                strpictrue = $(this).find("user_pictrue").text();
                pictrue_path = strpictrue;
                strpostsum = $(this).find("user_posts_num").text();
                strfollowingsum = $(this).find("user_following_num").text();
                strfollowersum = $(this).find("user_follower_num").text();
                var bthome = document.getElementById('pprofile-picture');
                bthome.style.backgroundImage = "url(" + strpictrue + ")";
                var bthome1 = document.getElementById('pprofile-picture1');
                bthome1.style.backgroundImage = "url(" + strpictrue + ")";
                var bthome1 = document.getElementById('Tweetsbuttonname');
                bthome1.innerHTML = usernameonline;
                var bthome2 = document.getElementById('Label1');
                bthome2.innerHTML = strpostsum
                var bthome2 = document.getElementById('Label2');
                bthome2.innerHTML = strfollowingsum
                var bthome2 = document.getElementById('Label3');
                bthome2.innerHTML = strfollowersum
            });
        }
    });
    //取发布的信息
    $.ajax({
        url: "WebService.asmx/GetDataSetforpersonpost",
                         type: "Post",
                         dataType: "xml",
                         data: { username1: usernameonline },
                 success: function (data) {
                     var strpostcontent = "";
                     var strpostdate = ""
                     var usernamer1 = ""
                     var picturer=""
                     $.each($.find("Table1", data), function () {
                        
                              strpostcontent= $(this).find("user_post_content").text();
                              strpostdate = $(this).find("user_post_date").text();
                              usernamer1 = $(this).find("user_name").text();
                              
                              picturer = $(this).find("user_pictrue").text();
                              add_divonload(strpostcontent, strpostdate, picturer, usernamer1)
                     });
                  
                      }
                 }); 
}
//跳转页面，传递参数
function jumpFollowingrroom() {
    var bthome = document.getElementById('Tweetsbuttonname');
    var usernamer = bthome.innerHTML;
    window.location.href = "CBpersonfollowing.aspx?username=" + usernamer;
}
//跳转页面，传递参数
function jumpFollowerroom() {
    var bthome = document.getElementById('Tweetsbuttonname');
    var usernamer = bthome.innerHTML;
    window.location.href = "CBpersonfollower.aspx?username=" + usernamer;
}
//跳转页面，传递参数
function jumpstakroom() {
    var bthome = document.getElementById('Tweetsbuttonname');
    var usernamer = bthome.innerHTML;
    window.location.href = "CBpersonroom.aspx?username=" + usernamer;
}
//输入文本框失去焦点时
function txtareonflur() {
    if ( document.getElementById("textm").value== "")
    {
        var bthome = document.getElementById('personcont-titlebar');
        bthome.style.height = "54px";
        var bthome = document.getElementById('person-content-txt');
        bthome.style.height = "33px";
        var bthome = document.getElementById('textm');
        bthome.style.borderColor = "LightSkyBlue";
        bthome.style.borderStyle = "solid";
        bthome.style.height = "99%";
        var bthome1 = document.getElementById('txtbuttonbar');
        bthome1.style.display = "none"
    }
}
//输入文本框得到焦点时
function txtareonfous() {
    var bthome = document.getElementById('personcont-titlebar');
    bthome.style.height = "100px";
    var bthome = document.getElementById('person-content-txt');
    bthome.style.height = "80px";
    var bthome = document.getElementById('textm');
    bthome.style.borderColor = "red";
    bthome.style.borderStyle = "solid";
    bthome.style.height = "99%";
    var bthome = document.getElementById('txtbuttonbar');
    bthome.style.display="block"
}
//鼠标滑到button
function Homebutton_onmouseover() {
    var bthome = document.getElementById('Homebutton');
    bthome.style.cursor = "pointer";
}
//鼠标滑出button
function Homebutton_onmouseout() {
   
}
function Tweetsbuttonname_onmouseover() {
    var bthome = document.getElementById('Tweetsbuttonname');
    bthome.style.color = "dodgerblue";
    bthome.style.cursor = "pointer";
   

}
function Tweetsbuttonname_onmouseout() {
    var redhome = document.getElementById('Tweetsbuttonname');
    redhome.style.backgroundColor = "white";
    redhome.style.color = "#000000";
    
}
function Tweetsbutton_onmouseover() {
    var bttweet = document.getElementById('Tweetsbutton');
    bttweet.style.color = "dodgerblue";
    bttweet.style.cursor = "pointer";
    var btsnumber = document.getElementById('btweets-number');
    btsnumber.style.color = "dodgerblue";

    var bdivline = document.getElementById('btweets-line');
    bdivline.style.backgroundColor = "dodgerblue";

}
function Tweetsbutton_onmouseout() {
    var redtweet = document.getElementById('Tweetsbutton');
    redtweet.style.backgroundColor = "white";
    redtweet.style.color = "#666666";

    var bdivline = document.getElementById('btweets-line');
    bdivline.style.backgroundColor = "white";
    var btsnumber = document.getElementById('btweets-number');
    btsnumber.style.color = "dodgerblue";
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
    btsn.style.color = "dodgerblue";
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
    btsn.style.color = "dodgerblue";
}
//从cooki中取出用户名
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
//添加新发布的内容
function addcontentdiv() {
    var strtxt = document.getElementById("textm").value;
   var username = get_cookie("username");
    //var username = 'tom';
    var pictrue_path = '';
    var poss;
    var poss1;
    //获得用户信息
    $.ajax({
        url: "WebService.asmx/GetUserInformation",
        type: "Post",
        dataType: "xml",
        data: { username: username },
        success: function (data) {
            $.each($.find("Table1", data), function () {
                var strpictrue = $(this).find("user_pictrue").text();
                pictrue_path = strpictrue;
              var strpostsum = $(this).find("user_posts_num").text();
               poss = strpostsum;
                var strpostsum1 = $(this).find("user_name_tiaoshu").text();
                poss1 = strpostsum1;
            });
        }
    });
   var myDate = new Date();
   var mytime = myDate.toLocaleString();
    //插入到数据库
   $.ajax({
       type: "POST",   //访问WebService使用Post方式请求
       contentType: "application/json", //WebService 会返回Json类型
       url: "WebService.asmx/InsertTxt", //调用WebService的地址和方法名称组合 ---- WsURL/方法名
       data: "{strtxt:'" + strtxt + "',usernamef:'" + username + "',userposttime:'"+mytime+"'}",         //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到       
       dataType: 'json',
       success: function (result) {     //回调函数，result，返回值

           var json = result.d
           if (json == 'no') {
               alert("插入数据库失败");
              
           }
           else {
               
               add_div(strtxt, mytime, pictrue_path, poss, poss1, username);
               document.getElementById("textm").value = "";
           }
       }
   });
}
var detail_div = 1;
var detailfrist_div = 0;
var totallike = 0;
var totaltweet = 0;
//加载时动态创建div
function add_divonload(txtet, str2, str3, usernamer) {
    detailfrist_div++;
    var person_contentflydiv = document.createElement('div');
    person_contentflydiv.id = "detailsfrist" + detailfrist_div;
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
    if (totaltweet == 0 ) {
        document.getElementById("person-content-fly").appendChild(person_contentflydiv);
        detail_div++;
        totaltweet++;
    }
    else {
        var th = detailfrist_div - 1;
        var st = "detailsfrist" + th;
        var mubiao = document.getElementById(st);
        mubiao.parentNode.insertBefore(person_contentflydiv, mubiao);
        detail_div++;
        totaltweet++;
    }
}
//发布时动态创建div
function add_div(txtet, str2, str3, posss, poss1, username) {
    var detailfrist_div = poss1;
    var totaltweet = posss;
    detailfrist_div++;
    var person_contentflydiv = document.createElement('div');
    person_contentflydiv.id = "detailsfrist" + detailfrist_div;
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
    person_contentflydiv_pic.style.backgroundImage = "url("+str3+")";
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
    var person_contentflydiv_button1 = document.createElement('button');
    person_contentflydiv_button1.type = "button"
    person_contentflydiv_button1.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_button1.setAttributeNode(stylepic);
    person_contentflydiv_button1.style.width = "10%";
    person_contentflydiv_button1.innerHTML = username
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
        window.location.href = "CBpersonroom.aspx";
    }
    person_contentflydiv_namebar.appendChild(person_contentflydiv_button1);
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
        var mubiao = document.getElementById(st);
        mubiao.parentNode.insertBefore(person_contentflydiv, mubiao);
        detail_div++;
        totaltweet++;
        document.getElementById("Label1").innerHTML = totaltweet;
    }  
}
