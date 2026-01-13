import { Pages } from "./components/pages"
import { ApplicantDetails } from "./components/applicant-details"

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className="text-xl font-medium text-start">
      {children}
    </p>
  )
}


function App() {
  return (
    <div className="flex flex-col items-center justify-center w-svw h-svh gap-8">
      <h1 className='font-bold text-3xl'>
        Ellty First Round
      </h1>

      <section className="space-y-4">
        <SubHeading>Challenge</SubHeading>
        <Pages />
      </section>

      <section className="space-y-4">
        <SubHeading>Applicant Details</SubHeading>
        <ApplicantDetails />

      </section>
    </div>
  )
}

export default App
