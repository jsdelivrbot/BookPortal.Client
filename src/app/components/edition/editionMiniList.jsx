var EditionMini = require('./editionMini');

var EditionMiniList = React.createClass({
    render: function() {
        return <div className="editions-list">
            {this.props.editions.map(function(result) {
                return <EditionMini key={result.editionid} item={result}  />;
            })}
        </div>;
    }
});

module.exports = EditionMiniList;