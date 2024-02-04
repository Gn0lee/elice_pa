import { OrgCourseMiddlewareApi, OrgCourseEliceApi } from '@/types/course.type';

export const convertOrgCourseEliceApiToMiddlewareApi = (targetCourse: OrgCourseEliceApi): OrgCourseMiddlewareApi => {
	return {
		shortDescription: targetCourse.short_description,
		enrollType: targetCourse.enroll_type,
		title: targetCourse.title,
		isFree: targetCourse.is_free,
		logoFileUrl: targetCourse.logo_file_url,
		id: targetCourse.id,
	};
};
