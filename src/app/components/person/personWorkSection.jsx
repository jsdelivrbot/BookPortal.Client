var PersonWork = require('./personWork');

var PersonWorkSection = React.createClass({
    getInitialState: function() {
        return { showResults: true };
    },

    getDefaultProps: function() {
        return {
            worktype: { worktypeid: 100, name: "Планы автора" }
        };
    },

    toggleSectionHandler: function() {
        this.setState( { showResults: !this.state.showResults } )
    },

    render: function() {
        var classString = 'work-type-section';

        if (this.props.worktype.worktypeid === 100) {
            classString += ' plans-author';
        }

        if (!this.state.showResults) {
            classString += ' collapsed';
        }

        return <div className={classString} onClick={this.toggleSectionHandler}>
            <h2><span>{this.props.personName}.</span> <span>{this.props.worktype.name}</span><span className='rating-title'>Рейтинг</span></h2>
            { this.state.showResults
                ? <ul className="works-list">
                    {this.props.works.map(work => {
                        return <PersonWork key={work.workid} work={work} level="1" worktype={this.props.worktype}/>;
                    })}
                </ul>
                : null
            }
        </div>;
    }
});

module.exports = PersonWorkSection;
