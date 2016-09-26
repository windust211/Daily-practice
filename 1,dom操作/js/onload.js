function addLoadEvent(func){
	var oldFun = window.onload;
	if(typeof(oldFun) != 'function'){
		window.onload = func;
	}
	 else{
	 	window.onload = function(){
	 		oldFun();
	 		func();
	 	}
	 }
}//未加载完，document.body都不存在；
addLoadEvent(preparePlaceHolder);
addLoadEvent(pics);