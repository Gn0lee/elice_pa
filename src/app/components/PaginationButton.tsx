import styled, { css } from 'styled-components';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/utils/store';
import { setOffset } from '@/app/slice/courseSlice';

interface PaginationButtonProps {
	targetOffset: number;
}

const Button = styled.button<{ $isSelected: boolean }>`
	width: 24px;
	height: 24px;

	margin: 0 6px;

	padding: 1px 6px;

	cursor: pointer;

	display: flex;

	align-items: center;
	background: #0000;
	border: 0;

	font-size: 14px;
	justify-content: center;

	${props =>
		props.$isSelected &&
		css`
			border-radius: 4px;
			background-color: #524fa1;
			color: #fff;
			line-height: 24px;
			transition: background-color 0.5s ease;
		`}

	&:hover {
		background-color: #efeff6;
		color: #524fa1;
		font-weight: 700;
	}
`;

export default function PaginationButton({ targetOffset }: PaginationButtonProps): React.ReactElement {
	const dispatch = useAppDispatch();

	const { offset: currentOffset } = useAppSelector(state => state.course);

	return (
		<Button
			$isSelected={targetOffset === currentOffset}
			onClick={() => {
				dispatch(setOffset(targetOffset));
			}}
		>
			{targetOffset + 1}
		</Button>
	);
}
