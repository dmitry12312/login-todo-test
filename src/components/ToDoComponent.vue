<template>
  <li
      class="to-do-item"
      :class="{completed: isDone}">
    <div>
      <input
          class="done-to-do"
          type="checkbox"
          v-model="isDone"
          @change="doneToDo">
      {{ toDoItem.task }}
    </div>
    <div>
      <input
          class="edit-todo"
          v-if="isEdit"
          v-model="editedItem"
          type="text"
          placeholder="Edit 'todo'">
      <button
          v-if="!isEdit"
          class="delete-btn"
          @click="isEdit = true"
      ><i class="fa fa-edit"></i></button>
      <button
          v-else
          @click="editToDo()"
          @keyup.enter="editToDo()"
          :disabled="!editedItem"
      ><i class="fa fa-check"></i></button>
      <button
          @click="deleteToDoItem(toDoItem.id)"
      ><i class="fa fa-trash"></i></button>
    </div>
  </li>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ToDoComponent",
  data() {
    return {
      editedItem: null,
      isDone: false,
      isEdit: false,
    }
  },
  props: {
    toDoItem: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions([
      'updateToDoList',
      'deleteToDoItem',
    ]),
    editToDo() {
      const toDoItem = {
        id: this.toDoItem.id,
        task: this.editedItem,
        isDone: this.isDone,
      };
      this.updateToDoList(toDoItem);
      this.editedItem = null;
      this.isEdit = false;
    },
    doneToDo() {
      const toDoItem = {
        id: this.toDoItem.id,
        task: this.toDoItem.task,
        isDone: this.isDone,
      };
      this.updateToDoList(toDoItem);
    },
  },
  mounted() {
    this.isDone = this.toDoItem.isDone;
  }
}
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
}

.to-do-item {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 5px 25px;
  margin: 10px 0;
  background: rgba(128, 128, 128, 0.8);
  color: #FFFFFF;
  border-radius: 9px;

  &:hover {
    background: linear-gradient(180deg, #00A9E7 0%, #005B9F 100%);
  }

  &:hover:before {
    transform: rotate(360deg);
  }

  &:before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    left: -4px;
    top: 50%;
    margin-top: -4px;
    background: #0076C0;
    height: 8px;
    width: 8px;
    line-height: 8px;
    border: 11px solid white;
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    transition: all .3s ease-out;
  }
}

.to-do-item:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  left: -20px;
  top: 50%;
  margin-top: -17px;
  background: #0076C0;
  height: 27px;
  width: 25px;
  line-height: 27px;
  border: 5px solid white;
  text-align: center;
  font-weight: bold;
  border-radius: 99px;
}
.edit-todo{
  padding: 3px 5px;
  border: solid #0076C0 3px;
  border-radius: 9px;
}
.done-to-do{
  cursor: pointer;
}
</style>