export const fetchData = () => {
  return{
    type:'FETCHING_INITIALIZE'
  }
};

export const startFetching = () => {
  return {
    type: "FETCHING_START"
  };
};
export const successFetching = data => {
  return {
    type: "FETCHING_SUCCESS",
    data: data
  };
};
export const failedFetching = () => {
  return {
    type: "FETCHING_FAILED"
  };
};
