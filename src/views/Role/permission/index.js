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
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddRole, getAllPermission, getRolePermission, UpdateRolePermission } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const index = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.roles);

  const onChange = (id) => {
    const updateData = data?.map((item) => {
      if (item?.id === id) {
        return { id: item?.id, attached: !item?.attached };
      }
      else {
        return item
      }
    });
    setData(updateData);
  };

  useEffect(() => {
    const data = store?.allPermission?.map((item) => {
      const res = store?.role?.permissions?.find((itm) => itm?.id === item?.id);
      if (res) {
        return { id: item?.id, attached: true };
      } else {
        return { id: item?.id, attached: false };
      }
    });
    setData(data);
  }, [store?.role]);

  useEffect(() => {
    dispatch(getRolePermission(id));
    dispatch(getAllPermission());
  }, []);

  const onSubmit = () => {
    const finalPermissions = []
    data?.forEach(item=>{
      if(item?.attached) {
        finalPermissions.push(item?.id)
      }
    })
    const finalData = {role_id: id, permission_id:finalPermissions}
    dispatch(UpdateRolePermission(finalData));
    navigate("/role");
  };

  const checkedOrNot = (id) => {
    const res = data?.find((item) => {
      return item?.id === id;
    });
    return res?.attached;
  };

  return (
    <Fragment>
      <Row>
        <Col md="6" sm="12">
          <Form>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">New Role</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  {store?.allPermission?.map((item) => {
                    return (
                      <Col sm="12">
                        <Input
                          type="checkbox"
                          name={item?.id}
                          id={item?.id}
                          checked={checkedOrNot(item?.id)}
                          onChange={() => onChange(item?.id)}
                        />
                        <Label className="form-label mx-2" for="name">
                          {item?.name}
                        </Label>
                      </Col>
                    );
                  })}
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
                          onSubmit();
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
