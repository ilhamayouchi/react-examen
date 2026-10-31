import { useState } from 'react'

function StudentList({ students, onSupprimer }) {
  const [recherche, setRecherche] = useState('')

  const filtres = students.filter((s) =>
    s.nom.toLowerCase().includes(recherche.toLowerCase())
  )

  return (
    <div className="carte">
      <h2>Liste des étudiants</h2>
      <input
        className="recherche"
        type="text"
        placeholder="Rechercher par nom"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtres.map((s) => (
            <tr key={s.id}>
              <td>{s.nom}</td>
              <td>{s.prenom}</td>
              <td>{s.note}</td>
              <td>
                <button className="supprimer" onClick={() => onSupprimer(s.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
