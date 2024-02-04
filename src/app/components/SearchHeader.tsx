'use client';

import styled from 'styled-components';
import React from 'react';

import SearchArea from '@/app/components/SearchArea';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export default function SearchHeader(): React.ReactElement {
	return (
		<Container>
			<SearchArea />
		</Container>
	);
}
