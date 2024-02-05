<template>
  <div class="comment">
    <div class="comment-name">{{ comment.username }}:</div>
    <div class="comment-text">{{ comment.text }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  comment: {
    type: Object,
    default: () => {}
  }
});
</script>
<style scoped>
.comment {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}

.commnet-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.comment-text {
  padding: 16px;
  border: 1px solid #ccc;
}
</style>
