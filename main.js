      import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';
      import { OrbitControls } from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/controls/OrbitControls.js';
      import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/loaders/GLTFLoader.js';

/*==============================*/
      /* Add scene Camera and Renderer */
      const scene = new THREE.Scene();
      scene.background = new THREE.Color( 0x08244B );
      const camera = new THREE
        .PerspectiveCamera(
          75,    //Feild of view
          innerWidth/innerHeight,    //Aspect Ratio
          0.1,  //Near Clipping Plane
          1000  //Far Clipping Plane
          );

      const renderer = new THREE.WebGLRenderer({
        /* Grab Canvas in HTML*/
          canvas: document.querySelector('#bg'),
      });
      renderer.setSize(innerWidth, innerHeight);
      renderer.setPixelRatio(devicePixelRatio);

 /*==============================*/
      /* Add orbit controls */
      // const controls = new OrbitControls( camera, renderer.domElement );

 /*==============================*/
      /* Add objects to the Scene */

      var isObjectsNotLoaded = true;

      if(isObjectsNotLoaded){

      }



      /* GLTF LOADER */
      const loader = new GLTFLoader();
      var tex = false;

      loader.load( './images/FACE9.glb',  function ( gltf ) {
        var object = gltf.scene;
        
        object.traverse((node)=>{
          if(!node.isMesh) return;
          node.material.wireframe = true;
        })
        var mat = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
        object.children[0].material = mat;

        // console.log(object.children[0].geometry.attributes.position.array);
        // console.log(object);
        // console.log(mat);
        scene.add( object );

      }, function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
      }, function ( error ) {
      
        console.error( error );
      
      } );

      var object = scene.children;
      console.log(object);
      console.log(scene);

      camera.position.z = 5;

    const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
    const planeMaterial = new THREE.MeshPhongMaterial({
        color: 0xff0000,
      side: THREE.DoubleSide
    });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    //scene.add(planeMesh);
    
    const light = new THREE.DirectionalLight(
      0xffffff, 1);
    light.position.set(0,0,1);
    scene.add(light);

      var notLoaded = true;

      var obj = new THREE.Object3D;

/*==============================*/
    /* ANIMATE */
    function animate() {

      if(notLoaded){
        if(scene.children[1]){
          console.log("d");
          notLoaded = false;
          obj = scene;

          console.log(obj.children[1].children[0].geometry.attributes.position.array);


        }
      }


      //controls.update();

      renderer.render(scene, camera);
      requestAnimationFrame(animate);

      //console.log("sp");
    }
    animate();

    addEventListener('resize', ()=> {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    gsap.to(camera.position,{
      z: 3.5
    })