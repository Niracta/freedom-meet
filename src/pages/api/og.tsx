import { ImageResponse } from "@vercel/og";

export const config = {
  // This value can't use backticks, as it has to be static
  // eslint-disable-next-line @typescript-eslint/quotes
  runtime: "experimental-edge"
};

// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
export default (): ImageResponse =>
  new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: `white`,
          width: `100%`,
          height: `100%`,
          display: `flex`,
          textAlign: `center`,
          alignItems: `center`,
          justifyContent: `center`
        }}
      >
        👋, 🌎
      </div>
    ),
    {
      width: 1200,
      height: 600,
      emoji: `noto`
    }
  );
