import React from "react";

const Card2 = () => {
  return (
    <div className="relative cursor-pointer hidden md:block bg-white border rounded-md hover:scale-105 transition-transform shadow-md shadow-black hover:shadow-lg hover:shadow-black p-4">
      <div class="bg-white text-white p-4">
        <h2 class="text-center text-black text-2xl font-semibold">Adventure</h2>
      </div>
      <div
        className="h-40 md:h-64 bg-cover bg-center p-2 rounded-md"
        style={{
          backgroundImage:
            "url(https://c1.wallpaperflare.com/preview/1015/974/530/landscape-vacation-nature-adventure.jpg)",
        }}
      ></div>

      <div className="p-4">
        <p className="text-black">
          Adventure, an exhilarating journey into the unknown, beckons the
          daring spirit. It unfurls a map of experiences beyond comfort zones,
          where uncharted territories become playgrounds for the intrepid.
          Whether scaling rugged peaks, diving into azure depths, or traversing
          untamed wilderness, adventure reveals the human capacity for
          exploration, resilience, and self-discovery. It is a testament to the
          insatiable curiosity and courage that propel us to embrace
          uncertainty, embrace challenge, and savor the thrill of the
          extraordinary.
        </p>
      </div>
    </div>
  );
};

export default Card2;
