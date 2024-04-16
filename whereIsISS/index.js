import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState([]);
  const [startTime, setStartTime] = useState(
    new Date().toISOString().slice(0, 16)
  );
  const [endTime, setEndTime] = useState(new Date().toISOString().slice(0, 16));

  const fetchPosition = async (startTime, endTime) => {
    const apiUrl = `https://api.wheretheiss.at/v1/satellites/25544/positissons?timestamps=
    ${new Date(startTime).getTime() / 1000},${
      new Date(endTime).getTime() / 1000
    }`;
    try {
      const response = await fetch(apiUrl, {});
      console.log("response", response);
      if (response.status !== 200) {
        setError(`Error on the API ${response.statusText}`);
        return [];
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.error("Error on the API", e);
      setError(`Error on the API ${e}`);
      return [];
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "startTime") {
      setStartTime(value);
    } else if (name === "endTime") {
      setEndTime(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchPosition(startTime, endTime).then((data) => setPositions(data));
  };

  return (
    <div>
      <Form
        startTime={startTime}
        endTime={endTime}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
      <PositionTable positions={positions} />
    </div>
  );
}

// Part 1
function PositionTable({ positions }) {
  return (
    <div className="position-table-div">
      <table>
        <tbody>
          <tr>
            <th>Timestamp</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
          {positions.lenght > 0 &&
            positions?.map((position, i) => (
              <tr key={i}>
                <td>{position.timestamp}</td>
                <td>{position.latitude}</td>
                <td>{position.longitude}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

// Part 2
function Form({ startTime, endTime, onChange, onSubmit, error }) {
  return (
    <form
      className="time-range-form"
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={onSubmit}
    >
      <label>
        {"Time range start: "}
        <input
          type="datetime-local"
          name="startTime"
          value={startTime}
          onChange={onChange}
        />
      </label>
      <label>
        {"Time Range end: "}
        <input
          type="datetime-local"
          name="endTime"
          value={endTime}
          onChange={onChange}
        />
      </label>
      <input type="submit" value="Get position data!" className="input" />
      <div className="error-text">{error}</div>
    </form>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
