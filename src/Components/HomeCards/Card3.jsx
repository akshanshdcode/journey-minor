import React from "react";

const Card3 = () => {
  return (
    <div className="relative cursor-pointer hidden md:block bg-white border rounded-md hover:scale-105 transition-transform shadow-md shadow-black hover:shadow-lg hover:shadow-black p-4">
      <div class="bg-white text-white p-4">
        <h2 class="text-center text-black text-2xl font-semibold">Camping</h2>
      </div>
      <div
        className="h-40 md:h-64 bg-cover bg-center p-2 rounded-md"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80)",
        }}
      ></div>

      <div className="p-4">
        <p className="text-black">
          Camping, a return to simplicity, weaves a tapestry of outdoor
          connection. Under the canvas of the night sky, one finds respite from
          modernity's chaos. Gathered around the campfire's glow, stories are
          shared, laughter echoes, and nature's symphony serenades the senses.
          Camping invites us to unplug, to rediscover the essence of
          self-sufficiency, and to bask in the rugged beauty of the natural
          world. It's a chance to sleep under the stars, wake to the songs of
          birds, and savor the primal joy of living in harmony with the great
          outdoors.
        </p>
      </div>
    </div>
  );
};

export default Card3;
