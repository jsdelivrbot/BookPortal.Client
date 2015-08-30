var Globals = require('../globals');

function getLanguages() {
    var languages = JSON.parse(localStorage.getItem('languages'));

    if (languages === null) {
        return fetch(`${Globals.apiUrl}/languages`)
            .then(response => response.json())
            .then(json => {
                languages = _.reduce(json.result.rows, function (m, x) {
                    m[x.languageid] = x.name; return m;
                }, {});

                localStorage.setItem('languages', JSON.stringify(languages));
                return languages;
            })
            .catch(ex => console.log('XHR Failed for getLanguages', ex));
    }

    return Promise.resolve(languages);
}

function getCountries() {
    var countries = JSON.parse(localStorage.getItem('countries'));

    if (countries === null) {
        return fetch(`${Globals.apiUrl}/countries`)
            .then(response => response.json())
            .then(json => {
                countries = _.reduce(json.result.rows, function (m, x) {
                    m[x.countryid] = x.name; return m;
                }, {});

                localStorage.setItem('countries', JSON.stringify(countries));
                return countries;
            })
            .catch(ex => console.log('XHR Failed for getCountries', ex));
    }

    return Promise.resolve(countries);
}

function getWorkTypes() {
    var worktypes = JSON.parse(localStorage.getItem('worktypes'));

    if (worktypes === null) {
        return fetch(`${Globals.apiUrl}/worktypes`)
            .then(response => response.json())
            .then(json => {
                worktypes = _.reduce(json.result.rows, function (m, x) {
                    m[x.level] = x; return m;
                }, {});

                localStorage.setItem('worktypes', JSON.stringify(worktypes));
                return worktypes;
            })
            .catch(ex => console.log('XHR Failed for getWorkTypes', ex));
    }

    return Promise.resolve(worktypes);
}

exports.getLanguages = getLanguages;
exports.getCountries = getCountries;
exports.getWorkTypes = getWorkTypes;
