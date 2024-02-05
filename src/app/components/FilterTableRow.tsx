import styled from 'styled-components';
import React from 'react';

import { FilterInfo } from '@/app/hooks/useFilterInfos';
import FilterButton from '@/app/components/FilterButton';

const Container = styled.tr`
	display: grid;
	grid-template-columns: minmax(min-content, 96px) auto;
	grid-template-rows: auto;

	border-bottom: 1px solid rgb(225, 226, 228);

	background-color: rgb(255, 255, 255);
`;

const Title = styled.td`
	padding: 14px 16px;

	background-color: rgb(249, 250, 252);
	border-right: 1px solid rgb(225, 226, 228);

	font-size: 12px;
	line-height: 1.5;
	color: #5e5f61;
	font-weight: 700;
`;

const ButtonBox = styled.td`
	padding: 0 8px;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

export default function FilterTableRow({ queryKey, buttons, title }: FilterInfo): React.ReactElement {
	return (
		<Container>
			<Title>{title}</Title>
			<ButtonBox>
				{buttons.map(button => (
					<FilterButton queryKey={queryKey} id={button.id} label={button.label} key={`${queryKey}-${button.id}`} />
				))}
			</ButtonBox>
		</Container>
	);
}
