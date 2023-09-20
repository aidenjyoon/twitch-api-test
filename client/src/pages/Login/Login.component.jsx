import { SignUpLink } from "./Login.styles";

import LoginForm from "../../components/LoginForm/LoginForm.component";

const LoginPage = () => {
  return (
    <>
      <h1>Login Page</h1>
      <LoginForm />

      <SignUpLink to="/signup">Don't have an account?</SignUpLink>
    </>
  );
};

export default LoginPage;
