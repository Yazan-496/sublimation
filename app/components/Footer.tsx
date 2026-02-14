import data from "@/data";

export default function Footer() {
  const { footer } = data;

  return (
    <footer className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {footer.description}
            </p>
          </div>
          <div className="flex space-x-6 space-x-reverse">
            {footer.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-500 m-1 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-zinc-800 pt-8 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
