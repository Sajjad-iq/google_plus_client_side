import { AppWrapper } from "./AppWrapper"
import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import { SignUp } from "./Pages/Auth/AuthPages/SignUp/Index";
import { SignIn } from "./Pages/Auth/AuthPages/SignIn";
import { Home } from "./Pages/Home";
import { SplitScreen } from "./SplitScreen";
import Profile from "./Pages/Profile";
import { Settings } from "./Pages/Settengs";
import { useContext, useEffect, useRef } from "react";
import { PostPreview } from "./Pages/PostPreview";
import { People } from "./Pages/People";
import { Error } from "./Pages/Error";
import { PeopleList } from "./Pages/People/Components/PeopleList";
import { PeopleProfile } from "./Pages/People/Components/PeopleProfile";
import { AddPostWindow } from "./Pages/AddPostWindow";
import { Notifications } from "./Pages/Notifications";
import { CheckIsAccountValid } from "./services/Check/CheckIsAccountValid";
import notificationAudio from "./assets/audio/Hangouts notification sound(MP3_128K).mp3"
import { GlobalContext } from "./Context/GlobalContext";

function App() {

  const { socket, setHasNotifications } = useContext(GlobalContext)
  const alarmRef = useRef<any>()
  const { CheckUserAccount } = CheckIsAccountValid()

  useEffect(() => { CheckUserAccount() }, [])

  useEffect(() => {
    try {
      socket.on("new_notification", () => {
        setHasNotifications(true)
        alarmRef.current.play()
      })
    } catch (e) {
      console.log(e)
    }

  }, [socket])


  return (
    <AppWrapper>

      <audio ref={alarmRef} src={notificationAudio} preload="auto" />
      <AuthContextProvider>
        <Routes>

          <Route path="/" element={<SplitScreen />} >
            <Route path="/" element={<Home />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/AddPost" element={<AddPostWindow />} />
            <Route path="/Posts" element={<PostPreview />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Feedback" element={<h1>Still Work on it</h1>} />
            <Route path="/Help" element={<h1>Still Work on it</h1>} />
            <Route path="/Profile" element={<Profile />} />

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
