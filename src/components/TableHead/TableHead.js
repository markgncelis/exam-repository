import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TableHead = ({tableHeaders}) => {
    const icon = <span>&nbsp;<FontAwesomeIcon className="text-blue-500" icon={faInfoCircle}/></span>
    return (
        <>
        <thead>
            <tr>
                {tableHeaders.map(item => <th key={item}>{item} {item ==='SENT THROUGH' ? icon : ''}</th>)}
            </tr>
        </thead>
        </>
    )

}

export default TableHead