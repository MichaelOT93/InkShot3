
		window.onscroll = function() {scrollFunction()};
		var mobile = window.matchMedia("(max-width: 600px)");
		var tablet = window.matchMedia("(max-width: 768px)");
		var desktop = window.matchMedia( "(min-width: 769px)");
		
		function scrollFunction(){
		if(mobile.matches){
			document.getElementById("navBar").style.opacity = "80%";
			document.getElementById("navBar").style.padding = "10px 0px";
		}
		else if (tablet.matches){
			
			if (document.body.scrolltop > 80 || document.documentElement.scrollTop > 80){
			document.getElementById("navBar").style.opacity = "80%";
			document.getElementById("navBar").style.padding = "10px 0px";
			document.getElementById("h").style.top = "68%";
			document.getElementById("a").style.top = "68%";
			document.getElementById("c").style.top = "68%";
			document.getElementById("g").style.top = "68%";
			document.getElementById("buffer").style.opacity = "0%";
			}
			
			else{
			
			document.getElementById("navBar").style.opacity = "100%";
			document.getElementById("navBar").style.padding = "10px 0px";
			document.getElementById("h").style.top = "68%";
			document.getElementById("a").style.top = "68%";
			document.getElementById("c").style.top = "68%";
			document.getElementById("g").style.top = "68%";
			document.getElementById("buffer").style.opacity = "100%";
		
			
		
		} 
		
		
		
		}
		else 
			if (document.body.scrolltop > 80 || document.documentElement.scrollTop > 80){
			document.getElementById("navBar").style.opacity = "80%";
			}
			else {
			
			document.getElementById("navBar").style.opacity = "100%";
			}
		}
			


		
		
		
	function openForm(){
		if(mobile.matches) {
			
		document.getElementById("sideForm").style.width = "100%";
		} else {
			document.getElementById("sideForm").style.width = "33.3%";
		}
	}
	
	
	
	
		
	function openMiddleForm(){
		if (mq.matches) {
	document.getElementById("middleForm").style.width = "100%";
	document.getElementById("middleForm").style.height = "100%";
	document.getElementById("middleForm").style.visibility = "visible";
	document.getElementById("middleForm").style.left = "0%";
	
	
		} else{
	document.getElementById("middleForm").style.height = "100%";
	document.getElementById("middleForm").style.visibility = "visible";
	document.getElementById("middleForm").style.width = "33.3%";
		}
	
	}
		
		
	function openRightForm(){
		if (mq.matches){
			document.getElementById("rightForm").style.width = "100%";
		} else {
	document.getElementById("rightForm").style.width = "33.4%";
		}
	}
		
		
	function closeSideForm(){
	document.getElementById("sideForm").style.width = "0%";
	
	}
	
	function closeMiddleForm(){
	document.getElementById("middleForm").style.height = "0%";
	document.getElementById("middleForm").style.visibility = "hidden";
	}
	
	function closeRightForm(){
	document.getElementById("rightForm").style.width="0%";
	}
		
	function hamburger(){
		var menu = document.getElementById("navMenu");
		if (menu.style.visibility == "hidden"){
			menu.style.visibility = "visible";
		} else {
			menu.style.visibility = "hidden";
		}
		
		
	}

	
		



		
		
	
		