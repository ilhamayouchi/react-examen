function StudentStats({ students }) {
  if (students.length === 0) {
    return <p className="vide">Aucun étudiant</p>
  }

  const somme = students.reduce((total, s) => total + s.note, 0)
  const moyenne = (somme / students.length).toFixed(2)

  return (
    <div className="stats">
      <div className="carte">
        <p className="stat-label">Nombre d’étudiants</p>
        <p className="stat-valeur">{students.length}</p>
      </div>
      <div className="carte">
        <p className="stat-label">Moyenne générale</p>
        <p className="stat-valeur">{moyenne}/20</p>
      </div>
    </div>
  )
}

export default StudentStats
