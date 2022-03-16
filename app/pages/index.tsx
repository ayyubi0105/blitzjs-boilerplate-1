import { useMeme } from "app/core/hooks/useMeme"
import { BlitzPage, Image } from "blitz"

const Home: BlitzPage = () => {
  const { memes, saveMeme, deleteMeme } = useMeme()

  return (
    <div className="min-h-screen w-full bg-black">
      {/* <div>
        {memes?.map((meme) => (
          <div className="mb-10 bg-gray-200" key={meme.id}>
            <h1 className="text-center text-xl">{meme.title}</h1>
            <Image
              width={100}
              height={100}
              src={meme.imageSrc}
              onClick={() => saveMeme(meme.id)}
              alt={meme.title}
            />
            <p className="text-lg text-red-400">{meme.saved ? "Tersimpan" : "Belum Tersimpan"}</p>
          </div>
        ))}
      </div>

      <pre>{JSON.stringify(memes, null, 2)}</pre> */}
    </div>
  )
}

export default Home
