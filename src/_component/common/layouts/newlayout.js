function NewLayout(props) {
    return (
      <div>
        <Sidebar />
        <div className="main-wrapper">
          <Navbar />
          <div className="main">
            <p class="new-layout">Hello</p>
          </div>
        </div>
      </div>
    );
  }
  
  function Sidebar(props) {
    return (
      <div className="sidebar">
        <div className="sidebar-logo">
          <span>Test</span>
        </div>
        <ul className="sidebar-nav">
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
          <li>Menu 5</li>
        </ul>
      </div>
    );
  }
  
  function Navbar(props) {
    return (
      <div className="navbar">
        <div className="navbar-title">Lorem ipsum</div>
        <div className="navbar-menu">
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>
            <button className="btn">Sign Out</button>
          </li>
        </div>
      </div>
    );
  }
  
  export default NewLayout;