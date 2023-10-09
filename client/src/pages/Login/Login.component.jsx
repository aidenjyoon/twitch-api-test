import { SignUpLink } from "./Login.styles";
import { useAuth0 } from "@auth0/auth0-react";

import LoginForm from "../../components/LoginForm/LoginForm.component";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <h1>Login Page</h1>
      <LoginForm />

      <button onClick={() => loginWithRedirect()}>Log In</button>

      <SignUpLink to="/signup">Don't have an account?</SignUpLink>
    </>
  );
};

export default LoginPage;
