export const handleGoToLogin = (history) => {
  history.push("/login")
}
export const handleGoToSingUp = (history) => {
  history.push("/singup")
}
export const handleGoToFeed = (history) => {
  history.push("/feed")
}
export const handleGoToPost = (history) => {
  history.push("/post/:postId")
}