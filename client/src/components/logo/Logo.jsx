import "./Logo.scss"

const Logo = () => {
  return (
    <>
      <div className="logo">
        <svg x="0" y="0">
          <symbol id="text-copy">
            <text
              // transform="rotate(90, 0, 0)"
              textAnchor="middle"
              x="50%"
              y="50%"
              // x="0"
              // y="0"
              className="text--line"
              // fontFamily="Druk Wide Web Bold"
            >
              TimeTripleDime
            </text>
          </symbol>
          <g className="g-ants">
            <use
              xlinkHref="#text-copy"
              className="text-copy"
              id="outline"
            ></use>
            <use xlinkHref="#text-copy" className="text-copy" id="fill"></use>
          </g>
        </svg>
      </div>
    </>
  )
}

export default Logo
