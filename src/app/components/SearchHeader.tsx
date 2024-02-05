'use client';

import styled from 'styled-components';

import SearchArea from '@/app/components/SearchArea';
import FilterTable from '@/app/components/FilterTable';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export default function SearchHeader() {
	return (
		<Container>
			<SearchArea />
			<FilterTable />
		</Container>
	);
}
