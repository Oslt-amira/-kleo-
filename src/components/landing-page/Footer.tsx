const Footer = () => {
  return (
    <footer className="mt-40 w-full border-t border-stone-700 bg-stone-900 px-6 py-10 text-sm text-stone-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} YourProject. All bugs reserved.</p>
        <p className="italic text-stone-500">
          Made with ✨, caffeine, and questionable decisions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
