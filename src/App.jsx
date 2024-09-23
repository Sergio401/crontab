import { useState } from 'react'
import cronstrue from 'cronstrue'
import 'cronstrue/locales/es';

import './App.css'

function App() {

  const [utc, setUtc] = useState('')
  const [withTimezone, setWithTimezone] = useState('')

  const handleCron = (e) => {
    e.preventDefault()
    const newCron = e.target.value.trim()
    console.log(newCron)
    console.log(cronstrue.toString(newCron, { locale: 'es' }))
    
    if (newCron === '') {
      setUtc('')
      setWithTimezone('')
    } else {
      try {
        const utcTranslation = cronstrue.toString(newCron, { locale: 'en' })
        const timezoneTranslation = cronstrue.toString(newCron, { locale: 'en', tzOffset: -5 })
        
        setUtc(utcTranslation)
        setWithTimezone(timezoneTranslation)
      } catch {
        setUtc('')
        setWithTimezone('')
      }
    }
  }

  return (
    <>
      <div className="cron-container">
        <input type="text" placeholder="Cron" onChange={(e) => handleCron(e)} />
        <input type="text" placeholder="UTC-00:00" defaultValue={utc}/>
        <input type="text" placeholder="With Timezone" defaultValue={withTimezone} />
      </div>
    </>
  )
}

export default App
