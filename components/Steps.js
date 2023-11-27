import { useRouter } from "next/router"

const steps = [
    {step:1, name:"Menú", url:"/"},
    {step:2, name:"Resume", url:"/resume"},
    {step:3, name:"Data and Total", url:"/total"},
];

const Steps = () => {

    const router = useRouter()

    return (
      <>
        <div className="flex justify-between mb-5">
          {steps.map((step) =>(
              <button
                  onClick={() => {
                      router.push(step.url)
                  }}
                  className="text-2xl font-bold" 
                  key={step.step}
              >
                  {step.name}
              </button>
          ))}
        </div>
      </>
    )
}

export default Steps
