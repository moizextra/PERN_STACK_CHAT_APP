// import useChatScroll from "../../hooks/useChatScroll";
// import useGetMessages from "../../hooks/useGetMessages";
// import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton.js";
import Message from "./Message";
import {DUMMY_MESSAGES} from "../../dummy_data/dummy.js"
const Messages = () => {
    const messages = DUMMY_MESSAGES;
	// const { loading, messages } = useGetMessages();
	// useListenMessages();
    const loading = false;
	// const ref = useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.map((message) => <Message key={message.id} message={message} />)}

			{!loading && messages.length === 0 && (
				<p className='text-center text-white'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;