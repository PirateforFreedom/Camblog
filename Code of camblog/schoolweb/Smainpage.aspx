
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Smainpage.aspx.cs" Inherits="Smainpage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="mainpagecss.css" rel="stylesheet" type="text/css" />
    <link href="smaincss.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div id="leftpage">
        <div id="text1">1.Follow your interests.</div>
        <div id="text2">2.Hear what people are talking about.</div>
        <div id="text3">3.Join the conversation.</div>
    </div>
     <div id="rightpage">
         <div id="logouban">See what’s happening in the campus right now,Join It today.</div>
         <div id="userdiv">
             <input type="text"  id="usertxt" placeholder="username"name="usertxt1"/>
         </div>
         <div id="passdiv">
              <input type="password"  id="passwordtxt" placeholder="password"name="password1"/>
         </div>
         <div id="denglu">
           <button type="button"id="Loginbutton" name="Loginbutton" 
   onclick="location.href='ptoproom.aspx'">Log In</button>
         </div>
         <div id="zhuce">
             <button type="button"id="zhucebutton" name="zhucebutton" 
   onclick="location.href='ptoproom.aspx'">Sign Up</button>
         </div>
         
     </div>
    </form>
</body>
</html>
