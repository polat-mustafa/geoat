import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Users({ projects }: any) {

    //console.log(projects)
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {projects.map((project: any) => (
                    <Link href={`/users/${project.id}`} key={project.id} className="bg-opacity-25 p-2 bg-color1 w-2 ">
                            <p>{project.name}</p>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const res = await fetch('https://63b5672a0f49ecf508a3b890.mockapi.io/users')
    const projects = await res.json()

    return {
        props: {
            projects
        }

    }
}
