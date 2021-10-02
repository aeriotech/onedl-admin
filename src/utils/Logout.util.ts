export default async function logout(client: any) {
  await localStorage.removeItem('token');
  await client.resetStore();
}
