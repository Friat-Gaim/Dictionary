const initstate={
     words: []
}
const addWordReducer = (state=initstate ,action) => {
    
    switch(action.type)
    {
      case 'WORD_ADDED':
        console.log('word added',action.words)
      return state;
    
      case 'WORD_ADDED_ERROR':
        console.log('ERROR : word is not added',action.err)
        return state
      
      default:
      return state;
    }
}
export default addWordReducer;
