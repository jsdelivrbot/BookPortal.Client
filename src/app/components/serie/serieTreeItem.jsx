var SerieTreeItem = React.createClass({
    render: function() {
        var serieUrl = `/series/${this.props.treeitem.serieid}`;

        var childItems;
        if (this.props.treeitem.series) {
            childItems = <ul>
                {this.props.treeitem.series.map(result => <li><SerieTreeItem key={result.serieid} treeitem={result} serieid={this.props.serieid} /></li> )}
            </ul>
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

module.exports = SerieTreeItem;