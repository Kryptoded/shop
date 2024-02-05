import { ref } from "vue";
import commentService from "src/services/commentService";
import { notify } from "src/utils/notify";
export function useComments() {
  const loading = ref(false);
  const comments = ref([]);

  function getComments(params = {}) {
    loading.value = true;
    return commentService
      .list()
      .then(({ data }) => {
        comments.value = data;
      })
      .catch((e) => {
        notify("Не удалось загрузить комментарии");
      })
      .finally(() => {
        loading.value = false;
      });
  }

  function createComment(formData) {
    return commentService
      .create(formData)
      .then(({ data }) => {
        comments.value.push(data);
      })
      .catch((e) => {
        notify("Не удалось добавить комментарий");
      });
  }

  return {
    comments,
    loading,
    getComments,
    createComment,
  };
}
