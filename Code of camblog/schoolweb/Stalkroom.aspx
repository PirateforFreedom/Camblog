﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Stalkroom.aspx.cs" Inherits="Stalkroom" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>twitter-campus</title>
    <link href="stalkroomcss.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="jsstalkroom.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="banner">
        <div id="bhome"><button type="button"id="Homebutton" name="Homebutton" style="width:100%;
   height:47px;"onmouseover="Homebutton_onmouseover()"onmouseout="Homebutton_onmouseout()"onclick="location.href='ptoproom.aspx'" >Home</button>
         <div id="bhome-line"></div>
        </div>
        </div>
     <div id="person-banner"></div>
    <div id="personbar-information">
         <div id="personbar-picture"></div>
        <div id="personbar-name">Tom Jack</div>
        <div id="btweets"><button type="button"id="Tweetsbutton" name="Tweetsbutton" style="width:100%;
   height:27px;"onmouseover="Tweetsbutton_onmouseover()"onmouseout="Tweetsbutton_onmouseout()" onclick="location.href='Stalkroom.aspx'">Tweets</button>
            <div id="btweets-number">
<asp:Label ID="Label1" runat="server" Text="0"></asp:Label>
            </div>
            
            <div id="btweets-line"></div>
        </div>
        <div id="bfollowing"><button type="button"id="Followingbutton" name="Followingbutton" style="width:100%;
   height:27px;"onmouseover="Followingbutton_onmouseover()"onmouseout="Followingbutton_onmouseout()"onclick="location.href='personfollowing.aspx'">Following</button>
             <div id="bfollowing-number">
<asp:Label ID="Label2" runat="server" Text="0"></asp:Label>
            </div>
            <div id="bfollowing-line"></div>
        </div>
        <div id="bfollowers"><button type="button"id="Followersbutton" name="Followersbutton" style="width:100%;
   height:27px;"onmouseover="Followersbutton_onmouseover()"onmouseout="Followersbutton_onmouseout()"  onclick="location.href='personfollower.aspx'">Followers</button>
            <div id="bfollowers-number">
<asp:Label ID="Label3" runat="server" Text="0"></asp:Label>
            </div>
            <div id="bfollowers-line"></div>
        </div>
        <div id="ToFollow">
            <button type="button"id="ToFollowsbutton" name="ToFollowbutton" style="width:100%;
   height:50px;" >Follow</button>
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
        <div id="personcont-titlebar">
            <div id="personcont-title">Tweets</div>
        </div>
        <div id="person-content-fly">
           
        </div>
       
    </div>
     <div id="rightroom">CopyRight 2019</div>
    </form>
</body>
</html>