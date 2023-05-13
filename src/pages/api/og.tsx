import { ImageResponse } from "next/server";

export const alt = "Rachel Taylor Design";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";
export const runtime = "edge";

// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
export default (): ImageResponse =>
  new ImageResponse(
    (
      <div
        style={{
          background: `white`,
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`
        }}
      >
        <img src="/logo.svg" width={32} height={32} />
      </div>
    ),
    size
  );
