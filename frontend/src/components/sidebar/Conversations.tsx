import { DUMMY_CONVERSATIONS } from "../../dummy_data/dummy";
import { getChats } from "../../features/Chats/fetchchats";
import Conversation from "./Conversation";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { RootState } from '../../store';

const Conversations = () => {
	const dispatch = useDispatch();
	const { chats} = useSelector((state: RootState) => state.SidebarChats);
	
useEffect(() => {
dispatch(getChats())
}, [])

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{chats.map((chat) => (
				<Conversation key={chat.id} conversation={chat} />
			))}
		</div>
	);
};
export default Conversations;
