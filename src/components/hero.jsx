import heroBG from '../assets/background.jpg'

const Hero = () => {
  const latestBlog = {
    excerpt: "Fusce in lorem interdum ex volutpat scelerisque. Curabitur porta, massa at semper euismod, nisi sapien dapibus risus, vitae pharetra arcu nunc sed mauris. Duis porttitor arcu quis lacus mollis, in ultricies sapien mollis. Suspendisse potenti. Donec gravida libero at dapibus ultricies.",
  };

  return (
    <div className="w-full min-h-screen pt-20 bg-white">
      {/* Hero Image */}
      <div className="w-full px-56 pt-8">
        <div className="w-full h-[70vh]">
          <img 
            src={heroBG}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full px-8 py-8">
        <div className="flex items-start justify-between gap-8">
          {/* Left - Text */}
          <div className="flex-1">
            <p className="text-gray-900 leading-relaxed text-base">
              {latestBlog.excerpt}
            </p>
          </div>

          {/* Right - Button */}
          <div className="flex-shrink-0">
            <button className="bg-primary text-accent px-8 py-3 font-medium transition-colors">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;