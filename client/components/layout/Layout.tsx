import { ReactNode } from "react";
import Header from "../header/Header";


interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="font-mono">
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}

