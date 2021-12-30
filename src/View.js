import { Link } from "react-router-dom";
import useSWR from "swr";
import Article from "./Article";
import Navbar from "./Navbar";
import { readAll } from "./api/read";

export default function View() {
  const { data, error } = useSWR('readAll', readAll())

  if (error) return <div>failed to load</div>

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar>
        <Link to="/new">
          <span className="text-base text-white leading-5 font-semibold bg-indigo-600 rounded-full py-2 px-5 flex items-center space-x-2 hover:bg-indigo-800 dark:highlight-white/5">새 글 쓰기</span>
        </Link>
      </Navbar>

      <div className="flex flex-wrap md:px-12 px-5">
        {!data ?
          [1,2,3].map(i => <Article key={i} />)
          :
          data.map(({ _id, title, body, author }) =>
            <Article key={_id} id={_id} title={title} author={author?.name || '익명'} lastUpdated={'2시간 전'}>
              {body}
            </Article>
          )
        }
      </div>
    </div>
  )
}