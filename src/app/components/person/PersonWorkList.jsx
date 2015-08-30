var PersonWork = require('./personWork');

var PersonWorkList = React.createClass({
    render: function() {
        // filtering in plans works
        var worksinplans = _.filter(this.props.works, function (item) { return item.inplans === true; });

        // processing and grouping another works
        var works = _.filter(this.props.works, function (item) { return item.inplans !== true; });
        works = _.groupBy(works, function (item) { return item.worktypelevel; });
        works = Object
            .keys(works)
            .sort(function(a, b) {
                if (+a < +b) { return -1; }
                if (+a > +b) { return 1; }
                return 0;
            })
            .map(function (key) { return works[key]; });

        return <div className="autor-works" data-evaluation-size="3" data-comments-size="0">
            <div class="sorting-panel">Сортировка:
                <select ng-options="i.sortName for i in vm.sortTypes" ng-model="vm.selectedSortType" ng-change='vm.changeSort()'></select>
            </div>
            <div className="work-type-section plans-author">
                <h2><span>{this.props.person.name}.</span> <span>Планы автора</span><span className='rating-title'>Рейтинг</span></h2>
                <ul className="works-list">
                    {worksinplans.map(work => {
                        return <PersonWork key={work.workid} work={work} level="1" />;
                    })}
                </ul>
            </div>
            {works.map(worktype => {
                var currentworktype = this.props.worktypes[worktype[0].worktypelevel];

                return <div className="work-type-section">
                    <h2><span>{this.props.person.name}.</span> <span>{currentworktype.name}</span><span className='rating-title'>Рейтинг</span></h2>
                    <ul className="works-list">
                        {worktype.map(work => {
                            return <PersonWork key={work.workid} work={work} level="1" worktype={currentworktype} />;
                        })}
                    </ul>
                </div>;
            })}
        </div>;
    }
});

module.exports = PersonWorkList;
