import { Canvas, useFrame } from '@react-three/fiber'
import { ReactElement, useState } from 'react'

export function App(): ReactElement {
  return (
    <div className="app">
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 3, 3]} />
        <Box />
      </Canvas>
    </div>
  )
}

function Box(): ReactElement {
  const [rotation, setRotation] = useState([0, 0, 0])

  useFrame((_, delta) => {
    setRotation(r => [r[0] + delta * 0.1, r[1] + delta * 0.2, r[2] + delta * 0.3])
  })

  return (
    <group>
      <mesh rotation={rotation}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </group>
  )
}
