import Video1 from "../assets/calendrier-lunaire.mp4";
import Video2 from "../assets/harmony-home-video.mp4";
import Harmony from "../assets/harmony.png";
import CalendrierLunaire from "../assets/calendrier-lunaire.png";

const Realisations = () => {
  return (
    <section id="realisation" className="py-16 ">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Réalisations
        </h2>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          data-aos="fade-up"
        >
          {/* Vidéo 1 */}
          <div className="bg-slate-100 flex items-center justify-center relative overflow-hidden rounded shadow-lg hover:shadow-sm hover:scale-105 transition duration-300 ">
            <p className="text-center text-slate-950">
              Calendrier lunaire (application web)
            </p>
            <video
              className="w-[28rem] h-[28rem] rounded-md"
              controls
              poster={CalendrierLunaire}
            >
              <source src={Video1} type="video/mp4" />
            </video>
          </div>
          {/* Vidéo 2 */}
          <div className="bg-slate-100 flex items-center justify-center relative overflow-hidden rounded-lg shadow-lg hover:shadow-sm transform hover:scale-105 transition duration-300">
            <p className="text-center text-slate-950">
              Harmony home (application mobile)
            </p>
            <video
              className="w-[28rem] h-[28rem] rounded-md"
              controls
              poster={Harmony}
            >
              <source src={Video2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realisations;
