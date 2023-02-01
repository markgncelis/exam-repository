import { faBackwardStep, faBookmark, faCaretLeft, faCaretRight, faForwardStep, faInfoCircle, faMobile, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import data from "../../store/data"
import Pagination from "../Pagination/Pagination"
import Table from "../Table/Table"
import TableBody from "../TableBody/TableBody"
import TableHead from "../TableHead/TableHead"
import './content.scss'
const Content = () => {
    const tableHeaders = ['TITLE', 'MESSAGE', 'SENT BY', 'SENT THROUGH', 'DATE CREATED', 'START DATE', 'END DATE']
    
    return (
        <>
        <section>
            <div className="content-wrap">
                <div className="content-head">
                    <div className="left-side-buttons">
                        <button id="all"><span>10</span> All</button>
                        <button id="draft"><span>10</span> Drafts</button>
                    </div>
                    <div className="input-boxes">
                        {/* <input type="text" placeholder="Filter by" className="filterBy"/> */}
                        <select className="filterBy" name="filter">
                            <option >Filter by</option>
                        </select>
                        <span className="relative">
                            <input type="search" placeholder="Search..." className="search"/>
                            <FontAwesomeIcon icon={faSearch}
                            className="absolute top-1 right-2" />
                        </span>
                    </div>
                </div>
                <Table tableHead={<TableHead tableHeaders={tableHeaders} />} tableBody={<TableBody data={data} />} />
                <Pagination />
            </div>
        </section>
        </>
    )
}

export default Content