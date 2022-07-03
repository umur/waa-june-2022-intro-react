import React from "react";
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from "reactstrap";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [state, setState] = React.useState(initialState);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div>
      <Card className=" col-lg-6 offset-lg-3">
        <CardBody>
          <Form className="container" onSubmit={handleSubmit}>
            <div className="row">
              <FormGroup className="col">
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={state.username}
                  required
                />
              </FormGroup>
            </div>
            <div className="row">
              <FormGroup className="col">
                <Label>Password</Label>
                <Input
                  type="number"
                  name="password"
                  onChange={handleChange}
                  value={state.password}
                  required
                />
              </FormGroup>
            </div>
            <Button type="submit">Login</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
