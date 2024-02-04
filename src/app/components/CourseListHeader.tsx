'use client';

import styled from 'styled-components';
import useGetOrgAcademyCourseListQuery from '@/app/hooks/useGetOrgAcademyCourseListQuery';

const Header = styled.div`
	padding: 12px 0;
	border-bottom: 1px solid rgb(225, 226, 228);

	font-size: 12px;

	color: #222;

	font-weight: 700;

	height: 44px;

	display: flex;
	align-items: center;
`;

export default function CourseListHeader() {
	const { data: getOrgAcademyResponse } = useGetOrgAcademyCourseListQuery();

	return <Header>전체 {getOrgAcademyResponse?.courseCount}개</Header>;
}
