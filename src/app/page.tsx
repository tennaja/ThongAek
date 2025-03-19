"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const inter = Inter({ subsets: ["latin"] });
const notoSansThai = Noto_Sans_Thai({ subsets: ["thai"] });

const products = [
  { id: 1, image: "/tha.jpg" },
  { id: 2, image: "/product1.jpg" },
  { id: 3, image: "/product2.jpg" },
  { id: 4, image: "/product3.jpg" },
  { id: 5, image: "/product1.jpg" },
];

const reviews = [
  "/review.jpg", "/review.jpg", "/review.jpg", "/review.jpg"
];

const features = [
  {
    image: "/kanploo.jpg", text: `กานพลู มีประโยชน์ทางยามากหมายอันได้แก่
- ใบ รสร้อน แก้ปวดมวน
- เปลือกต้น รสร้อนปร่า แก้ปวดท้อง แก้ลม คุมธาตุ
- ดอก รสเผ็ดร้อนปร่า เป็นยาแก้พิษโลหิต แก้ปวดท้อง แก้ลมเป็นเหน็บชา แก้พิษน้ำเหลือง แก้อุจจาระให้เป็นปกติ แก้เลือดออกตามไรฟัน แก้ปวดฟัน แก้หืด ละลายเสมหะ ดับกลิ่นปาก เป็นต้น
- ดอกเมื่อตากแห้งแล้วจะเป็นสีแดงน้ำตาล นำมากลั่นใช้ 0.12 - 0.3 กรัม จะเป็นยาแก้ท้องขึ้น ธาตุพิการ ขับผายลมในลำไส้ เป็นยาบำรุง
- ผล รสร้อนปร่า เป็นตัวช่วยให้มีกลิ่นหอม นิยมใช้เป็นเครื่องเทศในการประกอบอาหาร
- น้ำมันกานพลู รสเผ็ดร้อนปร่า เป็นยาระงับการชักกระตุก แก้ปวดท้อง ขับผายลม และแก้อาการปวดฟัน ทำให้ผิวหนังชา ดูน้อยลง` },
  { image: "/atichoke.jpg", text: `อาร์ทิโชก มีสารสำคัญหลายกลุ่มโดยเฉพาะในกลุ่มฟีนอล ซึ่งมีสารหลัก คือ ไซนาริน (cynarine) และมีสรรพคุณที่หลากหลาย เช่น ต้านอนุมูลอิสระ ต้านการอักเสบ ลดคลอเลสเตอรอล ป้องกันตับ และลดไขมัน` },
  {
    image: "/prickthai.jpg", text: `พริกไทยดำ มีประโยชน์ในการรักษาโรคต่างๆ เช่น ลำไส้ แก้ปวด แก้อักเสบ โรคกระเพาะ เป็นต้น

ทางตำราจีนจะใช้พริกไทยดำในการรักษา  โรคมาลาเรีย โรคท้องเดินจากอหิวาต์ และแก้ไข้

ส่วนน้ำมันในพริกไทยดำ (สารพิเพอรีน) ก็นำมาเจือจางกับน้ำ เอามาสูดดม หรือทาถูผิวหนัง เพื่อทำให้หายใจโล่งขึ้น ลดอาการไข้ หนาวสั่น  ฆ่าเชื้อโรคได้ดี และสามารถนำมาผสมกับน้ำมันแล้วนวดบริเวณที่ปวดกล้ามเนื้อได้

นอกจากนี้กลิ่นของพริกไทยยังเข้าไปกระตุ้นสมองให้รู้สึกตื่นตัวอยู่เสมอ ส่วนในตำราไทยจะนำพริกไทยดำมาทำเป็นสมุนไพรเพื่อแก้อาการจุกเสียด แน่นเฟ้อ จากอาหารไม่ย่อย และแก้อาการอ่อนเพลีย` },
  {
    image: "/kamin.jpg", text: `ขมิ้นชันมีสารสำคัญ 2 กลุ่มที่เป็นสารออกฤทธิ์และเป็นยาทางการแพทย์ได้ ได้แก่

กลุ่มที่ให้สารเคอร์คูมินอยด์ (Curcuminoid) มีสารออกฤทธิ์หลัก คือ สารเคอร์คูมิน (Curcumin) มีฤทธิ์ต้านอนุมูลอิสระ เชื้อจุลชีพ สารแบคทีเรียปรสิต ลดความเสี่ยงการเกิดโรคมะเร็งผิวหนัง บำรุงและรักษาตับจากสารพิษ
กลุ่มน้ำมันหอมระเหยโมโนเทอร์ปีน (Monoterpene) มีฤทธิ์ต้านอนุมูลอิสระได้ดี อุดมไปเกลือแร่และวิตามิน ช่วยบำรุงผิวพรณให้ผ่องใสขึ้น
นอกจากสารทั้ง 2 กลุ่มนี้แล้ว แพทย์ยังนิยมใช้ผงขมิ้นชันเป็นส่วนผสมในยารักษาโรคต่างๆ เช่น รักษาโรคข้ออักเสบ ยาลดกรด ยาขับลม ยาแก้ปวดท้อง ยาแก้ท้องอืดหรือท้องเฟ้อ ยาแก้อักเสบ ยาแก้โรคผิวหนัง` },
  { image: "/nammunkratiam.jpg", text: `น้ำมันกระเทียมมีส่วนช่วยลดระดับไขมันโคเลสเตอรอลและไตรกลีเซอไรด์ในกระแสเลือด โดยไขมันโคเลสเตอรอลเป็นสาเหตุของการเกิดอุดตันของเส้นเลือด จากการวิจัยพบว่าสารประกอบซัลเฟอร์ และอัลลิซิน สามารถช่วยลดระดับคอเลสเตอรอลรวมและโคเลสเตอรอลชนิดร้าย (LDL-cholesterol) นอกจากนี้ยังลดการเกาะตัวของเกล็ดเลือดได้` }
];

export default function Home() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className={`${inter.className} ${notoSansThai.className} bg-black text-white`}>
      <header className="relative w-full h-[50vh] overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-[250px] md:h-[200px] lg:h-[400px]">
  <Image 
    src="/tha.jpg" 
    alt="โปรโมชั่น" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-bl-[100px]" 
  />
</div>

      </header>

      <section className="max-w-5xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-white">ทำไมต้องเลือกสินค้าเรา?</h2>
          <p className="mt-4 text-lg text-gray-400">สูตรเข้มข้นจากสมุนไพรแท้ คัดสรรสมุนไพรคุณภาพสูง ผ่านกระบวนการผลิตที่ได้มาตรฐาน

            สะดวก ทานง่าย รูปแบบแคปซูลพกพาสะดวก ไม่ต้องเสียเวลาต้มยา

            ปลอดภัย มั่นใจได้ ผลิตจากโรงงานที่ได้รับการรับรองมาตรฐาน ไม่มีสารตกค้าง

            ห็นผลจริง รีวิวเพียบ การันตีโดยผู้ใช้จริงที่บอกต่อถึงคุณภาพ

            ให้ "ทองเอก" เป็นตัวช่วยดูแลสุขภาพของคุณวันนี้</p>
          <button className="mt-6 px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition item-center" >
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <Image src="/head.jpg" alt="head" width={500} height={300} className="rounded-xl shadow-lg" />
        </div>
      </section>
      {/* <section className="max-w-3xl mx-auto px-8 py-12 flex flex-col items-center text-center gap-6">
        <Image src="/product1.jpg" alt="head" width={500} height={300} className="rounded-xl shadow-lg" />
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition">
            Start Now
          </button>
          <button className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>

      </section> */}

      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold text-center">สรรพคุณสมุนไพรที่เราเลือกใช้</h2>
        <Swiper
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }} pagination={{ clickable: true, type: "bullets" }} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Navigation, Pagination, Autoplay]}
          // modules={[Navigation]}
          slidesPerView={1}
          className="mt-6"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2">
                  <Image src={feature.image} alt={`Feature ${index + 1}`} width={500} height={300} className="rounded-xl shadow-lg" />
                </div>
                <div className="md:w-1/2 text-left">
                  <p className="text-lg text-gray-400">{feature.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <main className="max-w-5xl mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mt-6 text-white">สินค้าของเรา</h2>


        <Swiper
          navigation
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-6"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div
                className="bg-gray-900 rounded-xl overflow-hidden shadow-md transition-all border border-gray-700 hover:scale-105"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

      <section className="max-w-5xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold mt-8 text-white">รีวิวจากลูกค้า</h2>
        <Swiper
          navigation
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-6"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="hover:scale-105 transition-transform">
                <Image src={review} alt={`รีวิว ${index + 1}`} width={300} height={300} className="w-full h-64 object-cover rounded-xl shadow-lg" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <footer className="bg-gray-900 text-white p-6 text-center mt-10 border-t border-gray-700">
        <p>&copy; 2025 SalePage. สงวนลิขสิทธิ์.</p>
      </footer>
    </div>
  );
}
