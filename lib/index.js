function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var components = require('js/editor/components');
var getTools = _interopDefault(require('js/antlr-tools'));
require('editor-for-js.scss');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var editor = (function (props) {
  var _getTools = getTools(props.grammar),
      parse = _getTools.parse,
      getTokens = _getTools.getTokens;

  return React.createElement(components.Editor, _extends({}, props, {
    parse: parse,
    getTokens: getTokens
  }));
});

module.exports = editor;
//# sourceMappingURL=index.js.map
