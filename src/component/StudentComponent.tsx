import type { StudentProps } from "../Props/StudentProps";

const StudentComponent = (props: StudentProps) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h2>Email: {props.email}</h2>
            <h3>NIM: {props.nim}</h3>
            <h4>Program Studi: {props.programStudi}</h4>
            <h4>Fakultas: {props.fakultas}</h4>
            <h4>Semester: {props.semester}</h4>
        </div>
    );
}

export default StudentComponent;