import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ text, href, onClick }: ButtonProps) => {
  const renderBtn = () => (
    <button
      className="bg-violet-500 hover:bg-violet-700 text-white text-xl font-bold mt-7 py-2 px-4 min-w-[300px] w-auto rounded-lg"
      onClick={onClick}>
      {text}
    </button>
  );

  if (href) {
    return (
      <Link href={href}>
        {renderBtn()}
      </Link>
    )
  }

  return renderBtn();
};



export default Button;
