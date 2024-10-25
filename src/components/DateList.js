import React from "react";
import { Card } from "react-bootstrap";

const DateList = ({person}) => {
    return (
        <div className="DateList">
            <Card>
                <Card.Body>
                    {
                        person.length ? ((person.map((item) => {
                            return (
                            <div key={item.id} className="card_remainder d-flex">
                                <img className="avatar-img" src={item.img} alt="img.jpg"/>
                                <div className="px-3">
                                    <p>{item.name}</p>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            )
                        }))
                        ) : (
                            <div className="NoData">
                                <p className="text-center">لا توجد اى مواعيد حتي الآن</p>
                            </div>
                        )
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default DateList;