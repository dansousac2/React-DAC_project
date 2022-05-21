import React from "react";

export default props => {

    const rows = props.guests.map( guest => {
        return (
            <tr key={guest.cpf}>
                <td>{guest.name}</td>
                <td>{guest.event.eventName}</td>
                <td>
                    <button type="button" title="Edite" className="btn btn-warning"
                        onClick={e => props.edit(guest.cpf)}>
                    </button>
                    <button type="button" title="Exclude" className="btn btn-danger"
                        onClick={e => props.delete(guest.cpf)}>
                    </button>
                </td>
            </tr>
        )
    });

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Event</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}