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

export const RedLoader = ({ size = 50 }) => {
  return (
    <div className="flex justify-center h-full items-center">
      <ColorRing
        colors={["#ff0000", "#e34d4d", "#630909", "#dc8080", "#ff0000"]}
        height={size}
        width={size}
      />
    </div>
  );
};
