const Button = ({ className, name }: { className?: string; name: string }) => {
  return (
    <>
      <button
        type="button"
        title="button"
        className={`bg-[#0055ff] hover:bg-blue-600 hover:scale-105 transition-all duration-300  ease-in-out xs:px-16 md:px-12 py-2 rounded-full  text-white xs:text-sm mt-10 ${className}`}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
