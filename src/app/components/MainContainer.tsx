'use client';

import styled from 'styled-components';
import React from 'react';

interface MainContainerProps {
	children?: React.ReactNode;
}

const Main = styled.main`
	display: flex;
	align-items: center;

	padding: 24px;
`;

const ContentContainer = styled.div`
	max-width: 1280px;
`;

export default function MainContainer({ children = null }: MainContainerProps): React.ReactElement {
	return (
		<Main>
			<ContentContainer>{children}</ContentContainer>
		</Main>
	);
}
