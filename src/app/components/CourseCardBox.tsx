import styled from 'styled-components';

import useGetOrgAcademyCourseListQuery from '@/app/hooks/useGetOrgAcademyCourseListQuery';
import CourseCard from '@/app/components/CourseCard';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;

	margin-top: 16px;
`;

export default function CourseCardBox() {
	const { data: getOrgCourseListResponse } = useGetOrgAcademyCourseListQuery();

	return (
		<Container>
			{getOrgCourseListResponse?.courses.map(course => (
				<CourseCard
					title={course.title}
					enrollType={course.enrollType}
					isFree={course.isFree}
					shortDescription={course.shortDescription}
					logoFileUrl={course.logoFileUrl}
					id={course.id}
					key={course.id}
				/>
			))}
		</Container>
	);
}
