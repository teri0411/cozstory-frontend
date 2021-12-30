import Avatar from "./Avatar";
import Toolbar from "./Toolbar"

export default function Article({ id, title, children, author, lastUpdated }) {

  const deleteHandler = title => id => () => {
    if (window.confirm(`제목\n${title}\n\n이 글을 삭제하시겠습니까?`)) {
      alert('글을 성공적으로 지웠습니다.')
    }
  }

  if (!id) {
    return <div className="group max-w-md mx-auto w-full md:w-9/12 bg-white rounded-xl shadow-md overflow-hidden md:max-w-screen-lg m-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="gray" />
        </div>
        <div className="p-8 grow">
          <div className="block mt-1 text-xl leading-tight font-medium text-black mb-2 placeholder-item w-6/12">...</div>
          <Avatar name="" picture={'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='} />
          <div className="mt-2 text-sm placeholder-item leading-3 w-1/12">...</div>
          <p className="mt-3 text-gray-500 placeholder-item leading-4 w-8/12">...</p>
          <p className="mt-3 text-gray-500 placeholder-item leading-4 w-10/12">...</p>
          <p className="mt-3 text-gray-500 placeholder-item leading-4 w-6/12">...</p>
        </div>
      </div>
    </div>
  }

  return (
    <div className="group max-w-md mx-auto w-full md:w-9/12 bg-white rounded-xl shadow-md overflow-hidden md:max-w-screen-lg m-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://urclass.codestates.com/static/media/cover.23e06f01.jpg" alt="Man looking at item at a store" />
        </div>
        <div className="p-8 grow">
          <div className="transition-opacity md:opacity-0 group-hover:opacity-100">
            <Toolbar id={id} handleDelete={deleteHandler(title)} />
          </div>
          <div className="block mt-1 text-xl leading-tight font-medium text-black mb-2">{title}</div>
          <Avatar name={author} picture={'https://avatars.githubusercontent.com/u/702622?v=4'} />
          <div className="mt-2 text-sm">{lastUpdated}</div>
          <p className="mt-5 text-gray-500">{children}</p>
        </div>
      </div>
    </div>
  )
}