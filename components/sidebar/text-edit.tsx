import { useBoardStore } from "@/store/useStore";
import Inputt from "../shared/custom-input";

interface textEditProps {
  id: number;
}

const TextEdit = ({ id }: textEditProps) => {
  const { posts } = useBoardStore((state) => state);
  const currentSnip = posts.find((p) => p.id === id);
  const text = currentSnip?.text;

  return (
    <div>
      {text?.map((t, i) => (
        <div key={i}>
          <Inputt
            type={t.type}
            placeholer={t.input.placeholder}
            choices={t.choices}
            currentValue={t.currentValue}
            label={t.input.label}
          />
        </div>
      ))}
    </div>
  );
};
export default TextEdit;
