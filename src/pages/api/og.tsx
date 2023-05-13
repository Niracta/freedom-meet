import { ImageResponse } from "@vercel/og";
import type { NextApiHandler } from "next";

export const config = {
  runtime: `edge`
};

const handler: NextApiHandler = () => {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: `#fff`,
            height: `100%`,
            width: `100%`,
            display: `flex`,
            textAlign: `center`,
            alignItems: `center`,
            justifyContent: `center`,
            flexDirection: `column`,
            flexWrap: `nowrap`,
            color: `#000`
          }}
        >
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              justifyItems: `center`
            }}
          >
            <svg
              style={{ width: `300px`, height: `300px` }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="#D9027D"
                d="M24.4 24h-2c-1.1 0-2.1-.9-2.1-2.1v-4.1h4.1v-4.5h-4.1V10h-2c-1.3 0-2.5.7-3.2 1.8 0 .1-.1.1-.1.2-.3.5-.4 1-.4 1.5v10c0 3 2.4 5.4 5.4 5.4h3.4c.4 0 .7 0 1.1-.1l-.1-4.8z"
              />
              <path
                fill="#FDCE18"
                d="M7.6 28.8h.6c2.9 0 5.3-2.4 5.4-5.3h-6v5.3z"
              />
              <path d="M18.9 3.2c-2.7 0-4.9 1.9-5.4 4.4v-4H7.6v18.8h5.9v-9.1c.1-.7.3-1.3.6-1.9.1-.1.1-.2.2-.3.9-1.4 2.4-2.2 4.1-2.2h2V3.4c-.5-.1-1-.2-1.5-.2z" />
            </svg>
          </div>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              width: `100%`,
              margin: `8px 0`,
              fontSize: `48px`,
              fontWeight: 600,
              letterSpacing: `calc((7 / 100) * 1em)`
            }}
          >
            Rachel Taylor
          </div>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              width: `100%`,
              fontSize: `26px`,
              fontWeight: 200,
              letterSpacing: `calc((10 / 100) * 1em)`
            }}
          >
            Design • Writing • Process
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
};

export default handler;
