// Funciton that executes itself
(function () {
  // console.log("its working")
  const overworld = new Overworld({
    element: document.querySelector(".game-container") //TODO what does that line do exactly. It gets the style of game container?
  });
  overworld.init();

})();