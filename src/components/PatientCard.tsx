import React, { useState } from "react";

export interface IPatientCard {
    name: string;
    age: number;
    details: string;
    more_details?: string;
}

export default function PatientCard (props : IPatientCard) {
    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <div className="card" style={{ width: '350px' }}>
            <div className="card-content">
                <p className="title">{props.name}</p>
                <p className="subtitle">{props.age}</p>
                <div className="content has-text-left">
                    <p>
                    {props.details}
                    </p>
                    {showMore && 
                    <p>
                    {props.more_details}
                    </p>}
                </div>
                <div className="buttons is-justify-content-center">
                    <button className="button is-primary" onClick={() => setShowMore(!showMore)}>
                        {`${showMore ? 'Less' : 'More'} details`}
                    </button>
                </div>
            </div>
        </div>
    )

}