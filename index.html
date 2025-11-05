import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoyKrathongOnline() {
  const [page, setPage] = useState("home");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [wish, setWish] = useState("");
  const [lanterns, setLanterns] = useState([]);

  const bg =
    "https://png.pngtree.com/thumb_back/fh260/background/20250831/pngtree-loy-krathong-festival-in-thailand-with-traditional-lanterns-and-candle-lights-image_18692648.webp";
  const krathong =
    "https://mthai.com/loykrathong/images/items/2025/krathong-1.png";
  const song =
    "https://www.youtube.com/embed/95s3Y8nVMV4?si=fuCx5HBKEmDlpBeF&autoplay=1";

  // สุ่มตำแหน่งโคมลอย
  useEffect(() => {
    const lanterns = Array.from({ length: 12 }).map(() => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 8,
    }));
    setLanterns(lanterns);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black text-white font-sans">
      <title>freelovetoh | ลอยกระทงออนไลน์กับแฟน 💞</title>

      {/* พื้นหลัง */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          animation: "floatBg 60s linear infinite",
        }}
      ></div>

      {/* เพลง */}
      <iframe
        src={song}
        allow="autoplay"
        className="hidden"
        title="loykrathong-song"
      ></iframe>

      {/* โคมลอย */}
      {lanterns.map((l) => (
        <motion.div
          key={l.id}
          className="absolute text-3xl"
          style={{ left: l.left, bottom: "-10%" }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-130vh", opacity: [0, 1, 0.8] }}
          transition={{
            duration: l.duration,
            delay: l.delay,
            repeat: Infinity,
          }}
        >
          🏮
        </motion.div>
      ))}

      {/* เงาน้ำระยิบระยับ */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-900/60 to-transparent blur-sm"></div>

      {/* ชื่อเว็บด้านบน */}
      <div className="absolute top-0 left-0 w-full bg-black/40 text-center py-3 font-semibold text-pink-200 text-xl tracking-wide z-20">
        freelovetoh | ลอยกระทงออนไลน์กับแฟน 💞
      </div>

      <AnimatePresence mode="wait">
        {page === "home" ? (
          // หน้าแรก
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 bg-black/40"
          >
            <img src={krathong} alt="krathong" className="w-40 mb-4" />
            <h1 className="text-4xl font-bold text-yellow-300 mb-4">
              🌕 ลอยกระทงออนไลน์ 🌕
            </h1>
            <div className="flex flex-col space-y-2 text-black">
              <input
                type="text"
                placeholder="ชื่อของคุณ"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="px-4 py-2 rounded-lg text-center"
              />
              <input
                type="text"
                placeholder="ชื่อแฟนของคุณ 💞"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="px-4 py-2 rounded-lg text-center"
              />
              <input
                type="text"
                placeholder="คำอธิษฐาน 1 ข้อ 🕯️"
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                className="px-4 py-2 rounded-lg text-center"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPage("float")}
              className="mt-6 px-8 py-3 bg-yellow-300 text-black font-semibold rounded-full text-lg shadow-lg"
            >
              ลอยกระทง 🌸
            </motion.button>
          </motion.div>
        ) : (
          // หน้าลอยกระทง
          <motion.div
            key="float"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col justify-end items-center text-center z-10"
          >
            <motion.img
              src={krathong}
              alt="krathong"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="w-40 mb-10"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mb-16 text-yellow-200"
            >
              <h2 className="text-3xl font-bold">
                {name1 && name2
                  ? `${name1} 💞 ${name2}`
                  : "คู่รักสุดน่ารัก 💖"}
              </h2>
              <p className="text-lg mt-2 italic">
                {wish || "ขอให้ความรักลอยไปพร้อมสายน้ำแห่งความสุข 🌊"}
              </p>
            </motion.div>

            <motion.button
              onClick={() => setPage("home")}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 mb-10 bg-pink-400 text-black font-semibold rounded-full"
            >
              🔙 กลับไปหน้าแรก
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes floatBg {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
      `}</style>
    </div>
  );
}
