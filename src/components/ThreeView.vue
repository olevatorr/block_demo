<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const container = ref(null)
let scene, camera, renderer, model, light
let mouseX = 0, mouseY = 0
let isMobile = false
let lastTouchX = 0, lastTouchY = 0
let modelSize = new THREE.Vector3()

const init = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true
  })
  renderer.setClearColor(0x000000, 0)
  container.value.appendChild(renderer.domElement)

  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || ('ontouchstart' in window)

  if (isMobile) {
    window.addEventListener('deviceorientation', handleOrientation)
    container.value.addEventListener('touchstart', handleTouchStart)
    container.value.addEventListener('touchmove', handleTouchMove)
  }

  light = new THREE.DirectionalLight(0xffffff, 0.8)
  light.position.set(5, 5, 5)
  scene.add(light)

  const ambientLight = new THREE.AmbientLight(0x404040, 0.7)
  scene.add(ambientLight)

  loadModel()
}

const objUrl = new URL('/2023F2E-TEST.obj', import.meta.url).href;

const loadModel = () => {
  const loader = new OBJLoader()
  loader.load(
    objUrl,
    (object) => {
      model = object
      const box = new THREE.Box3().setFromObject(model)
      box.getSize(modelSize)

      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (!child.material) {
            child.material = new THREE.MeshPhongMaterial({
              color: 0x808080,
              shininess: 30
            })
          }
          else if (!(child.material instanceof THREE.MeshStandardMaterial || 
                     child.material instanceof THREE.MeshPhongMaterial)) {
            const color = child.material.color ? child.material.color : new THREE.Color(0x808080)
            child.material = new THREE.MeshPhongMaterial({
              color: color,
              shininess: 30
            })
          }
        }
      })

      scene.add(model)
      updateSize() // 在模型加載完成後調整大小
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
      console.error('An error happened', error)
    }
  )
}

const updateSize = () => {
  if (!container.value || !model) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  const aspect = width / height

  camera.aspect = aspect
  
  // 計算適當的FOV和相機位置
  const fov = 2 * Math.atan(modelSize.y / (2 * aspect)) * (180 / Math.PI)
  camera.fov = fov

  const distanceX = modelSize.x / (2 * Math.tan((camera.fov * Math.PI) / 360))
  const distanceY = modelSize.y / (2 * Math.tan((camera.fov * Math.PI) / 360))
  const distance = Math.max(distanceX, distanceY)

  camera.position.z = distance * 2 // 給一些額外的空間

  // 調整模型位置使其垂直居中
  model.position.y = -modelSize.y / 2

  // 調整相機位置以對應模型的新位置
  camera.position.y = 0

  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}



const onMouseMove = (event) => {
  if (!model) return
  const rect = container.value.getBoundingClientRect()
  mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1
  
  model.rotation.y = mouseX * 0.5
  model.rotation.x = -mouseY * 0.5
}

const handleOrientation = (event) => {
  if (model) {
    const tiltLR = event.gamma ? event.gamma * (Math.PI / 180) : 0
    const tiltFB = event.beta ? event.beta * (Math.PI / 180) : 0

    model.rotation.y = tiltLR * 0.5
    model.rotation.x = -tiltFB * 0.5
  }
}

const handleTouchStart = (event) => {
  const touch = event.touches[0]
  lastTouchX = touch.clientX
  lastTouchY = touch.clientY
}

const handleTouchMove = (event) => {
  if (!model) return

  const touch = event.touches[0]
  const deltaX = touch.clientX - lastTouchX
  const deltaY = touch.clientY - lastTouchY

  model.rotation.y += deltaX * 0.01
  model.rotation.x += deltaY * 0.01

  lastTouchX = touch.clientX
  lastTouchY = touch.clientY
}

onMounted(() => {
  init()
  animate()
  updateSize()
  if (!isMobile) {
    window.addEventListener('mousemove', onMouseMove)
  }
  
  const resizeObserver = new ResizeObserver(() => {
    updateSize()
  })
  resizeObserver.observe(container.value)

  onUnmounted(() => {
    if (!isMobile) {
        window.removeEventListener('mousemove', onMouseMove)
    } else {
      window.removeEventListener('deviceorientation', handleOrientation)
      container.value.removeEventListener('touchstart', handleTouchStart)
      container.value.removeEventListener('touchmove', handleTouchMove)
    }
    resizeObserver.disconnect()
  })
})

watchEffect(() => {
  if (container.value && model) {
    updateSize()
  }
})
</script>
<template>
  <div ref="container" class="size-56 absolute -left-[150%] -top-[70%] md:-left-56"></div>
</template>