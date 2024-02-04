import styled from 'styled-components';
import React from 'react';

import PaginationChevronLeftButton from '@/app/components/PaginationChevronLeftButton';
import PaginationChevronRightButton from '@/app/components/PaginationChevronRightButton';
import { getPaginationOffsets } from '@/app/utils/pagination';
import PaginationButton from '@/app/components/PaginationButton';
import { useAppSelector } from '@/app/utils/store';

interface PaginationProps {
	totalPages: number;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 24px;
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
`;

export default function Pagination({ totalPages }: PaginationProps): React.ReactElement {
	const { offset } = useAppSelector(state => state.course);

	return (
		<Container>
			<ButtonBox>
				<PaginationChevronLeftButton />
				{getPaginationOffsets(offset, totalPages).map(el => (
					<PaginationButton targetOffset={el} key={`page-${el}`} />
				))}
				<PaginationChevronRightButton totalPages={totalPages} />
			</ButtonBox>
		</Container>
	);
}
