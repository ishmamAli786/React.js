const redux=require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const  applyMiddleWare=redux.applyMiddleware;
const Buy_Book="Buy_Book";
const Buy_Pen ="Buy_Pen";

const initialStateBooks={
    numberOfBooks:20,
}
const initialStatePens = {
    numberOfPens: 30,
}


/////// Action Creater: Wraaping the action in a single function
function buyBook(){
    return {
        type: Buy_Book,
        payload: "My First Action"
    }
}

function buyPen() {
    return {
        type: Buy_Pen,
        payload: "My Second Action"
    }
}

////  Redux is a function that take two parameter first previous state value and second action


const BooksReducer = (state = initialStateBooks,action)=>{
    switch(action.type){
        case "Buy_Book":return{
            ...state,
            numberOfBooks: state.numberOfBooks-1,
        }
        default: return state;
    }
}

const pensReducer = (state = initialStatePens, action) => {
    switch (action.type) {
        case "Buy_Pen":return {
            ...state,
            numberOfPens: state.numberOfPens - 2,
        }
        default: return state;
    }
}


const reducer = combineReducer({
    book:BooksReducer,
    pen: pensReducer
});

const logger=store=>{
    return next=>{
        return action=>{
            const result=next(action);
            console.log("middleware log",result);
            return result;
        }
    }
}
const store = createStore(reducer, applyMiddleWare(logger));
console.log("Initial State",store.getState());
const unSubscribe=store.subscribe(()=>{
    console.log('Updated State Value',store.getState());
})
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unSubscribe();