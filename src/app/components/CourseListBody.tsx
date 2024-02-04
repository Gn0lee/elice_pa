'use client';

import styled from 'styled-components';

import useGetOrgAcademyCourseListQuery from '@/app/hooks/useGetOrgAcademyCourseListQuery';
import CourseListHeader from '@/app/components/CourseListHeader';
import CourseCardBox from '@/app/components/CourseCardBox';

const Container = styled.section`
	margin-top: 8px;
`;

export default function CourseListBody() {
	const { data: getCourseListResponse, isLoading, isError } = useGetOrgAcademyCourseListQuery();

	if (getCourseListResponse === undefined && isLoading) {
		return null;
	}

	if (getCourseListResponse === undefined && isError) {
		return (
			<Container>
				<h1>일시적 오류가 발생하였습니다.</h1>
			</Container>
		);
	}

	return (
		<Container>
			<CourseListHeader />
			<CourseCardBox />
		</Container>
	);
}
