import { DUMMY_CONVERSATIONS } from "../../dummy_data/dummy";
import { getChats } from "../../features/Chats/fetchchats";
import Conversation from "./Conversation";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
const Conversations = () => {
	const dispatch = useDispatch()

useEffect(() => {
dispatch(getChats())
}, [])

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{DUMMY_CONVERSATIONS.map((conversation) => (
				<Conversation key={conversation.id} conversation={conversation} />
			))}
		</div>
	);
};
export default Conversations;
