function openNav() {
	var value = document.getElementById("mySidenav").style.width; 	
	if(value == "220px"){
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("MenuBtn").style.margin = "0px auto auto 0px";
		document.getElementById("GamePart").style.margin = "10px auto auto 100px";
		
	}else{
		document.getElementById("mySidenav").style.width = "220px";
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

function EnlargePic(num){
	var picwindow = document.getElementById("Background");
	var p = document.getElementsByClassName("image")[num];
	var pic = document.getElementById("PicContent");
	pic.src = p.src;
	picwindow.className = "show";
	picwindow.style.display = "block";
}
function cls(){
	var picwindow = document.getElementById("Background");
	picwindow.className = "dis";
	setTimeout(function(){ picwindow.style.display = "none"; }, 800);
}

