'use client';

import styled from 'styled-components';
import React from 'react';

interface MainContainerProps {
	children?: React.ReactNode;
}

const Main = styled.main`
	display: flex;
	justify-content: center;

	padding: 24px;

	width: 100%;
	height: 100%;
`;

const ContentContainer = styled.div`
	max-width: 1232px;
	width: 100%;

	overflow: auto;
`;

export default function MainContainer({ children = null }: MainContainerProps): React.ReactElement {
	return (
		<Main>
			<ContentContainer>{children}</ContentContainer>
		</Main>
	);
}
