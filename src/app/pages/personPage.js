var PersonView = require('../components/person/personView');
var PersonService = require('../dataservices/personService');
var ToolsService = require('../../../dataservices/toolsService');

var element = document.getElementById('personPage');
var personId = +(element.getAttribute('data-person-id'));

PersonService.getPerson(personId).then(function(person) {
    var promises = [
        PersonService.getPersonGenres(person.personid),
        PersonService.getPersonWorks(person.personid),
        ToolsService.getWorkTypes()
    ];

    Promise.all(promises).then(function(values) {
        var genres = values.shift();
        var works = values.shift();
        var worktypes = values.shift();

        React.render(<PersonView person={person} genres={genres} works={works} worktypes={worktypes} />, element)
    });
});
