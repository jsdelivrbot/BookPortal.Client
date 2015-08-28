var Globals = require('../../globals');

var EditionMini = React.createClass({
    render: function() {
        var classString = 'edition-block-mini';
        var correctColor = 'orange';

        if (this.props.edition.correct) {
            classString += ' ' + correctColor;
        }

        var editionCoverSrc = Globals.imageCdnUrl + this.props.edition.editionid;
        var editionUrl = `/editions/${this.props.edition.editionid}`;

        return <div className={classString}>
            <a href={editionUrl}>
                <img src={editionCoverSrc} alt={this.props.edition.name} title={this.props.edition.name} /></a>
            <br />
            <span>{this.props.edition.year} г.</span>
        </div>;
    }
});

module.exports = EditionMini;
