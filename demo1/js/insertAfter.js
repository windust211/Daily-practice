function insertAfter(newElem,targetElem){
	var parent = targetElem.parentNode;
	if(parent.lastChild == targetElem){
		parent.appendChild(newElem);
	}
	else{
		parent.insertBefore(newElem,targetElem.nextSibling)
	}
}