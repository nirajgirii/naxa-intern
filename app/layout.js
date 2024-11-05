import { Providers } from "../redux/provider";
import "./globals.css";

export const metadata = {
  title: "NAXA - Location Matters",
  description: "NAXA Services Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
