import { FC } from "react";
import { IconBaseProps } from "react-icons";
import { RiDivideFill } from "react-icons/ri";
import { TbMinus, TbPlus } from "react-icons/tb";

export const OperationComponent: Record<TOperations, FC<IconBaseProps>> = {
    division: RiDivideFill,
    minus: TbMinus,
    multiplication: TbPlus,
    plus: TbPlus,
};
