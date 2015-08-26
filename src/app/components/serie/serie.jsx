var SerieTreeItem = React.createClass({
    render: function() {
        var serieUrl = '/series/' + this.props.treeitem.serieid;

        var childItems;
        if (this.props.treeitem.series) {
            childItems = <ol>
                {this.props.treeitem.series.map(result => <li><SerieTreeItem key={result.serieid} treeitem={result} serieid={this.props.serieid} /></li> )}
            </ol>
        }

        var linkItem = this.props.serieid === this.props.treeitem.serieid ?
            <b>{this.props.treeitem.name}</b> :
            <a href={serieUrl}>{this.props.treeitem.name}</a>;

        return <div>
            <p>{linkItem}</p>
            {childItems}
        </div>;
    }
});

var getSerieTree = function(serieid) {
    fetch(`${Globals.apiUrl}/series/${serieid}/tree`)
        .then(response => response.json())
        .then(json => json.result)
        .then(tree => React.render(<SerieTreeItem treeitem={tree} serieid={serieid} />, document.getElementById('tree')))
        .catch(function(ex) {
            console.log('parsing failed', ex)
        })
}

getSerieTree(2);