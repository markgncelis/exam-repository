import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faCaretLeft, faCaretRight, faForwardStep} from "@fortawesome/free-solid-svg-icons"
import './pagination.scss';
import data from '../../store/data'
const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(1)

    return (
        <>
        <div className="pagination">
                <div className="left">
                    <span>Items per page</span>
                    <span>
                        <select name="number">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </span>
                </div>
                <div className="middle">
                    <FontAwesomeIcon className="backStep" icon={faBackwardStep} />
                    <FontAwesomeIcon className="caretIcon" icon={faCaretLeft} />
                    <span>Page</span><input type='text' defaultValue="1"/><span>of 1</span>
                    <FontAwesomeIcon className="caretIcon" icon={faCaretRight} />
                    <FontAwesomeIcon className="forwardStep" icon={faForwardStep} />
                </div>
                <div className="right">
                    <span>Showing 1 - {data.length} of {data.length}</span>
                </div>
            </div>
        </>
    )

}

export default Pagination