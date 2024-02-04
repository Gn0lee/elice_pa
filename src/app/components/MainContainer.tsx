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
`;

const ContentContainer = styled.div`
	max-width: 1232px;
	width: 100%;
`;

export default function MainContainer({ children = null }: MainContainerProps): React.ReactElement {
	return (
		<Main>
			<ContentContainer>{children}</ContentContainer>
		</Main>
	);
}
