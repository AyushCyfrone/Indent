function Logo(){
    return (
        <>
        <section className="flex flex-col justify-center text-sm font-semibold text-center text-white max-w-[280px] h-[114px]">
          <header className="flex justify-center items-center px-0 py-4 w-full bg-blue-500 shadow-sm">
            <div className="flex flex-col items-center max-w-full w-[114px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc8430b248b8458ce9cd02956c0432cc02df68213036ac841e9296c9ab3ec321?apiKey=d07d3de89fb2406f80b717f88505014b&"
                alt="Location: Jubilee Hills"
                className="w-full aspect-[3.03]"
              />
              <p className="mt-1">Jubilee Hills</p>
              <p class="font-bold text-xl">Hot Kitchen</p>

            </div>
            
          </header>
          
        </section>
        </>
    )
}

export default Logo;