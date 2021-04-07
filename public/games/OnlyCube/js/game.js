var positionCameraX = 1;
var positionCameraY = 2;
var positionCameraZ = 5;
var x = y = z = 1;
var day = 'THREE.Color(0xC3FFE6)',
    night = "0xC3FFE6";


//Render scene
var scene = new THREE.Scene();
//scene.background = new THREE.Color(0xC3FFE6);
scene.background = new THREE.CubeTextureLoader()
    .setPath('assets/texture/sky/')
    .load([
        'wrath_ft.jpg', // Right Side
        'wrath_bk.jpg', // Left Side
        'wrath_up.jpg', // Top Side
        'wrath_dn.jpg', // Botton Side
        'wrath_rt.jpg', // Front Side
        'wrath_lf.jpg' // Back Side
    ]);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

//cenario
var geometry = new THREE.BoxGeometry(1, 1, 1);
var textureDirt = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/grass/grass_lf.png'), side: THREE.DoubleSide }), // Right Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/grass/grass_lf.png'), side: THREE.DoubleSide }), // Left Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/grass/grass_up.png'), side: THREE.DoubleSide }), // Top Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/grass/grass_dn.png'), side: THREE.DoubleSide }), // Botton Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/grass/grass_lf.png'), side: THREE.DoubleSide }), // Front Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/grass/grass_lf.png'), side: THREE.DoubleSide }) // Back Side
];
var textureStone = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/stone.png'), side: THREE.DoubleSide }), // Right Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/stone.png'), side: THREE.DoubleSide }), // Left Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/stone.png'), side: THREE.DoubleSide }), // Top Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/stone.png'), side: THREE.DoubleSide }), // Botton Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/stone.png'), side: THREE.DoubleSide }), // Front Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/stone.png'), side: THREE.DoubleSide }) // Back Side
];
var textureBedRock = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/brick.png'), side: THREE.DoubleSide }), // Right Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/brick.png'), side: THREE.DoubleSide }), // Left Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/brick.png'), side: THREE.DoubleSide }), // Top Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/brick.png'), side: THREE.DoubleSide }), // Botton Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/brick.png'), side: THREE.DoubleSide }), // Front Side
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/texture/blocks/brick.png'), side: THREE.DoubleSide }) // Back Side
];

for (x = 1; x <= 16; x++) {
    for (y = 1; y <= 5; y++) {
        for (z = 1; z <= 16; z++) {
            console.log("x: " + x + ", y: " + y + ", z: " + z);
            /*
            if (y = 1) {
                var bedrock = new THREE.MeshFaceMaterial(textureBedRock);
                var cube = new THREE.Mesh(geometry, bedrock);
                cube.position.x = x;
                cube.position.y = y;
                cube.position.z = z;
                scene.add(cube);
            } else if (y = 5) {
                var dirt = new THREE.MeshFaceMaterial(textureDirt);
                var cube = new THREE.Mesh(geometry, dirt);
                cube.position.x = x;
                cube.position.y = y;
                cube.position.z = z;
                scene.add(cube);
            } else {
                var stone = new THREE.MeshFaceMaterial(textureStone);
                var cube = new THREE.Mesh(geometry, stone);
                cube.position.x = x;
                cube.position.y = y;
                cube.position.z = z;
                scene.add(cube);
            }
*/
            var bedrock = new THREE.MeshFaceMaterial(textureBedRock);
            var cube = new THREE.Mesh(geometry, bedrock);
            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;
            scene.add(cube);
        }
    }
}




//movimentaçãod a camera
camera.position.z = 4;
camera.position.y = 1;


//Light
var ambientLight = new THREE.AmbientLight(0x404040, 100); // soft white light
scene.add(ambientLight);


//game logica e animações
var update = function() {

};

//desenha a reder
var render = function() {
    renderer.render(scene, camera);
};

//rodar o game em loop
var gameLoop = function() {
    requestAnimationFrame(gameLoop);

    update();
    render();
};

gameLoop();