import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/SideBar";
import SideBar from "@/components/ui/SideBar";
import Image from "next/image";
import Logo from "../../public/icons/logo.png"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn ={firstName: 'Shreo',lastName:"Chatterjee"}
  return (
    <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn} />

    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        <div>
          <MobileNav user={loggedIn} />
        </div>
      </div>
      {children}
    </div>
  </main>

  );
}