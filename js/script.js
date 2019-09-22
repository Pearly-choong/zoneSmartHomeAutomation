// console.log('my script is working');

// =============== Setting navbar ====================
function openNav() {
  document.getElementById('setting').style.width = '300px';
  document.getElementById('setting').style.height = '600px';
}

function closeNav() {
  document.getElementById('setting').style.width = '0';
}





// ==================== tab function on Automate page ================
function openTab(evt, roomOrDevice) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  tabLinks = document.getElementsByClassName('tab-links');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }
  document.getElementById(roomOrDevice).style.display = 'block';
  evt.currentTarget.className += ' active';
}


// Get the element with id="defaultOpen" and click on it
  document.getElementById('default').click();
