window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  let gradient = context.createLinearGradient(300, 300, 300, 400);
  gradient.addColorStop(0, '#FF0000');
  gradient.addColorStop(0.5, '#7EC0EE');
  gradient.addColorStop(1, '#FF69B4');


  context.fillStyle = gradient;
  context.fillRect(300, 300, 100, 100);

  gradient = context.createRadialGradient(120, 80, 0, 110, 90, 70);
  gradient.addColorStop(0, '#FF69B4');
  gradient.addColorStop(1, '#7EC0EE');

  context.fillStyle = gradient;
  context.beginPath();
  context.arc(100, 100, 50, 0, Math.PI * 2, false);
  context.fill();
}