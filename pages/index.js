import AppLayout from '../components/layout'
import { HomeContent } from '../components/home'

export default function Home() {
  return <AppLayout child={<HomeContent />} />
}
