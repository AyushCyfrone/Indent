import { useNavigate } from 'react-router-dom';

function ContentCard({ id, date, kitchen, items, raisedBy, status, index, noOfItems}) {
    
    const navigate = useNavigate();

    function handleNavigate() {

        const data = {items}
        console.log("Data sending to Copy page ...")
        navigate('/Indent/AddNewItem/CopiedItems', { state: data });
    }
    return (
      <div>
        <article className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center px-4 py-3.5 mt-1 w-full lg:h-[48px] h-[40px] ${(index % 2) ? "bg-indigo-50 hover:border border-blue-500":"bg-blue-200 hover:border border-blue-500"} rounded-lg max-md:max-w-full`}>
          <div className="text-zinc-800">{id}</div>
          <time dateTime={date}>{date}</time>
          <div>{kitchen}</div>
          <div>{noOfItems}</div>
          <div>{raisedBy}</div>
          <div class="text-blue-500 hover:underline cursor-pointer" onClick={handleNavigate}>copy</div>
          <div className="text-sky-500">
            {status}
          </div>
          
        </article>
      </div>
    )
  }
  
  export default ContentCard;