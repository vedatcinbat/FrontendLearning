import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-sky-300 p-3 text-center font-bold">Hello Next.js</div>
      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
      >Button</button>
      <div className="text-base md:text-lg lg:text-xl">Responsive Text</div> 
      <div className="p-2 sm:p-4 lg:p-8 bg-sky-600">Responsive Padding</div>



      {/* Customization */}
      <div className="bg-customBlue text-customGray-light">
        Custom Color Example
      </div>
      <div className="font-sans">
        Using Inter Font
      </div>
      <div className="font-serif">
        Using Merriweather Font
      </div>

      <div className="mt-72">
        Marghin Top of 18rem
      </div>

      <div className="2xl:text-3xl">Text size changes at 1536px</div>

      <div className="skew-10deg bg-blue-500 text-black p-4 rounded-lg">
        Skewed Button
      </div>
    </>
  );
}
