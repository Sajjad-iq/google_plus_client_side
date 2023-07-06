import { AppWrapper } from "./AppWrapper"
import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import { Home } from "./Pages/Home";
import { SplitScreen } from "./SplitScreen";
import { useEffect, lazy, Suspense } from "react";
import { CheckIsAccountValid } from "./services/Check/CheckIsAccountValid";
import GoogleLogo from "../public/logo384.png"

const SignUp = lazy(() => import("./Pages/Auth/AuthPages/SignUp/Index"))
const SignIn = lazy(() => import("./Pages/Auth/AuthPages/SignIn"))
const Profile = lazy(() => import("./Pages/Profile"))
const Settings = lazy(() => import("./Pages/Settengs"))
const PostPreview = lazy(() => import("./Pages/PostPreview"))
const People = lazy(() => import("./Pages/People"))
const PeopleList = lazy(() => import("./Pages/People/Components/PeopleList"))
const PeopleProfile = lazy(() => import("./Pages/People/Components/PeopleProfile"))
const AddPostWindow = lazy(() => import("./Pages/AddPostWindow"))
const Notifications = lazy(() => import("./Pages/Notifications"))
const Collections = lazy(() => import("./Pages/Collections"))
const AddCollectionPage = lazy(() => import("./Pages/AddCollection"))
const CollectionPreview = lazy(() => import("./Pages/CollectionPreview"))
const Communities = lazy(() => import("./Pages/Communities"))
const SearchPage = lazy(() => import("./Pages/SearchFiled"))
const ChangePassword = lazy(() => import("./Pages/ChangePassword"))




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
            <p className="red-hint">initial load may take a minute because of the server's sleep mode.</p>
          </section>

        </section>
      </AppWrapper>

      :

      <AppWrapper>

        <AuthContextProvider>
          <Suspense fallback={
            <section className="loading-animation-header-wrapper">
              <div className="gray-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </section>
          }>
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
                <Route path="/ChangePassword" element={<ChangePassword />} />


                <Route path="/People" element={<People />} >
                  <Route path="/People/" element={<PeopleList />} />
                  <Route path="/People/Profile" element={<PeopleProfile />} />
                </Route>
              </Route>

              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/SignIn" element={<SignIn />} />

            </Routes>
          </Suspense>
        </AuthContextProvider>

      </AppWrapper>

  )
}

export default App
