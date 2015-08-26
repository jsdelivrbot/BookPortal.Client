var SerieTreeItem = require('./serieTreeItem');

var SerieInfo = React.createClass({
    render: function() {
        return <div>
            <p>Серия: {this.props.serie.name}</p>
            <SerieTreeItem treeitem={this.props.tree} serieid={this.props.serie.serieid} />
        </div>;
    }
});

module.exports = SerieInfo;