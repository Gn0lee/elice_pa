export const getPriceFilter = (prices: string[]) => {
	if (prices.length < 1) {
		return null;
	}

	const getEnrollTypeObjectByPrice = (price: string) => {
		if (price === '29') {
			return { enroll_type: 0, is_free: true };
		}

		if (price === '30') {
			return { enroll_type: 0, is_free: false };
		}

		if (price === '31') {
			return { enroll_type: 4 };
		}

		return null;
	};

	return prices.map(getEnrollTypeObjectByPrice).filter(enrollType => enrollType !== null);
};
