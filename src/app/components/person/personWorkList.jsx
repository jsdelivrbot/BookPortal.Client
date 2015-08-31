var PersonWork = require('./personWork');

var PersonWorkList = React.createClass({
    getInitialState: function() {
        return { optionState: 'year' }
    },

    componentWillMount: function() {
        // filtering in plans works
        this.setState({ worksinplans: _.filter(this.props.works, item => item.inplans === true )});

        // processing and grouping another works
        let works = _.filter(this.props.works, function (item) { return item.inplans !== true; });
        works = _.groupBy(works, function (item) { return item.worktypelevel; });
        works = Object
            .keys(works)
            .sort(function(a, b) {
                if (+a < +b) { return -1; }
                if (+a > +b) { return 1; }
                return 0;
            })
            .map(function (key) { return works[key]; });
        this.setState({ works: works });

        // sort types
        let sortOptions = [
            { label: 'по году публикации', value: 'year' },
            { label: 'по рейтингу', value: 'rating' },
            { label: 'по количеству оценок', value: 'markscount' },
            { label: 'по русскому названию', value: 'rusname' },
            { label: 'по оригинальному названию', value: 'name' }
        ];
        this.setState({ sortOptions: sortOptions });
    },

    changeSortingHandler: function(event) {
        this.setState({ optionState: event.target.value });
    },

    sortWorks(works) {
        if (works === undefined)
            throw "works array hasn't been defined";

        let sortedWorks = [];

        switch(this.state.optionState) {
            case 'rating':
                sortedWorks = _.sortByOrder(works, ['rating', 'groupindex'], ['desc', 'asc']);
                break;
            case 'markscount':
                sortedWorks = _.sortByOrder(works, ['votescount', 'groupindex'], ['desc', 'asc']);
                break;
            case 'rusname':
                sortedWorks = _.sortByOrder(works, ['rusname', 'groupindex'], ['asc', 'asc']);
                break;
            case 'name':
                sortedWorks = _.sortByOrder(works, ['name', 'groupindex'], ['asc', 'asc']);
                break;
            default:
                sortedWorks = _.sortByOrder(works, ['year', 'groupindex', 'name', 'rusname'], ['asc', 'asc', 'asc', 'asc'])
        }

        return sortedWorks;
    },

    render: function() {
        return <div className="autor-works" data-evaluation-size="3" data-comments-size="0">
            <div className="sorting-panel">Сортировка:
                <select value={this.state.optionState} onChange={this.changeSortingHandler}>
                {this.state.sortOptions.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
                </select>
            </div>
            {this.state.worksinplans.length > 0
                ? <div className="work-type-section plans-author">
                    <h2><span>{this.props.person.name}.</span> <span>Планы автора</span><span className='rating-title'>Рейтинг</span></h2>
                    <ul className="works-list">
                        {this.sortWorks(this.state.worksinplans).map(work => {
                            return <PersonWork key={work.workid} work={work} level="1" />;
                        })}
                    </ul>
                </div>
                : null
            }
            {this.state.works.map(worktype => {
                return <div key={worktype[0].worktypelevel} className="work-type-section">
                    <h2><span>{this.props.person.name}.</span> <span>{this.props.worktypes[worktype[0].worktypelevel].name}</span><span className='rating-title'>Рейтинг</span></h2>
                    <ul className="works-list">
                        {this.sortWorks(worktype).map(work => {
                            return <PersonWork key={work.workid} work={work} level="1" worktype={this.props.worktypes[worktype[0].worktypelevel]} />;
                        })}
                    </ul>
                </div>;
            })}
        </div>;
    }
});

module.exports = PersonWorkList;
