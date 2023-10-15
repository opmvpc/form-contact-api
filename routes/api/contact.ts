export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = await body;
  console.log(data);
  const messages = (await useStorage().getItem('messages')) ?? [];
  messages.push(data);
  await useStorage().setItem('messages', messages);
});
