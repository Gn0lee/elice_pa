import styled from 'styled-components';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { FilterInfo, FilterButtonInfo } from '@/app/hooks/useFilterInfos';
import useAppendQueryString from '@/app/hooks/useAppendQueryString';
import useRemoveQueryString from '@/app/hooks/useRemoveQueryString';
import { useAppDispatch } from '@/app/utils/store';
import { setOffset } from '@/app/slice/courseSlice';

const Button = styled.button<{ $isSelected: boolean }>`
	margin: 8px;
	color: ${props => (props.$isSelected ? 'rgb(255, 255, 255)' : 'rgb(94, 95, 97)')};

	display: flex;
	align-items: center;

	border: 1px solid ${props => (props.$isSelected ? 'rgb(82, 79, 161)' : 'rgb(240, 241, 243)')};
	border-radius: 14px;

	font-weight: normal;

	transition: all 150ms ease-in-out 0s;
	cursor: pointer;

	padding: 4px 12px;

	min-width: 30px;
	height: 30px;

	font-size: 14px;

	background: ${props => (props.$isSelected ? 'rgb(82, 79, 161)' : 'rgb(240, 241, 243)')};

	&:hover {
		color: ${props => (props.$isSelected ? 'rgb(240, 241, 243)' : 'rgb(0, 0, 0)')};
		background: ${props => (props.$isSelected ? 'rgb(66, 63, 140)' : 'rgb(225, 226, 228)')};
		border-color: ${props => (props.$isSelected ? 'rgb(66, 63, 140)' : 'rgb(225, 226, 228)')};
	}
`;

export default function FilterButton({
	id,
	queryKey,
	label,
}: Pick<FilterInfo, 'queryKey'> & FilterButtonInfo): React.ReactElement {
	const dispatch = useAppDispatch();

	const searchParams = useSearchParams();

	const pathname = usePathname();

	const router = useRouter();

	const appendQueryString = useAppendQueryString();

	const removeQueryString = useRemoveQueryString();

	const isSelected = searchParams.getAll(queryKey).includes(id.toString());

	const handleClickFilterButton = () => {
		dispatch(setOffset(0));

		if (isSelected) {
			router.push(`${pathname}?${removeQueryString(queryKey, id.toString())}`);
		} else {
			router.push(`${pathname}?${appendQueryString(queryKey, id.toString())}`);
		}
	};

	return (
		<Button $isSelected={isSelected} onClick={handleClickFilterButton}>
			{label}
		</Button>
	);
}
