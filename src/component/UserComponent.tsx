import type { UserProps } from "../Props/UserProps";

const usercomponent = (props: UserProps) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h2>Email: {props.email}</h2>
            <h3>NIM: {props.nim}</h3>
        </div>
    );
}

export default usercomponent;