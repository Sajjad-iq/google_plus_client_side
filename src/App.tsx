import { AppWrapper } from "./AppWrapper"
import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import { SignUp } from "./Pages/Auth/AuthPages/SignUp/Index";
import { SignIn } from "./Pages/Auth/AuthPages/SignIn";
import { Home } from "./Pages/Home";
import { SplitScreen } from "./SplitScreen";
import Profile from "./Pages/Profile";
import { Settings } from "./Pages/Settengs";
import { useEffect } from "react";
import { PostPreview } from "./Pages/PostPreview";
import { People } from "./Pages/People";
import { PeopleList } from "./Pages/People/Components/PeopleList";
import { PeopleProfile } from "./Pages/People/Components/PeopleProfile";
import { AddPostWindow } from "./Pages/AddPostWindow";
import { Notifications } from "./Pages/Notifications";
import { CheckIsAccountValid } from "./services/Check/CheckIsAccountValid";
import { Collections } from "./Pages/Collections";
import { AddCollectionPage } from "./Pages/AddCollection";
import { CollectionPreview } from "./Pages/CollectionPreview";
import { Communities } from "./Pages/Communities";
import GoogleLogo from "../public/logo384.png"
import { SearchPage } from "./Pages/SearchFiled";


function App() {

  const { FirstLoad, Loading } = CheckIsAccountValid()

  useEffect(() => { FirstLoad() }, [])

  return (
    Loading ?

      <AppWrapper style={{ alignItems: "center" }}>
        <section id="loading-page" className="Loading-page-wrapper">

          <img className="loading-logo" src={GoogleLogo} alt="google plus logo" />

          <section className="loading-animation-header-wrapper">
            <div className="gray-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h1 className="loading-header">Google</h1>
          </section>

        </section>
      </AppWrapper>

      :

      <AppWrapper>

        <AuthContextProvider>
          <Routes>

            <Route path="/" element={<SplitScreen />} >
              <Route path="/" element={<Home />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/AddPost" element={<AddPostWindow />} />
              <Route path="/Posts" element={<PostPreview />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Help" element={<h1>Still Work on it</h1>} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Collections" element={<Collections />} />
              <Route path="/Communities" element={<Communities />} />
              <Route path="/AddCollection" element={<AddCollectionPage />} />
              <Route path="/CollectionPreview" element={<CollectionPreview />} />
              <Route path="/Search" element={<SearchPage />} />


              <Route path="/People" element={<People />} >
                <Route path="/People/" element={<PeopleList />} />
                <Route path="/People/Profile" element={<PeopleProfile />} />
              </Route>
            </Route>

            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />

          </Routes>
        </AuthContextProvider>

      </AppWrapper>

  )
}

export default App
