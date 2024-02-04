'use client';

import styled from 'styled-components';

import useGetOrgAcademyCourseListQuery from '@/app/hooks/useGetOrgAcademyCourseListQuery';
import CourseListHeader from '@/app/components/CourseListHeader';
import CourseCardBox from '@/app/components/CourseCardBox';
import NoCourse from '@/app/components/NoCourse';
import Pagination from '@/app/components/Pagination';

const Container = styled.section`
	margin-top: 8px;
`;

export default function CourseListBody() {
	const { data: getCourseListResponse, isError } = useGetOrgAcademyCourseListQuery();

	if (getCourseListResponse === undefined) {
		return null;
	}

	if (isError) {
		return (
			<Container>
				<h1>일시적 오류가 발생하였습니다.</h1>
			</Container>
		);
	}

	if (getCourseListResponse.courseCount < 1) {
		return <NoCourse />;
	}

	const { totalPages } = getCourseListResponse;

	return (
		<Container>
			<CourseListHeader />
			<CourseCardBox />
			<Pagination totalPages={totalPages} />
		</Container>
	);
}
