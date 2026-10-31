import { useState } from 'react'

function StudentForm({ onAjouter }) {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [note, setNote] = useState('')
  const [erreur, setErreur] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (nom.trim() === '' || prenom.trim() === '') {
      setErreur('Le nom et le prénom sont obligatoires.')
      return
    }
    const valeur = Number(note)
    if (note === '' || valeur < 0 || valeur > 20) {
      setErreur('La note doit être comprise entre 0 et 20.')
      return
    }

    onAjouter({ id: Date.now(), nom: nom.trim(), prenom: prenom.trim(), note: valeur })

    setNom('')
    setPrenom('')
    setNote('')
    setErreur('')
  }

  return (
    <form className="carte" onSubmit={handleSubmit} noValidate>
      <h2>Ajouter un étudiant</h2>
      <div className="champs">
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          type="number"
          step="any"
          placeholder="Note (0-20)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      {erreur && <p className="erreur">{erreur}</p>}
      <button type="submit">Ajouter</button>
    </form>
  )
}

export default StudentForm
