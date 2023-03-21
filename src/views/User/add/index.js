import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { selectThemeColors } from "@utils";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, getAllRoles } from "../store";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllRoles());
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit =() =>{
    dispatch(AddUser(data))
    navigate('/user')
  }

  return (
    <Fragment>
      <Row>
        <Col md="6" sm="12">
          <Form>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">New User</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <Label className="form-label" for="name">
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={data?.name}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="email">
                      Email
                    </Label>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={data?.email}
                      onChange={onChange}
                    />
                  </Col>
                  <Col sm="12" className="mb-1">
                    <Label className="form-label" for="nameVertical">
                      Role
                    </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      placeholder="Select Role"
                      options={store?.roleOptions}
                      value={store?.roleOptions?.find(
                        (item) => item?.value === data?.role
                      )}
                      onChange={(e) =>
                        onChange({ target: { name: "role", value: e?.value } })
                      }
                      isClearable={false}
                    />
                  </Col>
                  <Col sm="12">
                    <Label className="form-label" for="email">
                      Password
                    </Label>
                    <Input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={data?.password}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="mt-1">
                    <div className="d-flex">
                      <Button
                        className="me-1"
                        color="primary"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          onSubmit()
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};
export default index;
