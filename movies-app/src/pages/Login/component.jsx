import useGetData from "../../hooks/data";
import { getMovie } from "../../utils/generateUrl";

const Login = () => {
    const popular = useGetData(getMovie("3"));
    console.log(popular);
    return (
        <div>
            <p>Login</p>
        </div>
    );
};

export default Login;
