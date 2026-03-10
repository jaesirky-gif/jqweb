import Image from "next/image";

export default function Home() {
  const links = [
    {
      label: "邮箱",
      url: "mailto:jaesirky@163.com",
    },
    {
      label: "Github",
      url: "https://github.com/jaesirky-gif",
    },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <div className="flex items-center justify-center ">
            <div className="circle-image"><Image src="/assets/avatar.png" alt="" width={145} height={145} /></div>
          </div>
          <div className="text-center text-3xl font-bold">侯佳奇</div>
          <div className="text-center text-2xl font-bold text-gray-500/80">AI应用工程师 | 全栈工程师</div>
          <div><button className="bg-yellow-500 text-black dark:text-white px-4 py-2 rounded-md">点击进一步了解</button></div>
          <div>
            {links.map((link) => (
              <div key={link.label}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
