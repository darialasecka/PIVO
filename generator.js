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
		'Wstyd... ',
		'Jestem naprawdę zdegustowany. ',
		'Nie ma słów, które mogą oddać moje zniesmaczenie. ',
		'Przykro mi, że to, co się tutaj dzieje, wydarzyło się naprawdę. ',
		'Nie wytrzymam, powoli załamuję się psychiczne. ',
		'Modlę się każdego dnia, by moje cierpienia zostały ukrócone. ',
		'Dłużej nie wytrzymam. ',
		'Wstyd mi, że pracownik dydaktyczny reprezentuje się takimi zachowaniami ',
		`Zacząłem mieć tiki nerwowe, gdy dostaję maile podpisane ${title} ${surname}`,
		'Jak tak można. ',
		'Mam dość. ',
	]);
}

function begginingSentence(title, surname) {
	return getRandomArrayElement([
		'Zdecydowałem się na wypełnienie tej ankiety, bo już nie mam sił. ',
		`Postanowiłem napisać do Was, bo jestem zażenowany tym, jak niski poziom ${title} utrzymuje. `,
		`Nie da się powiedzieć żadnego dobrego słowa o przedmiocie, który ${title} ${surname} prowadzi. `,
		'Według mnie nie można powiedzieć ani jednego dobrego słowa o tym w jaki sposób jest realizowany ten przedmiot. ',
		'Czekałem z wielką tęsknotą na ankietyzację! ',
		'Ankietyzacja to chyba najbardziej wyczekany przeze mnie dzień w roku. ',
		`${title} ${surname} naprawdę przegiął, musicie coś z tym zrobić. `,
		'Błagam, zainterweniujcie, bo dzieje się naprawdę źle! '
	]);
}

function argumentBegginingSentence(title, surname) {
	return getRandomArrayElement([
		'Mam naprawdę dużo niedopuszczalnych sytuacji do opisania, ale skupię się tylko na najważniejszych. ',
		`${title} pokazywał wiele skandalicznych zachowań, które nigdy nie powinny mieć miejsca. `,
		`${title} ${surname} nie umie pracować z ludźmi, o czym świadczy wiele jego zachowań. `,
		'Nie uwierzycie jak źle się dzieje, póki nie zobaczycie tych zajęć na własne oczy. ',
		'To jest tak tragiczny żart, że brak mi słów. Takich zachowań nie doświadczyłem przez całe studia. ',
		`Wierzę, że ${title} pracuje na uczelni dlatego, że w poważnej pracy zespołowej nigdy by się nie sprawdził. `,
		'W każdej wypowiedzi prowadzącego czuć gigantyczną pogardę dla człowieka. ',
		'Ciężko mi nie odnieść wrażenia, że prowadzący nie ma studentów za debili. A my naprawdę chcemy coś wynieść z tego przedmiotu! ',
		'Jestem zmęczony ciągłym zmienianiem zdania przez prowadzącego. ',
		'Wydarzyło się tyle sytuacji, że nawet nie dam rady wszystkich przytoczyć. Dopowiem je w kolejnych ankietach, gdy sobie przypomnę. ' ,
		'Mam dość takiego zachowania prowadzącego. '
	]);
}

function argumentSentence(title, surname) {
	return getRandomArrayElement([
		'Studenci są notorycznie obrażani, traktowani z góry, upokarzani. ',
		'Ciągle mówi się do nas pogardliwym tonem, jesteśmy wręcz atakowani. ',
		'Jesteśmy traktowani bardzo rygorystycznie, a prowadzący zapomina, że jesteśmy też tylko ludźmi. Nie ma miejsca na żadne odstępstwa, z góry traktuje się nas jak oszustów. ',
		`${title} robi nam wielką łaskę, że czasem coś wytłumaczy lub da materiały. Tym sposobem nie podnosi się w żaden sposób naszych kompetencji czy poziomu. `,
		'Prowadzący sam nie wie czego wymaga, zmienia zdanie co chwilę. ',
		`Każdego dnia ${title} zadania ocenia inaczej, według swojego humoru. Raz oblewa perfekcyjnie zadania, a raz zalicza takie, które wcale nie są zrobione dobrze. `,
		`${title} nagminnie ignoruje moje maile, sytuacji nie da się pokojowo wyjaśnić. `,
		`Gdy tylko próbuję zwrócić uwagę, że ${title} popełnił jakiś błąd, jestem mieszany z błotem. `
	]);
};

function exampleBegginingSentence(title, surname) {
	return getRandomArrayElement([
		'Pewnego razu na zajęciach miała miejsca taka sytuacja. ',
		`Raz ${title} przeszedł samego siebie swoim zachowaniem. `,
		'Na którychś zajęciach zdarzyło się coś takiego: ',
		'Jestem zażenowany, że taka sytuacja miała miejsce: ',
		'Nie wierzę, że w topowej technicznej uczelni mogło coś takiego się wydarzyć... ',
		'Nie wiem jak to możliwe, że w ogóle taka sytuacja mogła się tutaj wydarzyć. ',
		`Z bezradością patrzyłem jak ${title} ${surname} robi taki cyrk przy całej grupie: `,
		'Kto studiuje na naszym wydziale, ten w cyrku się nie śmieje. Np. była taka sytuacja, że ',
		'Takie prowokacyjne zachowania, które tu widziałem, nie powinny się nigdy wydarzyć. ',
		'To co się tu działo, to ogromny popis cynizmu i przerostu ego. ',
		'Podejście do studentów jest dramatyczne. Chcecie konkretnej sytuacji? Proszę! ' ,
		'To co się tu dzieje, to jakieś nieporozumienie. ' ,
		`Nie mogę pojąć jak ktoś taki jak {$title} {$surname} może zachowywać się w taki sposób. `
	]);
};

function exampleSentence(title, surname) {
	return getRandomArrayElement([
		'Jeden ze studentów został wygoniony za jakieś totalnie drobne przewinienie. Wpisano mu nieobecność, mimo, że cały czas uczestniczył w zajęciach. ',
		'Ktoś spóźnił się dosłownie 40 sekund z wysłaniem zadania, wyłącznie z winy prowadzącego. Po prostu zmienił zdanie co do terminu oddania. Ten student został za to ukarany! ',
		`${title} ${surname} wyklikał mi wiele podejść na Wikampie, prawdopodobnie przypadkiem. Potem obniżył mi ocenę za zbyt wysoką ilość podejść... `,
		`${title} ${surname} podważył prawdziwość mojego usprawiedliwienia wystawionego przez lekarza. Dopiero, gdy zagroziłem skargą do dziekana, odpuścił. `,
		`${title} nie przedstawił specyfiki zadania. Obniżył mi ocenę za to, że zinterpretowałem je troszkę inaczej niż on. W moim rozumowaniu nie było sprzeczności z treścią zadania. `,
		'Oskarżono mnie o ucieczkę z zajęć, mimo, że ciągle w nich uczestniczyłem. Po prostu nie zdążyłem dostatecznie szybko odciszyć mikrofonu. Zanim zdążyłem się odezwać, usłyszałem z ust prowadzącego wiele nieprzyjemnych słów na mój temat. ',
		`${title} ma tendencję do krzyczenia. Niestety, estem wrażliwą osobą, gdy ktoś na mnie krzyczy, zaczynam się jąkać i prawie płaczę. Nie interesuje mnie to, że ${title} ma taki sposób wypowiadania się - to nie jest na moją psychikę. `,
		`${title} bardzo agresywnie reaguje na jakąkolwiek dyskusję. Boję się podejmować z nim jakąkolwiek interakcję, przez co tylko pogłębiam luki w mojej wiedzy. `,
		`Obrażono mnie. ${title} po prostu, personalnie, mnie obraził, z premedytacją. Skierował do mnie obraźliwe słowa. `,
		`Jeden ze studentów potrzebował pilnie wezwać pomoc, bo któryś z domowników miał wypadek. ${title} mu na to nie pozwalał. W końcu zrozumiał powagę sytuacji i się zgodził, ale zrobił to z ogromną manierą w głosie i pogardą. `,
		`Otóż ${title} na zajęciach podawał informacje sprzeczne z wykładem. Krzyczał na nas, gdy zwróciliśmy uwagę na błąd. Materiały wykładowe też go nie przekonały do przyznania się do pomyłki. `,
		`Dobór zadań nie ma nic wspólnego z praktycznym zastosowaniem tego przedmiotu. Uprawiamy sztukę dla samej sztuki, ${title} ${surname} wymyśla absurdalne zadania w których trzeba duplikować dużo kodu, a jakiekolwiek techniki skrócenia go lub uproszczenia sobie pracy jest karane. Najgorsze jest poczucie, że nic z tego nie ma żadnego zastosowania w praktyce. ` ,
		`Jak pokazywałem zadanie, {$title} zaczął krzyczeć, bo rzekomo nie potrafię go zrobić. Jednak po zwróceniu uwagi, iż polecenie jest inne, {$title} musiał sprawdzić instrukcję. Okazało się, że od początku miałem poprawnie zrobione. ` ,
		`{$title} {$surname} sprawdzając poprawione zadanie, ponownie uruchomił poprzednią, błędą, wersję. Po napisaniu maila o pomyłce, {$title} wciąż miał problem ze sposobem rozwiązania, które robiło dokładnie to czego oczekiwał. `
	]);
};
