import { ChangeEventHandler, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import useDebounceKeyword from '@/app/hooks/useDebounceKeyword';
import { QUERY_STRING_KEYS } from '@/app/constants/queryString';

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	margin: 12px 0;

	border: 1px solid rgb(201, 202, 204);
	border-radius: 4px;
	background-color: rgb(255, 255, 255);

	overflow: hidden;
`;

const IconBox = styled.div`
	margin: 0 16px;
`;

const Input = styled.input`
	width: 100%;

	border: none;

	padding: 12px 0;

	margin-right: 16px;

	font-size: 14px;

	::placeholder {
		color: gray;
	}

	&:focus-visible {
		outline: none;
	}
`;

export default function SearchArea() {
	const searchParams = useSearchParams();

	const [enteredKeyword, setEnteredKeyword] = useState(searchParams.get(QUERY_STRING_KEYS.KEYWORD) || '');

	useDebounceKeyword({ keyword: enteredKeyword });

	const handleChangeInput: ChangeEventHandler<HTMLInputElement> = event => {
		setEnteredKeyword(event.target.value);
	};

	return (
		<InputContainer>
			<IconBox>
				<FaSearch />
			</IconBox>
			<Input placeholder="배우고 싶은 언어, 기술을 검색해 보세요" value={enteredKeyword} onChange={handleChangeInput} />
		</InputContainer>
	);
}
