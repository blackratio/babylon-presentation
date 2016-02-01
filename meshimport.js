// On va ajouter un Event Listener et encapsuler notre code ce qui nous permettra
// de charger le code quand le DOM sera entièrement chargé.
window.addEventListener('DOMContentLoaded', function() {

   var canvas = document.getElementById("meshimportcanvas");
   var engine = new BABYLON.Engine(canvas, true);

   BABYLON.SceneLoader.Load("", "scene.babylon", engine, function (newScene) {
     // Wait for textures and shaders to be ready
     newScene.executeWhenReady(function () {
       // Attach camera to canvas inputs
       newScene.activeCamera.attachControl(canvas);

       // Once the scene is loaded, just register a render loop to render it
       engine.runRenderLoop(function() {
         newScene.render();
       });
     });
   }, function (progress) {
       // To do: give progress feedback to user
   });

});
