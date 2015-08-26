var SerieView = require('../components/serie/serieView');
var Globals = require('../globals');

var element = document.getElementById('tree');
var serieid = +(element.getAttribute('data-serie-id'));
var editions;
var tree;

function getSerie(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}`)
        .then(response => response.json())
        .then(json => json.result)
        .catch(function(ex) {
            console.log('parsing failed', ex)
        });
}

function getSerieTree(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}/tree`)
        .then(response => response.json())
        .then(json => tree = json.result)
        .catch(function(ex) {
            console.log('parsing failed', ex)
        });
}

function getSerieEditions(serieid) {
    return fetch(`${Globals.apiUrl}/series/${serieid}/editions`)
        .then(response => response.json())
        .then(json => editions = json.result)
        .catch(function(ex) {
            console.log('parsing failed', ex)
        });
}

getSerie(serieid).then(function(serie) {
    var promises = [ getSerieTree(serie.serieid), getSerieEditions(serie.serieid)];
    Promise.all(promises).then(function() {
        React.render(<SerieView serie={serie} tree={tree} editions={editions} />, element)
    });
});