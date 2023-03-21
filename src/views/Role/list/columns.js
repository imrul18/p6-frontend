import { Edit } from "react-feather"
import { Link } from "react-router-dom"

const renderAction = (row) => {

  return (
    <div className="column-action">    
        <Link
          className="text-truncate text-capitalize align-middle"
          to={`/role-permission/${row.id}`}
        >
          <Edit size={18} className={`text-info me-50`} />
        </Link>
    </div>
  )
}

export const columns = [
  {
    name: "Name",
    sortable: true,
    minWidth: "220px",
    sortField: "name",
    selector: (row) => row.name,
    cell: (row) => <span className="fw-bolder">{row.name}</span>
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row)
  }
]
