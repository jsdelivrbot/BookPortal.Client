'use strict';

var EditionMini = React.createClass({
    displayName: 'EditionMini',

    render: function render() {
        var classString = 'edition-block-normal';

        if (this.props.item.correct) {
            classString += ' ' + this.props.item.correct;
        }

        var editionSrc = Globals.imageCdnUrl + this.props.item.editionid;
        var editionUrl = '/editions/' + this.props.item.editionid;

        return React.createElement(
            'div',
            { className: classString },
            React.createElement(
                'a',
                { href: editionUrl },
                React.createElement('img', { src: editionSrc, alt: this.props.item.name, title: this.props.item.name })
            ),
            React.createElement('br', null),
            React.createElement(
                'span',
                null,
                this.props.item.year,
                ' г.'
            )
        );
    }
});

var EditionMiniList = React.createClass({
    displayName: 'EditionMiniList',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'editions-list' },
            this.props.editions.map(function (result) {
                return React.createElement(EditionMini, { key: result.editionid, item: result });
            })
        );
    }
});

var getWorkEditions = function getWorkEditions(workId) {
    fetch(Globals.apiUrl + '/works/' + workId + '/editions').then(function (response) {
        return response.json();
    }).then(function (json) {
        return _.map(json.result.rows, function (item) {
            return item;
        });
    }).then(function (editions) {
        return React.render(React.createElement(EditionMiniList, { editions: editions }), document.getElementById('editions'));
    })['catch'](function (ex) {
        console.log('parsing failed', ex);
    });
};

getWorkEditions(1);
//# sourceMappingURL=../../components/edition/edition.js.map