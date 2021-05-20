document.getElementById('generator_form').onsubmit = function(e) {
	e.preventDefault();
	var title = document.getElementById('science_title').value;
	var surname = document.getElementById('surname').value;
	if (!title || !surname) {
		window.alert('Fill the form correctly!');
		return;
	}

	document.getElementById('output').innerHTML = title;
};

function getRandomArrayElement(array) {
	return array[Math.floor(Math.random() * array.length)];
};


function anxietyArray() {
	return getRandomArrayElement([
		'Bardzo niepokoi mnie ten przedmiot. ',
		'Czuję duży stres i niechęć. ',
		'Nie mam już siły. ',
		'Jestem skrajnie wyczerpany. ',
		'Wszystko o czym marzę, to koniec tej męki. ',
		'Jestem o włos od rzucenia studiów. ',
		'Ubolewam nad poziomem tego przedmiotu. ',
		'Ten przedmiot to wstyd. '
	]);
}

