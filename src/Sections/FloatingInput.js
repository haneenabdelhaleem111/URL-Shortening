function FloatingInput({ url, setUrl, handleShorten }) {
  return (
    <div
      className="max-w-5xl mx-auto h-40 bg-[#3B3054] bg-center bg-no-repeat rounded-2xl flex items-center justify-center gap-6 px-8 shadow-xl"
      style={{ backgroundImage: "url('images/bg-shorten-desktop.svg')" }}
    >
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="px-6 py-4 rounded-lg w-full"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={handleShorten}
        className="bg-[#2BCFCF] text-white font-semibold px-7 py-4 rounded-lg hover:bg-[#6FE1E1] transition whitespace-nowrap"
      >
        Shorten It!
      </button>
    </div>
  );
}

export default FloatingInput;
