import {useRouter}  from "next/router"
const Login = () => {
    const router = useRouter();
    const onLogin = (event) => {
        event.preventDefault();

        router.push('./dashboard')
    };
    return (
        <>
        <input placeholder='UserName' />
        <input placeholder='Password' type='password' />
        <button onClick={onLogin} type='button'>LogIn</button>
        </>
    );
};

export default Login