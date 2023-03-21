import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "reactstrap";
import { getAllData } from "../store";

const index = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.permission);
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  return (
    <div className="app-user-list">
      {store?.data?.roles?.map((item) => {
        return (
          <div>
            {item?.permissions?.map((permission) => {
              return (
                <div className="m-2">
                  <Badge pill color="light-primary" className="me-1">
                    {permission?.name}
                  </Badge>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default index;
