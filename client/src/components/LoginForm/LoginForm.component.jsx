const LoginForm = () => {
  return (
    <>
      <div class="login__container">
        <form>
          <label for="id">ID:</label>
          <input type="text" id="id" for="id"></input>
          <label for="password">Password:</label>
          <input type="password" id="password" for="password"></input>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
