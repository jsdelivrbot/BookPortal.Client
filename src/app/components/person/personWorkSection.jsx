var PersonWork = require('./personWork');

var PersonWorkSection = React.createClass({
    getInitialState: function() {
        return { showResults: true };
    },

    componentWillMount: function() {
        var storageObject = JSON.parse(localStorage.getItem('personWorkSection')) || {};
        if (storageObject[this.props.worktype.worktypeid] !== undefined ) {
            this.setState({showResults: storageObject[this.props.worktype.worktypeid] })
        }
    },

    toggleSectionHandler: function() {
        var storageObject = JSON.parse(localStorage.getItem('personWorkSection')) || {};
        this.setState( { showResults: !this.state.showResults } );
        storageObject[this.props.worktype.worktypeid] = !this.state.showResults;
        localStorage.setItem('personWorkSection', JSON.stringify(storageObject));
    },

    render: function() {
        var classString = 'work-type-section';

        // author plans
        if (this.props.worktype.worktypeid === 100) {
            classString += ' plans-author';
        }

        if (!this.state.showResults) {
            classString += ' collapsed';
        }

        return <div className={classString}>
            <h2 onClick={this.toggleSectionHandler}>
                <span>{this.props.personName}.</span> <span>{this.props.worktype.name}</span><span className='rating-title'>Рейтинг</span>
            </h2>
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
