import { useSearchParams } from "react-router-dom";

const useCategory = () => {
  const [searchParams, _] = useSearchParams();
  const category = searchParams.get("category") ?? "";

  return { category };
};

export default useCategory;
