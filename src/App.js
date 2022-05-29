import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="navbar-container mx-3">
          <span class=" web-title align-text-center" href="#">
            <img src="logo192.png" alt="" width="35" height="auto" className="d-inline-block  mx-2" />
            ReactFacts
          </span>
          <div className="float-end mt-1 mx-3">
            <p className="course mx-1">React Course project-1</p>
          </div>
        </div>
      </nav>

      <div className="container">
        <h2 className="body-title">Fun Facts about React</h2>
        <ul className="facts-list">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </>
  );
}

export default App;
