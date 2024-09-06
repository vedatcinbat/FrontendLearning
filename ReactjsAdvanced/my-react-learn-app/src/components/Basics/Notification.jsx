// Short Circuit Evaluation
const Notification = (props) => {
    return (
        <div>
            {props.isLoggedIn && <h1>You have new notifications!</h1>}
        </div>
    )
}

export default Notification