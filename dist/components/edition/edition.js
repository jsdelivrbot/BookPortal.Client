'use strict';

var Globals = require('../../globals');

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
//# sourceMappingURL=../../components/edition/edition.js.map