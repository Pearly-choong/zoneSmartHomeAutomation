// console.log('my script is working');


function openTab(evt, roomOrDevice) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(roomOrDevice).style.display = "block";
  evt.currentTarget.className += " active";
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// $('settingNav').hide();

// click even for hamburger
$(document).ready(function(){
	$('.setting-icon').click(function(){
  		$('.setting-nav').toggleClass("active");
	});
});