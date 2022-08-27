// IMPORTENT TO RUN BUILD OF PARCEL COMMAND
// npx parcel ./src/index.html

import * as THREE from 'three';

// Create instance of WebGL renderer
// Tool to locate a space on web page
// Where we can add and animate all 3d stuff.
const renderer = new THREE.WebGLRenderer();

// Setting the renderer to screen size
renderer.setSize(window.innerWidth, window.innerHeight);

// Eject the renderer to the DOM
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Perspective camera takes 4 parameters: 
// 1 - "Vertical" Field of View = Maximum angle of what can be seen through the length of the camera.
// 2 - Aspect Ratio = Represents the propotion of the width and the height of the image captured by the camera.
//     Usually calculated by dividing canvas width by canvas height.
// 3 - Near = The closets point from the camera.
// 4 - Far = The farthest point from the camera.
// Camera default point is 0,0,0
const camera = new THREE.PerspectiveCamera(
    75, // FOV - usually between 40 - 80
    window.innerWidth/ window.innerHeight, // Aspet Ratio
    0.1, // Near
    1000 // Far
);

// Setting camera position dynamicly each axis
// camera.position.z = 5;
// camera.position.y = 2;
// camera.position.x = 0;

// Setting camera position by 3 values (X, Y, Z)
camera.position.set(0,2,8);

// Create Instance of axes Helper
// Tool that serves as a guide.
// Introduces the 3d coordinate system.
// accepts number that will show the length of each axis.
const axesHelper = new THREE.AxesHelper(3);
//add the axesHelper to the Scene with add method on Scene.
scene.add(axesHelper);

// Explanation soon
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// Link the Scene with the Camera using render method on renderer
renderer.render(scene, camera);