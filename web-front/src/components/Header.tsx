"use client";
import { AppBar, Toolbar, Typography, Button,Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Online Training", href: "/online-training" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <AppBar position="static" color="transparent" className="bg-primary-main">
      <Toolbar className="flex justify-between items-center">
        
        <Box><Image src="/Images/logo.png" alt="Logo" width={180} height={0} /></Box>

        <Box>
        {navItems.map((item) => (
          <Button
            key={item.href}
            component={Link}
            href={item.href}
            sx={{
              color: pathname === item.href ? "#1818c8" : "inherit",
              fontWeight: pathname === item.href ? "bold" : "normal",
              borderBottom: pathname === item.href ? "2px solid #1818c8" : "none",
            }}
          >
            {item.label}
          </Button>
        ))}
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}
