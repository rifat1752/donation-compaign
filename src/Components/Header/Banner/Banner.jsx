

const Banner = () => {
    return (
        <div className="h-{700vh} bg-green-200">
           <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/v3DYRj5/group-five-laughing-successful-doctors-standing-together.jpg)'}}>
  <div className="hero-overlay bg-gray-400 bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl">
      <h1 className="mb-5 text-black text-4xl font-bold">I Grow By Helping People In Need</h1>

      <div className="flex justify-center ">
      <input type="text" placeholder="Search" className=" input-bordered rounded-l outline-none text-black  w-72" /><button className="w-20 h-10 bg-red-600 rounded-r">Search</button>
    </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;