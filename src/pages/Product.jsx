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
  name: "",
  price: "",
  rating: "",
  user_id: 1,
};

const Product = () => {
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
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <Form className="container" onSubmit={handleSubmit}>
            <div className="row">
              <FormGroup className="col">
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={state.name}
                  required
                />
              </FormGroup>
              <FormGroup className="col">
                <Label>Price</Label>
                <Input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={state.price}
                  required
                />
              </FormGroup>
              <FormGroup className="col">
                <Label>Rating</Label>
                <Input
                  type="number"
                  name="rating"
                  onChange={handleChange}
                  value={state.rating}
                  required
                />
              </FormGroup>
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        </CardBody>
      </Card>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>17$</td>
            <td>4.5</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Product;
