var PersonWork = React.createClass({
    render: function() {
        var level = +(this.props.level);

        // additional information
        var addinfo = [];
        if (this.props.work.inplans) {
            addinfo.push(this.props.work.worktypename.toLowerCase());
        }
        if (this.props.work.notfinished === true) {
            addinfo.push('не закончено');
        }
        if (this.props.work.publishtype !== undefined) {
            switch (this.props.work.publishtype) {
                case 0:
                    addinfo.push(this.props.level > 1 && this.props.work.inplans ? 'еще не опубликовано' : 'не опубликовано');
                    break;
                case 2:
                    addinfo.push('сетевая публикация');
                    break;
                case 3:
                    addinfo.push('доступно в сети');
                    break;
            }
        }

        // co-authors people
        var coauthors = '';
        if (this.props.work.coauthortype) {
            switch (this.props.work.coauthortype) {
                case 'macycle':
                    coauthors = 'межавторский цикл';
                    break;
                case 'coauthor':
                    coauthors = this.props.work.persons.length === 1 ? 'Соавтор' : 'Соавторы';
                    break;
                case 'editor':
                    coauthors = this.props.work.persons.length === 1 ?
                        'Редактор-составитель' :
                        'Редакторы-составители';
                    break;
                case 'author':
                    coauthors = this.props.work.persons.length === 1 ? 'Автор' : 'Авторы';
                    break;
            }

            if (coauthors !== 'macycle') {
                coauthors = coauthors + ': ' + _.map(this.props.work.persons, item => item.name).join(', ');
            } else {
                coauthors = coauthors;
            }
        }

        return <li data-cycle={this.props.work.rootcycleworkid > 0 ? 1 : 0}>
            {level === 1 && !this.props.work.inplans && !this.props.worktype.isnode
                ? <div className="left-toolbar">
                    <span className="year">{this.props.work.year}</span>
                    { this.props.work.rootcycleworkid
                        ? <a href={'works/' + this.props.work.rootcycleworkid} className="in-cycle" title="Входит в роман «{this.props.work.rootcycleworkname}»"></a>
                        : <a  href="#" className="in-cycle">входит в цикл</a>
                    }
                </div>
                : null
            }
            <div className="dots">
                <span className="work-title">
                    <span className="white-bg">
                        { this.props.level > 1 && this.props.work.isaddition ? <span className="plus">+ </span> : null }
                        { this.props.work.rusname
                            ? this.props.work.workid
                                ? <a href={'works/' + this.props.work.workid} className="ru">{this.props.work.rusname}</a>
                                : <span>{this.props.work.rusname}</span>
                            : null }
                        { this.props.work.rusname && this.props.work.name ? ' / ' : null }
                        { this.props.work.name
                            ? this.props.work.workid
                                ? <a href={'works/' + this.props.work.workid} className="en">{this.props.work.name}</a>
                                : <span>{this.props.work.name}</span>
                            : null }
                        { this.props.work.altname ? <span className="about-work"> [= {this.props.work.altname}]</span> : null }
                        { this.props.level > 1 && this.props.work.year > 0 ? <span className="about-work"> ({this.props.work.year})</span> : null }
                        { coauthors ? <span> // {coauthors}</span> : null }
                        { addinfo.length > 0 ? <span className="about-work">, {addinfo.join(', ')}</span> : null }
                        { this.props.work.bonustext ? <span className="about-work"> [{this.props.work.bonustext}]</span> : null }
                    </span>
                </span>
            </div>
            <div className="rating">
                {this.props.work.rating
                    ? <span className="evaluation">{this.props.work.rating} ({this.props.work.votescount})</span>
                    : <span className="evaluation">&nbsp;</span>
                }
                <div className="autor-mark" data-enabled="2">{this.props.work.usermark}</div>
                <span className="comments">{this.props.commentscount}</span>
            </div>
            {this.props.work.childworks
                ? <ul className="works-part">
                    {this.props.work.childworks.map(work => {
                        return <PersonWork key={work.workid} work={work} level={level + 1} />;
                    })}
                </ul>
                : null
            }
        </li>;
    }
});

module.exports = PersonWork;
