<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    hide() {
      this.text = '';
    },
    show(text) {
      this.text = text;
    }
  }
}
</script>

<template>
  <article
    class="message"
    :class="{ 'message--hidden': !text }"
  >
    <div class="message-header">
      <slot name="header"></slot>
      <button class="delete" @click="hide"></button>
    </div>

    <div class="message-body">
      <slot :text="text">Message</slot>
    </div>
  </article>
</template>
