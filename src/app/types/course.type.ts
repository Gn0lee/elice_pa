export interface OrgCourseEliceApi {
	course_type: number;
	tags: string[];
	title: string;
	short_description: string;
	class_type: number;
	logo_file_url: null | string;
	enrolled_role_period: null | string;
	enrolled_role_begin_datetime: number | null;
	enrolled_role_end_datetime: number | null;
	begin_datetime: number;
	end_datetime: null | number;
	is_discounted: boolean;
	discounted_price: string;
	discounted_price_usd: string;
	// eslint-disable-next-line
	discount_rate: null | any;
	price: string;
	price_usd: string;
	enroll_type: number;
	is_free: boolean;
	id: number;
}

export interface OrgCourseMiddlewareApi {
	title: OrgCourseEliceApi['title'];
	enrollType: OrgCourseEliceApi['enroll_type'];
	isFree: OrgCourseEliceApi['is_free'];
	shortDescription: OrgCourseEliceApi['short_description'];
	logoFileUrl: OrgCourseEliceApi['logo_file_url'];
	id: OrgCourseEliceApi['id'];
}

export interface OrgCourseListMiddlewareApiResponses {
	courseCount: number;
	courses: OrgCourseMiddlewareApi[];
	totalPages: number;
}

export interface OrgCourseListEliceApiResponses {
	course_count: number;
	courses: OrgCourseEliceApi[];
	_result: {
		status: string;
		reason: object | null;
	};
}
