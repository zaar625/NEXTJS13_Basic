function UserProfilePage(props) {
    console.log(props)
    return (
        <h1>{props.username}</h1>
    )
}

export async function getServerSideProps(context) {
    console.log(context.params)
    console.log('실행')
    return {
        props:{
            username:'Max'
        }
    }
}

export default UserProfilePage