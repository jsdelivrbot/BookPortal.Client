'use strict';

var SerieTreeItem = React.createClass({
    displayName: 'SerieTreeItem',

    render: function render() {
        var _this = this;

        var serieUrl = '/series/' + this.props.treeitem.serieid;

        var childItems;
        if (this.props.treeitem.series) {
            childItems = React.createElement(
                'ol',
                null,
                this.props.treeitem.series.map(function (result) {
                    return React.createElement(
                        'li',
                        null,
                        React.createElement(SerieTreeItem, { key: result.serieid, treeitem: result, serieid: _this.props.serieid })
                    );
                })
            );
        }

        var linkItem = this.props.serieid === this.props.treeitem.serieid ? React.createElement(
            'b',
            null,
            this.props.treeitem.name
        ) : React.createElement(
            'a',
            { href: serieUrl },
            this.props.treeitem.name
        );

        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                linkItem
            ),
            childItems
        );
    }
});

var getSerieTree = function getSerieTree(serieid) {
    fetch(Globals.apiUrl + '/series/' + serieid + '/tree').then(function (response) {
        return response.json();
    }).then(function (json) {
        return json.result;
    }).then(function (tree) {
        return React.render(React.createElement(SerieTreeItem, { treeitem: tree, serieid: serieid }), document.getElementById('tree'));
    })['catch'](function (ex) {
        console.log('parsing failed', ex);
    });
};

getSerieTree(2);
//# sourceMappingURL=../../components/serie/serie.js.map