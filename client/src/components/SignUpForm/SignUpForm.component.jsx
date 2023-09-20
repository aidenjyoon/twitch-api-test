const SignUpForm = () => {
  return (
    <>
      <div class="login__container">
        <form>
          <label for="full_name">Full Name:</label>
          <input type="text" id="full_name" for="full_name"></input>
          <label for="id">Id:</label>
          <input type="text" id="id" for="id"></input>
          <label for="password">Pasword:</label>
          <input type="password" id="password" for="password"></input>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
