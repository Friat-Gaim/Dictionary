const Addword=(words)=>
    {
        return (dispatch,getState,{getFirebase,getFirestore})=>{
            const firebase=getFirebase();
            const firestore=getFirestore();
            const profile=getState().firebase.profile;
            console.log('yesssssssssss profile is',profile)
             const authorId=getState().firebase.auth.uid;

                firestore.collection('wordBank').add({
                    ...words,
                    //wordId:WordId,
                    createdAt:new Date()
                }).then(()=>{
                    dispatch({type:'WORD_ADDED',words});
                }).catch((err)=>{
                    dispatch({type:'WORD_ADDED_ERROR',err});
                });
            
        };
};
export default Addword;
