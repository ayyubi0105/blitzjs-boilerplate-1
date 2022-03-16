import { SearchIcon } from "@heroicons/react/outline"
import Navbar from "app/core/components/elements/Navbar"
import TabElement from "app/core/components/elements/Tab"
import { useTabContext } from "app/core/components/Contexts/TabContext"
import MemeContainer from "app/core/components/modules/MemeContainer"
import NotFoundMeme from "app/core/components/modules/NotFoundMeme"
import { useMeme } from "app/core/hooks/useMeme"
import { BlitzPage, Image } from "blitz"
import { useState } from "react"

const Home: BlitzPage = () => {
  const { memes, saveMeme, deleteMeme } = useMeme()
  const { tabIndex } = useTabContext()

  const [search, setSearch] = useState("")

  const savedMemes = memes.filter((meme: any) => meme.saved == true)
  const searchedMemes = memes.filter((meme: any) =>
    meme.title.toLowerCase().match(search.toLowerCase())
  )
  const savedSearchedMemes = savedMemes.filter((meme: any) =>
    meme.title.toLowerCase().match(search.toLowerCase())
  )

  return (
    <div className="bg-[#28293D]">
      <Navbar>
        <div className="min-h-screen">
          <div className="h-fit flex items-center justify-center mt-[44px]">
            <TabElement />
          </div>
          <div className="h-fit flex flex-col items-center justify-center text-white mt-[60px]">
            <p className="md:text-[64px] font-bold font-[R-Flex] text-center text-5xl">
              {tabIndex == 1 ? "Meme ReVue" : "Your saved memes"}
            </p>
            <p className="text-[16px] font-[Inter]">
              {tabIndex == 1
                ? "(get it, cuz IT Dev, vuejs)"
                : "View and delete saved memes right here."}
            </p>
          </div>
          <div className="h-fit flex items-center justify-center mt-[32px]">
            <div>
              <p className="text-[16px] text-white">Search for a meme</p>
              <div className="flex relative items-center">
                <SearchIcon className="h-[20px] w-[20px] absolute ml-9 text-[#60648B]" />
                <input
                  type="text"
                  placeholder="or die"
                  className="lg:w-[804px] h-[48px] rounded-lg border-2 bg-[#28293D] border-[#60648B] pl-20 text-white md:w-[604px] w-full"
                  onChange={(e) => {
                    setSearch(e.currentTarget.value)
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-[40px]">
            {tabIndex == 1 ? (
              search ? (
                <div className="w-full lg:columns-3 md:columns-2 columns-1 space-y-5 lg:max-w-[804px] xl:max-w-5xl 2xl:max-w-7xl px-5 lg:px-0">
                  {searchedMemes?.map((meme) => (
                    <MemeContainer
                      imageSrc={meme.imageSrc}
                      title={meme.title}
                      key={meme.id}
                      id={meme.id}
                      saved={meme.saved}
                    />
                  ))}
                </div>
              ) : (
                <div className="w-full lg:columns-3 md:columns-2 columns-1 space-y-5 lg:max-w-[804px] xl:max-w-5xl 2xl:max-w-7xl px-5 lg:px-0">
                  {memes?.map((meme) => (
                    <MemeContainer
                      imageSrc={meme.imageSrc}
                      title={meme.title}
                      key={meme.id}
                      id={meme.id}
                      saved={meme.saved}
                    />
                  ))}
                </div>
              )
            ) : savedMemes.length ? (
              search ? (
                <div className="w-full lg:columns-3 md:columns-2 columns-1 space-y-5 lg:max-w-[804px] xl:max-w-5xl 2xl:max-w-7xl px-5 lg:px-0">
                  {savedSearchedMemes?.map((meme) => (
                    <MemeContainer
                      imageSrc={meme.imageSrc}
                      title={meme.title}
                      key={meme.id}
                      id={meme.id}
                      saved={meme.saved}
                    />
                  ))}
                </div>
              ) : (
                <div className="w-full lg:columns-3 md:columns-2 columns-1 space-y-5 lg:max-w-[804px] xl:max-w-5xl 2xl:max-w-7xl px-5 lg:px-0">
                  {savedMemes?.map((meme) => (
                    <MemeContainer
                      imageSrc={meme.imageSrc}
                      title={meme.title}
                      key={meme.id}
                      id={meme.id}
                      saved={meme.saved}
                    />
                  ))}
                </div>
              )
            ) : (
              <div>
                <NotFoundMeme />
              </div>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default Home
