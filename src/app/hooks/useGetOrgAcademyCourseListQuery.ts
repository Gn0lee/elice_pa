import { useQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';

import getOrgAcademyCourseListMiddlewareApi from '@/app/api/getOrgAcademyCourseList.api';
import { useAppSelector } from '@/app/utils/store';

export default function useGetOrgAcademyCourseListQuery() {
	const searchParams = useSearchParams();

	const { offset } = useAppSelector(state => state.course);

	return useQuery({
		queryKey: ['courseList', searchParams.toString(), offset.toString()],
		queryFn: () => getOrgAcademyCourseListMiddlewareApi({ offset, count: 20, filters: searchParams.toString() }),
		refetchOnWindowFocus: false,
		keepPreviousData: true,
		retry: false,
		refetchOnMount: false,
	});
}
