var SerieView = require('../components/serie/serieView');
var Globals = require('../globals');

var element = document.getElementById('tree');
var serieId = +(element.getAttribute('data-serie-id'));
var editions;
var tree;

function getSerie(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}`)
        .then(response => response.json())
        .then(json => json.result)
        .catch(function(ex) {
            console.log('XHR Failed for getSerie', ex)
        });
}

function getSerieTree(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}/tree`)
        .then(response => response.json())
        .then(json => {
            tree = json.result;
        })
        .catch(function(ex) {
            console.log('XHR Failed for getSerieTree', ex)
        });
}

function getSerieEditions(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}/editions`)
        .then(response => response.json())
        .then(json => {
            editions = _.map(json.result.rows, item => item);
        })
        .catch(function(ex) {
            console.log('XHR Failed for getSerieEditions', ex)
        });
}

getSerie(serieId).then(function(serie) {
    var promises = [getSerieTree(serie.serieid), getSerieEditions(serie.serieid)];
    Promise.all(promises).then(function() {
        React.render(<SerieView serie={serie} tree={tree} editions={editions} />, element)
    });
});