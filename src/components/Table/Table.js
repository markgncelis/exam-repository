import './table.scss'
const Table = ({tableHead, tableBody}) => {

    return (
        <>
        <div className="table-overflow">
            <table >
                {tableHead}
                {tableBody}
            </table>
        </div>
        </>
    )

}

export default Table