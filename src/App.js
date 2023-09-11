import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import BigContent from "./components/BigContent";
import { Header } from "./components/Header";
import { SideContent } from "./components/SideContent";
import CVForm from "./components/CVForm";

function App() {
  const GeneratePDF = () => {
    const CvPerson = {
      name: "John Doe",
      title: "Product designer and UI/UX Engineer",
      work: [
        {
          company: "Creative company",
          position: "Graphic designer and photographer",
          workDescription: "da",
        },

        {
          company: "Marketing and Creative business competition",
          position: "Coordinator of the competiton",
          workDescription: "da",
        },
      ],
      education: [
        {
          institute: "MIT University in United States",
          description: "Graphic and multimedia design",
          more: "Lorem ipsum",
        },

        {
          institute: "MIT University in United States",
          description: "Graphic and multimedia design",
          more: "Lorem ipsum",
        },
      ],
      email: "john.doe@gmail.com",
      phone: "+123456789101112",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      technicalSkills: ["Adobe Photoshop", "Sketch", "Photoshop"],
      softSkills:
        "communication, leadership, team player, great presentation skills",
      language: ["English", "German"],
    };
    window.print(CvPerson);
  };

  return (
    <Router>
      <div className="frame">
        <Link to="/createCV" className="buttonGenerate">
          New CV
        </Link>
        <button className="buttonGenerate" onClick={()=>GeneratePDF()}>
          Print Cv
        </button>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="toFlex delayContent">
                  <BigContent />
                  <SideContent />
                </div>
              </>
            }
          />

          <Route path="/createCV" element={<CVForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
