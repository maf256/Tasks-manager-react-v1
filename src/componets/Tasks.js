import React from 'react'
const tasks = [
      {
            id: 1,
            text: 'meeting with friends',
            day: '5 march',
            reminder: true,
      },
      {
            id: 2,
            text: 'Learn js',
            day: '2 November',
            reminder: false,
      },
      {
            id: 3,
            text: 'shoping .....',
            day: '20 Desember',
            reminder: true,
      },
];
const Tasks = () => {
      return (
            <>
                  {tasks.map(task => (
                        <h3 key={task.id}>{task.text}</h3>
                  ))}

            </>
      )
}

export default Tasks
