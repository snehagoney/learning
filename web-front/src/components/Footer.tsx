// src/components/Footer.tsx
"use client";

import { Container, Typography, Button, Box, Link as MuiLink } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" className="pt-10 bg-[#0E1B38] text-white">
      <Container>
        <Box className="pb-32 text-center max-w-[715px] mx-auto">
          <Typography variant="h4" className="mb-5">
            Let’s Design Your New Website
          </Typography>
          <Typography className="mb-5 leading-7">
            Do you want to have a website that stands out and impresses your clients? Then we are
            ready to help! Click the button below to contact us and discuss your ideas.
          </Typography>
          <Box>
            <Button
              variant="contained"
              href="/"
              className="bg-white text-black normal-case font-semibold hover:bg-gray-200"
            >
              Get a Quote
              <img alt="Arrow" src="/images/2arw.png" className="ml-2 h-5" />
            </Button>
          </Box>
        </Box>
        <Box className="border-t border-white pt-12 pb-12 text-center">
          <Box component="ul" className="flex justify-center items-center mb-5 flex-wrap gap-4">
            {[
              "About us",
              "Who We Are",
              "Our Team",
              "Our Services",
              "Pricing",
              "Our Projects",
              "Why Choose Us",
              "Faq",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <MuiLink
                  href="/"
                  underline="none"
                  className="text-white/75 text-base font-semibold hover:text-white"
                >
                  {item}
                </MuiLink>
              </li>
            ))}
          </Box>
          <Typography className="text-white/75 text-base">
            © Copyright 2025. All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}