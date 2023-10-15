export default defineEventHandler(
  () => `
<h1>Contact</h1>
<form action="./api/contact" method="POST">
  <div>
    <label for="name">Nom</label>
    <input id="name" name="name">
  </div>
  <div>
    <label for="email">Email</label>
    <input name="email" type="email">
  </div>
  <div>
    <label for="message">Message</label>
    <textarea name="message"></textarea>
  </div>
  <button>Envoyer</button>
</form>
`
);
