// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7G25lq3LPscn68HrF16i7J_kD9SWEEFA",
  authDomain: "freelovetoh-6bb02.firebaseapp.com",
  databaseURL: "https://freelovetoh-6bb02-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "freelovetoh-6bb02",
  storageBucket: "freelovetoh-6bb02.firebasestorage.app",
  messagingSenderId: "491373143215",
  appId: "1:491373143215:web:9d6d80a715618da9be605a",
  measurementId: "G-XK8JW00VTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const launchBtn = document.getElementById("launchBtn");
const river = document.getElementById("river");

launchBtn.addEventListener("click", () => {
  const myName = document.getElementById("myName").value.trim();
  const loverName = document.getElementById("loverName").value.trim();
  const wish = document.getElementById("wish").value.trim();
  
  if (!myName || !loverName || !wish) {
    alert("กรุณากรอกข้อมูลให้ครบก่อนลอยนะคะ 💞");
    return;
  }

  const krathongData = {
    myName, loverName, wish,
    x: Math.random() * 80 + 10,
    y: 0
  };

  push(ref(db, "krathongs"), krathongData);
});

onChildAdded(ref(db, "krathongs"), (snapshot) => {
  const data = snapshot.val();
  createKrathong(data);
});

function createKrathong(data) {
  const k = document.createElement("img");
  k.src = "https://mthai.com/loykrathong/images/items/2025/krathong-1.png";
  k.classList.add("krathong");
  k.style.left = `${data.x}%`;
  k.style.bottom = `-150px`;
  k.title = `${data.myName} ❤️ ${data.loverName}\n"${data.wish}"`;

  river.appendChild(k);

  setTimeout(() => {
    k.style.transform = `translateY(-80vh)`;
  }, 300);
}
// ----- Firebase -----
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7G25lq3LPscn68HrF16i7J_kD9SWEEFA",
  authDomain: "freelovetoh-6bb02.firebaseapp.com",
  databaseURL: "https://freelovetoh-6bb02-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "freelovetoh-6bb02",
  storageBucket: "freelovetoh-6bb02.firebasestorage.app",
  messagingSenderId: "491373143215",
  appId: "1:491373143215:web:9d6d80a715618da9be605a",
  measurementId: "G-XK8JW00VTZ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ----- DOM -----
const area = document.getElementById("floatingArea");

// สุ่มสร้างกระทงของตัวเอง
function floatMyKrathong() {
  const myData = {
    x: Math.random() * window.innerWidth,
    y: Math.random() * (window.innerHeight - 200) + 100,
    emoji: "🌼",
    time: Date.now()
  };
  push(ref(db, "krathongs"), myData);
}

// ฟังข้อมูลจาก Firebase เพื่อเห็นของทุกคน
onValue(ref(db, "krathongs"), (snapshot) => {
  area.innerHTML = "";
  snapshot.forEach((child) => {
    const k = child.val();
    const img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/7432/7432216.png";
    img.style.left = `${k.x}px`;
    img.style.top = `${k.y}px`;
    area.appendChild(img);
  });
});

floatMyKrathong();
