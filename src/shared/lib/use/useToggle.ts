import { ref } from "vue";
import type { Ref } from "vue";

interface IUseToggle {
  isActive: Ref<boolean>;
  toggle: Function;
}

export default function useToggle(bool: boolean = false): IUseToggle {
  const isActive = ref(bool);

  function toggle(): void {
    isActive.value = !isActive.value;
  }

  return {
    isActive,
    toggle,
  };
}
