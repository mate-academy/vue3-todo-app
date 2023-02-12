<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
  },
  emits: ['update', 'delete'],
  methods: {
    toggle() {
      this.$emit('update', {
        ...this.todo,
        completed: !this.todo.completed,
      });
    },
    remove() {
      this.$emit('delete');
    }
  }
}
</script>

<template>
  <div
    class="todo"
    :class="{ completed: todo.completed }"
  >
    <label class="todo__status-label">
      <input
        type="checkbox"
        class="todo__status"
        :checked="todo.completed"
        @change="toggle"
      />
    </label>

    <form v-if="false">
      <input
        type="text"
        class="todo__title-field"
        placeholder="Empty todo will be deleted"
        value="Todo is being edited now"
      />
    </form>

    <template v-else>
      <span class="todo__title">{{ todo.title }}</span>

      <button
        class="todo__remove"
        @click="remove"
      >
        x
      </button>
    </template>

    <div
      class="modal overlay"
      :class="{ 'is-active': false }"
    >
      <div class="modal-background has-background-white-ter"></div>
      <div class="loader"></div>
    </div>
  </div>
</template>

<style>

</style>