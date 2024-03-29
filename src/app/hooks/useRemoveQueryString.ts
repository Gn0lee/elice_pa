'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function useRemoveQueryString() {
	const searchParams = useSearchParams();

	return useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			const remainingValues = params.getAll(name).filter(el => el !== value);

			params.delete(name);

			remainingValues.forEach(remainingValue => {
				params.append(name, remainingValue);
			});

			return params.toString();
		},
		[searchParams],
	);
}
