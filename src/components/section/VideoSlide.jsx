import video from '@/assets/video/Video Animasi DM & Hipertensi.mp4'
export const VideoSlide = () => {
  return (
    <div className="py-5 mb-32 container mx-auto">
      <h2 className="text-[#073D5B] font-bold text-4xl text-center my-10">Cek Videonya!</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height={"810px"}
          src={video}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

