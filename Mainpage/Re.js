function obj(name, pwd, repwd){
	this.name = name;
	this.pwd = pwd;
	this.repwd = repwd;
}
var count = 0;
function reg(){
	var num = new obj();
	var username = document.getElementById("suusername").value;
	var password = document.getElementById("supwd").value;
	var repwd = document.getElementById("copwd").value;
	var str = new Array();
	num[count] = new obj(username, password, repwd);
	str[count] = JSON.stringify(num[count]);
	sessionStorage.setItem(str, str[count]);
}
function check(){
	var username = document.getElementById("suusername").value;
}
function login(){
	var name = document.getElementById("suusername").value;
	var pwd = document.getElementById("supwd").value;
}
