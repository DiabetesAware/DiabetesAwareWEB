import video from '@/assets/video/Video Animasi DM & Hipertensi.mp4'
export const VideoSlide = () => {
  return (
    <div className="py-5 xl:mb-32 sm:mb-10 container mx-auto">
      <h2 className="text-[#073D5B] font-bold xl:text-4xl sm:text-lg  text-center xl:my-10 sm:my-5">Cek Videonya!</h2>
      <div className="video-container">
        <iframe
          className='xl:w-full sm:w-11/12 xl:h-[810px] sm:h-[165px] mx-auto'
          controls
          src={video}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoPlay={false}
        ></iframe>
      </div>
    </div>
  );
};

