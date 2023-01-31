import { faBookmark, faMobile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import data from "../../data"
import './content.scss'
const Content = () => {
    
    return (
        <>
        <div className="content-wrap">
            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>MESSAGE</th>
                        <th>SENT BY</th>
                        <th>SENT THROUGH</th>
                        <th>DATE CREATED</th>
                        <th>START DATE</th>
                        <th>END DATE</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(item => <tr>
                        <td>{item.title}</td>
                        <td>{item.message}</td>
                        <td>{item.sentBy}</td>
                        <td>
                            {item.sentThrough.map(item => 
                                item === 'bookmark'
                                ? <FontAwesomeIcon icon={faBookmark}/> 
                                : <FontAwesomeIcon icon={faMobile}/>
                            )}
                        </td>
                        <td>{item.createdAt}</td>
                        <td>{item.startDate}</td>
                        <td>{item.endDate}</td>
                    </tr>)
                
                }
                </tbody>
            </table>

        </div>

        </>
    )
}

export default Content