import { Demo } from "@/components/demo"
import { redis } from "@/lib/redis"
import { cn } from "@/lib/utils"
import { Check, Star } from "lucide-react"
import localFont from "next/font/local"

const fontScary = localFont({
  src: "../assets/Scary.ttf",
})

export default async function Home() {
  const requests = await redis.get("served-requests")
  return (
    <div className="bg-blue-50 grainy-light">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-52">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-lg text-center sm:text-left flex flex-col items-center lg:items-start">
              <h1
                className={cn(
                  "relative tracking-tight sm:text-left mt-10 font-bold !leading-[4rem] text-gray-900 text-5xl md:text-7xl"
                )}
              >
                <span className="whitespace-nowrap">
                  Profan
                  <span className="relative">
                    i
                    <span className="absolute -left-4 -right-4 translate-x-[15px] md:translate-x-[3px] md:-top-[-5px]">
                      <img
                        alt="swaer-emoji"
                        src="/swear-emoji.png"
                        className="h-5 w-5 object-contain md:h-8 md:w-12"
                      />
                    </span>
                  </span>
                  ty
                </span>
                API
              </h1>

              <p className="mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap">
                Detecting toxic content has always been{" "}
                <span className={cn("font-scary font-bold text-red-500", fontScary.className)}>
                  slow
                </span>{" "}
                and{" "}
                <span className={cn("font-scary font-bold text-red-500", fontScary.className)}>
                  expensive
                </span>
                . Not anymore. Introducing a fast, free and open-source profanity filter for your
                web apps.
              </p>

              <ul className="mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> Much faster and cheaper to
                    run than AI
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> Pretty accurate
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-red-500" /> 100% free & open-source
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-blue-50 dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image Description"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                    <Star className="h-4 w-4 text-red-500 fill-red-500" />
                  </div>

                  <p className="">
                    <span className="font-semibold">
                      {(Math.ceil(Number(requests) / 10) * 10).toLocaleString()}
                    </span>{" "}
                    API requests served{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20">
            <img
              src="/try-it.png"
              alt="try"
              className="absolute w-40 left-2/3 -top-2 select-none hidden sm:block"
              aria-hidden="true"
            />
            <Demo />
          </div>
        </div>
      </div>
    </div>
  )
}
