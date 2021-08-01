import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const AnimalCareFormList = ({animalCareForms}) => {
    const history = useHistory();

    if (!animalCareForms.length) {
        return <p className="center">Заявок на опікунство поки що немає</p>
    }

    const deleteAnimalCareForm = (id) => {
        
        axios.delete('http://localhost:3000/api/pet/delete-animal-care-form/' + id)
            .then((res) => {
                alert('Заявку успішно видалено!')
            }).catch((error) => {
                alert(error)
            })

            history.push(`/animalcareForm`);
    }

    return (
        <table className='table'>
        <thead>
          <tr>
              <th>№</th>
              <th>Ваше ім'я</th>
              <th>Ваше прізвище</th>
              <th>Ваше місце проживання</th>
              <th>Ваш номер телефону</th>
              <th>Ваш опис</th>
              
          </tr>
        </thead>

        <tbody>
        { animalCareForms.map((animalCareForm, index) => {
            return(
                <tr key={animalCareForm._id}>
                    <td>{index + 1}</td>
                    <td>{animalCareForm.nameGuardian}</td>
                    <td>{animalCareForm.lastName}</td>
                    <td>{animalCareForm.placeOfResidence}</td>
                    <td>{animalCareForm.phoneNumber}</td>
                    <td>{animalCareForm.descriptionOwner}</td>
                    <td>
                        <Link className="edit-link" to={"/edit-animal-care-form/" + animalCareForm._id}>
                            Edit  
                        </Link>
                    </td>
                    <td>
                        <Button onClick={() => deleteAnimalCareForm(animalCareForm._id)} size="sm" variant="danger">Delete</Button>
                    </td>

                </tr>
            )
        })}
        </tbody>
      </table>
    )
}