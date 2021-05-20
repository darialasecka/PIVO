function generator(title, surname) {
	var output = "";
	output += begginingSentence(title, surname);
	output += anxietySentence(title, surname);
	output += argumentBegginingSentence(title, surname);
	output += argumentSentence(title, surname);
	output += anxietySentence(title, surname);
	output += exampleBegginingSentence(title, surname);
	output += exampleSentence(title, surname);
	output += anxietySentence(title, surname);
	return output;
}


document.getElementById('generator_form').onsubmit = function(e) {
	e.preventDefault();
	var title = document.getElementById('science_title').value;
	var surname = document.getElementById('surname').value;
	if (!title || !surname) {
		window.alert('Fill the form correctly!');
		return;
	}
	var output = generator(title, surname);
	document.getElementById('output').innerHTML = output;
};


function getRandomArrayElement(array) {
	return array[Math.floor(Math.random() * array.length)];
};


function anxietySentence(title, surname) {
	return getRandomArrayElement([
		'Bardzo niepokoi mnie ten przedmiot. ',
		'Czuję duży stres i niechęć. ',
		'Nie mam już siły. ',
		'Jestem skrajnie wyczerpany. ',
		'Wszystko o czym marzę, to koniec tej męki. ',
		'Jestem o włos od rzucenia studiów. ',
		'Ubolewam nad poziomem tego przedmiotu. ',
		'Ten przedmiot to wstyd. ',
		'Jakość tego przedmiotu urąga pozycji naszej uczelni. ',
		'Nie wynosimy nic z tych zajęć. ',
		'Pomocy. ',
		'Błagam, zróbcie coś. ',
		'To nie może dłużej tak wyglądać... ',
		'To jest nieśmieszny żart, kpina. ',
		'Wstyd... '
	]);
}

function begginingSentence(title, surname) {
	return getRandomArrayElement([
		'Zdecydowałem się na wypełnienie tej ankiety, bo ju nie mam sił. ',
		`Postanowiłem napisać do Was, bo jestem zażenowany tym, jak niski poziom ${title} utrzymuje. `,
		`Nie da się powiedzieć żadnego dobrego słowa o przedmiocie, który ${title} ${surname} prowadzi. `,
		'Według mnie nie można powiedzieć ani jednego dobrego słowa o tym w jaki sposób jest realizowany ten przedmiot. '
	]);
}

function argumentBegginingSentence(title, surname) {
	return getRandomArrayElement([
		'Mam naprawdę dużo niedopuszczalnych sytuacji do opisania, ale skupię się tylko na najważniejszych. ',
		`${title} pokazywał wiele skandalicznych zachowań, które nigdy nie powinny mieć miejsca. `,
		`${title} ${surname} nie umie pracować z ludźmi, o czym świadczy wiele jego zachowań. `
	]);
}

function argumentSentence(title, surname) {
	return getRandomArrayElement([
		'Studenci są notorycznie obrażani, traktowani z góry, upokarzani. ',
		'Ciągle mówi się do nas pogardliwym tonem, jesteśmy wręcz atakowani. ',
		'Jesteśmy traktowani bardzo rygorystycznie, a prowadzący zapomina, że jesteśmy też tylko ludźmi. Nie ma miejsca na żadne odstępstwa, z góry traktuje się nas jak oszustów. ',
		`${title} robi nam wielką łaskę, że czasem coś wytłumaczy lub da materiały. Tym sposobem nie podnosi się w żaden sposób naszych kompetencji czy poziomu. `,
		'Prowadzący sam nie wie czego wymaga, zmienia zdanie co chwilę. ',
		`Każdego dnia ${title} zadania ocenia inaczej, według swojego humoru. Raz oblewa perfekcyjnie zadania, a raz zalicza takie, które wcale nie są zrobione dobrze. `
	]);
};

function exampleBegginingSentence(title, surname) {
	return getRandomArrayElement([
		'Pewnego razu na zajęciach miała miejsca taka sytuacja. ',
		`Raz ${title} przeszedł samego siebie swoim zachowaniem. `,
		'Na którychś zajęciach zdarzyło się coś takiego: ',
		'Jestem zażenowany, że taka sytuacja miała miejsce: ',
		'Nie wierzę, że w topowej technicznej uczelni mogło coś takiego się wydarzyć... '
	]);
};

function exampleSentence(title, surname) {
	return getRandomArrayElement([
		'Jeden ze studentów został wygoniony za jakieś totalnie drobne przewinienie. Wpisano mu nieobecność, mimo, że cały czas uczestniczył w zajęciach. ',
		'Ktoś spóźnił się dosłownie 40 sekund z wysłaniem zadania, wyłącznie z winy prowadzącego. Po prostu zmienił zdanie co do terminu oddania. Ten student został za to ukarany! ',
		`${title} ${surname} wyklikał mi wiele podejść na Wikampie, prawdopodobnie przypadkiem. Potem obniżył mi ocenę za zbyt wysoką ilość podejść... `,
		`${title} ${surname} podważył prawdziwość mojego usprawiedliwienia wystawionego przez lekarza. Dopiero, gdy zagroziłem skargą do dziekana, odpuścił. `,
		`${title} nie przedstawił specyfiki zadania. Obniżył mi ocenę za to, że zinterpretowałem je troszkę inaczej niż on. W moim rozumowaniu nie było sprzeczności z treścią zadania. `,
		'Oskarżono mnie o ucieczkę z zajęć, mimo, że ciągle w nich uczestniczyłem. Po prostu nie zdążyłem dostatecznie szybko odciszyć mikrofonu. Zanim zdążyłem się odezwać, usłyszałem z ust prowadzącego wiele nieprzyjemnych słów na mój temat. '
	]);
};
