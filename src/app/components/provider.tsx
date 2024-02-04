'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState, useRef } from 'react';
import { Provider } from 'react-redux';

import { makeStore, AppStore } from '@/app/utils/store';

interface ProvidersProps {
	children?: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps): React.ReactElement {
	const [queryClient] = useState(() => new QueryClient());

	const storeRef = useRef<AppStore>();

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	return (
		<Provider store={storeRef.current}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Provider>
	);
}
