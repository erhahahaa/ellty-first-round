interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  children,
  onClick
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={"py-2.5 px-5 rounded bg-primary text-[14px] items-center w-full max-w-full hover:bg-primary-hover"}
    >
      {children}
    </button>
  )
}

