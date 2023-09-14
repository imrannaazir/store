"use client";

import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { closeModal } from "@/redux/features/modalSlice";

import Gallery from "./gallery";
import Modal from "./ui/modal";
import Info from "./info";

const PreviewModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, data } = useAppSelector((state) => state.modal);

  if (!data) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={() => dispatch(closeModal())}>
      <div
        className="
                grid
                w-full
                grid-cols-1
                items-center
                gap-x-6
                gap-y-8
                sm:grid-cols-12
                lg:gap-x-8
      "
      >
        {/* gallery */}
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={data.images} />
        </div>

        {/* info */}
        <div className="col-span-8 lg:col-span-7">
          <Info data={data} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
