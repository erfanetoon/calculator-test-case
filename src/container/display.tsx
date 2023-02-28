import { useAppSelector } from "@redux/hooks";
import { OperationComponent } from "./settings";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

const Display = () => {
    const { numbers, history, operations } = useAppSelector(
        (state) => state.main,
    );

    return (
        <div>
            <div
                className={twMerge(
                    "flex-row-reverse flex items-center text-xs text-gray-500 mb-1 h-8",
                    history ? "visible" : "invisible",
                )}>
                {history &&
                    history.numbers.map((item, i) => {
                        const Operation =
                            OperationComponent[history.operations[i]];

                        return (
                            <Fragment key={i}>
                                <div className="font-medium">{item}</div>

                                {!!Operation && (
                                    <Operation
                                        className={twMerge(
                                            "text-gray-400 text-xs mx-0.5",
                                            history.operations[i] ===
                                                "multiplication" && "rotate-45",
                                        )}
                                    />
                                )}
                            </Fragment>
                        );
                    })}
            </div>

            <div className="flex-row-reverse flex items-center h-8">
                {!history && !numbers.length && (
                    <span className="text-gray-600">Type something</span>
                )}
                {numbers.map((item, i) => {
                    const Operation = OperationComponent[operations[i]];

                    return (
                        <Fragment key={i}>
                            <div className="font-medium">{item}</div>

                            {!!Operation && (
                                <Operation
                                    className={twMerge(
                                        "text-gray-600 text-lg mx-0.5",
                                        operations[i] === "multiplication" &&
                                            "rotate-45",
                                    )}
                                />
                            )}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Display;
