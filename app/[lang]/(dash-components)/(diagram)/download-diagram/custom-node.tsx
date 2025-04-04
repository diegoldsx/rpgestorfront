import { memo } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = memo(({ isConnectable }: { isConnectable: boolean }) => {
	return (
		<>
			<Handle
				type="target"
				position={Position.Left}
				isConnectable={isConnectable}
			/>
			<div>▼</div>

			<Handle
				type="source"
				position={Position.Right}
				id="a"
				style={{ top: 5 }}
				isConnectable={isConnectable}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				style={{ bottom: 5, top: "auto" }}
				isConnectable={isConnectable}
			/>
		</>
	);
});

export default CustomNode;
