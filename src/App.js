import NavTabs from "./components/NavTabs";
import Projects from "./components/Projects";
import SliderComponent  from "./components/SliderComponent";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
     <SliderComponent/>
     <NavTabs/>
     <Video/>
     <Projects/>
    </div>
  );
}

export default App;
