function openNav() {
	var value = document.getElementById("mySidenav").style.width; 	
	if(value == "220px"){
		document.getElementById("mySidenav").style.width = "0";
		close();
	}else{
		document.getElementById("mySidenav").style.width = "220px";
		open();
	}
}
//Change the location of the menu button and the middle part of the page 
function open(){
	document.getElementById("MenuBtn").style.margin = "0px auto auto 220px";
	document.getElementById("GamePart").style.margin = "10px auto auto 340px";
}
function close(){
	document.getElementById("MenuBtn").style.margin = "0px auto auto 0px";
	document.getElementById("GamePart").style.margin = "10px auto auto 100px";
}
//Open and close the hidden part of the platform selective list part
function Pf(){
	var value = document.getElementById("PfBar").style.height;
	if(value == "0px"){
		document.getElementById("PfBar").style.height = "160px";
	}else{
		document.getElementById("PfBar").style.height = "0px";
	}
}
//Open and close the hidden part of the company selective list part
function Cp(){
	var value = document.getElementById("CpBar").style.height;
	if(value == "0px"){
		document.getElementById("CpBar").style.height = "160px";
	}else{
		document.getElementById("CpBar").style.height = "0px";
	}
}
//Control the times of clicking the button
var mutex = true;
function showlgames(){
	if(mutex){
		return;
	}
	document.getElementById("LGames").style.display = "block";
	var i = document.getElementById("LGames");
	i.className = "lgappear";
	var j = document.getElementById("Comment");
	j.className = "codisappear";
	document.getElementById("likebtn").style.background = "rgba(25, 25, 25, 0.8)";
	document.getElementById("commentbtn").style.background = "white";
	document.getElementById("likebtn").style.color = "white";
	document.getElementById("commentbtn").style.color = "black";
	setTimeout(function(){ document.getElementById("Comment").style.display = "none"; mutex = true; }, 1000)
	
}
function showcomments(){
	if(!mutex){
		return;
	}
	document.getElementById("Comment").style.display = "block";
	var i = document.getElementById("LGames");
	i.className = "lgdisappear";
	var j = document.getElementById("Comment");
	j.className = "coappear";
	document.getElementById("commentbtn").style.background = "rgba(25, 25, 25, 0.8)";
	document.getElementById("likebtn").style.background = "white";
	document.getElementById("likebtn").style.color = "black";
	document.getElementById("commentbtn").style.color = "white";
	setTimeout(function(){ document.getElementById("LGames").style.display = "none"; mutex = false;}, 1000)
}
function commentadd(){
	commentid = "GC";
	for(var i = 1; i <= Number(localStorage.getItem("counter")); i++)	{
		var cid = commentid + String(i);
		var strcomment = new Array();
		strcomment[i] = localStorage.getItem(cid);
		var comment = new Array();
		comment[i] = JSON.parse(strcomment[i]);
		if(comment[i] != null){
			var c = document.getElementById("Comment");
			var Com = document.createElement("div");
			Com.className = "com";
			var newcom = document.createElement("div");
			var img = document.createElement("img");
			imgpath = "/home/dreamlocker/WebDesign/images/" + comment[i].game + ".png";
			img.height = "100";
			img.src = imgpath;
			var textarea = document.createElement("p");
			textarea.append(comment[i].comment);
			var datearea = document.createElement("span");
			datearea.append("on " + comment[i].date);
			newcom.append(textarea);
			newcom.append(datearea);
			Com.append(img);
			Com.append(newcom);
			c.append(Com);
		}else{
		  break;
		}
	}
}
