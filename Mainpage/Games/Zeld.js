function loadcomment(){
	commentid = "GC";
	for(var i = 1; i <= Number(localStorage.getItem("counter")); i++)	{
		var cid = commentid + String(i);
		var strcomment = new Array();
		strcomment[i] = localStorage.getItem(cid);
		var comment = new Array();
		comment[i] = JSON.parse(strcomment[i]);
		if( comment[i] != null){
			var ctag = document.getElementsByClassName("Comment")[0];
			var addc = document.createElement("div");
			var node = document.createTextNode(comment[i].comment);
			addc.append(node);
			var commentdate = document.createElement("span");
			commentdate.append(comment[i].date);
			addc.append(commentdate);
			ctag.append(addc);
		}else{
		  break;
		}
	}
}
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
var picnum = new Array();
picnum[1] = "./images/01.jpg";
picnum[2] = "./images/02.jpg";
picnum[3] = "./images/03.jpg";
picnum[4] = "./images/04.jpg";
function PicChange(id){
	document.getElementById("Pic").src = picnum[id];
	var ID = "CP" + id;
	document.getElementById(ID).style.opacity = "1";
	document.getElementById(ID).style.border = "2px solid black";
	for(var i = 1; i < 5; i++){
		var ID = "CP" + i;
		if(id == i)	{
			continue;
		}else{
			document.getElementById(ID).style.border = "2px solid rgba(25, 25, 25, 0.1)";
			document.getElementById(ID).style.opacity = "0.6";
		}
	}
}
function Mouseonevent(id){
	var ID = "CP" + id;
	document.getElementById(ID).style.border = "2px solid black";
	document.getElementById(ID).style.opacity = "1";
}
function Mouseoutevent(id){
	var ID = "CP" + id;
	document.getElementById(ID).style.border = "2px solid rgba(25, 25, 25, 0.1)";
	document.getElementById(ID).style.opacity = "0.6";
}


function Like(){
	function Gameinfo(chname, enname, score, platform){
		this.chname = chname;
		this.enname = enname;
		this.score = score;
		this.platform = platform;
	}
	//localStorage["gamecounter"] = 0;
	
	var game = "game" + localStorage.getItem("gamecounter");
	var gameinfo = new Gameinfo("旷野之息", "Breathe of Wild", "10.0", "NS,WiiU");
	strgameinfo = JSON.stringify(gameinfo);
	localStorage[game] = strgameinfo;
	localStorage["gamecounter"] = Number(localStorage.getItem("gamecounter")) + 1;
	alert("Already add to my favourite list");
}

function Hate(){
	alert("哦O.O");
}
function obj(comment, date, game){
	this.comment = comment;
	this.date = date;
	this.game = game;
}
function AddComment(){
	var comment =document.querySelector("#commentarea").value;
	if(comment == ""){
		alert("Comment can not be empty!");
	}else{
		var com = new Array();
		var commentid = "GC";
		var i = Number(localStorage.getItem("counter")) + 1;
		localStorage.setItem("counter",i);
		var time = new Date();
		var date = "on " + time.getFullYear() + "/" + time.getMonth() + "/" +time.getDate();
		var cid = commentid + String(localStorage.getItem("counter"));
		var ctag = document.getElementsByClassName("Comment")[0];
		var addc = document.createElement("div");
		var node = document.createTextNode(comment);
		addc.append(node);
		var commentdate = document.createElement("span");
		commentdate.append(date);
		addc.append(commentdate);
		ctag.append(addc);
		com[i] = new obj(comment, date, "Breathe of Wild");
		var strcomment = new Array();
		strcomment[i] = JSON.stringify(com[i]);
		localStorage[cid] = strcomment[i];
		document.querySelector("#commentarea").value = "";
		//var commentid = "Zeld";
		//var i = Number(localStorage.getItem("counter")) + 1;
		//localStorage.setItem("counter",i);
		//var time = new Date();
		//var date = time.getFullYear() + "/" + time.getMonth() + "/" +time.getDate();
		//var cid = commentid + String(localStorage.getItem("counter"));
		//var ctag = document.getElementsByClassName("Comment")[0];
		//var addc = document.createElement("div");
		//var node = document.createTextNode(comment);
		//addc.append(node);
		//var commentdate = document.createElement("span");
		//commentdate.append(date);
		//addc.append(commentdate);
		//str = "001" + addc.innerHTML;
		//localStorage.setItem(cid, addc.innerHTML);
		//ctag.append(addc);
		//document.querySelector("#commentarea").value = "";
	}
}
