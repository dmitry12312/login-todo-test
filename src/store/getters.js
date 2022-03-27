const getters = {
    getUsername(state) {
        return state.username;
    },
    getLogStatus(state) {
        return state.isLoggedIn;
    },
    getToDoList(state){
        return state.toDoList;
    }
}
export default getters;