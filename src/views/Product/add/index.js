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
import {  AddProduct, getAllRoles } from "../store";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "react-feather";

const index = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(getAllRoles());
  // }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = () => {
    dispatch(AddProduct(data));
    navigate("/product");
  };

  return (
    <Fragment>
      <Row>
        <Form>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">New Product</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm="6">
                  <Row>
                    {/* <Col sm="9" className="mb-1">
                      <Label className="form-label" for="nameVertical">
                        Stock
                      </Label>
                      <Select
                        className="react-select"
                        classNamePrefix="select"
                        theme={selectThemeColors}
                        placeholder="Select Stock"
                        options={store?.roleOptions}
                        value={store?.roleOptions?.find(
                          (item) => item?.value === data?.role
                        )}
                        onChange={(e) =>
                          onChange({
                            target: { name: "stock_id", value: e?.value },
                          })
                        }
                        isClearable={false}
                      />
                    </Col>
                    <Col sm="3" className="mb-1">
                      <Label className="form-label" for="nameVertical">
                        
                      </Label>
                      <div>
                      <Button
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault()
                          navigate('/stock-add')
                        }}
                      >
                        <UserPlus size={14} /> Stock
                      </Button>
                      </div>
                    </Col> */}
                    <Col sm="12">
                      <Label className="form-label" for="stock_id">
                        Stock
                      </Label>
                      <Input
                        type="text"
                        name="stock_id"
                        id="stock_id"
                        placeholder="stock_id"
                        value={data?.stock_id}
                        onChange={onChange}
                      />
                    </Col>
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
                      <Label className="form-label" for="sku_weight">
                        SKU Weight
                      </Label>
                      <Input
                        type="text"
                        name="sku_weight"
                        id="sku_weight"
                        placeholder="sku weight"
                        value={data?.sku_weight}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="12">
                      <Label className="form-label" for="re_order_qty">
                        Re-order QTY
                      </Label>
                      <Input
                        type="text"
                        name="re_order_qty"
                        id="re_order_qty"
                        placeholder="re_order_qty"
                        value={data?.re_order_qty}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="12">
                      <Label className="form-label" for="min_order">
                        Min order
                      </Label>
                      <Input
                        type="text"
                        name="min_order"
                        id="min_order"
                        placeholder="min_order"
                        value={data?.min_order}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="12">
                      <Label className="form-label" for="adjusment">
                        Adjustment
                      </Label>
                      <Input
                        type="text"
                        name="adjusment"
                        id="adjusment"
                        placeholder="adjusment"
                        value={data?.adjusment}
                        onChange={onChange}
                      />
                    </Col>

                    <Col sm="12">
                      <Label className="form-label" for="unit">
                        Unit
                      </Label>
                      <Input
                        type="text"
                        name="unit"
                        id="unit"
                        placeholder="unit"
                        value={data?.unit}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="12">
                      <Label className="form-label" for="qty">
                        QTY
                      </Label>
                      <Input
                        type="text"
                        name="qty"
                        id="qty"
                        placeholder="qty"
                        value={data?.qty}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="12">
                      <Label className="form-label" for="unit_price">
                        Unit Price
                      </Label>
                      <Input
                        type="text"
                        name="unit_price"
                        id="unit_price"
                        placeholder="unit_price"
                        value={data?.unit_price}
                        onChange={onChange}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm="6">
                  <Row>
                    {/*<Col sm="12" className="mb-1">
                       <Label className="form-label" for="nameVertical">
                        Vendor
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
                          onChange({
                            target: { name: "role", value: e?.value },
                          })
                        }
                        isClearable={false}
                      />
                    </Col> */}
                    <Col sm="12">
                      <Label className="form-label" for="vendor_id">
                        Vendor
                      </Label>
                      <Input
                        type="text"
                        name="vendor_id"
                        id="vendor_id"
                        placeholder="vendor_id"
                        value={data?.vendor_id}
                        onChange={onChange}
                      />
                      </Col>
                    <Col sm="12">
                      <Label className="form-label" for="vendor_sku">
                        Vendor Sku
                      </Label>
                      <Input
                        type="text"
                        name="vendor_sku"
                        id="vendor_sku"
                        placeholder="vendor_sku"
                        value={data?.vendor_sku}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="12">
                      <Label className="form-label" for="sku_name">
                        Sku Name
                      </Label>
                      <Input
                        type="text"
                        name="sku_name"
                        id="sku_name"
                        placeholder="sku_name"
                        value={data?.sku_name}
                        onChange={onChange}
                      />
                    </Col>
                    <Col sm="12">
                      <Label className="form-label" for="lead_time_days">
                        Lead Time Days
                      </Label>
                      <Input
                        type="text"
                        name="lead_time_days"
                        id="lead_time_days"
                        placeholder="lead_time_days"
                        value={data?.lead_time_days}
                        onChange={onChange}
                      />
                    </Col>
                  </Row>
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
      </Row>
    </Fragment>
  );
};
export default index;
