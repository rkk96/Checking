// Three.js scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('scene').appendChild(renderer.domElement);

// Sphere geometry and material
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x3498db, wireframe: true }); // Dark blue color for the sphere
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

document.addEventListener('DOMContentLoaded', function () {
  new SweetScroll({ duration: 1000 });

  // Ensure link targets are working correctly
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // Get the modal
  var modal = document.getElementById("powerbi-modal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the close button or outside the modal, close it
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  

  // Add click event listener to Power BI project images
  document.querySelectorAll('.powerbi-thumbnail').forEach(image => {
    image.addEventListener('click', function() {
      const powerBiUrl = this.parentNode.getAttribute('data-powerbi-url');
      if (powerBiUrl) {
        const iframe = document.getElementById('powerbi-iframe');
        iframe.src = powerBiUrl;
        modal.style.display = "block";
      }
    });
  });
});
