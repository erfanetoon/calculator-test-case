import Calculator from "./calculator";
import Display from "./display";

const Container = () => {
    return (
        <div className="h-screen w-screen">
            <div className="max-w-lg mx-auto p-8 h-full">
                <div className="shadow bg-white rounded-lg overflow-hidden">
                    <div className="flex flex-col">
                        <div className="h-2/6 w-full p-4 text-right">
                            <Display />
                        </div>

                        <div className="flex-1 bg-gray-100 shadow-md p-4">
                            <Calculator />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;
