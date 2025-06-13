import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    geometry: THREE.DodecahedronGeometry;
    material: THREE.MeshBasicMaterial;
    mesh: THREE.Mesh;
    mouseX: number;
    mouseY: number;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create dodecahedron geometry
    const geometry = new THREE.DodecahedronGeometry(1, 0);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 3;

    let mouseX = 0;
    let mouseY = 0;

    sceneRef.current = {
      scene,
      camera,
      renderer,
      geometry,
      material,
      mesh,
      mouseX,
      mouseY,
    };

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      if (sceneRef.current && mountRef.current) {
        const rect = mountRef.current.getBoundingClientRect();
        sceneRef.current.mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        sceneRef.current.mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (sceneRef.current) {
        // Rotate the mesh
        sceneRef.current.mesh.rotation.x += 0.005;
        sceneRef.current.mesh.rotation.y += 0.01;

        // Add mouse interaction
        sceneRef.current.mesh.rotation.x += sceneRef.current.mouseY * 0.1;
        sceneRef.current.mesh.rotation.y += sceneRef.current.mouseX * 0.1;

        // Subtle pulsing effect
        const scale = 1 + Math.sin(Date.now() * 0.002) * 0.1;
        sceneRef.current.mesh.scale.set(scale, scale, scale);

        sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
      }
    };

    // Handle resize
    const handleResize = () => {
      if (sceneRef.current && mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        sceneRef.current.camera.aspect = width / height;
        sceneRef.current.camera.updateProjectionMatrix();
        sceneRef.current.renderer.setSize(width, height);
      }
    };

    // Add event listeners
    mountRef.current.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (sceneRef.current && mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        
        if (mountRef.current.contains(sceneRef.current.renderer.domElement)) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
        
        sceneRef.current.geometry.dispose();
        sceneRef.current.material.dispose();
        sceneRef.current.renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
};

export default ThreeScene;