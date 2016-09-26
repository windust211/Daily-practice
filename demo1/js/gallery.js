/*
元素element
1
属性attr
2
文本text
3
注释comments
8
文档document
9

nodeValue,firstChild lastChild, [0],[length-1];
*/

function showPic(whichpic){
	if(!document.getElementById) return false;
	if(!document.getElementById('placeholder')) return false;
	if(!document.getElementsByTagName) return false;
	var body_element = document.getElementsByTagName('body')[0];
	// var source = whichpic.getAttribute('href'); //core-dom
	var source = whichpic.href;//html-dom
	var placeholder = document.getElementById('placeholder');
	// placeholder.setAttribute('src', source);//placeholder.src = source;
	placeholder.src = source;//html-dom
	if(document.getElementById('description')){
		var description = document.getElementById('description');
		// var text = whichpic.getAttribute('title')?whichpic.getAttribute('title'):'';
		var text = whichpic.title ? whichpic.title :''
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue = text;
		}
	}
		return true;
}

function preparePlaceHolder(){
	var placeholder = document.createElement('img');
	var txt = document.createElement('p');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','');
	placeholder.setAttribute('alt','placeholder');
	txt.setAttribute('id','description');
	var desc = document.createTextNode('choose an image');
	txt.appendChild(desc);
	var gallery = document.getElementById('gallery');
	
	insertAfter(placeholder,gallery);
	insertAfter(txt,placeholder);
}



