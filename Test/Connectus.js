function obj(name, pwd, repwd){
	this.name = name;
	this.pwd = pwd;
	this.repwd = repwd;
}
sessionStorage.setItem("count", 0);
var num = new Array();
function reg(){
	var username = document.getElementById("suusername").value;
	var password = document.getElementById("supwd").value;
	var repwd = document.getElementById("copwd").value;
	var count = Number(sessionStorage.getItem("count"));
	console.log(count);
	num[count] = new obj(username, password, repwd);
	console.log(num);
	var str = JSON.stringify(num);
	sessionStorage.setItem("num", str);
	sessionStorage["count"] = Number(sessionStorage.getItem("count")) + 1;
}
function check(){
	var username = document.getElementById("suusername").value;
}
function login(){
	var name = document.getElementById("suusername").value;
	var pwd = document.getElementById("supwd").value;
}
var count = 0;
var n = new Array();
function arrtest(){
	n[count] = 0;
	console.log(n[0]);
	count++;
}
