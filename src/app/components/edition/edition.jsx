var Globals = require('../../globals');

var EditionMini = React.createClass({
    render: function() {
        var classString = 'edition-block-normal';

        if (this.props.item.correct) {
            classString += ' ' + this.props.item.correct;
        }

        var editionSrc = Globals.imageCdnUrl + this.props.item.editionid;
        var editionUrl = '/editions/' + this.props.item.editionid;

        return <div className={classString}>
            <a href={editionUrl}>
                <img src={editionSrc} alt={this.props.item.name} title={this.props.item.name} /></a>
            <br />
            <span>{this.props.item.year} г.</span>
        </div>;
    }
});

var EditionMiniList = React.createClass({
    render: function() {
        return <div className="editions-list">
            {this.props.editions.map(function(result) {
                return <EditionMini key={result.editionid} item={result}  />;
            })}
        </div>;
    }
});