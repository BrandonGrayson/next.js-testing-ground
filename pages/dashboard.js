const Dashboard = ({name, bio, blog}) => {
    return(
        <>
        <h1>{name}</h1>
        <p>{`Bio: ${bio}`}</p>
        <p>{`Blog: ${blog}`}</p>
    </>
    )

};

Dashboard.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/users/brandongrayson');
    console.log("USER BELOW!!!!")
    console.log(user)
    const user = await res.json();

    return user;
};
export default Dashboard;