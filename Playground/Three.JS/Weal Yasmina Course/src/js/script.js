// IMPORTENT TO RUN BUILD OF PARCEL COMMAND
// npx parcel ./src/index.html

import * as THREE from 'three';

// Giving the ability to move the camera in the web to see the scene from different angles.
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
    45, // FOV - usually between 40 - 80
    window.innerWidth/ window.innerHeight, // Aspet Ratio
    0.1, // Near
    1000 // Far
);

// Setting camera position dynamicly each axis
// camera.position.z = 5;
// camera.position.y = 2;
// camera.position.x = 0;

// Setting camera position by 3 values (X, Y, Z)
camera.position.set(-10,30,30);

//*********************NOT-WORKING*************************//
//                                                         //
//          Make sure to call the update method            //
//      Every time we change the position of the camera    //
//                    orbit.update();                      //
//                                                         //
//*********************NOT-WORKING*************************//

// Create Instance of orbit controls
// Pass the camera and the renderer dom element as arguments.
const orbit = new OrbitControls(camera, renderer.domElement);

// Create Instance of axes Helper
// Tool that serves as a guide.
// Introduces the 3d coordinate system.
// accepts number that will show the length of each axis.
const axesHelper = new THREE.AxesHelper(1500);
//add the axesHelper to the Scene with add method on Scene.
scene.add(axesHelper);

// Creation of an elemnt in Three.js happens in 3 phases:
// 1 - Creation of geometry.
// 2 - Creation of material.
// 3 - Cover the geometry with the material.
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const planGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide // Giving the ability to see the mesh from front and back.
});
const plane = new THREE.Mesh(planGeometry, planeMaterial);
scene.add(plane);
// Rotate plane to the ground of the grid
plane.rotation.x = Math.PI * -0.5; // PI in trigo is equals to 180degs * -0.5 = -90deg.

// Add Grid Instance to help us see better
const gridHelper = new THREE.GridHelper(30); // Second agrument we can pass gives smaller cubes of grid.
scene.add(gridHelper);

// Add geometrical rotation to the box
// box.rotation.x = 5;
// box.rotation.y = 10;

function animate(time) {
    // With the argument time we can change the speed of animation
    box.rotation.x = time / 2500;
    box.rotation.y = time / 2500;
    // Link the Scene with the Camera using render method on renderer
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
