interface Quote {
  quote: string;
  author: string;
  authorAbout: string;
}

export const Quote = ({ quote, author, authorAbout }: Quote) => {
  return (
    <div className=" font-poppins h-screen bg-slate-100 flex justify-center items-center flex-col  ">
      <div className="items-center ">
        <div className="text-3xl font-bold max-w-lg">"{quote}"</div>
        <div className="font-semibold mt-4 max-w-md">{author}</div>
        <div className="text-sm ">{authorAbout}</div>
      </div>
    </div>
  );
};
