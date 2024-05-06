import * as Babylon from "@babylonjs/core";

const canvas = document.getElementById('renderCanvas');

const engine = new Babylon.Engine(canvas);

const createScene = () => {
  const scene = new Babylon.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);

  // const box = new Babylon.MeshBuilder.CreateBox("myBox", 
  //   {
  //     size: 0.1,
  //     width: 0.5,
  //     height: 0.25,
  //     depth: 0.25,
  //     faceColors: [
  //       new Babylon.Color4(1,0,0,1),
  //       Babylon.Color3.Green(),
  //       Babylon.Color3.Blue(),
  //       Babylon.Color3.Yellow(),
  //     ],
  //   }
  // );

  // const sphere = new Babylon.MeshBuilder.CreateSphere('mySphere', {
  //   segments: 50,
  //   diameter: 0.3,
  //   diameterY: 0.4,
  // }, scene);

  // const ground = new Babylon.MeshBuilder.CreateGround("myGround", {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 10,
  //   // subdivisionsX: 20,
  //   // subdivisionsY: 30,
  // })

  // ground.material = new Babylon.StandardMaterial();
  // ground.material.wireframe = true;

  // const groundFromHM = new Babylon.MeshBuilder.CreateGroundFromHeightMap("", '/public/height-map.jpeg', {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 100, // default is 1
  //   // maxHeight: 10, // can be used to limit the high of the meshes verticies.
  //   // minHeight: 10, 
  // })

  // groundFromHM.material = new Babylon.StandardMaterial();
  // groundFromHM.material.wireframe = true;

  return scene
}

const scene = createScene();

engine.runRenderLoop(() => scene.render())

window.addEventListener('resize', () => engine.resize())