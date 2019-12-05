function loadcomment(num){
	getUsername();
	var gcnum = "gc" + String(num);
	var countnum = "counter" + String(num);
	var str = localStorage.getItem(gcnum);
	var gc = JSON.parse(str);
	for(var i = 0; i < Number(localStorage.getItem(countnum)); i++)	{
		if(gc[i] != null){
			var ctag = document.getElementsByClassName("Comment")[0];
			var addc = document.createElement("div");
			var node = document.createTextNode(gc[i].comment);
			addc.append(node);
			var commentdate = document.createElement("span");
			commentdate.append(gc[i].date);
			addc.append(commentdate);
			ctag.append(addc);
		}else{
			break;
		}
	}
}
function PicChange(id, gamename){
	var picnum = new Array();
	picnum[1] = "../Mainpage/Gimgs/" + gamename + "/01.jpg";
	picnum[2] = "../Mainpage/Gimgs/" + gamename + "/02.jpg";
	picnum[3] = "../Mainpage/Gimgs/" + gamename + "/03.jpg";
	picnum[4] = "../Mainpage/Gimgs/" + gamename + "/04.jpg";
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
function Like(chname, enname, score, platform, pagename){
	function Gameinfo(chname, enname, score, platform,pagename){
		this.chname = chname;
		this.enname = enname;
		this.score = score;
		this.platform = platform;
		this.pagename = pagename;
	}
	//localStorage["gamecounter"] = 0;
	
	var game = "game" + localStorage.getItem("gamecounter");
	//var gameinfo = new Gameinfo("旷野之息", "Breathe of Wild", "10.0", "NS,WiiU","Zeld");
	var gameinfo = new Gameinfo(chname, enname, score, platform, pagename);
	strgameinfo = JSON.stringify(gameinfo);
	localStorage[game] = strgameinfo;
	localStorage["gamecounter"] = Number(localStorage.getItem("gamecounter")) + 1;
	alert("Already add to my favourite list");
}
function Hate(){
	alert("哦O.O");
}
function AddComment(num, gamename){
	function obj(comment, date, game){
		this.comment = comment;
		this.date = date;
		this.game = game;
	}
	var comment =document.querySelector("#commentarea").value;
	if(comment == ""){
		alert("Comment can not be empty!");
	}else{
		//var isexist = localStorage.getItem("gc0");
		var gcnum = "gc" + String(num);
		var counternum = "counter" + num;
		var isexist = localStorage.getItem(gcnum);
		if(isexist == null){
			//var gc0 = new Array();
			var gc = new Array();
		}else{
			//var gc0 = JSON.parse(isexist);
			var gc = JSON.parse(isexist);
		}
		var i = Number(localStorage.getItem(counternum));
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
		gc[i] = new obj(comment, date, gamename);
		localStorage[gcnum] = JSON.stringify(gc);
		localStorage[counternum] = Number(localStorage.getItem(counternum)) + 1;
		document.querySelector("#commentarea").value = "";
	}
}
