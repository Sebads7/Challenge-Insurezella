const Button = ({ className, name }: { className?: string; name: string }) => {
  return (
    <div className="text-white text-sm sm:text-sm xl:text-base">
      <button
        type="button"
        title="button"
        className={`bg-[#0055ff] hover:bg-blue-600 hover:scale-105 transition-all duration-300  ease-in-out px-10 md:px-12 py-2 rounded-full  mt-10 ${className}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
