"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
})
  .move(-11)
  .type("Amazing ")
  .move(null, { to: "END" })
  .delete()
  .type("Front-end Engineer")
  .move(-9)
  .delete(9)
  .type("Back-end")
  .delete(8)
  .type("Full-stack")
  .move(9)
  .delete()
  .go();
