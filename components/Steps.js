const steps = [
    {step:1, name:"Menú", url:"/"},
    {step:2, name:"Resume", url:"/resume"},
    {step:3, name:"Data and Total", url:"/total"},
] 

const Steps = () => {
  return (
    <>
      <div>
        {steps.map((step) =>(
            <button key={step.step}>
                {step.name}
            </button>
        ))}
      </div>
    </>
  )
}

export default Steps
