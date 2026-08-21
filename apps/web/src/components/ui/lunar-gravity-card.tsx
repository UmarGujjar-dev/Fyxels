"use client";

import React, { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const RADIUS = 2.0;

// Helper to generate a reliable procedural moon texture
function createProceduralMoonTexture() {
  if (typeof window === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // Base silver-gray lunar color
  ctx.fillStyle = "#8a8d93";
  ctx.fillRect(0, 0, 1024, 512);

  // Add crater details and texture variation
  for (let i = 0; i < 3500; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const r = Math.random() * 20 + 2;
    const opacity = Math.random() * 0.35 + 0.05;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(30, 32, 35, ${opacity})`);
    grad.addColorStop(0.6, `rgba(130, 133, 138, ${opacity * 0.8})`);
    grad.addColorStop(1, "rgba(200, 203, 208, 0)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Background space starfield particles
const starCount = 2500;
const [starPositions, starColors] = (() => {
  const pos = new Float32Array(starCount * 3);
  const col = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const radius = 18 + Math.random() * 25;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = radius * Math.cos(phi);

    const colorType = Math.random();
    if (colorType < 0.65) {
      col[i * 3] = 0.9; col[i * 3 + 1] = 0.95; col[i * 3 + 2] = 1.0;
    } else if (colorType < 0.85) {
      col[i * 3] = 1.0; col[i * 3 + 1] = 0.65; col[i * 3 + 2] = 0.3;
    } else {
      col[i * 3] = 0.2; col[i * 3 + 1] = 0.85; col[i * 3 + 2] = 1.0;
    }
  }
  return [pos, col];
})();

const StarField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.008;
      pointsRef.current.rotation.x += delta * 0.003;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={starCount} array={starPositions} itemSize={3} args={[starPositions, 3]} />
        <bufferAttribute attach="attributes-color" count={starCount} array={starColors} itemSize={3} args={[starColors, 3]} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.065} 
        vertexColors 
        transparent 
        opacity={0.8} 
        sizeAttenuation 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
};

const RealisticMoon = ({ onClick }: { onClick?: () => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const moonTexture = useMemo(() => createProceduralMoonTexture(), []);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh 
      ref={meshRef} 
      castShadow 
      receiveShadow 
      onClick={onClick}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; }} 
      onPointerOut={() => { document.body.style.cursor = 'auto'; }}
    >
      <sphereGeometry args={[RADIUS, 64, 64]} />
      <meshStandardMaterial 
        map={moonTexture || undefined} 
        bumpMap={moonTexture || undefined} 
        bumpScale={0.03} 
        roughness={0.7}
        metalness={0.15}
        color="#d0d4dc"
      />
    </mesh>
  );
};

const particlesCount = 60000; 
const [ringPositions, ringColors, ringRandoms] = (() => {
  const pos = new Float32Array(particlesCount * 3);
  const col = new Float32Array(particlesCount * 3);
  const rnd = new Float32Array(particlesCount);

  for(let i=0; i<particlesCount; i++) {
    const angle = Math.random() * Math.PI * 2;

    const rDist = Math.pow(Math.random(), 1.5);
    const radius = 2.2 + rDist * 2.2; 

    const thickness = 0.4 - (rDist * 0.2); 
    const ySpread = (Math.random() + Math.random() + Math.random() - 1.5);
    const y = ySpread * thickness; 

    pos[i*3] = Math.cos(angle) * radius;
    pos[i*3+1] = y;
    pos[i*3+2] = Math.sin(angle) * radius;

    const intensity = 1.0 - rDist; 

    const paletteType = Math.random();
    let baseR, baseG, baseB;

    if (paletteType < 0.70) {
      // Fyxels Orange accent particles
      baseR = 0.98; baseG = 0.45; baseB = 0.09;
    } else if (paletteType < 0.90) {
      // Fyxels Teal/Cyan accent particles
      baseR = 0.02; baseG = 0.71; baseB = 0.83;
    } else {
      // Sparkle white
      baseR = 0.95; baseG = 0.95; baseB = 1.0;
    }

    baseR = Math.min(1.0, Math.max(0.0, baseR + (Math.random() - 0.5) * 0.1));
    baseG = Math.min(1.0, Math.max(0.0, baseG + (Math.random() - 0.5) * 0.1));
    baseB = Math.min(1.0, Math.max(0.0, baseB + (Math.random() - 0.5) * 0.1));

    const sparkle = Math.random() > 0.95 ? 2.5 : 1.0;

    col[i*3] = baseR * intensity * sparkle;     
    col[i*3+1] = baseG * intensity * sparkle;   
    col[i*3+2] = baseB * intensity * sparkle;   
    rnd[i] = Math.random();
  }
  return [pos, col, rnd];
})();

const ParticleRing = ({ ringState, massiveAsteroidsRef }: { ringState: 'hidden' | 'animating' | 'visible', massiveAsteroidsRef: React.RefObject<Float32Array | null> | React.MutableRefObject<Float32Array> | { current: Float32Array } }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const uniforms = useRef({
    uProgress: { value: ringState === 'visible' ? 1.0 : 0.0 },
    uAsteroids: { value: new Float32Array(75 * 4) },
    time: { value: 0 }
  });

  useFrame((state, delta) => {
    if (pointsRef.current && massiveAsteroidsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
      pointsRef.current.updateMatrix();

      const invMat = new THREE.Matrix4().copy(pointsRef.current.matrix).invert();
      const localAsteroids = new Float32Array(75 * 4);
      for(let i=0; i<75; i++) {
        const ast = new THREE.Vector3(
          massiveAsteroidsRef.current[i*4],
          massiveAsteroidsRef.current[i*4+1],
          massiveAsteroidsRef.current[i*4+2]
        );
        ast.applyMatrix4(invMat);
        localAsteroids[i*4] = ast.x;
        localAsteroids[i*4+1] = ast.y;
        localAsteroids[i*4+2] = ast.z;
        localAsteroids[i*4+3] = massiveAsteroidsRef.current[i*4+3];
      }
      uniforms.current.uAsteroids.value = localAsteroids;
    }
    uniforms.current.time.value = state.clock.elapsedTime;

    if (ringState === 'animating') {
      uniforms.current.uProgress.value += delta * 0.35; 
      if (uniforms.current.uProgress.value > 1.0) uniforms.current.uProgress.value = 1.0;
    } else if (ringState === 'visible') {
      uniforms.current.uProgress.value = 1.0;
    } else {
      uniforms.current.uProgress.value = 0.0;
    }
  });

  const onBeforeCompile = (shader: any) => {
    shader.uniforms.uProgress = uniforms.current.uProgress;
    shader.uniforms.uAsteroids = uniforms.current.uAsteroids;
    shader.uniforms.time = uniforms.current.time;

    shader.vertexShader = `
      uniform float uProgress;
      uniform vec4 uAsteroids[75];
      uniform float time;
      attribute float aRandom;
      varying float vProgress; 
      ${shader.vertexShader}
    `;

    shader.vertexShader = shader.vertexShader.replace(
      `#include <begin_vertex>`,
      `
      vec3 transformed = vec3(position);

      float angle = atan(transformed.x, transformed.z);
      float normalizedAngle = abs(angle) / 3.14159265359;
      float spawnThreshold = 1.0 - normalizedAngle; 

      float progressValue = (uProgress * 1.4) - spawnThreshold;
      float particleProgress = smoothstep(0.0, 0.4, progressValue);
      vProgress = particleProgress;

      transformed.y += sin(angle * 10.0 + time) * 0.05 * aRandom;

      if (uProgress > 0.5) {
        for(int i = 0; i < 75; i++) {
          vec4 astData = uAsteroids[i];
          vec3 delta = transformed - astData.xyz;
          float dist = length(delta);

          float rad = astData.w * 2.0 + 0.15;

          if (dist < rad) {
             float force = pow((rad - dist) / rad, 2.0); 
             transformed += normalize(delta) * force * 0.4;
             transformed.y += force * 0.20 * (aRandom - 0.5);
          }
        }
      }

      float swirl = (1.0 - particleProgress) * 4.0; 
      float s = sin(swirl);
      float c = cos(swirl);
      transformed.xz = mat2(c, -s, s, c) * transformed.xz;

      transformed.y += (1.0 - particleProgress) * (transformed.y >= 0.0 ? 1.0 : -1.0);

      vec3 moonSurface = normalize(transformed) * 2.1;
      transformed = mix(moonSurface, transformed, particleProgress);
      `
    );

    shader.fragmentShader = `
      varying float vProgress;
      ${shader.fragmentShader}
    `;

    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <color_fragment>`,
      `
      #include <color_fragment>

      diffuseColor.a *= vProgress;
      `
    );
  };

  return (
    <points ref={pointsRef} rotation={[-Math.PI / 2, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={particlesCount}
          array={ringPositions}
          itemSize={3}
          args={[ringPositions, 3]}
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={particlesCount}
          array={ringColors}
          itemSize={3}
          args={[ringColors, 3]}
        />
        <bufferAttribute 
          attach="attributes-aRandom" 
          count={particlesCount}
          array={ringRandoms}
          itemSize={1}
          args={[ringRandoms, 1]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.009} 
        vertexColors 
        transparent 
        opacity={0.85} 
        sizeAttenuation={true} 
        blending={THREE.AdditiveBlending} 
        depthWrite={false} 
        onBeforeCompile={onBeforeCompile} 
      />
    </points>
  );
};

const generateAsteroids = (count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const baseRadius = 2.8 + Math.random() * 2.0; 
    const radialAmplitude = 0.5 + Math.random() * 1.5; 
    const radialSpeed = 0.15 + Math.random() * 0.25; 
    const phase = Math.random() * Math.PI * 2;

    const angle = Math.random() * Math.PI * 2;
    const zOffset = (Math.random() - 0.5) * 0.8; 

    const speed = (0.04 + Math.random() * 0.08) * (Math.random() > 0.5 ? 1 : -1);

    const rotationSpeedX = (Math.random() - 0.5) * 0.05;
    const rotationSpeedY = (Math.random() - 0.5) * 0.05;
    const rotationSpeedZ = (Math.random() - 0.5) * 0.05;

    const scale = 0.02 + Math.pow(Math.random(), 4) * 0.18;

    data.push({
      angle, baseRadius, radialAmplitude, radialSpeed, phase, zOffset, speed,
      rx: Math.random() * Math.PI, ry: Math.random() * Math.PI, rz: Math.random() * Math.PI,
      rsx: rotationSpeedX, rsy: rotationSpeedY, rsz: rotationSpeedZ,
      scale
    });
  }
  data.sort((a, b) => b.scale - a.scale);
  return data;
};

const AsteroidBelt = ({ ringState, massiveAsteroidsRef }: { ringState: 'hidden' | 'animating' | 'visible', massiveAsteroidsRef: React.RefObject<Float32Array | null> | React.MutableRefObject<Float32Array> | { current: Float32Array } }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const count = 75; 
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const [asteroids] = useState(() => generateAsteroids(count));

  const scaleRef = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current || !massiveAsteroidsRef.current) return;

    const targetScale = ringState === 'hidden' ? 0 : 1;
    const lerpSpeed = ringState === 'hidden' ? 5 : 2;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, delta * lerpSpeed);

    if (scaleRef.current < 0.01) {
      meshRef.current.visible = false;
      return;
    }
    meshRef.current.visible = true;

    asteroids.forEach((ast, i) => {

      ast.angle += ast.speed * delta; 

      ast.phase += ast.radialSpeed * delta;
      let currentRadius = ast.baseRadius + Math.sin(ast.phase) * ast.radialAmplitude;

      if (currentRadius < 2.15) {
        const penetration = 2.15 - currentRadius;
        currentRadius = 2.15 + penetration * 0.85;
      }

      const x = Math.cos(ast.angle) * currentRadius;
      const y = Math.sin(ast.angle) * currentRadius;

      if (massiveAsteroidsRef.current) {
        massiveAsteroidsRef.current[i * 4] = x;
        massiveAsteroidsRef.current[i * 4 + 1] = y;
        massiveAsteroidsRef.current[i * 4 + 2] = ast.zOffset;
        massiveAsteroidsRef.current[i * 4 + 3] = ast.scale;
      }

      ast.rx += ast.rsx;
      ast.ry += ast.rsy;
      ast.rz += ast.rsz;

      dummy.position.set(x, y, ast.zOffset);
      dummy.rotation.set(ast.rx, ast.ry, ast.rz);
      dummy.scale.setScalar(ast.scale * scaleRef.current);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#88909c"
        roughness={0.7}
        metalness={0.2}
      />
    </instancedMesh>
  );
};

export interface LunarGravityCardProps {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export default function LunarGravityCard({ 
  className,
  title,
  description
}: LunarGravityCardProps) {
  const [mounted, setMounted] = useState(false);
  // Default to visible so particle ring & space physics are ON by default
  const [ringState] = useState<'hidden' | 'animating' | 'visible'>('visible');
  const massiveAsteroidsRef = useRef<Float32Array>(new Float32Array(75 * 4));

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultTitle = (
    <div className="space-y-1">
      <div className="font-sans tracking-tight text-[2.8rem] sm:text-[3.8rem] md:text-[4.4rem] lg:text-[5rem] font-black leading-[0.95] text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)] uppercase">
        We Build
      </div>
      <div className="font-sans tracking-tight text-[3rem] sm:text-[4rem] md:text-[4.6rem] lg:text-[5.2rem] font-black leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-teal-300 drop-shadow-[0_8px_30px_rgba(249,124,0,0.4)] uppercase">
        Digital Products.
      </div>
    </div>
  );

  const defaultDescription = (
    <span>
      Enterprise-grade custom software, autonomous AI platforms, and high-velocity web & mobile applications engineered for market leaders.
    </span>
  );

  return (
    <div className={cn(
      "w-full min-h-[600px] md:min-h-[auto] md:h-[580px] flex flex-col md:flex-row relative overflow-hidden bg-black text-white border-y border-zinc-800/80 rounded-none",
      className
    )}>
      
      {/* Left dark gradient overlay */}
      <div className="absolute top-0 left-0 md:inset-y-0 md:left-0 w-full h-[60%] md:h-full md:w-[65%] bg-gradient-to-b md:bg-gradient-to-r from-black via-black/95 to-transparent z-10 pointer-events-none" />

      {/* Software House Text Content */}
      <div className="w-full md:w-[55%] lg:w-[52%] flex flex-col justify-center px-8 py-12 md:p-0 md:pl-16 lg:pl-24 relative z-20 pointer-events-none">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest mb-6 w-fit bg-orange-500/10 border border-orange-500/25 text-orange-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          FYXELS SOFTWARE HOUSE
        </div>

        <h1 className="mb-6 tracking-tight">
          {title || defaultTitle}
        </h1>

        <p className="text-base md:text-lg font-sans font-normal leading-relaxed text-zinc-300 max-w-[560px] mb-8">
          {description || defaultDescription}
        </p>

        {/* CTAs & Micro Metrics */}
        <div className="flex flex-col gap-6 pointer-events-auto">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm tracking-wide transition-all shadow-[0_8px_30px_rgba(249,124,0,0.35)] hover:shadow-[0_12px_40px_rgba(249,124,0,0.5)] hover:scale-105 active:scale-95 group"
            >
              <span>START A PROJECT</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 border border-white/15 bg-white/5 text-zinc-200 hover:border-white/40 hover:text-white backdrop-blur-md"
            >
              <span>Explore Services</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          {/* Mini Stats */}
          <div className="flex items-center gap-6 pt-3 text-xs font-mono font-medium text-zinc-400 border-t border-zinc-800/80 border-dashed w-fit">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-orange-400 font-sans">120+</span>
              <span>Products Shipped</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-teal-400 font-sans">99.9%</span>
              <span>Uptime Guarantee</span>
            </div>
          </div>
        </div>
      </div>
     
      {/* 3D Canvas Container */}
      <div className="relative md:absolute md:right-0 md:top-0 w-full h-[400px] md:h-full md:w-[65%] pointer-events-auto z-0 flex items-center justify-center bg-black">
        <div className="absolute inset-0 w-full h-full bg-black">
          {mounted ? (
            <Canvas 
              shadows 
              camera={{ position: [0, 4, 10], fov: 45 }} 
              dpr={[1, 2]}
              style={{ background: "#000000" }}
            >
              <ambientLight intensity={0.15} />
              <directionalLight position={[8, 5, 5]} intensity={2.2} color="#ffffff" castShadow shadow-mapSize={[1024, 1024]} />
              <directionalLight position={[-6, -4, -5]} intensity={0.6} color="#f97316" />
              <pointLight position={[0, 2, 4]} intensity={0.4} color="#06b6d4" />

              <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />

              <group rotation={[Math.PI / 8, 0, 0]}>
                <Suspense fallback={null}>
                  <StarField />
                  <RealisticMoon />
                  <ParticleRing ringState={ringState} massiveAsteroidsRef={massiveAsteroidsRef} />
                  <AsteroidBelt ringState={ringState} massiveAsteroidsRef={massiveAsteroidsRef} />
                </Suspense>
              </group>
            </Canvas>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <div className="w-32 h-32 rounded-full animate-pulse border border-white/5 bg-zinc-900/80" />
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export { LunarGravityCard as Component };
