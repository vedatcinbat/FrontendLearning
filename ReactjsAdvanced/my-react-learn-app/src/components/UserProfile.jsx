const UserProfile = (props) => {
    return (
        <div style={{backgroundColor: 'gray', padding: '1rem', marginBottom: '1rem'}}>
            <h1>{props.name || 'Guest'}</h1>
            {props.isAdmin ? <AdminPanel /> : <UserDashboard />}
            {props.notifications.length > 0 && <p>You have {props.notifications.length} new notifications</p>}
        </div>
    );
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

export default UserProfile