import { useRouter } from "next/router"
import useKiosk from "../hooks/useKiosk";

const steps = [
    {step:1, name:"Menú", url:"/"},
    {step:2, name:"Resume", url:"/resume"},
    {step:3, name:"Data and Total", url:"/total"},
];

const Steps = () => {

    const {handleChangeStep, step} = useKiosk();
    const router = useRouter()

    const calculateProgress = () => {
      let value 
      if(step === 1) {
        value = 2
      } else if(step === 2) {
        value = 50
      } else {
        value = 100
      }
      return value
    }

    return (
      <>
        <div className="flex justify-between mb-5">
          {steps.map((step) =>(
              <button
                  onClick={() => {
                      router.push(step.url)
                      handleChangeStep(step.step)
                  }}
                  className="text-2xl font-bold" 
                  key={step.step}
              >
                  {step.name}
              </button>
          ))}
        </div>

        <div className="bg-gray-100 mb-10">
          <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{width: `${calculateProgress()}%`}}>

          </div>
        </div>
      </>
    )
}

export default Steps
