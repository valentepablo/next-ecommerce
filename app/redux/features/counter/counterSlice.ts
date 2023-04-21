'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface CounterState {
    value: number
    products: products[]
    selectProduct?: products
}

export interface products {
    body: string;
    id: number;
    title: string;
    userId: number;
}


const initialState: CounterState = {
    value: 0,
    products: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        initalStateProducts: (state, action: PayloadAction<products[]>) => {
            state.products = action.payload
        },

    },
})

export const { increment, decrement, incrementByAmount, initalStateProducts } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter

export default counterSlice.reducer