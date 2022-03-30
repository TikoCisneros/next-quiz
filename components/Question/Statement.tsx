interface StatementProps {
  text: string;
}

const Statement = ({ text }: StatementProps) => {
  return (
    <div className="flex font-bold text-4xl text-center max-w-3xl mb-7">
      <span>{text}</span>
    </div>
  )
}

export default Statement;