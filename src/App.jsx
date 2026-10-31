import { useState } from 'react'
import StudentStats from './StudentStats'
import StudentForm from './StudentForm'
import StudentList from './StudentList'

const initialStudents = [
  { id: 1, nom: 'Alami', prenom: 'Sara', note: 15 },
  { id: 2, nom: 'Bennani', prenom: 'Youssef', note: 12 },
  { id: 3, nom: 'Idrissi', prenom: 'Hiba', note: 17 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  const ajouterEtudiant = (etudiant) => {
    setStudents([...students, etudiant])
  }

  const supprimerEtudiant = (id) => {
    setStudents(students.filter((s) => s.id !== id))
  }

  return (
    <div className="page">
      <h1>Gestion des étudiants</h1>
      <p className="sous-titre">Ajoutez, recherchez et supprimez des étudiants.</p>

      <StudentStats students={students} />
      <StudentForm onAjouter={ajouterEtudiant} />
      <StudentList students={students} onSupprimer={supprimerEtudiant} />
    </div>
  )
}

export default App
