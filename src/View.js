import { Link } from "react-router-dom";
import Article from "./Article";
import Navbar from "./Navbar";

export default function View() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar>
        <Link to="/new">
          <span className="text-base text-white leading-5 font-semibold bg-indigo-600 rounded-full py-2 px-5 flex items-center space-x-2 hover:bg-indigo-800 dark:highlight-white/5">새 글 쓰기</span>
        </Link>
      </Navbar>

      <div className="flex flex-wrap px-12">
        {[1,2,3].map(() => {
          return <Article title="카페라떼가 정말 맛있는지에 대한 심도있는 고찰을 열심히 해 보았다" author="김코딩" lastUpdated={'2시간 전'}>
          Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”
          As Cicero would put it, “Um, not so fast.”
          The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
          </Article>
        })}
      </div>
    </div>
  )
}