const { Builder, By, Key, until } = require('selenium-webdriver')
async function drag() {
  let driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.get('http://localhost/drag/main.html')

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
    
    `
    await driver
      .executeScript(myscript)
      .then(res => console.log('script executed'))
      .catch(err => console.log('err', err))

    //
  } finally {
    //await driver.quit()
  }
}

drag()
