'use client';

import styled from 'styled-components';
import React from 'react';

import { FilterInfo, FilterButtonInfo } from '@/app/hooks/useFilterInfos';

const Button = styled.button`
	margin: 8px;
	color: rgb(94, 95, 97);

	display: flex;
	align-items: center;

	border: 1px solid rgb(240, 241, 243);
	border-radius: 14px;

	font-weight: normal;

	transition: all 150ms ease-in-out 0s;
	cursor: pointer;

	padding: 4px 12px;

	min-width: 30px;
	height: 30px;

	font-size: 14px;

	background: rgb(240, 241, 243);
`;

export default function FilterButton({
	id,
	queryKey,
	label,
}: Pick<FilterInfo, 'queryKey'> & FilterButtonInfo): React.ReactElement {
	return <Button>{label}</Button>;
}
