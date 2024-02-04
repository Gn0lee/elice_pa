import { OrgCourseMiddlewareApi } from '@/app/types/course.type';

export const getPriceLabel = ({ enrollType, isFree }: Pick<OrgCourseMiddlewareApi, 'enrollType' | 'isFree'>) => {
	if (enrollType === 4) {
		return '구독';
	}

	if (enrollType === 5) {
		return '관리자 등록';
	}

	if (enrollType === 0 && isFree) {
		return '무료';
	}

	if (enrollType === 0 && !isFree) {
		return '유료';
	}

	return '';
};
