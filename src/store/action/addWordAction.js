const Addword=(words)=>
    {
        return (dispatch,getState,{getFirebase,getFirestore})=>{
            const firestore=getFirestore();
            const profile=getState().firebase.profile;
            console.log('profile',profile)
        const authorId=getState().firebase.auth.uid;
            // const wordId=getState().firebase.auth.uid;   
            // console.log("redux part",words)
            firestore.collection('wordBank')
            .add({
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
