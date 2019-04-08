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
//function person_contentflydiv_button_onmouseover() {
// var bt = document.getElementById('Followersbutton');
// bt.style.color = "dodgerblue";
/// var bdiv = document.getElementById('shuzi3');
//bdiv.style.color = "dodgerblue";

//}
//function person_contentflydiv_button_onmouseout(bbtom) {
//var redf = document.getElementById('Followersbutton');
///redf.style.backgroundColor = "white";
///redf.style.color = "black";
/// var bdivl = document.getElementById('bfollowers-line');
///bdivl.style.backgroundColor = "white";
// var btsn = document.getElementById('bfollowers-number');
// btsn.style.color = "black";
////function q() {
/// var bt = document.getElementById('button5');
///bt.style.color = "dodgerblue";
/// var bdiv = document.getElementById('shuzi3');
//bdiv.style.color = "dodgerblue";

//}
///function p() {
///  var red = document.getElementById('button5');
//  red.style.backgroundColor = "white";
//  red.style.color = "black";
// var bdiv = document.getElementById('shuzi3');
// bdiv.style.backgroundColor = "white";
//  bdiv.style.color = "black";
//}
var detail_div = 1;
var totaltweet = 0;
var totallike = 0;
var detailfrist_div = 0;
function add_div() {
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
    //person_contentflydiv_picbar.style.backgroundColor = "rgb(1,135,206)";
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
    person_contentflydiv_pic.style.backgroundImage = "url(/picture/timg.jpg)";
    person_contentflydiv_picbar.appendChild(person_contentflydiv_pic);
    detail_div++;
    var person_contentflydiv_namebar = document.createElement('div');
    person_contentflydiv_namebar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_namebar.setAttributeNode(stylepic);
    person_contentflydiv_namebar.style.width = "88%";
    person_contentflydiv_namebar.style.height = "25%";
    person_contentflydiv_namebar.style.cssFloat = "left";
    //person_contentflydiv_namebar.style.backgroundColor = "#FFCC80";
    person_contentflydiv.appendChild(person_contentflydiv_namebar);
    detail_div++;
    var person_contentflydiv_name = document.createElement('div');
    person_contentflydiv_name.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_name.setAttributeNode(stylepic);
    person_contentflydiv_name.style.width = "15%";
    person_contentflydiv_name.innerHTML = "Tom Jack"
    person_contentflydiv_name.style.height = "45%";
    person_contentflydiv_name.style.cssFloat = "left";
    person_contentflydiv_name.style.marginLeft = "2%";
    person_contentflydiv_name.style.marginTop = "2%";
    person_contentflydiv_name.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_name.style.fontSize = "17px";
    person_contentflydiv_name.style.fontWeight = "bold";
    //person_contentflydiv_name.style.backgroundColor = "#00FF00";
    person_contentflydiv_namebar.appendChild(person_contentflydiv_name);
    detail_div++;
    var person_contentflydiv_date = document.createElement('div');
    person_contentflydiv_date.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_date.setAttributeNode(stylepic);
    person_contentflydiv_date.style.width = "35%";
    person_contentflydiv_date.innerHTML = "Post by december 2018"
    person_contentflydiv_date.style.height = "45%";
    person_contentflydiv_date.style.cssFloat = "left";
    person_contentflydiv_date.style.marginLeft = "2%";
    person_contentflydiv_date.style.marginTop = "2%";
    person_contentflydiv_date.style.fontFamily = "Trebuchet MS, Arial, Helvetica";
    person_contentflydiv_date.style.fontSize = "15px";
    person_contentflydiv_date.style.color = "#A0A0A0";
    //person_contentflydiv_name.style.fontWeight = "bold";
    //person_contentflydiv_date.style.backgroundColor = "#00FF00";
    person_contentflydiv_namebar.appendChild(person_contentflydiv_date);
    detail_div++;
    var person_contentflydiv_txtbar = document.createElement('div');
    person_contentflydiv_txtbar.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_txtbar.setAttributeNode(stylepic);
    person_contentflydiv_txtbar.style.width = "88%";

    person_contentflydiv_txtbar.style.height = "60%";
    person_contentflydiv_txtbar.style.cssFloat = "left";
    //person_contentflydiv_txtbar.style.backgroundColor = "#00FFFF";
    person_contentflydiv.appendChild(person_contentflydiv_txtbar);
    detail_div++;
    var person_contentflydiv_txt = document.createElement('div');
    person_contentflydiv_txt.id = "details" + detail_div;
    var stylepic = document.createAttribute('style');
    person_contentflydiv_txt.setAttributeNode(stylepic);
    person_contentflydiv_txt.style.width = "88%";
    if (totaltweet == 0) {
        person_contentflydiv_txt.innerHTML = " from china."
    }
    else {
        person_contentflydiv_txt.innerHTML = "2019 Happle new year to all world friends ,this wish from china."
    }
   
    person_contentflydiv_txt.style.height = "30%";
    person_contentflydiv_txt.style.cssFloat = "left";
    person_contentflydiv_txt.style.marginLeft = "2%";
    person_contentflydiv_txt.style.fontFamily = "sans-serif";
    person_contentflydiv_txt.style.fontSize = "15px";
    person_contentflydiv_txt.style.color = "#101010";
    //person_contentflydiv_txt.style.backgroundColor = "#000000";
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
    //person_contentflydiv_button.style.backgroundColor = "#00FF00";
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

    //person_contentflydiv_label.style.backgroundColor = "#000000";
    person_contentflydiv_botombar.appendChild(person_contentflydiv_label);
    //width:60%;
    //height:50px;

    //float:left;
    //border-radius:50%;
    //background-image:url("/picture/timg.jpg");
    //margin-left:13%;
    //margin-top:20%;
    //border-bottom-color:#E0E0E0;
    //border-top-color:#E0E0E0;
    //border-bottom-style:solid;
    //border-bottom-width:1px;
    //border-top-width:1px;
    // border-top-style:solid;
    //float:left;
    //.appendChild(person_contentflydiv)
    //mubiao.parentNode.insertBefore(a, mubiao);
    if (totaltweet == 0)
    {
        document.getElementById("person-content-fly").appendChild(person_contentflydiv);
        detail_div++;
        totaltweet++;
        document.getElementById("Label1").innerHTML = totaltweet;
    }
    else {
        var th = detailfrist_div - 1;
        var st = "detailsfrist" + th;
     
        var mubiao = document.getElementById(st );
        mubiao.parentNode.insertBefore(person_contentflydiv, mubiao);
        detail_div++;
        totaltweet++;
        document.getElementById("Label1").innerHTML = totaltweet;
       
    }
  
    
   
}

function del_div() {
    //var id = "details" + (detail_div - 1).toString();
    //v//ar e = document.getElementById(id);
    ///document.getElementById("form").removeChild(e);
    /// detail_div--;
    /// var div = document.createElement("div");
    //// div.id = "details" + detail_div;
    // div.innerHTML = "sdfasdf"
    //// var style = document.createAttribute("style");
    /// div.setAttributeNode(style);
    /// div.style.backgroundColor = "rgb(1,135,206)";
    /// div.style.borderColor = "#000";
    //// div.style.width = "10px";
    /// div.style.height = "20px";
    /// document.getElementById("tet1").appendChild(div);
    /// detail_div++;
    // <div id="tou">
    //  <div id="toua"></div>
    // </div>
    // <div id="tettitle">
    /// <div id="mingc">Tom Jack</div>
    // <div id="riqi">Post by december 2018</div>
    // </div>
    //<div id="tettext">2019 Happle new year to all world friends ,this wish from china.</div>
    /// <div id="tetbotom">
    //   <div id="lib"><button type="button"id="button5" name="button5" style="width:100%;
    // height:27px;"onmouseover="q()"onmouseout="p()" onclick="button_onclick();" >Like</button></div>
    // <div id="shuzi3">
    //<asp:Label ID="Label4" runat="server" Text="0"></asp:Label>
    // </div>
    // </div>
    //border-bottom-color:#E0E0E0;
    //border-top-color:#E0E0E0;
    //border-bottom-style:solid;
    //border-bottom-width:1px;
    //border-top-width:1px;
    // border-top-style:solid;
}