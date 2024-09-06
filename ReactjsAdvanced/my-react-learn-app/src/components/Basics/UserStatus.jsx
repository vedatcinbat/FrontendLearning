// Using Ternary Operator
export default function UserStatus(props) {
    return (
        <div>
            {props.isAdmin ? <AdminPanel /> : <UserDashboard />}
        </div>
    )
}


const AdminPanel = () => {
    return (
        <div>
            <h1>Welcome Admin!</h1>
        </div>
    )
}

const UserDashboard = () => {
    return (
        <div>
            <h1>Welcome User!</h1>
        </div>
    )
}