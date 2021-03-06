const Dashboard = ({name, bio, blog}) => {
    <>
        <h1>{name}</h1>
        <p>{`Bio: ${bio}`}</p>
        <p>{`Blog: ${blog}`}</p>
    </>
}

export default Dashboard;