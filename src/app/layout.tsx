import type { Metadata } from 'next';
import React from 'react';
import localFont from 'next/font/local';

import StyledComponentsRegistry from '@/app/components/registry';
import GlobalStyle from '@/app/components/GlobalStyle';
import MainContainer from '@/app/components/MainContainer';
import Providers from '@/app/components/provider';

const pretendardFont = localFont({
	src: [
		{ path: './font/pretendard/Pretendard-Black.subset.woff2', weight: '900' },
		{ path: './font/pretendard/Pretendard-Bold.subset.woff2', weight: '700' },
		{ path: './font/pretendard/Pretendard-ExtraBold.subset.woff2', weight: '800' },
		{ path: './font/pretendard/Pretendard-ExtraLight.subset.woff2', weight: '200' },
		{ path: './font/pretendard/Pretendard-Light.subset.woff2', weight: '300' },
		{ path: './font/pretendard/Pretendard-Medium.subset.woff2', weight: '500' },
		{ path: './font/pretendard/Pretendard-Regular.subset.woff2', weight: '400' },
		{ path: './font/pretendard/Pretendard-SemiBold.subset.woff2', weight: '600' },
		{ path: './font/pretendard/Pretendard-Thin.subset.woff2', weight: '100' },
	],
});

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
		<html lang="en" className={pretendardFont.className}>
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					<Providers>
						<MainContainer>{children}</MainContainer>
					</Providers>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
