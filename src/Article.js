import Avatar from "./Avatar";

export default function Article({ title, children, author, lastUpdated }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-screen-lg m-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://urclass.codestates.com/static/media/cover.23e06f01.jpg" alt="Man looking at item at a store" />
        </div>
        <div className="p-8">
          <div className="block mt-1 text-xl leading-tight font-medium text-black mb-2">{title}</div>
          <Avatar name={author} picture={'https://avatars.githubusercontent.com/u/702622?v=4'} />
          <div className="mt-2 text-sm">{lastUpdated}</div>
          <p className="mt-5 text-gray-500">{children}</p>
        </div>
      </div>
    </div>
  )
}