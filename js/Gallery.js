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

