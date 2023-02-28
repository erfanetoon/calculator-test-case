import Button from "@components/button";
import { useAppDispatch } from "@redux/hooks";
import { calc, clear, operate, typing } from "@redux/reducer";
import { BsDot } from "react-icons/bs";
import {
    RiDivideFill,
    RiNumber0,
    RiNumber1,
    RiNumber2,
    RiNumber3,
    RiNumber4,
    RiNumber5,
    RiNumber6,
    RiNumber7,
    RiNumber8,
    RiNumber9,
} from "react-icons/ri";
import { TbEqual, TbMinus, TbPlus, TbTrashX } from "react-icons/tb";

const Calculator = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="grid grid-cols-4 grid-rows-5 grid-flow-col gap-4">
            <div className=""></div>

            <div className="">
                <Button onClick={() => dispatch(typing("7"))}>
                    <RiNumber7 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("4"))}>
                    <RiNumber4 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("1"))}>
                    <RiNumber1 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(clear())}>
                    <TbTrashX className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(operate("division"))}>
                    <RiDivideFill className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("8"))}>
                    <RiNumber8 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("5"))}>
                    <RiNumber5 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("2"))}>
                    <RiNumber2 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("0"))}>
                    <RiNumber0 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(operate("minus"))}>
                    <TbMinus className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("9"))}>
                    <RiNumber9 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("6"))}>
                    <RiNumber6 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("3"))}>
                    <RiNumber3 className="text-lg" />
                </Button>
            </div>

            <div className="">
                <Button onClick={() => dispatch(typing("."))}>
                    <BsDot className="text-lg" />
                </Button>
            </div>

            <div className="row-span-1 text-center">
                <Button onClick={() => dispatch(operate("multiplication"))}>
                    <TbPlus className="text-lg rotate-45" />
                </Button>
            </div>

            <div className="row-span-2">
                <Button
                    className="h-full"
                    onClick={() => dispatch(operate("plus"))}>
                    <TbPlus className="text-lg" />
                </Button>
            </div>

            <div className="row-span-2">
                <Button className="h-full" onClick={() => dispatch(calc())}>
                    <TbEqual className="text-lg" />
                </Button>
            </div>
        </div>
    );
};

export default Calculator;
