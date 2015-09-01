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
        let userMark = parseInt(e.currentTarget.innerHTML);
        if (userMark > 0)
            this.setState({showSelect: false, usermark: userMark });
    },

    render: function() {
        return <div className="autor-mark" data-enabled="2" onClick={this.openMarksList}>
            <div>
                {this.state.usermark}
            </div>
            {this.state.showSelect
                ? <div className="selector">
                    {['-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
                            let markClass = this.state.usermark === item ? 'mark selected' : 'mark';
                            return <div className={markClass} onClick={this.setMark}>{item}</div>
                        })
                    }
                </div>
                : null
            }
        </div>;
    }
});

module.exports = PersonWorkMark;
