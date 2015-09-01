
var PersonWorkMark = React.createClass({
    getInitialState: function() {
        return {
            usermark: this.props.usermark,
            showSelect: false
        }
    },

    openMarksList: function(e) {
        this.setState({showSelect: !this.state.showSelect});
    },

    setMark: function(e) {
        this.setState({showSelect: false, usermark: parseInt(e.currentTarget.innerHTML) });
    },

    render: function() {
        return <div className="autor-mark" data-enabled="2" onClick={this.openMarksList}>
            <div>
                {this.state.usermark}
            </div>
            {this.state.showSelect
                ? <div className="selector">
                    <div className="mark" onClick={this.setMark}>-</div>
                    <div className="mark" onClick={this.setMark}>1</div>
                    <div className="mark" onClick={this.setMark}>2</div>
                    <div className="mark selected" onClick={this.setMark}>3</div>
                    <div className="mark" onClick={this.setMark}>4</div>
                    <div className="mark" onClick={this.setMark}>5</div>
                    <div className="mark" onClick={this.setMark}>6</div>
                    <div className="mark" onClick={this.setMark}>7</div>
                    <div className="mark" onClick={this.setMark}>8</div>
                    <div className="mark" onClick={this.setMark}>9</div>
                    <div className="mark" onClick={this.setMark}>10</div>
                </div>
                : null
            }
        </div>;
    }
});

module.exports = PersonWorkMark;
