import { ColorRing } from "react-loader-spinner";

export const Loader = ({ size = 50 }) => {
  return (
    <div className="flex justify-center h-full items-center">
      <ColorRing
        colors={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
        height={size}
        width={size}
      />
    </div>
  );
};
