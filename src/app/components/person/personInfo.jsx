var Globals = require('../../globals');

var PersonInfo = React.createClass({
    render: function() {
        this.props.genres = this.props.genres || [];
        this.props.person.personimgurl = `${Globals.imageCdnUrl}/autors/${this.props.person.personid}`;
        this.props.person.countryflagurl = `${Globals.imageCdnUrl}/flags/${this.props.person.countryid}.png`;
        this.props.person.countryname = 'США';

        this.props.person.birthdate = this.props.person.birthdate
            ? moment(this.props.person.birthdate).locale('ru').format('LL')
            : null;

        this.props.person.deathdate = this.props.person.deathdate
            ? moment(this.props.person.deathdate).locale('ru').format('LL')
            : null;

        return <div className="main-info-block">
            <h2 className="main-info-header allow-toggle">
                <span>{this.props.person.name}</span>
            </h2>
            <div className="main-info-detail">
                <img className="imgright" src={this.props.person.personimgurl} alt={this.props.person.name} />
                <table className="person-info-top-info">
                    <tr>
                        <td>Страна:</td>
                        <td><img src={this.props.person.countryflagurl} alt={this.props.person.countryname} />&nbsp;{this.props.person.countryname}</td>
                    </tr>
                    {this.props.person.birthdate
                        ? <tr><td>Дата рождения:</td><td>{this.props.person.birthdate}</td></tr>
                        : null
                    }
                    {this.props.person.deathdate
                        ? <tr><td>Дата смерти:</td><td>{this.props.person.deathdate}</td></tr>
                        : null
                    }
                    <tr>
                        <td>Жанры:</td>
                        <td>
                            <ul className="genrelist">
                                {this.props.genres.map(genre => {
                                    return <li>{genre.name} ({genre.genrecount} из {genre.genretotal})</li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </table>

                <div className="person-info-bio paragraph-block clearfix">
                    <p>{this.props.person.biography}</p>
                </div>
                <p className="person-info-bio-copyright">© {this.props.person.biographysource}</p>
                {this.props.person.notes
                    ? <div className="person-info-bio-notes">
                        <h3>Примечание к биографии:</h3>
                        {this.props.person.notes}
                        <div>{this.props.person.notes}</div>
                    </div>
                    : null
                }
            </div>
        </div>
    }
});

module.exports = PersonInfo;
