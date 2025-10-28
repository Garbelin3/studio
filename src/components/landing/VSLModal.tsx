"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VSLModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function VSLModal({ isOpen, setIsOpen }: VSLModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="aspect-video">
          <video src="/01.mp4" controls autoPlay className="w-full h-full" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
