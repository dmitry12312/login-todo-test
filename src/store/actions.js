const actions = {
    setUsername({commit}, username) {
        commit('USERNAME_VALUE', username);
    },
    setLogStatus({commit}, isLoggedIn) {
        commit('LOG_STATUS', isLoggedIn);
    },
    updateToDoList({commit}, toDoItem){
        commit('UPDATE_TO_DO_LIST', toDoItem);
    },
    deleteToDoItem({commit}, id){
        commit('DELETE_TO_DO_ITEM', id);
    },


}
export default actions;