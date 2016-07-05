$(function(){
	tabLinks = new Array();
	contentDivs = new Array();

	initializeTabs();
});

// =========== Code for tabs ===============
function initializeTabs(){
	// Grabs all the tabs into one variable
	var listOfTabs = document.getElementById('tabs').childNodes;

	for(var i= 0; i < listOfTabs.length; i++){
		if ( listOfTabs[i].nodeName == "LI" ){
			var tabLink = getFirstChild( listOfTabs[i], 'A' );
			var id = getHash( tabLink.getAttribute('href') );

			tabLinks[id] = tabLink;
			contentDivs[id] = document.getElementById(id);
		}
	}

	// Assign onclick events to the tab links 
	var i = 0;
	for(var id in tabLinks){
		tabLinks[id].onclick = function showTab() {
		  var selectedId = getHash( this.getAttribute('href') );

		  // Highlight the selected tab, and dim all others.
		  // Also show the selected content div, and hide all others.
		  for ( var id in contentDivs ) {
		    if ( id == selectedId ) {
		      tabLinks[id].className = 'selected';
		      contentDivs[id].className = 'tabContent';
		    } else {
		      tabLinks[id].className = '';
		      contentDivs[id].className = 'tabContent hide';
		    }
		  }
		  hideScrollBar(document.getElementById('my-projects'))
		  // Stop the browser following the link
		  return false;
		}; 

		tabLinks[id].onfocus = function() {this.blur()};
		if(i == 0) tabLinks[id].className = 'selected';
		i ++  
	}

	// Hide all content divs except the first
  var i = 0;
  for ( var id in contentDivs ) {
    if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
    i++;
  }
}

// Get the first child with the name provided
function getFirstChild( element, tagName ) {
  for ( var i = 0; i < element.childNodes.length; i++ ) {
    if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
  }
}

// Get the substring of url after the hash symbol
function getHash( url ) {
  var hashPos = url.lastIndexOf( '#' );
  return url.substring( hashPos + 1 );
}
// =========== end of tabs code ==============

function hideScrollBar(element){
	element.style.paddingRight = element.offsetWidth - element.clientWidth + 'px';
	console.log(element);
}