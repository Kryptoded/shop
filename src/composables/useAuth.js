import { ref } from "vue";
import authService from "src/services/authService";
import { notify } from "src/utils/notify";
import { useUserStore } from "src/stores/userStore";

export function useAuth() {
  const user = useUserStore();

  function login(params) {
    return authService
      .authenticate(params)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        user.setData(data.user);
        notify("Успешно", "positive");
      })
      .catch((e) => {
        console.log(e);
        notify("Не удалось авторизоваться");
      });
  }

  function registration(formData) {
    return authService.registration(formData);
  }

  function logout() {
    return authService.logout();
  }

  return {
    login,
    logout,
    registration,
  };
}
