export default function checkAuth() {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  return false;
}
