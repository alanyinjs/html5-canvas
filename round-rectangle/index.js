window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  const roundRectangle = (context, x, y, width, height, radius, fill, stroke) => {
    context.beginPath();
    
    context.moveTo(x + radius, y);
    context.arcTo(x + width, y, x + width, y + radius, radius);
    context.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    context.arcTo(x, y + height, x, y + height - radius, radius);
    context.arcTo(x, y, x + radius, y, radius);

    if(fill){
      context.fill();
    }
    if(stroke){
      context.stroke();
    }
  };

  context.strokeStyle = "blue";
  roundRectangle(context, 100, 100, 300, 150, 20, false, true);

  context.fillStyle = "yellow";
  roundRectangle(context, 250, 200, 200, 100, 20, true, false);
};

