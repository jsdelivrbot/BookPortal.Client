var SerieTreeItem = require('./serieTreeItem');

var SerieInfo = React.createClass({
    render: function() {
        var publishersItems = this.props.serie.publishers || [];
        var fullseriename = this.props.serie.name;

        var serieTree;
        if (this.props.tree) {
            serieTree = <td className="serie-tree">
                <p>Иерархия:</p>
                <SerieTreeItem treeitem={this.props.tree} serieid={this.props.serie.serieid} />
            </td>
        }

        var completedSerie;
        if (!this.props.serie.iscompleted) {
            completedSerie = <ul className="unfinished">
                <li>Работа над серией еще не закончена, информация может быть неполна.</li>
            </ul>
        }

        var serieLifetime;
        if (this.props.serie.yearopen && this.props.serie.yearclose) {
            serieLifetime = <p><b>Годы существования</b>: {this.props.serie.yearopen} – {this.props.serie.yearclose}</p>
        }
        else if (this.props.serie.yearopen && !this.props.serie.yearclose) {
            serieLifetime = <p><b>Год открытия</b>: {this.props.serie.yearopen}</p>
        }
        else if (this.props.serie.yearclose) {
            serieLifetime = <p><b>Год закрытия</b>: {this.props.serie.yearclose}</p>
        }

        var serieClosed;
        if (this.props.serie.serieclosed) {
            serieClosed = <span>(серия закрыта)</span>
        }

        var language;
        if (this.props.serie.languageid) {
            language = <p><b>Язык серии</b>: {this.props.serie.languagename}</p>
        }

        return <div className="main-info-block serie-info">
            <h2 className="main-info-header"><span>Книжная серия {fullseriename}</span></h2>
            <table className="serie-info-block-detail">
                <tr>
                    {serieTree}
                    <td className="serie-description">
                        <div className="formated-text">
                            <p>
                                <b>Описание:</b> {this.props.serie.description}
                            </p>
                            {serieLifetime} {serieClosed}
                            {language}
                            <p>
                                <b>Издательства:</b> {publishersItems.map(publisher => publisher.name).join(', ')}
                            </p>
                            <p>
                                <b>Изданий в серии:</b> {this.props.serie.editionscount || 0}
                            </p>
                            {completedSerie}
                        </div>
                    </td>
                </tr>
            </table>
        </div>;
    }
});

module.exports = SerieInfo;
