$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(51, 400, 100, 20, "red");
  createPlatform(239, 400, 100, 20, "orange");
  createPlatform(439, 358, 100, 20, "yellow");
  createPlatform(623, 458, 100, 20, "green");
  createPlatform(823, 558, 200, 20, "blue");
  createPlatform(1005, 701, 200, 20, "pink");
  createPlatform(1205, 642, 200, 20, "purple");



    // TODO 3 - Create Collectables
    createCollectable("diamond", 423, 223);
    createCollectable("max", 263, 100, 1, 0.9);
    createCollectable("steve", 1223, 523, 2, 1)


    
    // TODO 4 - Create Cannons
  createCannon("top", 500, 800);
  createCannon("right", 600, 800);
  createCannon("left", 423, 700);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
