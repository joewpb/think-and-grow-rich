import Layout from '../components/Layout'
import Hero from '../sections/Hero'
import PrinciplesHelix from '../sections/PrinciplesHelix'
import SixSteps from '../sections/SixSteps'
import StudyPlanPreview from '../sections/StudyPlanPreview'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PrinciplesHelix />
      <SixSteps />
      <StudyPlanPreview />
    </Layout>
  )
}
