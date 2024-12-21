import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function jpg(props:SvgProps) {
  return (
    <Svg
      width={201}
      height={240}
      viewBox="0 0 201 240"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.3}
        d="M140.1 49.24a20.632 20.632 0 01-20.62-20.62V0H27.34A26.91 26.91 0 00.43 26.92v162.21a26.908 26.908 0 0026.91 26.92h110.6a26.905 26.905 0 0024.864-16.619 26.91 26.91 0 002.046-10.301V49.25l-24.75-.01z"
        fill="#00C650"
      />
      <Path
        d="M164.85 49.24H140.1a20.632 20.632 0 01-20.62-20.62V0l45.37 49.24zM184.37 170.6H59.33c-8.87 0-16.06 7.19-16.06 16.06v37.28c0 8.87 7.19 16.06 16.06 16.06h125.04c8.87 0 16.06-7.19 16.06-16.06v-37.28c0-8.87-7.19-16.06-16.06-16.06z"
        fill="#00C650"
      />
      <Path
        d="M84.65 213.37v7.28h-7.53v-7.28h7.53zM107 190.58v20.54c0 3.153-.857 5.577-2.57 7.27a9.689 9.689 0 01-7.13 2.55 10.789 10.789 0 01-7.82-2.78c-1.927-1.86-2.893-4.527-2.9-8h7.19c0 2.81 1.07 4.21 3.19 4.21 1.85 0 2.77-1.08 2.77-3.23V190.6l7.27-.02zM119.06 210.1v10.55h-7.27v-30.07h11.78c3.567 0 6.287.883 8.16 2.65a9.395 9.395 0 012.81 7.17 10.009 10.009 0 01-1.25 5 8.693 8.693 0 01-3.72 3.44 13.1 13.1 0 01-6 1.26h-4.51zm8.08-9.7c0-2.667-1.46-4-4.38-4h-3.7v7.83h3.7c2.92.027 4.38-1.25 4.38-3.83zM161.51 193a11.811 11.811 0 014.55 7.49h-7.7A5.87 5.87 0 00156 198a7.14 7.14 0 00-3.79-1 7.053 7.053 0 00-5.52 2.32 8.997 8.997 0 00-2.09 6.27c0 2.86.73 5.057 2.19 6.59a8.21 8.21 0 006.23 2.3 7.515 7.515 0 004.55-1.43 7.571 7.571 0 002.77-4.06h-9.19v-5.23h15.27v7.19a14.617 14.617 0 01-2.72 4.89 14.092 14.092 0 01-4.79 3.66 15.212 15.212 0 01-6.65 1.4c-2.79.073-5.55-.593-8-1.93a13.21 13.21 0 01-5.25-5.43 16.718 16.718 0 01-1.85-8 16.714 16.714 0 011.85-7.95 13.284 13.284 0 015.23-5.43 15.637 15.637 0 017.89-1.93 15.06 15.06 0 019.38 2.77z"
        fill="#fff"
      />
      <Path
        d="M104.73 146.41H60.56a16.327 16.327 0 01-16.31-16.31V85.93a16.33 16.33 0 0116.31-16.31h44.17a16.319 16.319 0 0116.3 16.31v44.17a16.32 16.32 0 01-16.3 16.31zM60.56 76.83a9.11 9.11 0 00-9.1 9.1v44.17a9.11 9.11 0 009.1 9.1h44.17a9.101 9.101 0 009.09-9.1V85.93a9.098 9.098 0 00-9.09-9.1H60.56z"
        fill="#00C650"
      />
      <Path
        d="M117.43 121.7v8.4a12.712 12.712 0 01-12.7 12.7H60.56a12.699 12.699 0 01-12.7-12.7V116c7.07-1.52 17.84-2 30.91 3.22l8.1-7.72 5.52 14s1.48-5.15 6.26-4.42c4.78.73 12.52 3.32 15.83 1.11a4.255 4.255 0 012.95-.49zM101.96 94.95a4.91 4.91 0 100-9.82 4.91 4.91 0 000 9.82z"
        fill="#00C650"
      />
    </Svg>
  )
}

export default React.memo(jpg)
