export const getPaginationOffsets = (offset: number, totalPages: number, range = 4) => {
	const start: number = Math.max(0, offset - range);
	const end: number = Math.min(totalPages, offset + range + 1);

	return Array.from({ length: end - start }, (_, index) => start + index);
};
