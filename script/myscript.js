$("#simulatebtn").click(function() {
  console.log("clicked");
  // $("#kajaldrag").simulate("drag-n-drop", { dx: 300, interpolation: { stepWidth: 10, stepDelay: 50 } });
  // $("#kajaldrag").simulate("drag", { dx: 450 });
  // $("#kajaldrag").simulate("drag", { dragTarget: undefined });
  // $("#kajaldrop").simulate("drop");
  trigger_drop();
});

// $(function() {
//   $("#kajaldrag").draggable();
//   $("#kajaldrop").droppable({
//     drop: function(event, ui) {
//       console.log(event, ui);
//       alert("dropped!");
//     }
//   });
// });

function trigger_drop() {
  var draggable = $("#kajaldrag").draggable(),
    droppable = $("#kajaldrop").droppable(),
    droppableOffset = droppable.offset(),
    draggableOffset = draggable.offset(),
    dx = droppableOffset.left - draggableOffset.left,
    dy = droppableOffset.top - draggableOffset.top;
  console.log("draggable", draggable);

  draggable.simulate("drag", {
    dx: dx,
    dy: dy
  });
}
