import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import "../App.css";


const FirstPage = () => {

     let myApi = "https://jsonplaceholder.typicode.com/users";

     const [first, setFirst] = useState();

     const llamadaApi = async () => {
       const respuesta = await fetch(myApi);
       console.log("RESPUESTA", respuesta);

       const res = await respuesta.json();

       setFirst(res);
       console.log("RES", res);
     };

     useEffect(() => {
       llamadaApi();
     }, []);
     
  return (
    <>
      <div className="App divApp">
        <img width={180} src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>~ Clica para ver más informaciones ~</h2>
          {!first
            ? "Cargando.."
            : first.map((item, index) => (
                <Link key={index}
                  className="LinkFirstApp"
                  to={`/${item.name}/${item.address.city}/${item.email}/${item.address.zipcode}`}
                >
                  {" "}
                  <p>{item.name}</p>
                </Link>
              ))}
        </div>
        <img width={180} src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  );
}

export default FirstPage