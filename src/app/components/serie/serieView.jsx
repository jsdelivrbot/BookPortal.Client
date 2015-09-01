var SerieInfo = require('./serieInfo');
var EditionNormal = require('../edition/editionNormal');

var SerieView = React.createClass({
    render: function() {
        return <div>
            <SerieInfo tree={this.props.tree} serie={this.props.serie} />

            <div className="editions-list">
                {this.props.editions.map(function(result) {
                    return <EditionNormal key={result.editionid} edition={result}  />;
                })}
            </div>
        </div>;
    }
});

module.exports = SerieView;
