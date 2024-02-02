'use client';

import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const globalStyle = css`
	${normalize}
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		-webkit-font-smoothing: antialiased;
		background-color: #f0f1f3;
		color: #222;
		font-family:
			'Pretendard Variable',
			Pretendard,
			-apple-system,
			BlinkMacSystemFont,
			system-ui,
			Roboto,
			'Helvetica Neue',
			'Segoe UI',
			'Apple SD Gothic Neo',
			'Noto Sans KR',
			'Malgun Gothic',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			sans-serif;
	}
`;

const GlobalStyle = createGlobalStyle`  
  ${globalStyle}
`;

export default GlobalStyle;
