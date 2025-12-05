import React from "react"
import PreviewCard from "../component/previewCard/Preview-card.jsx"

const Preview = () => {
  return (
    <div>
      <h6 className="text-5xl mb-5 primary-color font-semibold">Select the template :</h6>
      <hr />
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="grid grid-cols-2 col-span-3 ...">

          <PreviewCard heading="Aurora" thumbnail={`${process.env.PUBLIC_URL}/images/template-1.png`} />

          <PreviewCard heading={"Ethereal"} thumbnail={""} />

        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/theme.png`} />
        </div>

      </div>
    </div>
  )
}

export default Preview;