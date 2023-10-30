import React from "react";

const Card1 = () => {
  return (
    <div className="relative mx-4 cursor-pointer bg-white border rounded-md hover:scale-105 transition-transform shadow-md shadow-black hover:shadow-lg hover:shadow-black p-4">
      <div class="bg-white text-white p-4">
        <h2 class="text-center text-black text-2xl font-semibold">Beauty</h2>
      </div>
      <div
        className="h-40 md:h-64 bg-cover bg-center p-2 rounded-md"
        style={{
          backgroundImage:
            "url(https://c4.wallpaperflare.com/wallpaper/833/194/438/best-wallpapers-for-laptop-wallpaper-preview.jpg)",
        }}
      ></div>

      <div className="p-4">
        <p className="text-black">
          Nature's beauty is a timeless masterpiece, a gallery of wonders that
          captivates the soul. It paints landscapes with vibrant hues, from
          sunrise's soft pinks to sunset's fiery reds. It sculpts mountains,
          carves canyons, and designs coastlines, creating breathtaking
          panoramas. The symphony of birdsong, the fragrance of flowers, and the
          gentle rustling of leaves compose a sensory masterpiece. Nature's
          beauty is a reminder of life's delicate yet resilient balance,
          inviting us to marvel, reflect, and protect this precious gift of the
          Earth.
        </p>
      </div>
    </div>
  );
};

export default Card1;