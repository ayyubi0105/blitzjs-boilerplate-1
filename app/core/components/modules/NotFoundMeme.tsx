import React from "react"
import Image from "next/image"
import notfound from "../../../../public/Not Found Meme.png"

const NotFoundMeme = () => {
  return (
    <div className="w-[250px] lg:w-[804px] h-[417.11px] bg-[#2D2F45] flex flex-col items-center justify-center rounded-xl shadow-md">
      <Image src={notfound} alt="not found" />
      <p className="text-[24px] text-white font-semibold text-center">
        Save some memes to view them here!
      </p>
    </div>
  )
}

export default NotFoundMeme
