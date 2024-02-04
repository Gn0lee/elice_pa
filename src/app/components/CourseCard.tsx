'use client';

import styled from 'styled-components';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaRegChartBar, FaSchool, FaRegCalendarAlt } from 'react-icons/fa';

import { OrgCourseMiddlewareApi } from '@/app/types/course.type';
import { getPriceLabel } from '@/app/utils/price';

const Container = styled.div`
	width: 296px;
	height: 338px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	border-radius: 8px;

	background: rgb(255, 255, 255);
	transition: height 0.3s ease-out 0s;

	padding: 28px 24px;

	cursor: pointer;
`;

const PriceLabelBox = styled.div`
	display: flex;
	align-items: center;

	border-top: 1px solid rgb(240, 241, 243);

	padding-top: 16px;

	min-height: 13.8px;
`;

const PriceLabel = styled.div`
	font-size: 12px;
	font-weight: bold;
	color: #524fa1;
`;

const TitleDescriptionBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	height: 111px;
`;

const Title = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;

	font-size: 18px;
	font-weight: bold;
	color: #222;
	line-height: 1.6;
`;

const Description = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;

	font-size: 14px;
	font-weight: bold;
	color: #5e5f61;
	line-height: 1.6;
`;

const DetailContentBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const DetailTextBox = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const DetailText = styled.div`
	font-size: 12px;

	color: #7d7e80;

	line-height: 1;
`;

const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const Logo = styled.div`
	width: 52px;
	height: 52px;

	position: relative;
`;

export default function CourseCard({
	title,
	isFree,
	shortDescription,
	logoFileUrl,
	enrollType,
}: OrgCourseMiddlewareApi): React.ReactElement {
	const [isLogoError, setIsLogoError] = useState(false);

	return (
		<Container>
			<TitleDescriptionBox>
				<Title>{title}</Title>
				<Description>{shortDescription}</Description>
			</TitleDescriptionBox>
			<DetailContentBox>
				<DetailContainer>
					<DetailTextBox>
						<FaRegChartBar size={24} />
						<DetailText>난이도 : 미설정</DetailText>
					</DetailTextBox>
					<DetailTextBox>
						<FaSchool size={24} />
						<DetailText>수업 : 온라인</DetailText>
					</DetailTextBox>
					<DetailTextBox>
						<FaRegCalendarAlt size={24} />
						<DetailText>기간 : 무제한</DetailText>
					</DetailTextBox>
				</DetailContainer>
				{!isLogoError && logoFileUrl ? (
					<Logo>
						<Image
							src={logoFileUrl}
							alt={title}
							quality={100}
							style={{ objectFit: 'contain' }}
							width={52}
							height={52}
							onError={() => {
								setIsLogoError(true);
							}}
						/>
					</Logo>
				) : null}
				{isLogoError ? (
					<Logo>
						<Image
							src="/images/tdesign_image-error.png"
							alt="error"
							style={{ objectFit: 'contain' }}
							quality={100}
							width={52}
							height={52}
						/>
					</Logo>
				) : null}
			</DetailContentBox>
			<PriceLabelBox>
				<PriceLabel>{getPriceLabel({ isFree, enrollType })}</PriceLabel>
			</PriceLabelBox>
		</Container>
	);
}
