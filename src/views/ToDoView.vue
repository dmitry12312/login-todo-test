<template>
  <div>
    <div class="background">
      <img class="logo" src="../assets/images/logo.png" alt="logo">
      <div class="thank-block">
        <div class="thank-text">
          <p class="thank-header">Thank you {{ getUsername }}!</p>
          <input
              class="add-to-do"
              v-model="addedItem"
              type="text"
              placeholder="New 'to do' item...">
          <button
              class="add-btn"
              type="submit"
              :disabled="!addedItem"
              @click="addToDo"
              @keyup.enter="addToDo"
          >Add
          </button>
          <p v-if="getToDoList.length > 0">Your "to do" list</p>
          <ol class="rounded">
            <to-do-component
                v-for="toDoItem in getToDoList"
                :key="toDoItem.id"
                :to-do-item="toDoItem"
            />
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ToDoComponent from "../components/ToDoComponent";

export default {
  name: "ToDoView",
  components: {ToDoComponent},
  data() {
    return {
      addedItem: null,
      isEditing: false,
    }
  },
  methods: {
    ...mapActions(['updateToDoList']),
    addToDo() {
      const toDoItem = {
        id: this.getToDoList.length,
        task: this.addedItem,
        isDone: false,
      };
      this.updateToDoList(toDoItem);
      this.addedItem = null;
    },
  },
  computed: {
    ...mapGetters([
      'getUsername',
      'getToDoList',
    ]),
  },
}
</script>

<style lang="scss" scoped>

.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  background: linear-gradient(180deg, #00A9E7 0%, #005B9F 100%);
}

.logo {
  width: 186px;
  height: 119px;
  margin: 65px 0 30px 0;;
}

.thank-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  width: 65%;
  min-height: 70vh;
  padding-bottom: 20px;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
}

.thank-header {
  font-size: 60px;
  font-weight: 700;
  line-height: 94px;
}

.rounded {
  counter-reset: li;
  list-style: none;
  font-size: 16px;
  padding: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
}

.add-to-do {
  padding: 8px 5px;
  border: solid #0076C0 3px;
  border-radius: 9px;
  width: 85%;
}

.add-btn {
  margin: 20px 0 10px 0;
  padding: 8px 15px;
  background: #0076C0;
  color: #FFFFFF;
  border: 3px solid #0076C0;
  border-radius: 9px;

  &:hover {
    background: #FFFFFF;
    color: #0076C0;
    border: 3px solid #0076C0;
  }

  &:disabled{
    background-color: grey;
    border: 3px solid grey;
    color: #FFFFFF;
  }
}

@media (max-width: 900px) {
  .thank-header {
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
  }
  .logo{
    width: 93px;
    height: 59px;
  }
  .add-to-do{
    width: 60%;
  }
}
</style>