import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'js/editor/components';
import { getTokens, parse } from 'js/antlr-tools/vtl-integration';
import './editor-for-js.scss';

const dictionnary = {
	keywords: ['if', 'then', 'else'],
	operator: ['=', '>', '<', '+', '-', '*', '/'],
};

const content = [
	'toto := "toto";',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
	'if toto >=30 then 50 else 60;',
	/* */
	// "const fillUnmappedToken = (tokensOriginal, ligne) => {",
	// "  const result = tokensOriginal.reduce(",
	// "    ({ index, tokens }, token) =>",
	// "      index < token.start",
	// "        ? {",
	// "            index: token.stop + 1,",
	// "            tokens: [",
	// "              ...tokens,",
	// "              {",
	// "                start: index,",
	// "                stop: token.start - 1,",
	// '                className: "unmapped",',
	// "                value: ligne.substr(index, token.start - index)",
	// "              },",
	// "              token",
	// "            ]",
	// "          }",
	// "        : { index: token.stop + 1, tokens: [...tokens, token] },",
	// "    { index: 0, tokens: [] }",
	// "  );",
	// "",
	// "  if (result.index < ligne.length) {",
	// "    return [",
	// "      ...result.tokens,",
	// "      {",
	// "        start: result.index,",
	// "        stop: ligne.length - 1,",
	// '        className: "unmapped",',
	// '        typeName: "unknow",',
	// "        value: ligne.substr(result.index, ligne.length - result.index)",
	// "      }",
	// "    ];",
	// "  }",
	// "",
	// "  return result.tokens;",
	// "};"
];

ReactDOM.render(
	<React.Fragment>
		<Editor
			content={content}
			dictionnary={dictionnary}
			getTokens={getTokens}
			parse={parse}
			edit={true}
		/>
	</React.Fragment>,
	document.getElementById('root')
);
