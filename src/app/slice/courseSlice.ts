import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseState {
	offset: number;
}

const initialState: CourseState = {
	offset: 0,
};

const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		setOffset: (state, action: PayloadAction<number>) => {
			return { ...state, offset: action.payload };
		},
		increaseOffset: (state, action: PayloadAction<{ step: number; totalPages: number }>) => {
			return { ...state, offset: Math.min(state.offset + action.payload.step, action.payload.totalPages) };
		},
		decreaseOffset: (state, action: PayloadAction<number>) => {
			return { ...state, offset: Math.max(state.offset - action.payload, 0) };
		},
	},
});

export const { setOffset, increaseOffset, decreaseOffset } = courseSlice.actions;

export default courseSlice.reducer;
