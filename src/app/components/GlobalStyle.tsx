'use client';

import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const globalStyle = css`
	${normalize}
	html {
		width: 100%;
		height: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		-webkit-font-smoothing: antialiased;
		background-color: #f0f1f3;
		color: #222;
	}
`;

const GlobalStyle = createGlobalStyle`  
  ${globalStyle}
`;

export default GlobalStyle;
