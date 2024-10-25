import React from "react";

const DateCount = ({person}) => {
    return (
        <div className="DateCount">
            <h3>لديك  {person.length} مواعيد هذا الإسبوع</h3>
        </div>
    )
}

export default DateCount;