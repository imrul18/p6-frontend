import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ChevronDown, UserPlus } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Row } from "reactstrap";
import { columns } from "./columns";
import { getAllData } from "./../store/index";
import { useNavigate } from "react-router-dom";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  const CustomHeader = () => {
    const navigate = useNavigate();
    return (
      <div className="invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75">
        <Row>
          <Col xl="9"></Col>
          <Col
            xl="3"
            className="d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1"
          >
            <div className="d-flex align-items-center table-header-actions">
              <Button className="add-new-user" color="primary" onClick={e=>{
                e.preventDefault()
                navigate('/product-add')
              }}>
                <UserPlus size={14} /> Product
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div className="app-user-list">
      <Fragment>
        <Card className="overflow-hidden">
          <div className="react-dataTable">
            <DataTable
              noHeader
              subHeader
              sortServer
              pagination
              responsive
              paginationServer
              columns={columns}
              //   onSort={handleSort}
              sortIcon={<ChevronDown />}
              className="react-dataTable"
              //   paginationComponent={CustomPagination}
              data={store.data}
              subHeaderComponent={<CustomHeader />}
            />
          </div>
        </Card>
      </Fragment>
    </div>
    
  );
};
export default index;
