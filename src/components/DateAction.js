import React from "react";
import { Button } from "react-bootstrap";

const DateAction = ({ deleteAction, ViewData }) => {
    return (
        <div className="DateAction">
            <Button className="button-27" onClick={deleteAction}>مسح البيانات </Button>
            <Button className="button-27" onClick={ViewData}>عرض البيانات</Button>
        </div>
    )
}

export default DateAction;