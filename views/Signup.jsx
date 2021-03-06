const React = require("react");
const Layout = require("./Layout");

function Signup(props) {
  console.log(props);
  return (
    <Layout>
      <form action="/auth/signup" method="POST">
        <label>username</label>
        <input type="text" name="username" />
        <br />
        <label>password</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">sign the hell up</button>
        {props.errorMessage ? <p>{props.errorMessage}</p> : null}
      </form>
    </Layout>
  );
}

module.exports = Signup;
