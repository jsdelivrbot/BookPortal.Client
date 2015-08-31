var Globals = require('../../globals');

var EditionNormal = React.createClass({
    render: function() {
        this.props.edition.persons = this.props.edition.persons || [];
        var classString = 'edition-block-normal';
        var correctColor = 'orange';
        var editionNumber = 1;

        var editionCoverSrc = `${Globals.imageCdnUrl}${this.props.edition.editionid}`;
        var editionUrl = `/editions/${this.props.edition.editionid}`;

        return <table class="edition-block-full">
            <tr>
                <td class="edition-block-cover {correctColor}">
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
                        <p class="edition-block-name">
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
