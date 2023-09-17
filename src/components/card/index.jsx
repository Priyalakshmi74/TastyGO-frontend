function Card() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-10 grid md:grid-cols-3 gap-5">
      <div className="relative rounded-xl">
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="text-2xl px-2 font-bold pt-12">Carnivores Haven</p>
          <p className="text-xl px-2 ">Eat, Roar, Repeat</p>
          <button className="border-white bg-white bottom-8 text-black p-2 rounded-xl mt-4 hover:bg-black/50 hover:text-white ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[220px] md:max-h-[190px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1320176740/photo/delicious-chicken-biryani.webp?b=1&s=170667a&w=0&k=20&c=sNhg2n6WHLln7JrApSn6jKwxhdM2IwQDT97vYAooTeQ="
          alt="/"
        />
      </div>

      <div className="relative rounded-xl">
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="text-2xl px-2 font-bold pt-12">Hunter</p>
          <p className="text-xl px-2 ">The Hungry Hunter Hideaway</p>
          <button className="border-white bg-white bottom-8 text-black p-2 rounded-xl mt-4 hover:bg-black/50 hover:text-white ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[220px] md:max-h-[190px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5vbiUyMHZlZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>

      <div className="relative rounded-xl">
        <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
          <p className="text-2xl px-2 font-bold pt-12">Tasty treat</p>
          <p className="text-xl px-2 ">Meat Magic: Taste the Difference</p>
          <button className="border-white bg-white bottom-8 text-black p-2 rounded-xl mt-4 hover:bg-black/50 hover:text-white ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[220px] md:max-h-[190px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1480129452/photo/mutton-biryani-at-wooden-background.jpg?s=612x612&w=0&k=20&c=VXJ2rHBdxUPfmO81x6qKj7YkPedqTIGZULQAlDqNp4k="
          alt="/"
        />
      </div>
    </div>
  );
}

export default Card;
