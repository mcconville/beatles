if (location.protocol === 'http:' && location.hostname !== 'localhost')
  location.protocol = 'https:';
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('./public/scribble/scribble.js');
  console.log('worklet');
} else {
  document.body.innerHTML = 'You need support for <a href="https://drafts.css-houdini.org/css-paint-api/">CSS Paint API</a> to view this demo :(';
}
