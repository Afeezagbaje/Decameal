export function saveUserToken(token) {
  if (window !== "undefined")
    window.localStorage.setItem("access-token", token);
}

export function getSavedUserToken() {
  if (window !== "undefined") {
    return window.localStorage.getItem("access-token");
  } else return "";
}
