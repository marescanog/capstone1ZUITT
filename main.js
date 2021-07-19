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
      /* Add objects to the Scene */

      var isObjectsNotLoaded = true;

      if(isObjectsNotLoaded){

      }



      /* GLTF LOADER */
      // const loader = new GLTFLoader();
      // var tex = false;

      // loader.load( './images/FACE9.glb',  function ( gltf ) {
      //   var object = gltf.scene;
        
      //   object.traverse((node)=>{
      //     if(!node.isMesh) return;
      //     node.material.wireframe = true;
      //   })
      //   var mat = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
      //   object.children[0].material = mat;

      //   // console.log(object.children[0].geometry.attributes.position.array);
      //   // console.log(object);
      //   // console.log(mat);
      //   scene.add( object );

      // }, function ( xhr ) {

      //   console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
      // }, function ( error ) {
      
      //   console.error( error );
      
      // } );

      var object = scene.children;
      //console.log(object);
      //console.log(scene);

      camera.position.z = 5;



    // const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
    // const planeMaterial = new THREE.MeshPhongMaterial({
    //     color: 0xff0000,
    //   side: THREE.DoubleSide
    // });
    // const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    // scene.add(planeMesh);
    



    const light = new THREE.DirectionalLight(
      0xffffff, 1);
    light.position.set(0,0,1);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    /* ===================================== */
    /* ==== ADD Particle Objects Start ===== */
    /* ===================================== */

    function addPart() {
      const geometry = new THREE.SphereGeometry(15, 4, 4);
      const material = new THREE.MeshStandardMaterial({color: 0x1c1d63, wireframe: true, emissive: 0x676666});
      const particle = new THREE.Mesh(geometry, material);
      const[x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(800));
      particle.position.set(x, y, z);
      return particle;
    }
    var balls = new Array(100);  
    for(var x = 0; x < balls.length-1; x++){
      balls.fill( addPart() , x, x+1);
      scene.add(balls[x]);
    }

;

    /* ===================================== */
    /* ==== ADD Particle Objects END ===== */
    /* ===================================== */
    
    // copy array
    // Need Original Position for motion
    const ballsCopy = Array.from(balls);



      // var notLoaded = true;

      // var obj = new THREE.Object3D;

 /*==============================*/
      /* Add orbit controls */
      // const controls = new OrbitControls( camera, renderer.domElement );




    /* ===================================== */
    /* ==== Move Camera on Scroll ===== */
    /* ===================================== */

var scrollyBoi = document.getElementById("scroll-container");

function moveCamera(){
  //console.log("SCOLLING!");
  const currentScrollValue = scrollyBoi.scrollTop;

  //console.log(currentScrollValue);

  camera.position.z = currentScrollValue * -0.01;
  camera.position.x = currentScrollValue * -0.01;
  camera.position.y = currentScrollValue * -0.01;

  camera.rotation.x = currentScrollValue * -0.0001;
  camera.rotation.y = currentScrollValue * -0.00005;
  camera.rotation.z = currentScrollValue * -0.00001;
}


scrollyBoi.onscroll = moveCamera;






/*==============================*/
    /* ANIMATE */
    function animate() {


      // for(var x = 0; x < 1; x++){
      //   //Get Match Cosine
      //    const move = Math.cos(frame);
      //   //Original Position array
      //   console.log(ballsCopy[x].geometry.attributes.position.array.length);
  
  
      //   for (var p = 0; p < ballsCopy[x].geometry.attributes.position.array.length; p++){
      //     balls[x].geometry.attributes.position.array[p] = ballsCopy[x].geometry.attributes.position.array[p] + move;
      //   }

      // }



      // if(notLoaded){
      //   if(scene.children[1]){
      //     console.log("d");
      //     notLoaded = false;
      //     obj = scene;

      //     console.log(obj.children[1].children[0].geometry.attributes.position.array);


      //   }
      // }




    for(var x = 0; x < balls.length-1; x++){
      const randomMizer = Math.random();
      balls[x].rotation.x += -.01 * randomMizer;
      balls[x].rotation.y += -.01 * randomMizer;
      balls[x].rotation.y += -.01 * randomMizer;
    }

    




      // controls.update();

      renderer.render(scene, camera);
      requestAnimationFrame(animate);


    }
    animate();

    addEventListener('resize', ()=> {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    gsap.to(camera.position,{
      z: 3.5,
    });

    gsap.to('#myimg', {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: 'expo'
    });

    gsap.to('#myName', {
      opacity: 1,
      duration: 1.5,
      delay: 0.3,
      y: 0,
      ease: 'expo'
    });

    gsap.to('#myHr', {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
      y: 0,
      ease: 'expo'
    });

    gsap.to('#mytitle', {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
      y: 0,
      ease: 'expo'
    });

    gsap.to('#myPgraf', {
      opacity: 1,
      duration: 1.5,
      delay: 0.6,
      y: 0,
      ease: 'expo'
    });




  //   #myName{
  //     opacity: 0;
  // }
  
  // #myHr{
  //     opacity: 0;
  // }
  
  // #mytitle{
  //     opacity: 0;
  // }
  
  // #myPgraf{
  //     opacity: 0;
  // }
  
  // #myimg{
  //     opacity: 0;
  // }