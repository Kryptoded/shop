import { Notify } from "quasar";

export function notify(message, type = "negative") {
  Notify.create({
    type,
    message,
    timeout: 500,
  });
}
