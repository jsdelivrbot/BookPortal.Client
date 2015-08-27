var PersonView = require('../components/person/personView');
var PersonService = require('../dataservices/personService');
var Globals = require('../globals');

var element = document.getElementById('person');
var personId = +(element.getAttribute('data-person-id'));

var genres;
var works;

PersonService.getPerson(personId).then(function(person) {
    var promises = [PersonService.getPersonGenres(person.personid), PersonService.getPersonWorks(person.personid)];
    Promise.all(promises).then(function(values) {
        var genres = values.shift();
        var works = values.shift();

        React.render(<PersonView person={person} />, element)
    });
});
