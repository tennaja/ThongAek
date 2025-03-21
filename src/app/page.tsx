"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLine, FaFacebook, FaPhone } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });
const notoSansThai = Noto_Sans_Thai({ subsets: ["thai"] });

const products = [
  { id: 1, image: "/product5.jpg" },
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
    image: "/kanploo.jpg", text: `สมุนไพรกานพลู มีประโยชน์ทางยามากหมายอันได้แก่
- ใบ รสร้อน แก้ปวดมวน
- เปลือกต้น รสร้อนปร่า แก้ปวดท้อง แก้ลม คุมธาตุ
- ดอก รสเผ็ดร้อนปร่า เป็นยาแก้พิษโลหิต แก้ปวดท้อง แก้ลมเป็นเหน็บชา แก้พิษน้ำเหลือง แก้อุจจาระให้เป็นปกติ แก้เลือดออกตามไรฟัน แก้ปวดฟัน แก้หืด ละลายเสมหะ ดับกลิ่นปาก เป็นต้น
- ดอกเมื่อตากแห้งแล้วจะเป็นสีแดงน้ำตาล นำมากลั่นใช้ 0.12 - 0.3 กรัม จะเป็นยาแก้ท้องขึ้น ธาตุพิการ ขับผายลมในลำไส้ เป็นยาบำรุง
- ผล รสร้อนปร่า เป็นตัวช่วยให้มีกลิ่นหอม นิยมใช้เป็นเครื่องเทศในการประกอบอาหาร
- น้ำมันกานพลู รสเผ็ดร้อนปร่า เป็นยาระงับการชักกระตุก แก้ปวดท้อง ขับผายลม และแก้อาการปวดฟัน ทำให้ผิวหนังชา ดูน้อยลง` },
  { image: "/linjue.jpg", text: `เห็ดหลินจือ คือ สมุนไพรจีนชนิดหนึ่งที่ใช้เป็นยารักษาโรคโดยแพทย์แผนจีนมาอย่างยาวนาน โดยเฉพาะกับประวัติศาสตร์ของจีนที่มีการบันทึกสรรพคุณเห็ดหลินจือมากกว่า 2,000 ปี โดยเห็ดหลินจือมีสารสำคัญอย่างสารกลุ่มไทรเทอร์พีนอยด์ (Triterpenoid) และสารกลุ่มพอลิแซ็กคาไรด์ (Polysaccharide) จึงมีส่วนช่วยในเรื่องภูมิคุ้มกัน อีกทั้งยังไม่เป็นอันตรายต่อร่างกาย จึงทำให้กินเพื่อเสริมคุ้มกันของร่างกายในระยะยาวได้` },
  {
    image: "/krawan.jpg", text: `สมุนไพรกระวานไทย มีสรรพคุณเป็นยาขับลมและเสมหะ ส่วนมากมักใช้เป็นยาขับลม แก้ท้องอืด ท้องเฟ้อ จุก เสียด แน่น บำรุงธาตุ บำรุงกำลัง กระตุ้นการไหลเวียนโลหิต ลมในไส้ ในอก แก้รำมะนาด แก้เบื่ออาหาร ขับเสมหะ ใช้ผสมกับยาถ่ายเพื่อลดอาการปวดท้องจากผลข้างเคียงนั่นเอง` },
  {
    image: "/krachai.jpg", text: `สมุนไพรกระชาย มีสรรพคุณทางยานานับประการ ว่ากันว่าในด้านสรรพคุณทางยาสมุนไพร กระชายเหลืองนั้นดีกว่ากระชายดำเสียอีก กระชายมีอีกชื่อหนึ่งในวงการแพทย์แผนไทยว่าเป็น "โสมไทย" เนื่องจากมีความคล้ายคลึงกันหลายอย่าง เช่นสรรพคุณในการบำรุงกำลังและเสริมสมรรถภาพทางเพศ ซึ่งเป็นลักษณะเด่นของสมุนไพรทั้งสองชนิด ทั้งกระชายและโสมต่างก็เป็นพืชที่มีส่วนสะสมอาหารที่ใช้เป็นยาอยู่ใต้ดินเหมือนกัน แถมยังสามารถเรืองแสงในที่มืดได้เหมือนกันด้วย` },
  { image: "/taowan.jpg", text: `สมุนไพรเถาวัลเปรียง มีสรรพคุณดังนี้ เถา นำมากินจะมีรสเฝื่อนเอียนเล็กน้อย ใช้เป็นยาถ่ายเสมหะ ลงสู่ทวารหนัก ถ่ายเส้นและกษัย ถ่ายเส้นทำให้เส้นอ่อนและหย่อนดี รักษาเส้นเอ็นขอด รักษาปัสสาวะพิการ ขับปัสสาวะ และรักษาโรคบิด โรคไอ โรคหวัด ใช้เถานำมาหั่นตาก แล้วคั่วไฟชงน้ำกิน แทนน้ำชา ทำให้เส้นหย่อนรักษาอาการเมื่อยขบ ส่วนใหญ่แล้วมักนิยมใช้เถาวัลย์เปรียงแดง เพราะมีเนื้อไม้เป็นสีแดงเรื่อ ๆ ราก จะมีสารพวก flavonolที่มีชื่อว่า scadenin, nallaninใช้เป็นยาเบื่อปลา แต่ไม่มีคุณสมบัติในการใช้เป็นยาฆ่าแมลง ในตำรับยาไทยนั้นเขาใช้เป็นยารักษาอาการไข้ เป็นยาอายุวัฒนะ และขับปัสสาวะ` }
];

export default function Home() {
  

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

            ให้ ทองเอก เป็นตัวช่วยดูแลสุขภาพของคุณวันนี้</p>
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
            <SwiperSlide key={index}>
              <div
                className="bg-gray-900 rounded-xl overflow-hidden shadow-md transition-all border border-gray-700 hover:scale-105"
                
              >
                <Image
                  src={product.image}
                  alt={`Product ${index}`}
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
      <div className="mt-2">
    <p className="flex justify-center items-center gap-4">
      ติดต่อเรา: 
      <span className="rounded-2xl px-2 py-1 flex items-center gap-1" style={{ backgroundColor: '#06C755' }}>
        <FaLine /> Line: <a href="https://line.me/ti/p/@yourline" className="underline">@yourline</a>
      </span>
      <span className="rounded-2xl px-2 py-1 flex items-center gap-1" style={{ backgroundColor: '#1877F2' }}>
        <FaFacebook /> Facebook: <a href="https://www.facebook.com/yourpage" className="underline">facebook.com/yourpage</a>
      </span>
      <span className="rounded-2xl px-2 py-1 flex items-center gap-1" style={{ backgroundColor: '#FF5733' }}>
        <FaPhone /> โทร: 012-345-6789
      </span>
    </p>
  </div>
  <p className="mt-4">&copy; 2025 ทองเอก. สงวนลิขสิทธิ์.</p>
  
</footer>
    </div>
  );
}
