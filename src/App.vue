<script>
import StatusFilter from './components/StatusFilter.vue';
import TodoItem from './components/TodoItem.vue';

function getFromLocalStorage(key, defaultValue) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return defaultValue;
  }
}

export default {
  components: {
    StatusFilter,
    TodoItem
  },
  data() {
    return {
      todos: getFromLocalStorage('todos', []),
      title: '',
      status: 'all',
    };
  },
  computed: {
    activeTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    },
    visibleTodos() {
      switch (this.status) {
        case 'active':
          return this.activeTodos;

        case 'completed':
          return this.completedTodos;

        default:
          return this.todos;
      }
    }
  },
  watch: {
    todos: {
      deep: true,
      handler() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
    },
  },
  methods: {
    handleSubmit() {
      this.todos.push({
        id: Date.now(),
        title: this.title,
        completed: false,
      });

      this.title = '';
    },
  },
};
</script>






































<template>
  <div class="todoapp">
    <h1 class="todoapp__title">todos</h1>

    <div class="todoapp__content">
      <header class="todoapp__header">
        <button
          class="todoapp__toggle-all"
          :class="{ active: activeTodos.length === 0 }"
        ></button>

        <form @submit.prevent="handleSubmit">
          <input
            type="text"
            class="todoapp__new-todo"
            placeholder="What needs to be done?"
            v-model="title"
          />
        </form>
      </header>

      <TransitionGroup
        name="list"
        tag="section"
        class="todoapp__main"
      >
        <TodoItem
          v-for="todo, index of visibleTodos"
          :key="todo.id"
          :todo="todo"
          @update="Object.assign(todo, $event)"
          @delete="todos.splice(todos.indexOf(todo), 1)"
        />
      </TransitionGroup>

      <footer class="todoapp__footer">
        <span class="todoapp__active-count">
          {{ activeTodos.length }} items left
        </span>

        <StatusFilter v-model="status" />

        <button
          v-if="activeTodos.length > 0"
          class="todoapp__clear-completed"
        >
          Clear completed
        </button>
      </footer>
    </div>

    <article class="message is-danger message--hidden">
      <div class="message-header">
        <p>Error</p>
        <button class="delete"></button>
      </div>

      <div class="message-body">
        Unable to add a Todo
      </div>
    </article>
  </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  max-height: 60px;
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scaleY(0);
}
</style>

