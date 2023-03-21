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
    name: "Name",
    sortable: true,
    minWidth: "220px",
    sortField: "name",
    selector: (row) => row.name,
    cell: (row) => <span className="fw-bolder">{row.name}</span>
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "220px",
    sortField: "email",
    selector: (row) => row.phone,
    cell: (row) => <span className="text-capitalize">{row?.email}</span>
  },
  {
    name: "Role",
    sortable: true,
    minWidth: "220px",
    sortField: "role",
    selector: (row) => row.phone,
    cell: (row) => <span className="text-capitalize">{row?.roles[0]?.name}</span>
  },
  {
    name: "Actions",
    minWidth: "100px",
    cell: (row) => renderAction(row)
  }
]
