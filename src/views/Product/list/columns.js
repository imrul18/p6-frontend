import { Edit } from "react-feather"
import { Link } from "react-router-dom"

const renderAction = (row) => {

  return (
    <div className="column-action">    
        {/* <Link
          className="text-truncate text-capitalize align-middle"
          to={`/apps/user/view/${row.id}`}
        >
          <Edit size={18} className={`text-info me-50`} />
        </Link> */}
        <Edit size={18} className={`text-info me-50`} />
    </div>
  )
}

export const columns = [
  {
    name: "Stock",
    sortable: true,
    minWidth: "220px",
    sortField: "stock_id",
    selector: (row) => row.stock_id,
    cell: (row) => <span className="fw-bolder">{row.stock_id}</span>
  },
  {
    name: "Price",
    sortable: true,
    minWidth: "220px",
    sortField: "price",
    selector: (row) => row.unit_price,
    cell: (row) => <span className="fw-bolder">${row.unit_price}</span>
  },
  {
    name: "Vendor",
    sortable: true,
    minWidth: "220px",
    sortField: "vendor",
    selector: (row) => row.vendor,
    cell: (row) => <span className="text-capitalize">{row?.vendor?.name}</span>
  },
  {
    name: "SKU Name",
    sortable: true,
    minWidth: "220px",
    sortField: "sku_name",
    selector: (row) => row.sku_name,
    cell: (row) => <span className="text-capitalize">{row?.sku_name}</span>
  },
  {
    name: "Lead Time",
    sortable: true,
    minWidth: "220px",
    sortField: "lead_time_days",
    selector: (row) => row.lead_time_days,
    cell: (row) => <span className="text-capitalize">{row?.lead_time_days}</span>
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row)
  }
]
