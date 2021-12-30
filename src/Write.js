import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Navbar from "./Navbar";
import { readOne } from "./api/read";

export default function Write({ label = '새 글 쓰기' }) {
  const params = useParams()
  const { data, error } = useSWR(`readOne-${params.id}`, readOne(params.id))
  const [title, setTitle] = useState(data ? data.title : '')
  const [body, setBody] = useState(data ? data.body : '')

  useEffect(() => {
    if(data) {
      setTitle(data.title)
      setBody(data.body)
    }
  }, [data])

  if (error) return <div>failed to load</div>

  if(params.id) {
    label = '글 수정'
  }

  if(!data) {
    return (<div className="min-h-screen">
      <Navbar>
        <Link to="/">
          <span className="text-base leading-5 font-semibold bg-gray-400/10 rounded-full py-2 px-5 flex items-center space-x-2 hover:bg-gray-400/20 dark:highlight-white/5">취소</span>
        </Link>
      </Navbar>

      <div className="grid grid-cols-1 gap-4 auto-rows-auto max-w-md mx-auto md:max-w-screen-lg px-12 py-6">
        <div className="grid">
          <div className="leading-10 text-base font-bold text-gray-500">{label}</div>
          <div className="w-full font-semibold text-2xl py-2 px-3 placeholder-item">...</div>
        </div>
        <div className="grid">
          <div className="leading-10 text-base font-bold text-gray-500">본문</div>
          <div className="h-96 border-solid border-2 border-gray-300 text-lg py-2 px-3 rounded-xl">
            <p className="mt-3 text-gray-500 placeholder-item leading-4 w-8/12">...</p>
            <p className="mt-3 text-gray-500 placeholder-item leading-4 w-10/12">...</p>
            <p className="mt-3 text-gray-500 placeholder-item leading-4 w-6/12">...</p>
          </div>
        </div>
        <div className="grid place-items-center justify-items-center">
          <button className="text-base text-white leading-5 font-semibold bg-indigo-600 rounded-full py-2 px-5 items-center space-x-2 hover:bg-indigo-800 dark:highlight-white/5" disabled>
            {label}
          </button>
        </div>
      </div>
    </div>)
  }
  else {
    console.log(data)
  }


  return (
    <div className="min-h-screen">
      <Navbar>
        <Link to="/">
          <span className="text-base leading-5 font-semibold bg-gray-400/10 rounded-full py-2 px-5 flex items-center space-x-2 hover:bg-gray-400/20 dark:highlight-white/5">취소</span>
        </Link>
      </Navbar>

      <div className="grid grid-cols-1 gap-4 auto-rows-auto max-w-md mx-auto md:max-w-screen-lg px-12 py-6">
        <div className="grid">
          <div className="leading-10 text-base font-bold text-gray-500">{label}</div>
          <input type="text" className="w-full border-solid border-2 border-gray-300 font-semibold text-2xl py-2 px-3 rounded-xl" placeholder="제목" defaultValue={title}></input>
        </div>
        <div className="grid">
          <div className="leading-10 text-base font-bold text-gray-500">본문</div>
          <textarea className="h-96 border-solid border-2 border-gray-300 text-lg py-2 px-3 rounded-xl" placeholder="여러분의 이야기를 적어보세요" defaultValue={body}></textarea>
        </div>
        <div className="grid place-items-center justify-items-center">
          <button className="text-base text-white leading-5 font-semibold bg-indigo-600 rounded-full py-2 px-5 items-center space-x-2 hover:bg-indigo-800 dark:highlight-white/5">
            {label}
          </button>
        </div>
      </div>

    </div>
  )
}