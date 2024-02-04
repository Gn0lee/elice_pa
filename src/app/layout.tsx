import type { Metadata } from 'next';
import React from 'react';

import StyledComponentsRegistry from '@/app/lib/registry';
import GlobalStyle from '@/app/lib/GlobalStyle';
import MainContainer from '@/app/components/MainContainer';

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
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					<MainContainer>{children}</MainContainer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
