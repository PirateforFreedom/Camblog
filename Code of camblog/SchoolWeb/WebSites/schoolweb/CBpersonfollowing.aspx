

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
   
    <link href="css/CBpersonfollowingcss.css" rel="stylesheet" type="text/css" />
     <script type="text/javascript" src="Scripts/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="js/CBpersonfollowingjs.js"></script>
</head>
<body  onload="onload_information()">
    <form id="form2" runat="server">
    <div id="banner">
        <div id="bhome"><button type="button"id="Homebutton" name="Homebutton" style="width:100%;
   height:47px;"onmouseover="Homebutton_onmouseover()"onmouseout="Homebutton_onmouseout()" onclick="location.href='CBinforshareroom.aspx'">Home</button>
         <div id="bhome-line"></div>
        </div>
         <div id="Logout">
            <button type="button"id="Logoutsbutton" name="Logoutbutton"  onclick="location.href='CBmainpage.aspx'">Log Out</button>
        </div>
        </div>
     <div id="person-banner"></div>
    <div id="personbar-information">
         <div id="personbar-picture"></div>
        <div id="personbar-name">Tom Jack</div>
        <div id="btweets"><button type="button"id="Tweetsbutton" name="Tweetsbutton" style="width:100%;
   height:27px;"onmouseover="Tweetsbutton_onmouseover()"onmouseout="Tweetsbutton_onmouseout()" onclick="jumpstakroom()"">Tweets</button>
            <div id="btweets-number">
<asp:Label ID="Label1" runat="server" Text="0"></asp:Label>
            </div>
            
            <div id="btweets-line"></div>
        </div>
        <div id="bfollowing"><button type="button"id="Followingbutton" name="Followingbutton" style="width:100%;
   height:27px;"onmouseover="Followingbutton_onmouseover()"onmouseout="Followingbutton_onmouseout()"  onclick="jumpFollowingrroom()" >Following</button>
             <div id="bfollowing-number">
<asp:Label ID="Label2" runat="server" Text="0"></asp:Label>
            </div>
            <div id="bfollowing-line"></div>
        </div>
        <div id="bfollowers"><button type="button"id="Followersbutton" name="Followersbutton" style="width:100%;
   height:27px;"onmouseover="Followersbutton_onmouseover()"onmouseout="Followersbutton_onmouseout()"  onclick="jumpFollowerroom()" >Followers</button>
            <div id="bfollowers-number">
<asp:Label ID="Label3" runat="server" Text="0"></asp:Label>
            </div>
            <div id="bfollowers-line"></div>
        </div>
        <div id="ToFollow">
             <button type="button"id="ToFollowsbutton" name="ToFollowbutton" 
    >Edit Profile</button>
        </div>
    </div>
<div id="person-profile">
    <div id="pprofile_ban">
        <div id="pprofile-picture"></div>
    </div>
    
    <div id="pprofile-name">Tom Jack</div>
    <div id="pprofile-statement">a free man</div>
    <div id="pprofile-location">china</div>
    <div id="pprofile-date">joined december 2018</div>
</div>
    <div id="person-contentroom">
        
    
    </div>
    
    </form>
</body>
</html>
