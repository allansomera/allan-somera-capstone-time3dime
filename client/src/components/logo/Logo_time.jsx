import "./Logo_time.scss"
import React, { useref, useEffect } from "react"

import { motion } from "framer-motion"

const Logo_time = () => {
  // const [letterLength, setLetterLength] = useState(0)
  // const letterRef = useRef()
  //
  // useEffect(() => {
  //   setLetterLength(letterRef.current.getTotalLength())
  // })
  return (
    <>
      <div className="logo-time">
        <svg
          width="340"
          height="72"
          viewBox="0 0 340 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/*
           * <path d="M31.216 72V20.064H0.399994V0.575996H89.296V20.064H58.48V72H31.216Z" />
           * <path d="M123.526 0.575996V72H96.358V0.575996H123.526Z" />
           */}
          <path
            d="M132.733 72V0.575996H170.173L192.061 40.704L214.333 0.575996H250.237V72H223.261V27.456L198.205 72H184.285L159.325 27.456V72H132.733Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M259.483 0.575996H338.491V18.048H286.363V26.976H337.435V44.352H286.363V54.144H339.259V72H259.483V0.575996Z"
            stroke="black"
            strokeWidth="2"
          />
          <mask></mask>
          <motion.path
            pathLength={100}
            initial={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
            }}
            animate={{
              strokeDashoffset: 0,
              transitionEnd: { zIndex: -1 },
            }}
            transition={{ duration: 2 }}
            d="M31.216 72V20.064H0.399994V0.575996H89.296V20.064H58.48V72H31.216Z"
            stroke="white"
            strokeWidth="2"
          />
          <motion.path
            pathLength={100}
            initial={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
            }}
            animate={{
              strokeDashoffset: 0,
              transitionEnd: { zIndex: -1 },
              // zIndex: -1,
            }}
            transition={{ duration: 2 }}
            d="M123.526 0.575996V72H96.358V0.575996H123.526Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  )
}

export default Logo_time
