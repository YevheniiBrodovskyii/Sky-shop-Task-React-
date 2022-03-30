function Footer() {

    return <footer className="page-footer #01579b light-blue darken-4">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Developed by Yevhenii Brodovskyi
      <a className="grey-text text-lighten-4 right" href="#!">GitHub Repo</a>
      </div>
    </div>
  </footer>

}

export {Footer}