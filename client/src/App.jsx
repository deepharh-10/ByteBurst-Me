import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import UserProfile from "./pages/UserProfile.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import Developer from "./pages/Developer.jsx"
import OrganigerCommitee from "./pages/OrganigerCommitee.jsx"
import VerifyOtp from "./pages/VerifyOtp.jsx"

import Autocad2DAnd3D from "./pages/events/Autocad2DAnd3D.jsx"
import BugBomty from "./pages/events/BugBomty.jsx"
import CodeAThon from "./pages/events/CodeAThon.jsx"
import CssWarriors from "./pages/events/CssWarriors.jsx"
import GraphiesDesign from "./pages/events/GraphiesDesign.jsx"
import PromptEngineering from "./pages/events/PromptEngineering.jsx"
import TechAndAptiQuiz from "./pages/events/TechAndAptiQuiz.jsx"
import TechExhibition from "./pages/events/TechExhibition.jsx"
import TechnoCommercial from "./pages/events/TechnoCommercial.jsx"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route path="/about-page" element={<AboutPage/>}/>
        <Route path="/developer" element={<Developer/>}/>
        <Route path="/organiger-commitee" element={<OrganigerCommitee/>}/>
        <Route path="/verifyOtp" element={<VerifyOtp/>}/>

        <Route path="/autocad" element={<Autocad2DAnd3D/>}/>
        <Route path="/bug-bomty" element={<BugBomty/>}/>
        <Route path="/code-a-thon" element={<CodeAThon/>}/>
        <Route path="/css-warriors" element={<CssWarriors/>}/>
        <Route path="/graphies-design" element={<GraphiesDesign/>}/>
        <Route path="/prompt-engineering" element={<PromptEngineering/>}/>
        <Route path="/tech-apti" element={<TechAndAptiQuiz/>}/>
        <Route path="/tech-exhibition" element={<TechExhibition/>}/>
        <Route path="/techno-commercial" element={<TechnoCommercial/>}/>
      </Routes>
    </div>
  )
}