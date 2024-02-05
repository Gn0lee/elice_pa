import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
	width: 100%;

	min-height: 227px;

	display: flex;
	flex-direction: column;

	gap: 16px;

	align-items: center;
	justify-content: center;
`;

const NoResultImageBox = styled.div`
	position: relative;

	width: 64px;
	height: 64px;
`;

const NoResultGuide = styled.div`
	font-size: 16px;
	color: #999;
`;

export default function NoCourse() {
	return (
		<Container>
			<NoResultImageBox>
				<Image src="/images/no_coures.png" alt="no course" width={64} height={64} />
			</NoResultImageBox>
			<NoResultGuide>검색 결과가 없습니다.</NoResultGuide>
		</Container>
	);
}
