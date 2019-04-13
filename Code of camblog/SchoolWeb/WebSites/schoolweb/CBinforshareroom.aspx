

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
     <link href="css/CBinforshareroom.css" rel="stylesheet" type="text/css" />
     <script type="text/javascript" src="Scripts/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="js/CBinforshareroom.js"></script>
   
    
</head>
<body onload="onload_information()">
    <form id="form4" runat="server">
    <div id="banner">
        <div id="bhome"><button type="button"id="Homebutton" name="Homebutton" 
  onmouseover="Homebutton_onmouseover()"onmouseout="Homebutton_onmouseout()" onclick="location.href='CBinforshareroom.aspx'">Home</button>
         <div id="bhome-line"></div>
        </div>
        <div id="Logout">
            <button type="button"id="Logoutsbutton" name="Logoutbutton"  onclick="location.href='CBmainpage.aspx'">Log Out</button>
        </div>
        </div>
    
<div id="person-profile">
    <div id="pprofile_ban">
        <div id="pprofile-picture"></div>
    </div>
    
    
        <div id="btweetsname"><button type="button"id="Tweetsbuttonname" name="Tweetsbuttonname" 
  onmouseover="Tweetsbuttonname_onmouseover()"onmouseout="Tweetsbuttonname_onmouseout()" onclick="jumpstakroom()"></button>
        </div>
      
    <div id="pprofile-buttons">
       <div id="btweets"><button type="button"id="Tweetsbutton" name="Tweetsbutton" style="width:100%;
   height:27px;"onmouseover="Tweetsbutton_onmouseover()"onmouseout="Tweetsbutton_onmouseout()" onclick="jumpstakroom()">Tweets</button>
            <div id="btweets-number">
<asp:Label ID="Label1" runat="server" Text="0"></asp:Label>
            </div>
            
          
        </div>
        <div id="bfollowing"><button type="button"id="Followingbutton" name="Followingbutton" style="width:100%;
   height:27px;"onmouseover="Followingbutton_onmouseover()"onmouseout="Followingbutton_onmouseout()"onclick="jumpFollowingrroom()">Following</button>
             <div id="bfollowing-number">
<asp:Label ID="Label2" runat="server" Text="0"></asp:Label>
            </div>
           
        </div>
         <div id="bfollowers"><button type="button"id="Followersbutton" name="Followersbutton" style="width:100%;
   height:27px;"onmouseover="Followersbutton_onmouseover()"onmouseout="Followersbutton_onmouseout()"  onclick="jumpFollowerroom()"">Followers</button>
            <div id="bfollowers-number">
<asp:Label ID="Label3" runat="server" Text="0"></asp:Label>
            </div>
         
        </div>
    </div>
    
</div>
    <div id="person-contentroom">
        <div id="personcont-titlebar">
            <div id="personcont-titlevedixbar">
                 <div id="pprofile-picture1"></div>
            </div>
           <div id="person-content-txt">
          <textarea id="textm" placeholder="What is hanpping?"  onfocus="txtareonfous()"  onblur="txtareonflur()"  ></textarea>
        </div>
            
        </div>
        <div id="txtbuttonbar">
                <div id="ToFollow">
            <button type="button"id="ToFollowsbutton" name="ToFollowbutton" style="width:100%;
   height:40px;" onclick="addcontentdiv()">Tweet</button>
        </div>
            </div>
        <div id="person-content-fly">
          
        </div>
       
    </div>
     <div id="rightroom">CopyRight 2019</div>
    </form>
</body>
</html>
