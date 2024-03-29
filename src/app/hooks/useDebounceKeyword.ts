'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import useCreateQueryString from '@/app/hooks/useCreateQueryString';
import useDeleteQueryString from '@/app/hooks/useDeleteQueryString';
import { QUERY_STRING_KEYS } from '@/app/constants/queryString';
import { useAppDispatch } from '@/app/utils/store';
import { setOffset } from '@/app/slice/courseSlice';

export default function useDebounceKeyword({ keyword }: { keyword: string }) {
	const router = useRouter();

	const pathname = usePathname();

	const dispatch = useAppDispatch();

	const createQueryString = useCreateQueryString();

	const removeQueryString = useDeleteQueryString();

	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			router.push(
				`${pathname}?${keyword ? createQueryString(QUERY_STRING_KEYS.KEYWORD, keyword) : removeQueryString(QUERY_STRING_KEYS.KEYWORD)}`,
			);
			dispatch(setOffset(0));
		}, 300);

		return () => {
			clearTimeout(debounceTimeout);
		};
	}, [keyword, createQueryString, pathname, router, removeQueryString, dispatch]);
}
