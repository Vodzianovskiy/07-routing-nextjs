"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";

interface Props {
  children: React.ReactNode;
}

export default function ModalClient({ children }: Props) {
  const router = useRouter();

  return <Modal onClose={() => router.back()}>{children}</Modal>;
}
