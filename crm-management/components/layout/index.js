import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM Management</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div>{children}</div>
      <footer className="footer">
        <a href="/" target="_blank" rel="norefferer">CRM Management Project </a>| Founder: Rasam Kamyar ©
      </footer>
    </>
  );
}

export default Layout;
