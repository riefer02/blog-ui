<template>
  <div id="threeJS" ref="threeJS"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    this.$nextTick(function() {
      console.log(this.$refs.threeJS);
    });
    this.initThree();
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    initThree() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor('#e5e5e5');

      this.$refs.threeJS.appendChild(this.renderer.domElement);
      let geometry = new THREE.BoxGeometry();
      let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);
      this.camera.position.z = 5;
      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    },
    handleResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
};
</script>

<style lang="scss" scoped></style>
