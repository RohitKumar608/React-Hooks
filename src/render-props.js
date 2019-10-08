import React from "react";
import PropTypes from 'prop-types';

const SharedComponent = props => {
  return <div>{props.render()}</div>;
};

const renderProps = props => {
  const {data}= props;
  return (
    <div>
      <SharedComponent
        render={() => (
          <div>
            {props.renderData}
            <div className="row">
            {data && data.length&&data.map((list)=>
              <div key={list.id} style={divStyle} className="col-md-3">
                {list.email}
              </div>
            )}
            </div>
          </div>
        )}
      />
    </div>
  );
};
renderProps.propsTypes={
  data:PropTypes.array.isRequired
}
const divStyle = {
  height: "200px",
  width: "240px",
  margin: "30px",
  backgroundColor: "aliceblue",
  border: "16px solid #ccc",
  borderRadius: "inherit",
  padding: "12px"
};
export default renderProps;
