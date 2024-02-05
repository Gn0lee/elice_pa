import styled from 'styled-components';

import useFilterInfos from '@/app/hooks/useFilterInfos';
import FilterTableRow from '@/app/components/FilterTableRow';

const Table = styled.table`
	width: 100%;

	border: 1px solid rgb(225, 226, 228);
	border-bottom: none;
`;

const TableBody = styled.tbody`
	width: 100%;
`;

export default function FilterTable() {
	const filters = useFilterInfos();

	return (
		<Table>
			<TableBody>
				{filters.map(filter => (
					<FilterTableRow
						queryKey={filter.queryKey}
						buttons={filter.buttons}
						title={filter.title}
						key={`row-${filter.queryKey}`}
					/>
				))}
			</TableBody>
		</Table>
	);
}
