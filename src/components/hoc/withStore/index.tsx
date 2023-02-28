import { store } from "@redux/store";
import { Provider } from "react-redux";

const WithStore = (Component: any) => {
    return function (props: any) {
        return (
            <Provider store={store}>
                <Component {...props} />
            </Provider>
        );
    };
};

export default WithStore;
