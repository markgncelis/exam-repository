import { faBackwardStep, faBookmark, faCaretLeft, faCaretRight, faForwardStep, faMobile, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import data from "../../data"
import './content.scss'
const Content = () => {
    
    return (
        <>
        <div className="content-wrap">
            <div className="content-head">
                <div className="left-side-buttons">
                    <button id="all"><span>10</span> All</button>
                    <button id="draft"><span>10</span> Drafts</button>
                </div>
                <div className="input-boxes">
                    <input type="text" placeholder="Filter by" className="filterBy"/>
                    <span className="relative">
                        <input type="search" placeholder="Search..." className="search"/>
                        <FontAwesomeIcon icon={faSearch}
                        className="absolute top-1 right-2" />
                    </span>
                   
                </div>
            </div>
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
                    data.map(item => <tr key={item.title}>
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
            </table>
            <div className="pagination">
                <div className="left">
                    <span>Items per page</span>
                    <span>
                        <select name="number">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </span>
                </div>
                <div className="middle">
                    <FontAwesomeIcon className="backStep" icon={faBackwardStep} />
                    <FontAwesomeIcon className="caretIcon" icon={faCaretLeft} />
                    <span>Page</span><input type='text' value='1' /><span>of 1</span>
                    <FontAwesomeIcon className="caretIcon" icon={faCaretRight} />
                    <FontAwesomeIcon className="forwardStep" icon={faForwardStep} />
                </div>
                <div className="right">
                    <span>Showing 1 - 10 of 10</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Content