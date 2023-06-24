import Image from "next/image";
// import Logo from '../../image/Cisco-logo.png'

export default function Home() {
  return (
    <section className="flex items-center justify-center  bg-Gainsboro h-screen">
      <div className="text-center mx-auto bg-white rounded-lg p-16 max-w-[698px] w-full">
        <div className="w-40 mx-auto mb-5">
          {/* <Image src={Logo} alt='Logo' /> */}
        </div>
        <form>
          <h2 className="mb-5 text-2xl font-bold">تسجيل الدخول</h2>
          <div className="flex flex-col">
            <div className="mb-5">
              <input
                type="text"
                name="phone"
                placeholder="phone"
                className="bg-white border border-borderInpur text-gray-900 text-sm rounded-8 h-[44px] focus:ring-Denim focus:border-Denim block w-full  px-2.5  outline-none"
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                name="phone"
                placeholder="password"
                className="bg-white border border-borderInpur text-gray-900 text-sm rounded-8 h-[44px] focus:ring-Denim focus:border-Denim block w-full  px-2.5  outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="desk">نسيت كلمة المرور ؟</p>
            <div className="flex items-center justify-center my-5">
              <label htmlFor="" className="me-2">
                تذكرني
              </label>
              <input type="checkbox" className="cursor-pointer" />
            </div>
          </div>

          <button className="bg-Denim rounded-xl text-xl font-bold text-white w-full py-2">
            تسجيل الدخول
          </button>

          <div className="flex items-center justify-center mt-5 text-[18px]">
            <a href="/" className="text-Denim me-2">
              انشاء حساب جديد
            </a>
            <p>ليس لديك حساب بعد ؟</p>
          </div>
        </form>
      </div>
    </section>
  );
}
