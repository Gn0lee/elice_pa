'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';

interface ProvidersProps {
	children?: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps): React.ReactElement {
	const [queryClient] = useState(() => new QueryClient());

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
