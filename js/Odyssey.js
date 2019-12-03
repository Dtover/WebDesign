function loadcomment(){
	var str = localStorage.getItem("gc1");
	var gc1 = JSON.parse(str);
	for(var i = 0; i <= Number(localStorage.getItem("counter1")); i++)	{
		if(gc1[i] != null){
			var ctag = document.getElementsByClassName("Comment")[0];
			var addc = document.createElement("div");
			var node = document.createTextNode(gc1[i].comment);
			addc.append(node);
			var commentdate = document.createElement("span");
			commentdate.append(gc1[i].date);
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
picnum[1] = "../Mainpage/Gimgs/Odyeesy/01.jpg";
picnum[2] = "../Mainpage/Gimgs/Odyeesy/02.jpg";
picnum[3] = "../Mainpage/Gimgs/Odyeesy/03.jpg";
picnum[4] = "../Mainpage/Gimgs/Odyeesy/04.jpg";
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
	function Gameinfo(chname, enname, score, platform, pagename){
		this.chname = chname;
		this.enname = enname;
		this.score = score;
		this.platform = platform;
		this.pagename = pagename;
	}
	//localStorage["gamecounter"] = 0;
	
	var game = "game" + localStorage.getItem("gamecounter");
	var gameinfo = new Gameinfo("马里奥：奥德赛", "Mario: Odyssey", "9.6", "NS", "Odyssey");
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
		var isexist = localStorage.getItem("gc1");
		if(isexist == null){
			var gc1 = new Array();
		}else{
			var gc1 = JSON.parse(isexist);
		}
		var i = Number(localStorage.getItem("counter1"));
		var time = new Date();
		var date = "on " + time.getFullYear() + "/" + time.getMonth() + "/" +time.getDate() + " " + time.getHours() + ":" + time.getMinutes();
		var ctag = document.getElementsByClassName("Comment")[0];
		var addc = document.createElement("div");
		var node = document.createTextNode(comment);
		addc.append(node);
		var commentdate = document.createElement("span");
		commentdate.append(date);
		addc.append(commentdate);
		ctag.append(addc);
		gc1[i] = new obj(comment, date, "Mario: Odyssey");
		localStorage["gc1"] = JSON.stringify(gc1);
		localStorage["counter1"] = Number(localStorage.getItem("counter1")) + 1;
		document.querySelector("#commentarea").value = "";
	}
}
