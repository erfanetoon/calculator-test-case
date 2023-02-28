export interface IMainState {
    history: {
        numbers: Array<string>;
        operations: Array<TOperations>;
    } | null;
    numbers: Array<string>;
    operations: Array<TOperations>;
}
