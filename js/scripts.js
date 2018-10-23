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
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}