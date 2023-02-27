import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function loginHandler(event) {
        event.preventDefault();
        console.log('Berhasil Login');

        const checkLogin = true;
        if(checkLogin) {
            // redirect
            navigate('/dashboard')
        }
    }

    return (
        <form onSubmit={loginHandler}>
            <input type="text" name="Username"/>
            <input type="password" name="password" />
            <button>Login</button>
        </form>
    )
}