const mutations = {
    USERNAME_VALUE(state, username) {
        state.username = username;
        localStorage.setItem('username', username);
    },
    LOG_STATUS(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
        localStorage.setItem('isLoggedIn', isLoggedIn);
    },
    UPDATE_TO_DO_LIST(state, toDoItem) {
        const currentSearchIndex = state.toDoList.findIndex(
            (item) => item.id === toDoItem.id,
        );

        if (currentSearchIndex > -1) {
            state.toDoList[currentSearchIndex].task = toDoItem.task;
            state.toDoList[currentSearchIndex].isDone = toDoItem.isDone;
        } else {
            state.toDoList.push(toDoItem);
        }
        localStorage.setItem('toDoList', JSON.stringify(state.toDoList));
    },
    DELETE_TO_DO_ITEM(state, id) {
        const currentSearchIndex = state.toDoList.findIndex(
            (item) => item.id === id,
        );

        state.toDoList.splice(currentSearchIndex, 1);
        localStorage.setItem('toDoList', JSON.stringify(state.toDoList));
    },
    DELETE_LOG_STATUS(state){
        state.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
    },
    DELETE_USERNAME_VALUE(state) {
        state.username = '';
        localStorage.removeItem('username');
    },


}
export default mutations;