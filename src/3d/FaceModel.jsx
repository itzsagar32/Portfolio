// import React, { Suspense, useState, useEffect } from 'react'
// import ProceduralHead from './ProceduralHead'

// /*
//  * FaceModel component:
//  * Serves as the central 3D head abstraction.
//  * If a custom 3D model (e.g. GLTF/GLB) is added to /models/face.glb,
//  * it can be integrated here. By default, it seamlessly renders
//  * the custom procedural artistic anatomical sculpture.
//  */
// export default function FaceModel(props) {
//   // If the user later adds an external GLTF model at public/models/face.glb,
//   // we can toggle or integrate useGLTF here.
//   // The current ProceduralHead provides an artistic, reliable, zero-dependency 3D sculpture.
//   return (
//     <Suspense fallback={null}>
//       <ProceduralHead {...props} />
//     </Suspense>
//   )
// }
