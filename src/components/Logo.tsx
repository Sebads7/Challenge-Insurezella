const Logo = ({ className }: { className?: string }) => {
  return (
    <div className="">
      <img
        src="Assets/logo.png"
        alt="logo"
        className={`lg:w-14 lg:h-14 w-32 h-[8.5rem] lg:rounded-md absolute   lg:static top-6 left-3 z-10 ${className}`}
      />
    </div>
  );
};

export default Logo;
