import DS from 'ember-data';

var Ape = DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  type: DS.attr('string')
});

Ape.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Ursus',
			title: 'General',
			type: 'Gorilla'
		},
		{
			id: 2,
			name: 'Cornelious',
			title: 'Doctor',
			type: 'Chimpanzee'
		},
		{
			id: 3,
			name: 'Virgil',
			title: '',
			type: 'Orangutan'
		},
		{ 
			id: 4,
			name: 'Zira',
			title: 'Doctor',
			type: 'Chimpanzee'
		},
		{
			id: 5,
			name: 'Zaius',
			title: 'Doctor',
			type: 'Orangutan'
		}	
	]
});

export default Ape;

