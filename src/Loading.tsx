import { AnimatePresence, motion } from "motion/react";
import { LoadingIcon } from "./components/icons";

export const Loading = ({ tool }: { tool?: string }) => {
    const toolName =
        tool === "getReleventResources"
            ? "Getting information"
            : tool === "addResource"
                ? "Adding information"
                : "Thinking";

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring" }}
                className="overflow-hidden flex justify-start items-center"
                key={toolName}
            >
                <div className="flex flex-row gap-2 items-center">
                    <div className="animate-spin dark:text-neutral-400 text-neutral-500">
                        <LoadingIcon />
                    </div>
                    <div className="text-neutral-500 dark:text-neutral-400 text-sm">
                        {toolName}...
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
