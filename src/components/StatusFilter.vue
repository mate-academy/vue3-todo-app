<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  methods: {
    save(status) {
      this.$emit('update:modelValue', status);
    },
  },
};
</script>

<template>
  <nav class="filter">
    <a
      href="#/"
      class="filter__link"
      :class="{ selected: modelValue === 'all' }"
      @click="save('all')"
    >
      All
    </a>

    <a
      href="#/active"
      class="filter__link"
      :class="{ selected: modelValue === 'active' }"
      @click="save('active')"
    >
      Active
    </a>

    <a
      href="#/completed"
      class="filter__link"
      :class="{ selected: modelValue === 'completed' }"
      @click="save('completed')"
    >
      Completed
    </a>
  </nav>
</template>

<style>
</style>