function Footer() {
  return (
    <footer className="page-footer #01579b layout-color">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Developed by Yevhenii Brodovskyi
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/YevheniiBrodovskyii/Sky-shop-Task-React-"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
