// (function (document, $) {

(function() {

	var myJsonData;
	const buttons = document.querySelectorAll('.button');

	//var list = document.querySelector('.selection');
	var countryPrompt = document.getElementById("country_prompt");
	var symbolPrompt = document.getElementById("symbol_prompt");
	var exportPrompt = document.getElementById("export_prompt");
	var crisisPrompt = document.getElementById("crisis_prompt");


	/*function fetchCardLists(){
		// $.ajax method returns a "deferred" otherwise known as a Promise
		// a promise is either resolved (success) or errors, known as a catch (you catch the error)
		return $.ajax('/data/cardlists.json');

	}*/

	function reqListener () {
		myJsonData = JSON.parse(this.responseText);
		
	}

	function request() {
		const url = '/data/data.json',
		openReq = new XMLHttpRequest();
		
		openReq.addEventListener('load', reqListener);
		openReq.open('get', url, true);
		openReq.send();
		
	}

	function chooseCard(category){

		var collection = myJsonData[category];
		var collectionLength = collection.length;
		var randomNumber = Math.floor(Math.random() * collectionLength);

		return collection[randomNumber];

	}

	function ready(){

		for (var i = 0; i < buttons.length; i++) {
				buttons[i].addEventListener('click', onCreateButtonClick);
	
    	}

		request();
	}

	function onCreateButtonClick(){

		var countryStart = chooseCard('countryStart');
		var countryMiddle = chooseCard('countryMiddle');
		var countryEnd = chooseCard('countryEnd');

		var country = countryStart.concat(countryMiddle,countryEnd);

		var people = chooseCard('people');
		var animal = chooseCard('animal');
		var job = chooseCard('job');

		var foodDrink = chooseCard('foodDrink');
		var object = chooseCard('object');

		var physicalQuirk = chooseCard('physicalQuirk');
		var problem = chooseCard('problem');
		var goalAspiration = chooseCard('goalAspiration');
		
		var symbolArray = [animal, people, job];
		var exportArray = [foodDrink, object];
		var crisisArray = [problem, goalAspiration];
		
		for(let i=0; i<symbolArray.length; i++){

			var randomSymbolNumber = Math.floor(Math.random() * symbolArray.length);
	
			if(symbolArray[randomSymbolNumber] === animal){
				var colour = chooseCard('colour');
				var symbol = 'a'.concat(' ', colour, ' ', symbolArray[randomSymbolNumber]);

			}else {

				var symbol = symbolArray[randomSymbolNumber];
				symbol.concat('with', physicalQuirk);
			}
			
		}

		for(let j=0; j<exportArray.length; j++){

			var randomExportNumber = Math.floor(Math.random() * exportArray.length);
			var nationalExport = exportArray[randomExportNumber];

		}

		for(let k=0; k<crisisArray.length; k++){

			var randomCrisisNumber = Math.floor(Math.random() * crisisArray.length);
			var crisis = crisisArray[randomCrisisNumber];

		}



		//TO DO: add stuff in to do each part one by one. Can do story in sections, so when another prompt comes up, if it makes no sense where the story was going, it might be funnier
		countryPrompt.innerHTML = country;
		symbolPrompt.innerHTML = symbol;
		exportPrompt.innerHTML = nationalExport;
		crisisPrompt.innerHTML = crisis;

		
	}

	document.addEventListener('DOMContentLoaded', ready);

// })(document, jQuery);

}());

