var Globals = require('../globals');

function getPerson(personId) {
    return fetch(`${Globals.apiUrl}/persons/${personId}`)
        .then(response => response.json())
        .then(json => json.result)
        .catch(ex => console.log('XHR Failed for getPerson', ex));
}

function getPersonGenres(personId) {
    return fetch(`${Globals.apiUrl}/persons/${personId}/genres`)
        .then(response => response.json())
        .then(json => _.map(json.result.rows, item => item))
        .catch(ex => console.log('XHR Failed for getPersonGenres', ex));
}

function getPersonWorks(personId) {
    return fetch(`${Globals.apiUrl}/persons/${personId}/works`)
        .then(response => response.json())
        .then(json => _.map(json.result.rows, item => item))
        .catch(ex => console.log('XHR Failed for getPersonGenres', ex));
}

exports.getPerson = getPerson;
exports.getPersonGenres = getPersonGenres;
exports.getPersonWorks = getPersonWorks;
