function pics(){

	var links = document.getElementsByTagName('a');
	for(var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			return showPic(this) ? false : true;
			// showPic(this);
			// return false;
		}
		links[i].onkeypress = links[i].onclick;//默认回车也能调用；
	}
}