import Header from './Header'

const Layout = ({ theme, setTheme, children }) => {
  return (
    <div className={`container ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
