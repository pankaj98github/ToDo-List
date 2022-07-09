const initialData = {
    list: [],
  };
  
  const todoReducers = (state = initialData, action) => {
    // eslint-disable-next-line
    switch (action.type) {
      case "ADD_TODO":
        const { id, data } = action.payload; //destructuring
  
        return {
          ...state, //spread operator
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
  
      case "DELETE_TODO":
        const newList = state.list.filter((elem) => elem.id !== action.id);
  
        return {
          ...state, //spread operator
          list: newList,
        };
  
      case "REMOVE_TODO":
        return {
          ...state, //spread operator
          list: [],
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducers;
  