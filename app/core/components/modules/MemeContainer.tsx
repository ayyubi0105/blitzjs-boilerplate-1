import React from "react"
import { BookmarkIcon } from "@heroicons/react/outline"
import { useMeme } from "app/core/hooks/useMeme"

export interface MemeContainerProps {
  id?: any
  title?: string
  imageSrc?: string
  saved?: boolean
}

const MemeContainer: React.FC<MemeContainerProps> = ({ id, title, imageSrc, saved }) => {
  const { saveMeme, deleteMeme } = useMeme()

  return (
    <div className="w-fit h-fit shadow-md break-inside-avoid">
      <div className="h-fit relative">
        <img src={imageSrc} alt={title} className="rounded-t-2xl mb-[145px] " />
        <div className="bg-[#3E405B] w-full h-[157px] rounded-2xl absolute bottom-0 p-[24px]">
          <div className="h-full w-full flex flex-col justify-between">
            <p className="text-white truncate text-lg font-bold">{title}</p>
            {saved ? (
              <button
                className="bg-gray-800 flex items-center justify-center text-white rounded-lg px-8 py-2 space-x-1 font-semibold shadow-md w-fit"
                onClick={() => deleteMeme(id)}
              >
                <BookmarkIcon className="h-[20px] w-[20px]" />
                <p className="text-md ">Saved</p>
              </button>
            ) : (
              <button
                className="bg-[#5561FF] flex items-center justify-center text-white rounded-lg px-8 py-2 space-x-1 font-semibold shadow-md w-fit"
                onClick={() => saveMeme(id)}
              >
                <BookmarkIcon className="h-[20px] w-[20px]" />
                <p className="text-md ">Save</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemeContainer
