export default defineEventHandler(async (event) => {
  const messages = await useStorage().getItem('messages', []);
  return messages;
});
