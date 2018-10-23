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
  
  adicionaSmooth();
  
  initChart();
})();

function initMap() {
  var casa = {lat: -19.8745702, lng: -43.9277244};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: casa});
  var marker = new google.maps.Marker({position: casa, map: map});
}

function adicionaSmooth(){
	document.querySelectorAll('a[href^="#"]').forEach(a => {
		a.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});	
}

function initChart(){
	var chart = AmCharts.makeChart("chartdiv", {
	  "type": "serial",
	  "theme": "light",
	  "marginRight": 70,
	  "dataProvider": [{
		"competencia": "Java",
		"nota": 9
	  }, {
		"competencia": "JPA/Hibernate",
		"nota": 9
	  },{
		"competencia": "Testes (JUnit/Mockito/Cucumber)",
		"nota": 8
	  },{
		"competencia": "JavaScript/JQuery",
		"nota": 8
	  },{
		"competencia": "JSF",
		"nota": 8
	  },{
		"competencia": "Git",
		"nota": 8
	  }, {
		"competencia": "Maven",
		"nota": 8
	  }, {
		"competencia": "JPQL/SQL",
		"nota": 7
	  },{
		"competencia": "Jenkins/Sonar",
		"nota": 7
	  }, {
		"competencia": "HTML/CSS",
		"nota": 7
	  },{
		"competencia": "C#",
		"nota": 6
	  },{
		"competencia": "C++",
		"nota": 5
	  }],
	  "valueAxes": [{
		"axisAlpha": 0,
		"position": "left",
		"title": "Nível de competência"
	  }],
	  "startDuration": 1,
	  "graphs": [{
		"balloonText": "<b>[[category]]: [[value]]</b>",
		"fillColorsField": "color",
		"fillAlphas": 0.9,
		"lineAlpha": 0.2,
		"type": "column",
		"valueField": "nota"
	  }],
	  "chartCursor": {
		"categoryBalloonEnabled": false,
		"cursorAlpha": 0,
		"zoomable": false
	  },
	  "categoryField": "competencia",
	  "categoryAxis": {
		"gridPosition": "start",
		"labelRotation": 45
	  },
	  "export": {
		"enabled": true
	  }

	});
}