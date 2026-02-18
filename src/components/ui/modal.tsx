// Modal generated with gemini. Reviewed by the dev

"use client";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  maxWidth?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = "max-w-2xl",
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on Escape key & lock page scroll (including Lenis smooth scroll)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      // Stop Lenis smooth scroll while modal is open
      const lenisEl = document.querySelector(".lenis") as HTMLElement | null;
      if (lenisEl) {
        lenisEl.setAttribute("data-lenis-prevent", "true");
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      // Re-enable Lenis smooth scroll
      const lenisEl = document.querySelector(".lenis") as HTMLElement | null;
      if (lenisEl) {
        lenisEl.removeAttribute("data-lenis-prevent");
      }
    };
  }, [isOpen, onClose]);

  // Close when clicking the overlay (outside the modal card)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Prevent wheel events from reaching Lenis
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
  }, []);

  if (!isOpen) return null;

  return (
    <div
      ref={wrapperRef}
      onWheel={handleWheel}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        animation: "modalFadeIn 0.25s ease-out",
      }}
    >
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ animation: "modalFadeIn 0.3s ease-out" }}
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className={`relative w-full max-h-[90vh] ${maxWidth} bg-white rounded-2xl shadow-2xl`}
        style={{
          animation: "modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-linear-to-r from-primary/5 to-accent/5">
            <h2 className="text-xl font-bold text-dark">{title}</h2>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
              aria-label="Close modal"
            >
              <X
                size={20}
                className="text-gray-500 group-hover:text-gray-800 transition-colors duration-200"
              />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="overflow-y-auto overscroll-contain max-h-[75vh] px-6 py-5">
          {children}
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
