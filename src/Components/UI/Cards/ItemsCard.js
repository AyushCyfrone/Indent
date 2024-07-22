function ItemsCard({ id, date, kitchen, items, raisedBy, status, index }) {
    return (
      <div>
        <article className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center px-4 py-3.5 mt-1 w-full lg:h-[48px] h-[40px] ${(index % 2) ? "bg-indigo-50":"bg-blue-200"} rounded-lg max-md:max-w-full`}>
          <div className="text-zinc-800">{id}</div>
          <time dateTime={date}>{date}</time>
          <div>{kitchen}</div>
          <div>{items}</div>
          <div>{raisedBy}</div>
          <div className="text-sky-500">{status}</div>
        </article>
      </div>
    )
  }
  
  export default ItemsCard;