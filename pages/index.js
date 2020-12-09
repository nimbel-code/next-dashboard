import NextLogo from "../public/nextjs.svg"
import { connectToDatabase } from "../util/mongodb"
import DashboardLayout from "../Layouts/DashboardLayout"

export default function Home({ isConnected }) {
  return <DashboardLayout />
}
export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}
