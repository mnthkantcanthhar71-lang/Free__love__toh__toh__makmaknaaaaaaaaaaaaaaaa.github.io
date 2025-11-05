document.getElementById("floatBtn").addEventListener("click", () => {
  const name = document.getElementById("myName").value.trim();
  const partner = document.getElementById("partnerName").value.trim();
  const wish = document.getElementById("wish").value.trim();

  if (!name || !partner || !wish) {
    alert("กรุณากรอกชื่อและคำขอให้ครบก่อนลอยกระทงนะ 💞");
    return;
  }

  // ล้างหน้าเดิม
  document.body.innerHTML = `
    <div class="river-scene">
      <h1>freelovetoh | ลอยกระทงออนไลน์กับแฟน 💞</h1>
      <div class="wish-box">
        <p>🌕 ${name} ❤️ ${partner}</p>
        <p>คำขอของคุณ: "${wish}"</p>
      </div>
      <img src="https://mthai.com/loykrathong/images/items/2025/krathong-1.png" class="floating-krathong" alt="กระทงลอย">
    </div>
  `;

  // เพิ่มเพลง YouTube อีกครั้ง
  const iframe = document.createElement("iframe");
  iframe.width = "0";
  iframe.height = "0";
  iframe.src = "https://www.youtube.com/embed/95s3Y8nVMV4?autoplay=1&loop=1";
  iframe.frameBorder = "0";
  iframe.allow = "autoplay";
  document.body.appendChild(iframe);
});
