import React from "react"
import PreviewCard from "../component/previewCard/Preview-card.jsx"

const Form = () => {
  return (
    <div>
      <h6 className="text-5xl mb-5 primary-color font-semibold">Select the template :</h6>
      <hr />
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="col-span-3 ...">

          <PreviewCard heading="Aurora">
            <h1>Hello there</h1>
          </PreviewCard>

          <PreviewCard heading="Lumos">
            <h1>Hello there</h1>
          </PreviewCard>

          <PreviewCard heading={"Ethereal"}>
            <h1>Hello there</h1>
          </PreviewCard>
        </div>
        <div>
          <img src="../images/freepik__modern-style-detailled-illustration-a-teen-girl-is__20119.jpeg" />
        </div>

      </div>
    </div>
  )
}

export default Form;