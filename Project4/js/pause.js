'use strict'

class Pause extends THREE.Object3D {

  constructor(){
    super();

    var texloader = new THREE.TextureLoader();

		var tex = texloader.load("images/Pause.jpeg");

    this.material = new THREE.MeshBasicMaterial({ map: tex });
		this.geometry = new THREE.PlaneGeometry(8, 8, 20);
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0, -2, 0);

    this.add(this.mesh);

    this.visible = false;
  }
}
