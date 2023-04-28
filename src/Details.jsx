import React from "react";

function Details(props) {
  console.log("::::>", props);
  return (
    <>
      <div>Details Page</div>
      <div>
        {props.userData && (
          <table className="table-container">
            <thead>
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">MobileNo</th>
              </tr>
            </thead>
            <tbody>
              {props.userData.map((data) => (
                <tr>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.mobileNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Details;
