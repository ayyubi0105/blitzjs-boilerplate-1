import React from "react"
import { Tab } from "@headlessui/react"
import { useTabContext } from "../../Contexts/TabContext"
import { SearchIcon, BookmarkIcon } from "@heroicons/react/outline"

const TabElement = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ")
  }

  const { setTabIndex } = useTabContext()
  return (
    <div className="h-[64px] md:w-[598px] w-72">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          <div className="h-full w-full" onClick={() => setTabIndex(1)}>
            <Tab
              key={1}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg flex item-center justify-center space-x-2",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[#3643FC] ring-white ring-opacity-40",
                  selected
                    ? "bg-[#5561FF] shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <SearchIcon className="h-[20px] w-[20px]" />
              <p>Explore</p>
            </Tab>
          </div>
          <div className="h-full w-full" onClick={() => setTabIndex(2)}>
            <Tab
              key={2}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg flex item-center justify-center space-x-2",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[#3643FC] ring-white ring-opacity-40",
                  selected
                    ? "bg-[#5561FF] shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
              onClick={() => setTabIndex(2)}
            >
              <BookmarkIcon className="h-[20px] w-[20px]" />
              <p>Saved</p>
            </Tab>
          </div>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default TabElement
