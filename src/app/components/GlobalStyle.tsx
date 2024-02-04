'use client';

import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const globalStyle = css`
	${normalize}

	* {
		box-sizing: border-box;
	}

	html {
		width: 100%;
		height: 100%;
	}

	body {
		margin: 0;
		padding: 0;

		width: 100%;
		height: 100%;
		-webkit-font-smoothing: antialiased;
		background-color: #f0f1f3;
		color: #222;
	}

	table,
	thead,
	tbody,
	tfoot,
	td,
	th {
		display: inline-block;
		border-collapse: unset;
		border-spacing: unset;
		vertical-align: unset;
		border-color: unset;
		text-align: inherit;
		text-indent: inherit;
	}
`;

const GlobalStyle = createGlobalStyle`  
  ${globalStyle}
`;

export default GlobalStyle;
