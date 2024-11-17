const Jumbotron= () => {
    return (
      <div className="grid grid-cols-2 relative text-center bg-gray-800 text-white p-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">KIWI COFFEE</h1>
          <h1 className="text-4xl font-bold mb-4">REVOLUTION</h1>
          <h2 className="text-2xl mb-4">LOREM IPSUM DOLOR - SIT AMET</h2>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.
          </p>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded">
            READ MORE
          </button>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/hot-coffee-steams-wooden-table-refreshing-addiction-generated-by-artificial-intelligence_188544-150752.jpg" />
        </div>
      </div>
    );
  };
  
  export default Jumbotron;
  