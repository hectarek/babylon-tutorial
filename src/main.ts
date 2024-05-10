import * as Babylon from "@babylonjs/core";

const canvas = document.getElementById('renderCanvas');

const engine = new Babylon.Engine(canvas);

const createScene = () => {
  const scene = new Babylon.Scene(engine);

  // scene.createDefaultCameraOrLight(true, false, true);
  // scene.createDefaultCamera(); // Without light, models will show up black
  // scene.createDefaultLight();
  
  // const camera = new Babylon.UniversalCamera("camera", new Babylon.Vector3(0, 0, 0), scene) // Name , initial position, scene reference
  const camera = new Babylon.ArcRotateCamera('camera', 0, 0, 10, new Babylon.Vector3(0,0,0), scene) // name, alpha, beta, radius, target, scene

  camera.attachControl(true);

  // camera.inputs.addMouseWheel();
  // camera.setTarget(Babylon.Vector3.Zero());

  camera.setPosition(new Babylon.Vector3(0, 0, -20)) // Can reduce the amount of travel on movement

  // camera.lowerBetaLimit = Math.PI / 4;
  // camera.upperBetaLimit = Math.PI / 2;

  // camera.upperRadiusLimit = 20;
  // camera.lowerRadiusLimit = 50;

  const box = new Babylon.MeshBuilder.CreateBox("myBox", 
    {
      size: 0.7,
      // width: 0.5,
      // height: 0.25,
      // depth: 0.25,
      // faceColors: [
      //   new Babylon.Color4(1,0,0,1),
      //   Babylon.Color3.Green(),
      //   Babylon.Color3.Blue(),
      //   Babylon.Color3.Yellow(),
      // ],
      faceUV: [
        new Babylon.Vector4(0, 0, 1/6, 1),
        new Babylon.Vector4(1/6, 0, 2/6, 1),
        new Babylon.Vector4(2/6, 0, 3/6, 1),
        new Babylon.Vector4(3/6, 0, 4/6, 1),
        new Babylon.Vector4(4/6, 0, 5/6, 1),
        new Babylon.Vector4(5/6, 0, 1, 1),
      ],
      wrap: true,
    }
  );

  const boxCatMat = new Babylon.StandardMaterial("Cats");
  box.material = boxCatMat;

  boxCatMat.emissiveTexture = new Babylon.Texture("/cats.png", scene);

  // box.position.x = 1;
  // box.position = new Babylon.Vector3(-1, 0.5, 0);

  // box.rotation.x = Math.PI / 4;
  // box.rotation = new Babylon.Vector3(0, 0, Math.PI / 6);

  // box.scaling.y = 2
  // box.scaling = new Babylon.Vector3(2, 0.5, 1);

  const utilLayer = new Babylon.UtilityLayerRenderer(scene);

  // const positionGizmo = new Babylon.PositionGizmo(utilLayer);
  // positionGizmo.attachedMesh = box;

  const rotationGizmo = new Babylon.RotationGizmo(utilLayer);
  rotationGizmo.attachedMesh = box;

  // const sphere = new Babylon.MeshBuilder.CreateSphere('mySphere', {
  //   segments: 50,
  //   diameter: 0.3,
  //   // diameterY: 0.4, // egg
  // }, scene);

  // const sphereMaterial = new Babylon.StandardMaterial("Egg colors");
  // sphere.material = sphereMaterial

  // sphereMaterial.diffuseTexture = new Babylon.Texture("/woodgraine.jpeg")
  // sphereMaterial.emissiveTexture = new Babylon.Texture("/woodgraine.jpeg") // will show up without light

  // sphereMaterial.diffuseColor = new Babylon.Color3(0, 1, 0);
  // sphereMaterial.specularColor = new Babylon.Color3(0, 0, 1);

  // sphereMaterial.ambientColor = new Babylon.Color3(0, 1, 1);
  // scene.ambientColor = new Babylon.Color3(0, 1, 1)

  // sphereMaterial.emissiveColor = new Babylon.Color3(0, 1, 0); // Color of the mesh without light

  // sphereMaterial.alpha = 0.2;

  // sphereMaterial.wireframe = true;

  // const ground = new Babylon.MeshBuilder.CreateGround("myGround", {
  //   height: 5,
  //   width: 10,
  //   subdivisions: 5,
  //   subdivisionsX: 20,
  //   // subdivisionsY: 30,
  // })

  // const groundCatMat = new Babylon.StandardMaterial("ground Cat");
  // ground.material = groundCatMat;
  // groundCatMat.emissiveTexture = new Babylon.Texture('/cats.jpeg')

  // I think deprecated, but this would let you change the position and scaling of the image.
  // groundCatMat.emissiveTexture.uOffset = 1.4;
  // groundCatMat.emissiveTexture.vOffset = 1.4;

  // groundCatMat.emissiveTexture.uScale = 5;
  // groundCatMat.emissiveTexture.vScale = 5;

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

  // const fontData = await (await fetch('/Rubik_Regular.json')).json();
  // const text = Babylon.MeshBuilder.CreateText("", "My Text", fontData, {
  //   size: 2,
  //   depth: 0.25
  // })

  return scene
}

const scene = createScene();

engine.runRenderLoop(() => scene.render())

window.addEventListener('resize', () => engine.resize())