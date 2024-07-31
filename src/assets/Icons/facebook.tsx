import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Facebook = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#1877F2"
        d="M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 7.986 5.851 14.605 13.5 15.806V20.625H9.437V16H13.5v-3.525c0-4.01 2.389-6.225 6.043-6.225 1.751 0 3.582.313 3.582.313V10.5h-2.018c-1.987 0-2.607 1.233-2.607 2.499V16h4.438l-.71 4.625H18.5v11.18C26.15 30.606 32 23.987 32 16Z"
      />
      <Path
        fill="#fff"
        d="m22.228 20.625.71-4.625H18.5v-3.001c0-1.266.62-2.499 2.607-2.499h2.018V6.562s-1.831-.312-3.582-.312c-3.654 0-6.043 2.215-6.043 6.225V16H9.437v4.625H13.5v11.18a16.121 16.121 0 0 0 5 0v-11.18h3.728Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Facebook
