import type { StudentProps } from "../Props/StudentProps";

function Student({
  nama,
  nim,
  fakultas,
  programStudi,
  semester,
}: StudentProps) {
  return (
    <div className="student-card">
      <h1>Data Student</h1>

      <p>
        <strong>Nama:</strong> {nama}
      </p>

      <p>
        <strong>NIM:</strong> {nim}
      </p>

      <p>
        <strong>Fakultas:</strong> {fakultas}
      </p>

      <p>
        <strong>Program Studi:</strong> {programStudi}
      </p>

      <p>
        <strong>Semester:</strong> {semester}
      </p>
    </div>
  );
}

export default Student;