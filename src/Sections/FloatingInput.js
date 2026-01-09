function FloatingInput({ url, setUrl, handleShorten }) {
  return (
    <div
      className="max-w-4xl mx-auto h-32 bg-[#3B3054] bg-center bg-no-repeat rounded-2xl flex items-center justify-center gap-4 px-6 shadow-lg"
      style={{ backgroundImage: "url('images/bg-shorten-desktop.svg')" }}
    >
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="px-4 py-3 rounded-lg w-full text-base"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={handleShorten}
        className="bg-[#2BCFCF] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#6FE1E1] transition whitespace-nowrap text-base"
      >
        Shorten It!
      </button>
    </div>
  );
}

export default FloatingInput;
