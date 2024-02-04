export interface FilterButtonInfo {
	id: number;
	label: string;
}

export interface FilterInfo {
	queryKey: string;
	buttons: FilterButtonInfo[];
	title: string;
}

export default function useFilterInfos(): FilterInfo[] {
	return [
		{
			queryKey: 'courseType',
			buttons: [
				{ id: 1, label: '과목' },
				{ id: 2, label: '챌린지' },
				{ id: 3, label: '테스트' },
			],
			title: '유형',
		},
		{
			queryKey: 'format',
			buttons: [
				{ id: 4, label: '자유 선택형' },
				{ id: 5, label: '순차 완료형' },
			],
			title: '진행 방식',
		},
		{
			queryKey: 'category',
			buttons: [
				{ id: 6, label: '프로그래밍 기초' },
				{ id: 7, label: '데이터 분석' },
				{ id: 8, label: '웹' },
				{ id: 9, label: '인공지능' },
				{ id: 10, label: '알고리즘' },
			],
			title: '분야',
		},
		{
			queryKey: 'level',
			buttons: [
				{ id: 11, label: '입문' },
				{ id: 12, label: '초급' },
				{ id: 13, label: '중급' },
				{ id: 14, label: '고급' },
				{ id: 15, label: '심화' },
			],
			title: '난이도',
		},
		{
			queryKey: 'programmingLanguage',
			buttons: [
				{ id: 16, label: 'C' },
				{ id: 17, label: 'C++' },
				{ id: 18, label: '자바' },
				{ id: 19, label: '파이썬' },
				{ id: 20, label: '자바스크립트' },
				{ id: 21, label: 'R' },
				{ id: 22, label: 'HTML/CSS' },
				{ id: 23, label: 'SQL' },
				{ id: 24, label: '아두이노' },
				{ id: 25, label: '스크래치' },
				{ id: 26, label: '코틀린' },
				{ id: 27, label: '스위프트' },
				{ id: 28, label: '엔트리' },
			],
			title: '언어',
		},
		{
			queryKey: 'price',
			buttons: [
				{ id: 29, label: '무료' },
				{ id: 30, label: '유료' },
				{ id: 31, label: '구독' },
				{ id: 32, label: '학점' },
			],
			title: '가격',
		},
	];
}
