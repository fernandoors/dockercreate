import React from "react"
import Helmet from "react-helmet"

function Ads() {
  return (
    <Helmet
      meta={[
        {
          name: `lomadee-verification`,
          content: process.env.LOMADEE_ADS,
        }
      ]}
    />
  )
}

export default Ads
