import axios from 'axios';
import qs from 'qs';

import type { OrgCourseListMiddlewareApiResponses } from '@/app/types/course.type';

interface GetOrgAcademyCourseListMiddlewareApiProps {
	offset: number;
	count: number;
	filters: string;
}
export default async function getOrgAcademyCourseListMiddlewareApi({
	offset,
	count,
	filters,
}: GetOrgAcademyCourseListMiddlewareApiProps) {
	const paramsObject = qs.parse(filters);

	paramsObject.offset = offset.toString();
	paramsObject.count = count.toString();

	const { data } = await axios.get<OrgCourseListMiddlewareApiResponses>('/org/academy/course/list', {
		params: { ...paramsObject },
		paramsSerializer: params => {
			return qs.stringify(params, { arrayFormat: 'repeat' });
		},
	});

	return data;
}
