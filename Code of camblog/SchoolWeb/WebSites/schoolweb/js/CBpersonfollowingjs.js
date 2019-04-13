

function onload_information() {
    var usernameonline = getQueryString("username")
    //var usernameonline = 'jack';
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
                var flowingsum = $(this).find("user_follower_num").text();
                var flowingersum = $(this).find("user_following_num").text();
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
                var bthome5 = document.getElementById('Followingbutton');
                bthome5.style.color = "dodgerblue";
                var bthome2 = document.getElementById('Label2');
                bthome2.innerHTML = flowingersum;
                bthome2.style.color = "dodgerblue";
                var bthome2 = document.getElementById('Label3');
                bthome2.innerHTML = flowingsum;
                var bthome2 = document.getElementById('Label1');
                bthome2.innerHTML = strpostsum;
            });
        }
    });
    $.ajax({
        url: "WebService.asmx/Getfollowing_ing_foruser",
        type: "Post",
        dataType: "xml",
        data: { folloingusername: usernameonline },
        success: function (data) {
            var strpostcontent = "";
            var strpostdate = ""
            var strpostname = "";
            var strpostpic = ""
            var strpostcon = ""
            $.each($.find("Table1", data), function () {
                strpostcontent = $(this).find("user_following_statement").text();
                strpostdate = $(this).find("user_following_date").text();
                strpostname = $(this).find("user_following_name").text();
                strpostpic = $(this).find("user_following_pictrue").text();
                strpostcon = $(this).find("user_following_conntry").text();
                //alert(strpostcontent);
                add_div(strpostcontent, strpostdate, strpostname, strpostpic, strpostcon)
            });
        }
    });
}
function jumpFollowerroom() {
    var bthome = document.getElementById('personbar-name');
    var usernamer = bthome.innerHTML;
    window.location.href = "CBpersonfollower.aspx?username=" + usernamer;
}
function jumpFollowingrroom() {
    var bthome = document.getElementById('personbar-name');
    var usernamer = bthome.innerHTML;
    window.location.href = "CBpersonfollowing.aspx?username=" + usernamer;
}
function jumpstakroom() {
    var bthome = document.getElementById('personbar-name');
    var usernamer = bthome.innerHTML;
    window.location.href = "CBpersonroom.aspx?username=" + usernamer;
}
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
        //return decodeURI(r[2]); //解决中文乱码问题
    }
}
function Homebutton_onmouseover() {
    var bthome = document.getElementById('Homebutton');
    bthome.style.color = "dodgerblue";
    bthome.style.cursor = "pointer";
    var bdivline = document.getElementById('bhome-line');
    bdivline.style.backgroundColor = "dodgerblue";

}
function Homebutton_onmouseout() {
    var redhome = document.getElementById('Homebutton');
    redhome.style.backgroundColor = "white";
    redhome.style.color = "#666666";
    var bdivline = document.getElementById('bhome-line');
    bdivline.style.backgroundColor = "white";
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
var detail_div = 1;
var totaltweet = 0;
var totallike = 0;
function add_div(strpostcontent, strpostdate, strpostname, strpostpic, strpostcon) {
    var person_contentflydiv = document.createElement('div');
    person_contentflydiv.id = "details" + detail_div;
    var styleflydiv = document.createAttribute('style');
    person_contentflydiv.setAttributeNode(styleflydiv);
    person_contentflydiv.style.width = "297px";
    person_contentflydiv.style.height = "280px";
    person_contentflydiv.style.backgroundColor = "white"
    person_contentflydiv.style.marginLeft = "3px"
    person_contentflydiv.style.marginTop = "3px"
    person_contentflydiv.style.borderStyle = "solid";
    person_contentflydiv.style.borderWidth = "1px";
    person_contentflydiv.style.borderColor = "#E0E0E0";
    person_contentflydiv.style.cssFloat = "left"
    detail_div++;
    var person_contentflydiv_picbar = document.createElement('div');
    person_contentflydiv_picbar.id = "details" + detail_div;
    var stylepicbar = document.createAttribute('style');
    person_contentflydiv_picbar.setAttributeNode(stylepicbar);
    person_contentflydiv_picbar.style.width = "100%";
    person_contentflydiv_picbar.style.height = "30%";
    person_contentflydiv_picbar.style.cssFloat = "left";
    person_contentflydiv_picbar.style.backgroundColor = "dodgerblue";
    person_contentflydiv.appendChild(person_contentflydiv_picbar);
    detail_div++;
    var person_contentflydiv_picbar1 = document.createElement('div');
    person_contentflydiv_picbar1.id = "details" + detail_div;
    var stylepicbar = document.createAttribute('style');
    person_contentflydiv_picbar1.setAttributeNode(stylepicbar);
    person_contentflydiv_picbar1.style.width = "100%";
    person_contentflydiv_picbar1.style.height = "20%";
    person_contentflydiv_picbar1.style.cssFloat = "left";
    //person_contentflydiv_picbar1.style.backgroundColor = "red";
    person_contentflydiv.appendChild(person_contentflydiv_picbar1);
    detail_div++;
    var person_contentflydiv_pic = document.createElement('div');
    person_contentflydiv_pic.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_pic.setAttributeNode(stylepic);
    person_contentflydiv_pic.style.width = "20%";
    person_contentflydiv_pic.style.height = "100%";
    person_contentflydiv_pic.style.marginLeft = "4%";
    person_contentflydiv_pic.style.marginTop = "5%";
    //person_cotentflydiv_pic.style.marginTop = "12%";
    person_contentflydiv_pic.style.cssFloat = "left";
    person_contentflydiv_pic.style.borderRadius = "50%";
    person_contentflydiv_pic.style.backgroundImage = "url(" + strpostpic + ")";
    person_contentflydiv_picbar1.appendChild(person_contentflydiv_pic);
    detail_div++;
    var person_contentflydiv_namebar = document.createElement('div');
    person_contentflydiv_namebar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_namebar.setAttributeNode(stylepic);
    person_contentflydiv_namebar.style.width = "100%";
    person_contentflydiv_namebar.style.height = "50%";
    person_contentflydiv_namebar.style.cssFloat = "left";
    //person_contentflydiv_namebar.style.backgroundColor = "#FFCC80";
    person_contentflydiv.appendChild(person_contentflydiv_namebar);
    detail_div++;
    var person_contentflydiv_name = document.createElement('div');
    person_contentflydiv_name.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_name.setAttributeNode(stylepic);
    person_contentflydiv_name.style.width = "40%";
    person_contentflydiv_name.innerHTML = strpostname;
    person_contentflydiv_name.style.height = "45%";
    person_contentflydiv_name.style.cssFloat = "left";
    person_contentflydiv_name.style.marginLeft = "30%";
    person_contentflydiv_name.style.marginTop = "10%";
    person_contentflydiv_name.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_name.style.fontSize = "21px";
    person_contentflydiv_name.style.fontWeight = "bold";
    //person_contentflydiv_name.style.backgroundColor = "blue";
    person_contentflydiv_namebar.appendChild(person_contentflydiv_name);
    detail_div++;
    var person_contentflydiv_date = document.createElement('div');
    person_contentflydiv_date.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_date.setAttributeNode(stylepic);
    person_contentflydiv_date.style.width = "100%";
    person_contentflydiv_date.innerHTML = strpostcontent + strpostdate + strpostcon;
    person_contentflydiv_date.style.height = "45%";
    person_contentflydiv_date.style.cssFloat = "left";
    person_contentflydiv_date.style.marginLeft = "2%";
    person_contentflydiv_date.style.marginTop = "2%";
    person_contentflydiv_date.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_date.style.fontSize = "15px";
    person_contentflydiv_namebar.appendChild(person_contentflydiv_date);
    detail_div++;
    var person_contentflydiv_button = document.createElement('button');
    person_contentflydiv_button.type = "button"
    person_contentflydiv_button.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_button.setAttributeNode(stylepic);
    person_contentflydiv_button.style.width = "30%";
    person_contentflydiv_button.innerHTML = "Follow"
    person_contentflydiv_button.style.height = "50%";
    person_contentflydiv_button.style.cssFloat = "left";
    person_contentflydiv_button.style.marginLeft = "40%";
    person_contentflydiv_button.style.marginTop = "7%";
    // person_contentflydiv_picbar1.appendChild(person_contentflydiv_button);
    person_contentflydiv_button.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_button.style.fontSize = "15px";
    person_contentflydiv_button.style.borderColor = "dodgerblue"
    person_contentflydiv_button.style.borderStyle = "solid"
    person_contentflydiv_button.style.color = "dodgerblue"
    person_contentflydiv_picbar1.appendChild(person_contentflydiv_button);
    document.getElementById('person-contentroom').appendChild(person_contentflydiv);
}
