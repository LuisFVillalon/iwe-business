interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div className="wrapper m-[0_auto] max-w-4xl md:max-w-7xl px-4 md:px-2">
      {children}
    </div>
  );
}

export default Wrapper;