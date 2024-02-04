import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/app/utils/store';
import { increaseOffset } from '@/app/slice/courseSlice';

interface PaginationChevronRightButtonProps {
	totalPages: number;
}

const Button = styled.button<{ $isEnd: boolean }>`
	margin-right: 6px;

	cursor: ${props => (props.$isEnd ? 'not-allowed' : 'pointer')};
	color: ${props => (props.$isEnd ? '#ccc' : '#666')};

	align-items: center;
	background: #0000;
	border: 0;

	text-align: center;
	transition: background-color 0.5s ease;

	height: 24px;

	& > svg {
		fill: ${props => (props.$isEnd ? '#ccc' : '#666')};
	}

	&:hover {
		& > svg {
			fill: ${props => (props.$isEnd ? '#ccc' : '#524fa1')};
		}
	}
`;

export default function PaginationChevronRightButton({ totalPages }: PaginationChevronRightButtonProps) {
	const dispatch = useAppDispatch();

	const { offset } = useAppSelector(state => state.course);

	return (
		<Button
			$isEnd={totalPages - 1 === offset}
			disabled={totalPages - 1 === offset}
			onClick={() => {
				dispatch(increaseOffset({ step: 1, totalPages }));
			}}
		>
			<FaChevronRight size={24} style={{ fill: 'current' }} />
		</Button>
	);
}
