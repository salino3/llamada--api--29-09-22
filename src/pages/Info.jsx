import React from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {

 const { name, city, email, zipcode } = useParams();
  return (
    <>
      <div className="divInfo">
        <h2>~ Datos usuario ~</h2>
        <h4 className="h4Info">
          Nombre: <span>{name}</span>
        </h4>
        <h4 className="h4Info">
          Email: <span>{email}</span>{" "}
        </h4>

        <h4 className="h4Info">
          Ciudad: <span>{city}</span>
        </h4>

        <h4 className="h4Info">
          Código Postal: <span>{zipcode}</span>{" "}
        </h4>
      </div>
    </>
  );
}

export default Info