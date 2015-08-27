var PersonInfo = require('./personInfo');

var PersonView = React.createClass({
    render: function() {
        return <div>
            <PersonInfo person={this.props.person} />
        </div>;
    }
});

module.exports = PersonView;