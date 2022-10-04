// Created with Motiva Layama v1.6 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "360__010000", a: "C_1", p: new BABYLON.Vector3(4090.19, 159.63, 2622.6), l: new BABYLON.Vector3(4089.19, 159.63, 2622.6)});
   layamaCameras.push({n: "360__010001", a: "C_002", p: new BABYLON.Vector3(3803.32, 159.63, 2656.26), l: new BABYLON.Vector3(3804.32, 159.63, 2656.26)});
   layamaCameras.push({n: "360__010002", a: "C_004", p: new BABYLON.Vector3(3864.76, 144.15, 2463.99), l: new BABYLON.Vector3(3864.76, 144.15, 2462.99)});
   layamaCameras.push({n: "360__010003", a: "C_007", p: new BABYLON.Vector3(4152.65, 116.353, 2494.94), l: new BABYLON.Vector3(4151.65, 116.353, 2495.03)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

