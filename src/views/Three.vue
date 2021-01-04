<template>
  <div id="threeJS" ref="threeJS">
    <h1 class="threejs-header-text" @click="$router.push('/blogs')">
      riefer.io
    </h1>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    this.$nextTick(function () {
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
  data: () => ({
    particleCount: undefined,
    particles: undefined,
  }),
  methods: {
    initThree() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor('#000000');
      this.$refs.threeJS.appendChild(this.renderer.domElement);

      // Create Cube
      let geometry = new THREE.BoxGeometry();
      const cubeTexture = new THREE.TextureLoader().load(
        require('@/assets/images/giraffe-circle.svg')
      );
      let material = new THREE.MeshBasicMaterial({ map: cubeTexture });
      // let material = new THREE.MeshPhongMaterial({ color: 0xef8d9c });
      this.cube = new THREE.Mesh(geometry, material);

      // Create Particles
      this.particleCount = 1800;
      this.particles = new THREE.Geometry();
      let particleTexture = new THREE.TextureLoader().load(
        require('@/assets/images/particle.png')
      );
      let particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 20,
        map: particleTexture,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      for (var p = 0; p < this.particleCount; p++) {
        let pX = Math.random() * 500 - 250;
        let pY = Math.random() * 500 - 250;
        let pZ = Math.random() * 500 - 250;
        let particle = new THREE.Vector3(pX, pY, pZ);
        this.particles.velocity = new THREE.Vector3(0, -Math.random(), 0);
        this.particles.vertices.push(particle);
      }

      this.particleSystem = new THREE.Points(this.particles, particleMaterial);
      this.particleSystem.sortParticles = true;

      // Add Geometrey to Scene
      this.scene.add(this.cube);
      this.scene.add(this.particleSystem);
      this.camera.position.z = 5;
      this.animate();

      // Set Lighting
      {
        const color = 0xffffff;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        this.scene.add(light);
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      // Particle Animation
      this.particleSystem.rotation.y += 0.005;

      // Cube Animation
      this.cube.rotation.x += 0.02;
      this.cube.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
    handleResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
  },
};
</script>

<style lang="scss" scoped>
#threeJS {
  position: relative;
  z-index: 10;
  min-height: 100vh;
}

.threejs-header-text {
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;

  color: white;
  background-color: rgba(26, 188, 156, 0.8);
  padding: 0.7rem;
  box-shadow: 0 0 10px #ef8d9c;
  border-radius: 10px;
  animation: shrink-n-grow 2s infinite ease alternate;
  cursor: pointer;
  transform-origin: top left;
}

@keyframes shrink-n-grow {
  0% {
    transform: scale(0.8) translate(-50%, -50%);
  }

  100% {
    transform: scale(1.9) translate(-50%, -50%);
  }
}
</style>
