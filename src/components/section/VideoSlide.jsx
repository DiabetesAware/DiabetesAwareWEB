
export const VideoSlide = () => {
  return (
    <div className="py-5 mb-32 container mx-auto">
      <h2 className="text-[#073D5B] font-bold text-4xl text-center my-10">Cek Videonya!</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/3JyNPm0GRPI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

