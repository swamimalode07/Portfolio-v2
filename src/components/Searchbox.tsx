import React from "react";
import { Search } from "lucide-react";

const Searchbox = () => {
  return (
  <div className="flex h-8 items-center gap-2 rounded-full border-2  border-[#444446] bg-[#18181B] px-4 text-sm text-gray-200">
  <Search width={15} height={15} className="text-gray-400" />
  <div className="rounded-md bg-[#303032] px-2 py-0.5 text-xs font-medium text-gray-300">
    CTRL K
  </div>
</div>

  );
};

export default Searchbox;
