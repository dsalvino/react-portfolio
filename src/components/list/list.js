import React from "react";

export function ListItem(props) {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.full_name}</h6>
                        <p className="card-text">{props.description}</p>
                        <a href={props.html_url} className="card-link">GitHub Link</a>
                    </div>
                </div>
            </div>
        </>
    )
}
