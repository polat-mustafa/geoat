import { GetServerSideProps } from "next";

export default function UserDetail({ user }: any) {
    console.log(user)
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const { id }: any = context.params

    const res = await fetch(`https://63b5672a0f49ecf508a3b890.mockapi.io/users/${id}`)
    const user = await res.json()

    return {
        props: {
            user
        }
    }
}



