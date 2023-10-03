import React from 'react';
// import './Member.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Member.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

const Member = ({ members }) => {
    const handleDeleteClick = (id) => {
        const deleteUrl = 'http://localhost:8000/api/employee/' + id + '/'
        console.log(deleteUrl);
        fetch(deleteUrl, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status === 204) {
                    console.error('item deleted');
                } else {
                    console.error('Failed to delete item');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <>
            {
                members.map((props, index) => {
                    const { id, name, salary, position, division } = props;
                    return (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{position}</td>
                            <td>{division}</td>
                            <td>{salary}</td>
                            <td>
                                <div>
                                    <div onClick={() => handleDeleteClick(id)} className="clickable-icon" >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Member;