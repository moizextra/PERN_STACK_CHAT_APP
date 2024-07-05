
import Chat from "./Chat";
import {DUMMY_CONVERSATIONS} from "../../dummy_data/dummy";
const Conversations = () => {
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{ DUMMY_CONVERSATIONS.map((chat) => (
				<Chat key={chat.id} chat={chat}  />
			))}
			{/* {loading ? <span className='loading loading-spinner mx-auto' /> : null} */}
		</div>
	);
};
export default Conversations;