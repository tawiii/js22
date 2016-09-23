$(function () {
	'use strict';

	let data = {
		h: 'test prof predatnosti',
		all: [{
				question: 'Килограмм гвоздей или килограмм пуха?',
		option: [{
				answer: 'Гвозди',
				action:  0
			}, {
				answer: 'Пух',
				action:  0
			}, {
				answer: 'Детский сад',
				action:  1
			}]
		}, {
			question: 'Сколько лететь до меркурия?',
		option: [{
				answer: '1000000',
				action:  0
			}, {
				answer: '1110003300',
				action:  0
			}, {
				answer: 'Много',
				action:  1
			}]
		}, {
			question: 'Почему в стае держат только одного питуха?',
		option: [{
				answer: 'Двое будут буянить',
				action:  1
			}, {
				answer: 'Могут спиться',
				action:  0
			}, {
				answer: 'Могут завязаться не традиционные отношения',
				action:  0
			}]
		}],
		button: 'Result',
		success: 'А ты не плох!!!',
		sadness: 'Пичалька ;('
	};

	localStorage.setItem('data', JSON.stringify(data));
   let get = localStorage.getItem('data');
   let parseData = JSON.parse(get);
   let html = $('#test').html();
   let content = tmpl(html, {data: parseData});
   $('body').append(content);

	let start = e => {
		e.preventDefault();
		 let answeriAction = [];
		 for (let i = 0; i < data.all.length; i++) {
		 	for(let j = 0; j < data.all[i].option.length;j++){
		 		let act = data.all[i].option[j].action;
		 		answeriAction.push(act)
		 	}
		 }

		 let allChecked = [];
		 $('input[type="checkbox"]').each(function () {
		 	if ($(this).prop('checked')) {
		 		allChecked.push(1);
		 	} else {
		 		allChecked.push(0);
		 	}
		 });

		 let total = JSON.stringify(answeriAction) === JSON.stringify(allChecked);
		 if (total) {
		 	$('.success').show('fast');
		 } else {
		 	$('.sadness').show('fast');
		 }
		
		$('.close').on('click', e => {
			e.preventDefault();
			$('.shut').hide('fast');
		});

		$('input[type="checkbox"]').each(function() {
			$(this).removeAttr('checked');
		});
	};
	$('.but').on('click', start);
});
