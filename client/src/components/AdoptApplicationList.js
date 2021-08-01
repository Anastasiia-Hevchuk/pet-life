import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const AdoptApplicationList = ({adoptApplications}) => {
    const history = useHistory();
    
    if (!adoptApplications.length) {
        return <p className="center">Заявок на прихист тварин поки що немає</p>
    }

    const deleteAdoptApplication = (id) => {
        
        axios.delete('http://localhost:3000/api/pet/delete-adopt-application/' + id)
            .then((res) => {
                alert('Заявку успішно видалено!')
            }).catch((error) => {
                alert(error)
            })

            history.push(`/adoptApplication`);

    }

    return (
        <table className='table'>
        <thead>
          <tr>
              <th>№</th>
              <th>Ваш номер телефону</th>
              <th>Ваш опис</th>

          </tr>
        </thead>

        <tbody>
        { adoptApplications.map((adoptApplication, index) => {
            return(
                <tr key={adoptApplication._id}>
                    <td>{index + 1}</td>
                    <td>{adoptApplication.phoneNumber}</td>
                    <td>{adoptApplication.descriptionOwner}</td>
                    <td>
                        <Link className="edit-link" to={"/edit-adopt-application/" + adoptApplication._id}>
                            Edit  
                        </Link>
                    </td>
                    <td>
                        <Button onClick={() => deleteAdoptApplication(adoptApplication._id)} size="sm" variant="danger">Delete</Button>
                    </td>
                </tr>
            )
        })}
        </tbody>
      </table>
    )
}