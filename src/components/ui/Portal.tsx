import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

export function Portal({ children }: PortalProps) {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(el.current);
    return () => {
      document.body.removeChild(el.current);
    };
  }, []);

  return createPortal(children, el.current);
}