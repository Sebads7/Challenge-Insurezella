const Logo = ({ className }: { className?: string }) => {
  return (
    <div className="">
      <img
        src="Assets/logo.png"
        alt="logo"
        className={`lg:w-14 lg:h-14 md:w-[6.5rem] md:h-[7rem] w-[6rem] h-[6rem] lg:rounded-md absolute   lg:static top-5 left-4 z-10 ${className}`}
      />
    </div>
  );
};

export default Logo;
