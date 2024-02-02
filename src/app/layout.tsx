import type { Metadata } from 'next';
import React from 'react';
import Head from 'next/head';

import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/lib/GlobalStyle';

export const metadata: Metadata = {
	title: 'elice PA',
	description: 'elice PA',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="preconnect" href="https://cdn.jsdelivr.net" />
				<link
					rel="stylesheet preload"
					as="style"
					crossOrigin=""
					type="text/css"
					href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
				/>
			</Head>
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
