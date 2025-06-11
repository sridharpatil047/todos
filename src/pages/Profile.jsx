import { useParams } from "react-router-dom"

function Profile() {
    const {userId} = useParams()
    

    return (
        <>
            <h1>PROFILE</h1>
            <h2>UserId : {userId}</h2>
        </>
    )
}

export default Profile