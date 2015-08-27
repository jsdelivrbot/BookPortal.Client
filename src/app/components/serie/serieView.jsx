var SerieInfo = require('./serieInfo');
var EditionMini = require('../edition/editionMini');

var SerieView = React.createClass({
    render: function() {
        return <div>
            <SerieInfo tree={this.props.tree} serie={this.props.serie} />

            <div className="editions-list">
                {this.props.editions.map(function(result) {
                    return <EditionMini key={result.editionid} item={result}  />;
                })}
            </div>
        </div>;
    }
});

module.exports = SerieView;
