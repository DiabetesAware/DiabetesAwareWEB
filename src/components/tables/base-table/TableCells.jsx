import {  Td, Text } from "@chakra-ui/react";

/**
 * Cell for showing text content
 * @param {{ content: string, maxWidth: string, props: any }} props
 */
export function TextCell({ content,maxWidth = "8rem", ...props }) {
	return (
		<Td
			color={"#383838"}
			maxW={maxWidth}
			isTruncated
		>
			<Text {...props}>{content}</Text>
		</Td>
	);
}

/**
 * Cell for showing centered content
 * @param {{ children: React.ReactNode }} props
 */
export function CenteredCell({ children }) {
	return <Td textAlign="center">{children}</Td>;
}

/**
 * Cell for showing left-aligned content
 * @param {{ children: React.ReactNode, maxWidth: string }} props
 */
export function LeftAlignCell({ children, maxWidth }) {
	return (
		<Td
			maxWidth={maxWidth || "max-content"}
			textAlign="left"
		>
			{children}
		</Td>
	);
}

/**
 * Cell for showing link content
 * @param {{ content: string, textAlign: string, onClick: function }} props
 */
export function LinkCell({ content, textAlign, onClick }) {
	return (
		<Td
			color={"#5B79EF"}
			maxW={"12.5rem"}
			overflowWrap={"break-word"}
			whiteSpace={"normal"}
			textAlign={textAlign || "center"}
		>
			<Text
				as={"button"}
				cursor={"pointer"}
				_hover={{ color: "#2C5282", textDecoration: "underline" }}
				onClick={onClick}
			>
				{content}
			</Text>
		</Td>
	);
}

/**
 * Cell for showing not found content
 * @param {{ count: number }} props
 */
export function NotFoundCell({ count }) {
	return (
		<Td
			colSpan={count}
			textAlign={"center"}
		>
			Data tidak ditemukan
		</Td>
	);
}

/**
 * Cell for showing truncated content
 * @param {{ content: string, maxCharLength: number, maxWidth: string }} props
 */
export function TruncatedCell({ content, maxCharLength, maxWidth }) {
	const truncatedContent = content.length > maxCharLength ? `${content.substring(0, maxCharLength)}...` : content;

	return (
		<Td
			style={{
				maxWidth: `${maxWidth}rem`,
				paddingLeft: "23px",
				paddingRight: "15px",
			}}
		>
			<div
				style={{
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap",
				}}
			>
				{truncatedContent}
			</div>
		</Td>
	);
}