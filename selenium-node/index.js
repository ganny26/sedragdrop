const { Builder, By, Key, until } = require("selenium-webdriver");
async function drag() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost/drag/main.html");

    // Not Working in action code
    // let draggableDOM = await driver.findElement(By.id("draggable"));
    // let droppableDOM = await driver.findElement(By.id("droppable"));

    // await driver
    //   .actions()
    //   .dragAndDrop(draggableDOM, droppableDOM)
    //   .perform()
    //   .then(result => {
    //     console.log("Executed Successfully");
    //   })
    //   .catch(err => {
    //     console.log("Failed to perform action");
    //   });

    // Working by using similation script
    let myscript = `function trigger_drop() {
      var draggable = $("#draggable").draggable(),
        droppable = $("#droppable").droppable(),

        droppableOffset = droppable.offset(),
        draggableOffset = draggable.offset(),
        dx = droppableOffset.left - draggableOffset.left,
        dy = droppableOffset.top - draggableOffset.top;

      draggable.simulate("drag", {
        dx: dx,
        dy: dy
      });
    }
    trigger_drop()

    `;
    await driver
      .executeScript(myscript)
      .then(res => console.log("Script executed successfully", res))
      .catch(err => console.log("Failed to perform action", err));

    //
  } finally {
    await driver.quit();
  }
}

drag();
