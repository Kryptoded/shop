import { ref } from "vue";
import commentService from "src/services/commentService";
import { notify } from "src/utils/notify";
export function useComments() {
  loading = ref(false);
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

  return {
    comments,
    loading,
    getComments,
  };
}
