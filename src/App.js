import logo from './profile_pic.jpeg';
import './App.css';
import Tabs from "./component/Tabs" ; 
import SocialFollow from "./SocialFollow";
function App() {
  return ( 
    <div className="App">
      <Tabs>
        <div label = "Home" id="Home">
          <h1>
            Ashok Kamath
          </h1>
        </div>
        <div label="About Me">
          <h2>About Me</h2>
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi, I'm Ashok. Welcome to my website!
            </p>
            
            <h3>Technical Skills</h3>
              <p>
                I have worked with a wide variety of programming languages.
                <ul className="horizontal-list">
                  <li>Java</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                </ul>
              </p>
            <h3>Experience</h3>
            <h3>Education</h3>
              <p>
                I go to Indiana University and expected to graduate in May 2023 
              </p>
            <SocialFollow/>

        </div>
        <div label="Projects">
        </div>
        <div label="Blog">
        </div>
      </Tabs>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default App;
