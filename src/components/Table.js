import React from 'react'
import { useSelector } from "react-redux"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"

function Table() {
    const data = useSelector(state => state)

    return (
        <>
            {data.length > 0 && (
                <div class="table-container">
                    <table class="booking-table">
                        <TableHeader />
                        <tbody class="divide-y divide-gray-300/20" id="previewBooked">
                            {data.map((data, i) =>
                                <TableRow data={data} key={i} />)}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default Table