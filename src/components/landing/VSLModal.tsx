"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface VSLModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function VSLModal({ isOpen, setIsOpen }: VSLModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="aspect-video">
           
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
