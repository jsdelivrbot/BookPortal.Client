var Globals = require('../globals');

function getSerie(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}`)
        .then(response => response.json())
        .then(json => json.result)
        .catch(ex => console.log('XHR Failed for getSerie', ex));
}

function getSerieTree(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}/tree`)
        .then(response => response.json())
        .then(json => json.result)
        .catch(ex => console.log('XHR Failed for getSerieTree', ex));
}

function getSerieEditions(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}/editions`)
        .then(response => response.json())
        .then(json =>  _.map(json.result.rows, item => item))
        .catch(ex =>console.log('XHR Failed for getSerieEditions', ex));
}

exports.getSerie = getSerie;
exports.getSerieTree = getSerieTree;
exports.getSerieEditions = getSerieEditions;