const Total = ({ exercises }) => {
  const total = exercises.reduce((s, p) => s + p)

  return (
    <h4>total of {total} exexrcises</h4>
  )
}

export default Total