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

$.ajax({
  url: 'https://api.openweathermap.org/data/2.5/weather?id=6321162&lang=pt&units=metric&appid=4c8d6e3b37e4f240b0f5036d33e48c8e',
  dataType: 'json',
  success: function(resposta) {
	situacao_tempo = resposta.weather[0].main;
	temperatura = resposta.main.temp;
	
	msgClima = "";
	if(situacao_tempo.includes('rain')){
		msgClima = 'Traga seu guarda-chuva pois está chovendo!';
	}else if (situacao_tempo.includes('cloud')){
		msgClima = 'Traga seu guarda-chuva pois pode chover!';
	} else if (situacao_tempo.includes('Clear')){
		msgClima = 'Aproveite que hoje o céu está sem nuvens!';
	}
	
	msgTemp="";
	if(temperatura<15){
		msgTemp = 'Hoje está frio. Vamos tomar um café quente? ';
	} else if (temperatura>=15 && temperatura <= 25){
		msgTemp = 'O clima está ameno. Vamos tomar um suco? ';
	} else{
		msgTemp = 'Está muito calor, vamos tomar um açaí gelado?';
	}
	document.getElementById('msg-fixa-temp').innerText = 'Hoje a temperatura é de ' + temperatura + 'ºC e ' + resposta.weather[0].description + '.';
	document.getElementById('msg-temp').innerText = msgTemp;
	document.getElementById('msg-clima').innerText = ' '+ msgClima;
  }
});

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
	  "rotate": true,
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