<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ptoproom.aspx.cs" Inherits="ptoproom" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
     <link href="ptoproomcss.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="ptoproomjs.js"></script>
</head>
<body>
    <form id="form4" runat="server">
    <div id="banner">
        <div id="bhome"><button type="button"id="Homebutton" name="Homebutton" style="width:100%;
   height:47px;"onmouseover="Homebutton_onmouseover()"onmouseout="Homebutton_onmouseout()" onclick="location.href='ptoproom.aspx'">Home</button>
         <div id="bhome-line"></div>
        </div>
        </div>
    
<div id="person-profile">
    <div id="pprofile_ban">
        <div id="pprofile-picture"></div>
    </div>
    
    
        <div id="btweetsname"><button type="button"id="Tweetsbuttonname" name="Tweetsbuttonname" style="width:100%;
   height:27px;"onmouseover="Tweetsbuttonname_onmouseover()"onmouseout="Tweetsbuttonname_onmouseout()" onclick="location.href='Stalkroom.aspx'">Tom Jack</button>
        </div>
      
    <div id="pprofile-buttons">
       <div id="btweets"><button type="button"id="Tweetsbutton" name="Tweetsbutton" style="width:100%;
   height:27px;"onmouseover="Tweetsbutton_onmouseover()"onmouseout="Tweetsbutton_onmouseout()" onclick="location.href='Stalkroom.aspx'">Tweets</button>
            <div id="btweets-number">
<asp:Label ID="Label1" runat="server" Text="0"></asp:Label>
            </div>
            
          
        </div>
        <div id="bfollowing"><button type="button"id="Followingbutton" name="Followingbutton" style="width:100%;
   height:27px;"onmouseover="Followingbutton_onmouseover()"onmouseout="Followingbutton_onmouseout()"onclick="location.href='personfollowing.aspx'">Following</button>
             <div id="bfollowing-number">
<asp:Label ID="Label2" runat="server" Text="0"></asp:Label>
            </div>
           
        </div>
         <div id="bfollowers"><button type="button"id="Followersbutton" name="Followersbutton" style="width:100%;
   height:27px;"onmouseover="Followersbutton_onmouseover()"onmouseout="Followersbutton_onmouseout()"  onclick="location.href='personfollower.aspx'">Followers</button>
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
            <textarea  id="txtmul" name="reworkmes"   cols="66"   rows="5"   style="OVERFLOW:hidden"></textarea>
        </div>
            <div id="txtbuttonbar">
                <div id="ToFollow">
            <button type="button"id="ToFollowsbutton" name="ToFollowbutton" style="width:100%;
   height:40px;" onclick="add_div()">Tweet</button>
        </div>
            </div>
        </div>
        <div id="person-content-fly"></div>
       
    </div>
     <div id="rightroom">CopyRight 2019</div>
    </form>
</body>
</html>
