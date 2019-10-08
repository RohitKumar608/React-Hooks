import React from "react";

const cardHooks = React.memo(props => {
    console.log('rendering',props.apiData,'userDetail');
  return (
    props.apiData.length &&
    props.apiData.map((user, index) => (
      <div
        key={index}
        // onClick={() => props.handleUserClick(user.id)}
        className="col-md-3"
        style={divStyle}
      >
        <p>Sr. : {user.id}</p>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
      </div>
    ))
  );
});
const divStyle = {
  background: "rgb(217, 237, 247)",
  display: "block",
  width: "320px",
  margin: "4px",
  borderRadius: "17px"
};

export default cardHooks;
