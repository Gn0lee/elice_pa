import { useQuery } from 'react-query';

import getOrgAcademyCourseListMiddlewareApi from '@/app/api/getOrgAcademyCourseList.api';
import { useSearchParams } from 'next/navigation';

export default function useGetOrgAcademyCourseListQuery() {
	const searchParams = useSearchParams();

	return useQuery({
		queryKey: ['courseList', searchParams.toString()],
		queryFn: () => getOrgAcademyCourseListMiddlewareApi({ offset: 0, count: 20, filters: searchParams.toString() }),
		refetchOnWindowFocus: false,
		keepPreviousData: true,
		retry: false,
		refetchOnMount: false,
	});
}
