'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function useAppendQueryString() {
	const searchParams = useSearchParams();

	return useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.append(name, value);

			return params.toString();
		},
		[searchParams],
	);
}
