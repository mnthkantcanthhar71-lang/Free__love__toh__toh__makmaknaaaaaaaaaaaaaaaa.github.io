// script.js

// ---------- Firebase config (ใช้ของคุณตามที่ยืนยัน) ----------
const firebaseConfig = {
  apiKey: "AIzaSyCwRRNmJYDalK4bugLZJ7x1CDy9VQAFG6o",
  authDomain: "freelovetoh.firebaseapp.com",
  projectId: "freelovetoh",
  storageBucket: "freelovetoh.firebasestorage.app",
  messagingSenderId: "54503548255",
  appId: "1:54503548255:web:2f3f7973606fcbd39a42ea",
  measurementId: "G-0QE353C4PY",
  databaseURL: "https://freelovetoh-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// init firebase (compat)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const krRef = db.ref('krathongs');

// DOM
const enterBtn = document.getElementById('enterBtn');
const welcome = document.getElementById('welcome');
const ytFrame = document.getElementById('ytFrame');
const ytWrap = document.getElementById('ytWrap');

const templateImg = document.getElementById('templateImg');
const rotateInput = document.getElementById('rotate');
const scaleInput = document.getElementById('scale');
const previewBtn = document.getElementById('previewBtn');
const releaseBtn = document.getElementById('releaseBtn');

const myNameInput = document.getElementById('myName');
const loverInput = document.getElementById('loverName');
const w1 = document.getElementById('wish1');
const w2 = document.getElementById('wish2');
const w3 = document.getElementById('wish3');

const pond = document.getElementById('pond');
const stars = document.getElementById('stars');

// generate stars
(function makeStars(){
  for(let i=0;i<40;i++){
    const s = document.createElement('div'); s.className='star';
    s.style.left = Math.random()*100+'%'; s.style.top = Math.random()*35+'%';
    s.style.width = (1+Math.random()*2)+'px'; s.style.height = s.style.width;
    s.style.opacity = 0.5+Math.random()*0.8;
    s.style.background = '#fff';
    stars.appendChild(s);
  }
})();

// user id local
const USER_ID = localStorage.getItem('fl_user') || 'u'+Date.now()+Math.floor(Math.random()*1000);
localStorage.setItem('fl_user', USER_ID);

// enter button: hide overlay and enable autoplay for youtube
enterBtn.addEventListener('click', ()=>{
  welcome.style.display = 'none';
  // add autoplay to iframe src (will trigger play because user gesture)
  if(ytFrame){
    const base = ytFrame.src.split('?')[0];
    ytFrame.src = base + '?autoplay=1&loop=1&playlist=95s3Y8nVMV4&rel=0';
    ytWrap.style.display='block';
  }
});

// helper create element for krathong
function createKrathongElement(data){
  const el = document.createElement('div'); el.className='krathong';
  const img = document.createElement('img');
  img.src = data.image || templateImg.src;
  // size + transform
  const scale = data.scale || 1;
  img.style.width = (120 * scale) + 'px';
  img.style.transform = `rotate(${data.rotate || 0}deg)`;
  el.appendChild(img);

  const wishDiv = document.createElement('div'); wishDiv.className='wish';
  wishDiv.textContent = data.wish1 || '';
  el.appendChild(wishDiv);

  const label = document.createElement('div'); label.className='label';
  label.textContent = (data.myName||'') + (data.loverName? ' & '+data.loverName : '');
  el.appendChild(label);

  // final position (use stored xPercent and bottomPx)
  el.style.left = (data.xPercent || 50) + '%';
  // initially will start off-screen (bottom -150px) then animate to bottomPx
  // ensure bottomPx exists
  const finalBottom = data.bottomPx || (20 + Math.random()*200);
  // set dataset id
  if(data.id) el.dataset.id = data.id;

  // Append then animate
  pond.appendChild(el);
  // force reflow then animate
  requestAnimationFrame(()=>{
    // small delay to allow transition
    setTimeout(()=>{ el.style.bottom = finalBottom + 'px'; }, 60);
  });

  // bobbing effect (subtle)
  el.animate([{transform:'translateY(0)'},{transform:'translateY(-8px)'},{transform:'translateY(0)'}],{duration:3000,iterations:Infinity,delay:Math.random()*1000});
  return el;
}

// listen to DB (child_added and value for persistence)
krRef.on('value', snapshot => {
  // clear and re-render all for persistent view
  const obj = snapshot.val() || {};
  pond.innerHTML = '';
  Object.keys(obj).forEach(k=>{
    const d = obj[k];
    d.id = k;
    createKrathongElement(d);
  });
});

// release function: push new krathong
releaseBtn.addEventListener('click', ()=>{
  const myName = myNameInput.value.trim();
  if(!myName){ alert('กรุณาใส่ชื่อของคุณ'); return; }
  const loverName = loverInput.value.trim();
  const wish1 = w1.value.trim();
  const wish2 = w2.value.trim();
  const wish3 = w3.value.trim();
  const rotate = Number(rotateInput.value) || 0;
  const scale = (Number(scaleInput.value)||100)/100;
  const id = 'k'+Date.now();
  const xPercent = 10 + Math.random()*80;
  const bottomPx = 20 + Math.random()*220;

  const data = {
    owner: USER_ID,
    myName, loverName, wish1, wish2, wish3,
    rotate, scale, xPercent, bottomPx,
    image: templateImg.src,
    createdAt: firebase.database.ServerValue.TIMESTAMP
  };

  // small hand animation (fade in/out)
  showHandOnce();

  krRef.child(id).set(data)
    .then(()=> {
      // success: nothing else needed because DB listener renders all
      console.log('ลอยแล้ว', id);
    })
    .catch(err => {
      console.error(err);
      alert('เกิดข้อผิดพลาดในการลอยกระทง ลองใหม่');
    });
});

// hand visual (simple): fade in then out
function showHandOnce(){
  let h = document.querySelector('.hand');
  if(!h){
    h = document.createElement('div'); h.className='hand';
    h.innerHTML = `<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'><path d='M10 60c5-12 25-12 35-6c8 5 20 4 28-6c6-8 14-10 18-6' fill='none' stroke='%23fbd38d' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/></svg>" alt="hand">`;
    document.body.appendChild(h);
  }
  h.style.opacity = 1;
  h.style.transform = 'translateY(0)';
  setTimeout(()=>{ h.style.transform='translateY(40px)'; }, 50);
  setTimeout(()=>{ h.style.opacity=0; }, 1100);
}

// optional preview (shows in pond temporarily before saving)
previewBtn.addEventListener('click', ()=>{
  const rotate = Number(rotateInput.value) || 0;
  const scale = (Number(scaleInput.value)||100)/100;
  const xPercent = 50; // preview center
  const data = { rotate, scale, xPercent, bottomPx:120, myName: myNameInput.value||'คุณ', loverName: loverInput.value||'', wish1: w1.value||'' , image: templateImg.src };
  // create element that will auto-remove after a few seconds
  const el = createKrathongElement(data);
  setTimeout(()=>{ el.remove(); }, 4000);
});
