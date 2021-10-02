export default async function logout(client: any) {
  await client.resetStore();
  await localStorage.removeItem('token');
  window.location.replace('/');
}
