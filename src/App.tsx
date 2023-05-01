import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

interface Record {
  id: number;
  name: string;
}

function App() {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    axios
      .get<Record[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setRecords(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
