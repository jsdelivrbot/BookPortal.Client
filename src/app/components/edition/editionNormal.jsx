var Globals = require('../../globals');

var EditionNormal = React.createClass({
    render: function() {
        this.props.edition.persons = this.props.edition.persons || [];
        var editionNumber = 1;

        var classString = 'edition-block-full';
        var correctColor = 'orange';

        if (this.props.edition.correct) {
            classString += ' ' + correctColor;
        }

        var editionCoverSrc = `${Globals.imageCdnUrl}/editions/small/${this.props.edition.editionid}`;
        var editionUrl = `/editions/${this.props.edition.editionid}`;

        return <table className={classString}>
            <tr>
                <td className="edition-block-cover">
                    <a href={editionUrl}><img src={editionCoverSrc} /></a>
                </td>
                <td class="edition-block-descr">
                    <div>
                        <span>
                            {this.props.edition.persons.map(function(person) {
                                return <span>{person.name}</span>;
                            })}
                        </span>
                        <span>№{editionNumber}</span>
                        <br clear="all" />
                    </div>
                    <div>
                        <p className="edition-block-name">
                            <a href={editionUrl}><b>{this.props.edition.name}</b></a>
                        </p>
                        <p>{this.props.edition.type} {this.props.edition.year} год</p>
                        <p>Издательство: {this.props.edition.publisher}</p>
                        <p><b>Описание:</b> {this.props.edition.description}</p>
                    </div>
                </td>
            </tr>
        </table>;
    }
});
module.exports = EditionNormal;
