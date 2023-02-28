import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MainInitialState } from "./settings";
import { IMainState } from "./types";

export const Main = createSlice({
    name: "main",
    initialState: MainInitialState,
    reducers: {
        typing: (state: IMainState, { payload }: PayloadAction<string>) => {
            if (state.numbers.length - state.operations.length > 0) {
                const numbers = state.numbers;
                const value = numbers[state.numbers.length - 1];
                numbers.pop();

                state.numbers = [...numbers, value + payload];
            } else {
                state.numbers = [...state.numbers, payload];
            }
        },
        operate: (
            state: IMainState,
            { payload }: PayloadAction<TOperations>,
        ) => {
            if (state.numbers.length - state.operations.length > 0) {
                state.operations = [...state.operations, payload];
            } else {
                const operations = state.operations;
                operations.pop();

                state.operations = [...operations, payload];
            }
        },
        calc: (state: IMainState) => {
            if (state.numbers.length < 2) {
                return undefined;
            }

            const numbers = state.numbers;

            const operations = state.operations;

            if (state.numbers.length - state.operations.length < 1) {
                operations.pop();
            }

            let lastSum = 0;
            let i = 0;

            while (i < state.numbers.length) {
                const value = +state.numbers[i];
                const nextValue = +state.numbers[i + 1];

                switch (operations[i]) {
                    case "division":
                        lastSum = (lastSum || value) / nextValue;
                        break;

                    case "minus":
                        lastSum = (lastSum || value) - nextValue;
                        break;

                    case "multiplication":
                        lastSum = (lastSum || value) * nextValue;
                        break;

                    case "plus":
                        lastSum = (lastSum || value) + nextValue;
                        break;
                }

                i++;
            }

            state.history = {
                numbers: numbers,
                operations: operations,
            };
            state.numbers = [lastSum.toString()];
            state.operations = [];
        },
        clear: (state: IMainState) => {
            state.history = null;
            state.numbers = [];
            state.operations = [];
        },
    },
});

export const { typing, operate, calc, clear } = Main.actions;

const Reducer = Main.reducer;

export default Reducer;
