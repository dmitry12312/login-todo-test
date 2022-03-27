
const state = {
    username: localStorage.getItem('username'),
    isLoggedIn: localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false,
    toDoList: localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : [],

}
export default state