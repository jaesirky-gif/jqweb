import Image from "next/image";

export default function Home() {
  const links = [
    {
      label: "邮箱",
      url: "mailto:jaesirky@163.com",
      icon: "mail",
    },
    {
      label: "Github",
      url: "https://github.com/jaesirky-gif",
      icon: "github",
    },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-16 px-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="rounded-full overflow-hidden size-[145px] shrink-0 bg-zinc-100 dark:bg-zinc-800">
            <Image
              src="/assets/avatar.png"
              alt="头像"
              width={145}
              height={145}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center text-3xl font-bold">侯佳奇</div>
          <div className="text-center text-2xl font-bold text-gray-500/80">全栈工程师 | AI应用工程师</div>
          <div>
            <button className="bg-yellow-500 text-black dark:text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors" disabled={true}>
              点击进一步了解
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline"
              >
                {link.icon === "mail" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M5 7.5 12 12l7-4.5" />
                  </svg>
                )}
                {link.icon === "github" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.475 2 2 6.59 2 12.253c0 4.53 2.865 8.37 6.84 9.727.5.095.683-.222.683-.494 0-.244-.01-1.05-.014-1.905-2.78.615-3.37-1.215-3.37-1.215-.455-1.187-1.11-1.504-1.11-1.504-.907-.637.07-.624.07-.624 1.003.072 1.53 1.057 1.53 1.057.892 1.566 2.341 1.114 2.91.852.092-.667.35-1.115.636-1.37-2.22-.26-4.555-1.135-4.555-5.048 0-1.115.39-2.027 1.03-2.743-.104-.26-.447-1.307.098-2.726 0 0 .84-.275 2.75 1.048A9.307 9.307 0 0 1 12 6.37c.85.004 1.705.118 2.504.347 1.91-1.323 2.748-1.048 2.748-1.048.547 1.419.204 2.466.1 2.726.64.716 1.028 1.628 1.028 2.743 0 3.923-2.339 4.785-4.566 5.04.359.317.678.94.678 1.895 0 1.367-.012 2.469-.012 2.806 0 .274.18.595.688.494A10.02 10.02 0 0 0 22 12.253C22 6.59 17.522 2 12 2Z" />
                  </svg>
                )}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
