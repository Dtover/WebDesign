function openNav() {
	var value = document.getElementById("mySidenav").style.width; 	
	if(value == "220px"){
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("MenuBtn").style.margin = "0px auto auto 0px";
		document.getElementById("GamePart").style.margin = "10px auto auto 100px";
		document.getElementById("RankingList").style.width = "240px";
		
	}else{
		document.getElementById("mySidenav").style.width = "220px";
		document.getElementById("RankingList").style.width = "0";
		document.getElementById("MenuBtn").style.margin = "0px auto auto 220px";
		document.getElementById("GamePart").style.margin = "10px auto auto 340px";
	}
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
function getUsername(){
	var name = document.getElementById("Username");
	name.innerHTML = localStorage.getItem("currentuser");
}
