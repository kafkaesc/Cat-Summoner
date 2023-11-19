/**
 * @param {any} children The content of the page
 * @returns {JSX.Element} The provided children wrapped in a responsive
 * content column ~896 pixels wide, centered, that will go to the edge of
 * the screen on smaller displays
 */
export default function ContentColumn({ children }: any) {
	return <div className="max-w-4xl px-2 mx-auto">{children}</div>;
}
