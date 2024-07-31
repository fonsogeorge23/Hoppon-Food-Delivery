import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Google = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M6.896 16c0-1.04.173-2.036.481-2.97L1.984 8.912A15.992 15.992 0 0 0 .341 16c0 2.548.592 4.95 1.641 7.083l5.39-4.126A9.465 9.465 0 0 1 6.896 16Z"
      clipRule="evenodd"
    />
    <Path
      fill="#EA4335"
      fillRule="evenodd"
      d="M16.364 6.545c2.258 0 4.297.8 5.9 2.11L26.924 4c-2.84-2.473-6.481-4-10.56-4a15.975 15.975 0 0 0-14.38 8.912l5.393 4.118a9.443 9.443 0 0 1 8.987-6.484Z"
      clipRule="evenodd"
    />
    <Path
      fill="#34A853"
      fillRule="evenodd"
      d="M16.364 25.454a9.442 9.442 0 0 1-8.987-6.484l-5.393 4.117A15.974 15.974 0 0 0 16.364 32c3.908 0 7.64-1.388 10.44-3.988l-5.119-3.957c-1.444.91-3.263 1.4-5.32 1.4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#4285F4"
      fillRule="evenodd"
      d="M31.659 16c0-.945-.146-1.964-.365-2.909h-14.93v6.182h8.594c-.43 2.108-1.599 3.728-3.273 4.782l5.119 3.957c2.941-2.73 4.855-6.797 4.855-12.012Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Google;
