var PersonView = require('../components/person/personView');
var Globals = require('../globals');

var element = document.getElementById('person');
var personId = +(element.getAttribute('data-person-id'));

function getPerson(personId) {
    return fetch(`${Globals.apiUrl}/persons/${personId}`)
        .then(response => response.json())
        .then(json => json.result)
        .catch(function(ex) {
            console.log('XHR Failed for getPerson', ex)
        });
}

getPerson(personId).then(function(person) {
    React.render(<PersonView person={person} />, element)
});