import { SESClient } from "@aws-sdk/client-ses";
import { env } from "@/env.mjs";

let sesClient: SESClient | null = null;

export function createSESClient(): SESClient {
  if (!sesClient) {
    sesClient = new SESClient({
      region: env.AWS_REGION,
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }
  return sesClient;
}
