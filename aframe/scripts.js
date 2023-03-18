AFRAME.registerComponent('log', {
    schema: {type: 'string'},
  
    init: function () {
      var stringToLog = this.data;
      console.log(stringToLog);
    }
  });
  var sceneEl = document.querySelector('a-scene');
  AFRAME.registerComponent('foo', {
    init: function () {
      console.log(this.el.sceneEl);  // Reference to the scene element.
    }
  });
  var sceneEl = document.querySelector('a-scene');
console.log(sceneEl.querySelector('#redBox'));
// <a-box id="redBox" class="clickable" color="red"></a-box>
console.log(sceneEl.querySelectorAll('a-box'));
// [
//  <a-box id="redBox" class="clickable" color="red"></a-box>,
//  <a-box color="green"></a-box>
// ]
console.log(sceneEl.querySelectorAll('.clickable'));
// [
//  <a-box id="redBox" class="clickable" color="red"></a-box>
//  <a-sphere class="clickable" color="blue"></a-sphere>
// ]
console.log(sceneEl.querySelectorAll('[light]'));
// [
//  <a-entity light="type: ambient"></a-entity>
// <a-entity light="type: directional"></a-entity>
// ]
var els = sceneEl.querySelectorAll('*');
for (var i = 0; i < els.length; i++) {
  console.log(els[i]);
}
AFRAME.registerComponent('query-selector-example', {
    init: function () {
      this.entities = document.querySelectorAll('.box');
    },
    
    tick: function () {
      // Don't call query selector in here, query beforehand.
      for (let i = 0; i < this.entities.length; i++) {
        // Do something with entities.
      }
    }
  });
  // <a-entity geometry="primitive: sphere; radius: 2"></a-entity>
el.getAttribute('geometry');
// >> {"primitive": "sphere", "radius: 2", ...}
var el = document.createElement('a-entity');
var sceneEl = document.querySelector('a-scene');
var entityEl = document.createElement('a-entity');
// Do `.setAttribute()`s to initialize the entity.
sceneEl.appendChild(entityEl);
var sceneEl = document.querySelector('a-scene');

AFRAME.registerComponent('do-something-once-loaded', {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    console.log('I am ready!');
  }
});

var entityEl = document.createElement('a-entity');
entityEl.setAttribute('do-something-once-loaded', '');
sceneEl.appendChild(entityEl);