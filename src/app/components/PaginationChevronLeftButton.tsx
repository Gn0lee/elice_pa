import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/app/utils/store';
import { decreaseOffset } from '@/app/slice/courseSlice';

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

export default function PaginationChevronLeftButton() {
	const dispatch = useAppDispatch();

	const { offset } = useAppSelector(state => state.course);

	return (
		<Button
			$isEnd={offset === 0}
			disabled={offset === 0}
			onClick={() => {
				dispatch(decreaseOffset(1));
			}}
		>
			<FaChevronLeft size={24} style={{ fill: 'current' }} />
		</Button>
	);
}
