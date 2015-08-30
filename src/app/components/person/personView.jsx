var PersonInfo = require('./personInfo');
var PersonWorkList = require('./personWorkList');

var PersonView = React.createClass({
    render: function() {
        return <div className="person-show">
            <PersonInfo person={this.props.person} genres={this.props.genres} />
            <PersonWorkList person={this.props.person} works={this.props.works} worktypes={this.props.worktypes} />
        </div>;
    }
});

module.exports = PersonView;
