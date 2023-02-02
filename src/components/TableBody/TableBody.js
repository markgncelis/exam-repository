import { faBookmark, faMobile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const TableBody = ({data}) => {

    return (
        <>
        <tbody>
        {
            data.map(item => <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.message}</td>
                <td>{item.sentBy}</td>
                <td>
                    {item.sentThrough.map(item => 
                        item === 'bookmark'
                        ? <span key={item}><FontAwesomeIcon icon={faBookmark}/> </span>
                        : <span key={item}><FontAwesomeIcon icon={faMobile}/></span>
                    )}
                </td>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>{new Date(item.startDate).toLocaleDateString()}</td>
                <td>{new Date(item.endDate).toLocaleDateString()}</td>
            </tr>)
        }
        </tbody>
        </>
    )

}
export default TableBody