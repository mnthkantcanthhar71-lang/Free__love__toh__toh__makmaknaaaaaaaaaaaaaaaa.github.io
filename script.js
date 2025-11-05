// ✅ ใช้ Firebase Realtime Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

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

// HTML Elements
const form = document.getElementById("wishForm");
const intro = document.getElementById("intro");
const riverScene = document.getElementById("riverScene");
const krathongArea = document.getElementById("krathongArea");

// เมื่อกด "ลอยกระทง"
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const yourName = document.getElementById("yourName").value;
  const loverName = document.getElementById("loverName").value;
  const wishText = document.getElementById("wishText").value;

  // บันทึกลง Firebase
  push(ref(db, "krathongs"), {
    yourName,
    loverName,
    wishText,
    time: Date.now()
  });

  intro.classList.add("hidden");
  riverScene.classList.remove("hidden");
});

// เมื่อมีคนลอยกระทง — แสดงบนหน้าจอแบบเรียลไทม์
onChildAdded(ref(db, "krathongs"), (data) => {
  const val = data.val();
  const krathong = document.createElement("img");
  krathong.src = "https://mthai.com/loykrathong/images/items/2025/krathong-1.png";
  krathong.style.left = Math.random() * window.innerWidth + "px";
  krathong.style.bottom = "0px";

  const msg = document.createElement("div");
  msg.textContent = `${val.yourName} 💞 ${val.loverName}: "${val.wishText}"`;
  msg.style.position = "absolute";
  msg.style.color = "#fff";
  msg.style.fontSize = "14px";
  msg.style.textShadow = "0 0 5px #ff69b4";
  msg.style.left = Math.random() * window.innerWidth + "px";
  msg.style.top = "20px";

  krathongArea.appendChild(krathong);
  krathongArea.appendChild(msg);
});
