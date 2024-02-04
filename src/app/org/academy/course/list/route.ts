import { NextRequest, NextResponse } from 'next/server';
import uniq from 'lodash.uniq';

import { eliceApiInstance } from '@/utils/axiosInstance';
import { OrgCourseListEliceApiResponses } from '@/types/course.type';
import { getPriceFilter } from '@/utils/courseFilter';
import { convertOrgCourseEliceApiToMiddlewareApi } from '@/utils/courseConverter';

export const GET = async (request: NextRequest) => {
	const offset = request.nextUrl.searchParams.get('offset');
	const count = request.nextUrl.searchParams.get('count');

	if (offset === null || count === null) {
		return NextResponse.json({ error: 'invalid_parameter' }, { status: 400 });
	}

	const offsetNumber = Number(offset);
	const countNumber = Number(count);

	if (!Number.isInteger(offsetNumber) || !Number.isInteger(countNumber)) {
		return NextResponse.json({ error: 'invalid_parameter' }, { status: 403 });
	}

	const filterConditions: { $and: Array<unknown> } = {
		$and: [{ title: `%${request.nextUrl.searchParams.get('keyword') || ''}%` }],
	};

	const priceFilter = getPriceFilter(uniq(request.nextUrl.searchParams.getAll('price')));

	if (priceFilter !== null) {
		filterConditions.$and.push(priceFilter);
	}

	const { data } = await eliceApiInstance.get<OrgCourseListEliceApiResponses>('/org/academy/course/list/', {
		params: {
			filter_conditions: JSON.stringify(filterConditions),
			sort_by: 'created_datetime.desc',
			offset: offsetNumber,
			count: countNumber,
		},
	});

	return NextResponse.json(
		{
			courseCount: data.course_count,
			courses: data.courses.map(convertOrgCourseEliceApiToMiddlewareApi),
			totalPages: Math.ceil(data.course_count / countNumber),
		},
		{ status: 200 },
	);
};
