import {
  Calendar,
  ImageIcon,
  Music,
  Cloud,
  FileText,
  Bookmark,
} from "lucide-react";

interface IntegrationIconProps {
  name: string;
  icon: string;
}

export default function IntegrationIcon({ name, icon }: IntegrationIconProps) {
  const getIcon = () => {
    switch (icon) {
      case "calendar":
        return <Calendar className="h-6 w-6" />;
      case "notion":
        return <FileText className="h-6 w-6" />;
      case "pinterest":
        return <Bookmark className="h-6 w-6" />;
      case "music":
        return <Music className="h-6 w-6" />;
      case "image":
        return <ImageIcon className="h-6 w-6" />;
      case "cloud":
        return <Cloud className="h-6 w-6" />;
      default:
        return <Calendar className="h-6 w-6" />;
    }
  };

  return (
    <div className="group flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-3 rounded-full bg-stone-100 p-4 transition-colors group-hover:bg-stone-200">
        {getIcon()}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
