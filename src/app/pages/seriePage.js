var SerieView = require('../components/serie/serieView');
var SerieService = require('../dataservices/serieService');
var Globals = require('../globals');

var element = document.getElementById('tree');
var serieId = +(element.getAttribute('data-serie-id'));

SerieService.getSerie(serieId).then(function(serie) {
    var promises = [SerieService.getSerieTree(serie.serieid), SerieService.getSerieEditions(serie.serieid)];
    Promise.all(promises).then(function(values) {
        var tree = values.shift();
        var editions = values.shift();

        React.render(<SerieView serie={serie} tree={tree} editions={editions} />, element)
    });
});
