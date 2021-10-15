# Oki Code-guide

## JS

### canvas.js

#### Player Movement 

I set a `window.addEventListeners` to check for key-up and key-down. The function `movePlayer()`  in the animation loop checks each frame for a key-up or key-down event. It uses `if(true){} else if(true){}` statements to find which key has been pressed. This is done through the `window.addEventLinsteners` declaring the variable `keys` to the key code of all bound keys.

For movement: WASD = `keys[87]` `keys[65]` `keys[83]` `keys[68]`

This file contains all the variables a and classes for all visual elements (character)