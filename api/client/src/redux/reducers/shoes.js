const shoesInitialState={
    isLoading:false, 
    all:[], 
    men:[], 
    women:[], 
    children:[],
    novelties:[],
    lifeStyle:[], 
    tennis:[], 
    basket:[], 
    football:[], 
}

export default function shoesReducer(state=shoesInitialState, action){
        switch(action.type){
            case "d":
                return
            default:
                return state
        }

}