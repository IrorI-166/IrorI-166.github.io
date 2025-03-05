const links = [
  { name: 'My works', href: '#' },
]
const stats = [
  { name: 'Achievement of works', value: '0' },
]

export default function Home() {
  return (
    // TODO: Change the color more comfortable
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath: 'circle(43.9% at 50% 20%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
      </div>
      <div className="mx-auto container px-4">
        <div>
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">IrorI-166</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Engineer/AI/<br />
            Python/TypeScript
          </p>
        </div>

        { /* SNSアイコンを横並びにするエリア */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-8 w-10">
            <a key="YouTube" href="https://www.youtube.com/@TomoIrorI">
              <img src="/yt_icon_mono_dark.png" alt="YouTube" />
            </a>
          </div>
          <div className="h-8 w-8">
            <a key="Instagram" href="https://www.instagram.com/tomo_irori/">
              <img src="/Instagram_Glyph_White.svg" alt="Instagram" />
            </a>
          </div>
          <div className="h-8 w-8">
            <a key="GitHub" href="https://github.com/IrorI-166">
              <img src="/github-mark-white.svg" alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
