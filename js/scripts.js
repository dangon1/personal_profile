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
  initChartFrontend();
  initChartDatabases();
  initChartBackend();
  initChartQualidade();
})();

$.ajax({
  url: 'https://api.openweathermap.org/data/2.5/weather?id=6321162&lang=en&units=metric&appid=4c8d6e3b37e4f240b0f5036d33e48c8e',
  dataType: 'json',
  success: function(resposta) {
	situacao_tempo = resposta.weather[0].main;
	temperatura = resposta.main.temp;
	
	msgClima = "";
	if(situacao_tempo.includes('rain')){
		msgClima = 'Bring your umbrella, it\'s raining!';
	}else if (situacao_tempo.includes('cloud')){
		msgClima = 'Bring your umbrella, it shall rain.';
	} else if (situacao_tempo.includes('Clear')){
		msgClima = 'Enjoy, the day here has no clouds!';
	}
	
	msgTemp="";
	if(temperatura<15){
		msgTemp = 'Today is cold, lets have a hot coffee?';
	} else if (temperatura>=15 && temperatura <= 25){
		msgTemp = 'The weather is mild. Want to drink a juice? ';
	} else{
		msgTemp = 'It\'s a hot day, lets have an ice cream?';
	}
	document.getElementById('msg-fixa-temp').innerText = 'Today the temperature here is ' + temperatura + 'ºC and ' + resposta.weather[0].description + '.';
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

function initChartFrontend(){
	var chart = AmCharts.makeChart("chartdiv-frontend", {
	  "type": "serial",
	  "theme": "light",
	  "marginRight": 70,
	  "dataProvider": [{
		"competencia": "JSF",
		"nota": 9
	  },{
		"competencia": "Angular",
		"nota": 7
	  },{
		"competencia": "JavaScript",
		"nota": 9
	  },{
		"competencia": "JQuery",
		"nota": 9
	  },{
		"competencia": "HTML/CSS",
		"nota": 7
	  }],
	  "valueAxes": [{
		"axisAlpha": 0,
		"position": "left",
		"title": "Competency level",
		"minimum":0,
		"maximum":10
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

function initChartDatabases(){
	var chart = AmCharts.makeChart("chartdiv-databases", {
	  "type": "serial",
	  "theme": "light",
	  "marginRight": 70,
	  "dataProvider": [{
		"competencia": "Oracle",
		"nota": 9
	  },{
		"competencia": "DB2",
		"nota": 8
	  },{
		"competencia": "Postgres",
		"nota": 6
	  },{
		"competencia": "MySql",
		"nota": 5
	  }],
	  "valueAxes": [{
		"axisAlpha": 0,
		"position": "left",
		"title": "Competency level",
		"minimum":0,
		"maximum":10
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

function initChartQualidade(){
	var chart = AmCharts.makeChart("chartdiv-qualidade", {
	  "type": "serial",
	  "theme": "light",
	  "marginRight": 70,
	  "dataProvider": [{
		"competencia": "Git",
		"nota": 8
	  }, {
		"competencia": "Maven",
		"nota": 8
	  },{
		"competencia": "Jenkins",
		"nota": 6
	  },{
		"competencia": "Sonar",
		"nota": 7
	  }],
	  "valueAxes": [{
		"axisAlpha": 0,
		"position": "left",
		"title": "Competency level",
		"minimum":0,
		"maximum":10
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

function initChartBackend(){
	var chart = AmCharts.makeChart("chartdiv-backend", {
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
		"competencia": "Spring",
		"nota": 7
	  },{
		"competencia": "XML",
		"nota": 9
	  },{
		"competencia": "JUnit",
		"nota": 8
	  },{
		"competencia": "Mockito",
		"nota": 8
	  },{
		"competencia": "Cucumber",
		"nota": 8
	  },{
		"competencia": "JPQL/SQL",
		"nota": 8
	  },{
		"competencia": "C#",
		"nota": 5
	  }],
	  "valueAxes": [{
		"axisAlpha": 0,
		"position": "left",
		"title": "Competency level",
		"minimum":0,
		"maximum":10
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