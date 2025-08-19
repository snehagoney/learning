import type { Metadata } from "next";
import './globals.css';
import ThemeRegistry from "../lib/ThemeRegistry";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "My Website",
  description: "Website with Next.js, Material UI, and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <ThemeRegistry>
          <Header />
          <Container
            disableGutters
            style={{
              flexGrow: 1,
              width: "100%",
              maxWidth: "100%",
              margin: 0,
              padding: 0,
            }}
          >
            {children}
          </Container>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}