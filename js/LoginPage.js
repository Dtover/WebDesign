function LoginFunction(){
	var name = document.getElementsByClassName("username")[0].value;
	var pwd = document.getElementsByClassName("pwd")[0].value;
	if(name == "admin" && pwd =="123456"){
		//open new link in current page	
		window.location.href = "../Mainpage/GameList.html";
		//open new link in new page
		//window.open("../Mainpage/GameList.html");
	}else{
		alert("Please check the username and password!");	
	}
}
//Press enter to login
//document.addEventListener("keyup", function(event) {
	//if(event.keyCode == "13"){
		//document.getElementsByClassName("loginbutton")[0].click();
	//}
//});
//show what GIC means part
function GICshow(){
	var i = document.getElementById("GICintro");		
	i.className = "gicshow";
	setTimeout(function(){ i.className = i.className.replace("gicshow", "GICintro"); }, 5500);
}
function ShowLogin(){
	var i = document.getElementById("LoginPart");
	i.className = "LoginPartShow";
	document.getElementById("Welcome").style.display = "none";
	document.getElementById("GICintro").style.display = "none";
}
function ShowReg(){
	document.getElementById("Register").style.display = "block";
	var i = document.getElementById("Register");
	i.className = "RegisterShow";
	var j = document.getElementById("LoginPart");
	j.className = "Logindis";
	setTimeout(function(){ document.getElementById("LoginPart").style.display = "none"; }, 1000);
}
function HideReg(){
	document.getElementById("LoginPart").style.display = "block";
	var i = document.getElementById("Register");
	i.className = "RegisterHide";
	var j = document.getElementById("LoginPart");
	j.className = "Loginshowagain";
	setTimeout(function(){ document.getElementById("Register").style.display = "none"; }, 1000);
}
function judgeReg(){
	var name = document.getElementById("suusername").value;
	var pwd = document.getElementById("supwd").value;
	var repwd = document.getElementById("copwd").value;
	if(name == "" || pwd == "" || repwd == ""){
		alert("Are you sure you have filled all the input windows?");
	}else if(pwd != repwd){
		alert("Twice password input must be same ! Please check your input and do it again");
	}else{
		alert("Contratulations! Sign up successfully!")
	}
}
function ClearInput(){
	document.getElementById("suusername").value = "";
	document.getElementById("supwd").value = "";
	document.getElementById("copwd").value = "";
}
