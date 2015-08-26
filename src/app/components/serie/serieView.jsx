var SerieInfo = require('./serieInfo');
var EditionMiniList = require('../edition/editionMiniList');

var SerieView = React.createClass({
    render: function() {
        return <div>
            <SerieInfo tree={this.props.tree} serie={this.props.serie} />
            <EditionMiniList editions={this.props.editions} />
        </div>;
    }
});

module.exports = SerieView;