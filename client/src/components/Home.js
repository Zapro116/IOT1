import React from 'react';

export default () => {
  return (
    <div>
      <h1 className="card text-center p-3 mb-5">Welcome to the home page!</h1>
      <div className="container" style={{opacity:1}}>
        <ul className="list-unstyled text-center ">
          <li className="card mb-2">
            <h3>You won't be able to visit dashboard unless you login</h3>
          </li>
          <li className="card mb-2">
            <h3>These pages are built with React and Redux</h3>
          </li>
          <li className="card mb-2">
            <h3>Backend used in this project is Node Js with Mongodb</h3>
          </li>
          <li className="card mb-2">
            <h3>RestAPI is used for authenticating</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};
