export default async function logout() {
  await localStorage.removeItem('token');
  window.location.replace('/');
}
