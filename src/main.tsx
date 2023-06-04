import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/GlobalStyles/index.css'
import GlobalContextProvider from './Context/GlobalContext'
import { registerSW } from "virtual:pwa-register";

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </GlobalContextProvider>
)
