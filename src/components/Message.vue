<script>
export default {
  props: {
    active: Boolean,
  },
}
</script>

<template>
  <article
    class="message"
    :class="{ 'message--hidden': !active }"
  >
    <div class="message-header">
      <slot name="header"></slot>
      <button class="delete"></button>
    </div>

    <div class="message-body">
      <slot :x="42">Message</slot>
    </div>
  </article>
</template>
