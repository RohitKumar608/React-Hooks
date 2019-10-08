const initialState = {
  isLoading:true,
  data: []
};

const HttpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_INITIALIZE":{
      return{
        ...state,isLoading:true
      }
    }
    case "FETCHING_START":{
      return{
        ...state,isLoading:true
      }
    }
    case "FETCHING_SUCCESS": {
      return { ...state ,data:action.data,isLoading:false};
    }
    case "FETCHING_FAILED":{
      return{
        ...state,isLoading:false
      }
    }
    default:
      return {
        ...state
      };
  }
};

export default HttpReducer;
