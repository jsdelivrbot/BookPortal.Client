var SerieTreeItem = require('./serieTreeItem');

var SerieInfo = React.createClass({
    render: function() {
        var publishersItems = this.props.serie.publishers || [];

        return <div>
            <table className="serie-info">
                <tr>
                    <td>Id:</td>
                    <td>{this.props.serie.serieid}</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{this.props.serie.name}</td>
                </tr>
                <tr>
                    <td>Описание</td>
                    <td>{this.props.serie.description}</td>
                </tr>
                <tr>
                    <td>Год открытия:</td>
                    <td>{this.props.serie.yearopen}</td>
                </tr>
                <tr>
                    <td>Год закрытия</td>
                    <td>{this.props.serie.yearclose}</td>
                </tr>
                <tr>
                    <td>Издатели</td>
                    <td>
                        {publishersItems.map(function(publisher) {
                            var publisherUrl = `/publishers/${publisher.publisherid}`;
                            return <a key={publisher.publisherid} href={publisherUrl}>{publisher.name}</a>;
                        })}
                    </td>
                </tr>
            </table>

            <SerieTreeItem treeitem={this.props.tree} serieid={this.props.serie.serieid} />
        </div>;
    }
});

module.exports = SerieInfo;
