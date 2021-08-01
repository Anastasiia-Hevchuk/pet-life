import React from 'react';


export const VolunteerFormList = ({volunteerForms}) => {
    
    if (!volunteerForms.length) {
        return <p className="center">Заявок на волонтерство поки що немає</p>
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
        { volunteerForms.map((volunteerForm, index) => {
            return(
                <tr key={volunteerForm._id}>
                    <td>{index + 1}</td>
                    <td>{volunteerForm.nameVolunteer}</td>
                    <td>{volunteerForm.lastName}</td>
                    <td>{volunteerForm.placeOfResidence}</td>
                    <td>{volunteerForm.phoneNumber}</td>
                    <td>{volunteerForm.descriptionOwner}</td>
                </tr>
            )
        })}
        </tbody>
      </table>
    )
}