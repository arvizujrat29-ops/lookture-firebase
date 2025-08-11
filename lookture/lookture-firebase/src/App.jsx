
import React, { useEffect, useState } from 'react'
import { db } from './lib/firebase'
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore'
import './styles.css'

export default function App() {
  const [jobs, setJobs] = useState([])
  const [title, setTitle] = useState('Ayudante general')
  const [company, setCompany] = useState('Empresa Demo')
  const [videoUrl, setVideoUrl] = useState('')

  useEffect(() => {
    const fetchJobs = async () => {
      const col = collection(db, 'jobs')
      const snap = await getDocs(col)
      setJobs(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    }
    fetchJobs()
  }, [])

  const createJob = async (e) => {
    e.preventDefault()
    const col = collection(db, 'jobs')
    await addDoc(col, { title, company, videoUrl, interviewModel: 'STAR', createdAt: serverTimestamp(), status:'OPEN' })
    alert('Vacante creada. Refresca la página para verla en el feed.')
  }

  return (
    <div className="wrap">
      <h1>Lookture · Demo Firebase</h1>
      <p>Feed tipo TikTok con vacantes en video + postulación 1‑click.</p>

      <section className="grid">
        {jobs.map(j => (
          <article key={j.id} className="card">
            <h3>{j.title} · {j.company}</h3>
            {j.videoUrl ? (
              <video src={j.videoUrl} controls playsInline style={{width:'100%', borderRadius:8}}/>
            ) : (
              <div className="placeholder">Sin video</div>
            )}
            <button onClick={() => alert('Postulación enviada (demo).')}>
              Postularme con mi VideoCV
            </button>
          </article>
        ))}
      </section>

      <hr />
      <h2>Publicar vacante (demo)</h2>
      <form onSubmit={createJob} className="form">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Título" />
        <input value={company} onChange={e=>setCompany(e.target.value)} placeholder="Empresa" />
        <input value={videoUrl} onChange={e=>setVideoUrl(e.target.value)} placeholder="URL de video (mp4 o https)" />
        <button type="submit">Crear</button>
      </form>
    </div>
  )
}
