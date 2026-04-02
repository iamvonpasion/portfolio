export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border-subtle" aria-label="Site footer">
      <div className="max-w-5xl mx-auto text-center text-sm text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Von Pasion</p>
      </div>
    </footer>
  );
}
