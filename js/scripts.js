(function() {
  
  modals = document.getElementsByClassName('w3-modal');
  
  for (var i = 0, len = modals.length; i < len; i++) {
	modals[i].style.display='none';
  }
  openModalButtons = document.getElementsByClassName('openModal');
  
 
  for (var i = 0, len = openModalButtons.length; i < len; i++) {
	openModalButtons[i].addEventListener("click", function() {
      /* Do your stuffs here */
	this.nextElementSibling.style.display='block';
	});
  }
  closeModalButtons = document.getElementsByClassName('closeModal');
  for (var i = 0, len = closeModalButtons.length; i < len; i++) {
	closeModalButtons[i].addEventListener("click", function() {
		/* Do your stuffs here */
		this.parentElement.parentElement.parentElement.style.display='none';
	});
  }
  
})();

function initMap() {
  var casa = {lat: -19.8964431, lng: -43.9402232};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: casa});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: casa, map: map});
}