import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sample from './Sample.jsx'

createRoot(document.getElementById('root')).render(
  <div className='block maincontainer'>
    <App />
    {/* <Sample/> */}
  </div>
)
