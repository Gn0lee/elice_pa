'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function useDeleteQueryString() {
	const searchParams = useSearchParams();

	return useCallback(
		(name: string) => {
			const params = new URLSearchParams(searchParams.toString());

			params.delete(name);

			return params.toString();
		},
		[searchParams],
	);
}
