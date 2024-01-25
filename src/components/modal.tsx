import { useClickAway } from "@uidotdev/usehooks";
import ModalInputContainer from "./modal.input.container";
import CustomCheckbox from "./custom.checkbox";
import CustomDatePicker from "./custom.date.picker";

type PropsType = {
  setModalOpen: (arg: boolean) => void;
};

const AddModal = ({ setModalOpen }: PropsType) => {
  const refModal: any = useClickAway(() => {
    setModalOpen(false);
  });

  return (
    <div className="bg-[#444444]/50 fixed top-0 left-0 w-full min-h-dvh flex justify-center items-center">
      <dialog
        ref={refModal}
        className="p-[24px] bg-white flex flex-col gap-[24px] w-[712px] h-[804] rounded-[16px] shadow-[0_12px_24px_-4px] shadow-[#919EAB1F]"
      >
        <h1 className="text-[18px] mb-[12px]">ღონისძიების დამატება</h1>
        <ModalInputContainer title="აღწერა">
          <input
            type="text"
            placeholder="ჩაწერეთ ტექსტი"
            className="text-[#919EAB] border-[1px] border-[#919EAB33] rounded-[8px] px-[14px] py-[16px] w-full focus:outline-none"
          />
        </ModalInputContainer>

        <ModalInputContainer title="დაწყების დრო">
          <div className="flex justify-between">
            <CustomDatePicker />
            <input
              type="date"
              placeholder="დასრულება"
              className="w-[324px] h-[54px] border-[1px] border-[#919EAB33] rounded-[8px] py-[16px] px-[14px] text-[#919EAB] focus:outline-none"
            />
          </div>
        </ModalInputContainer>

        <ModalInputContainer title="დამატებითი დეტალები">
          <textarea
            placeholder="აღწერეთ დამატებითი დეტალები თუ რა უნდა გაითვალისწინოს მშობელმა..."
            className="border-[1px] border-[#919EAB33] rounded-[8px] py-[16px] px-[14px] text-[#919EAB] focus:outline-none resize-none"
          />
        </ModalInputContainer>

        <ModalInputContainer title={"ჯგუფები"} label={false}>
          <div className="w-full">
            <label className="flex gap-[5px] justify-center items-center w-fit">
              <CustomCheckbox />
              <div className="text-[14px] text-[#212B36] select-none">
                0-დან 2 წლამდე (ჯგუფი1)
              </div>
            </label>
          </div>
        </ModalInputContainer>
      </dialog>
    </div>
  );
};

export default AddModal;
