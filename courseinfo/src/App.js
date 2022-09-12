const App = () => {
  const course = 'Half Stack application development'
  const Header = ({ title }) => <h1>{title}</h1>;
const Total = ({ total }) => {
  const totals =
    total.one.exercises + total.two.exercises + total.three.exercises;
  return <p>Number of exercises: {totals}</p>;
};
const Part = ({ part }) => (
  <p>
    {part.title} {part.exercises}
  </p>
);
const Content = ({ content }) => (
  <div>
    <Part part={content.one} />
    <Part part={content.two} />
    <Part part={content.three} />
  </div>
);
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
