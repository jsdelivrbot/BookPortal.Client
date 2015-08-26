var SerieTreeItem = require('../components/serie/serie');
var Globals = require('../globals');

var element = document.getElementById('tree');
var serieid = element.getAttribute('data-serie-id');

fetch(`${Globals.apiUrl}/series/${serieid}/tree`)
    .then(response => response.json())
    .then(json => json.result)
    .then(tree => React.render(<SerieTreeItem treeitem={tree} serieid={+serieid} />, element))
    .catch(function(ex) {
        console.log('parsing failed', ex)
});