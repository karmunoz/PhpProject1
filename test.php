<?php
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Test AddChild to XML</title>
</head>

<body>
   <input type="button" id="btadd" value="Add" onclick="setDB();"/>
   <script type="text/javascript">
   		var username = "Guest";
		var cntchat = "Hello, world !";
		
		function setDB(){
			var xml;
			if (window.ActiveXObject) {
				xml = new ActiveXObject("Microsoft.XMLHTTP");
			}  else {
				xml = new XMLHttpRequest();
			}
			xml.open("GET", "texto.xml", true);
			xml.send(null);
			 
			var chat = xml.responseXML.createElement("chat");
			 
			var user = xml.responseXML.createElement("user");
			user.appendChild(xml.responseXML.createTextNode(username));
			 
			var content = xml.responseXML.createElement("content");
			content.appendChild(xml.responseXML.createTextNode(cntchat));
			 
			chat.appendChild(user);
			chat.appendChild(content);
			 
			xml.responseXML.appendChild(chat);
		}
   </script>
</body>
</html>
