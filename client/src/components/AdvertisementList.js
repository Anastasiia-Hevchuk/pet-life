import React from 'react';


export const AdvertisementList = ({advertisementForms}) => {
    
    if (!advertisementForms.length) {
        return <p className="center">Оголошень поки що немає</p>
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
              <th>Опис тварини</th>
              <th>Статус тварини</th>
          </tr>
        </thead>

        <tbody>
        { advertisementForms.map((advertisementForms, index) => {
            return(
                <tr key={advertisementForms._id}>
                    <td>{index + 1}</td>
                    <td>{advertisementForms.nameGuardian}</td>
                    <td>{advertisementForms.lastName}</td>
                    <td>{advertisementForms.placeOfResidence}</td>
                    <td>{advertisementForms.phoneNumber}</td>
                    <td>{advertisementForms.descriptionOwner}</td>
                </tr>
            )
        })}
        </tbody>
      </table>
    )
}