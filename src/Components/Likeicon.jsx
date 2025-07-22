import { useLike } from "../Context/LikeContext";
const Likeicon = () => {
  const { likedItems } = useLike(); // ✅ Inside a function component
  return <div>{likedItems.length}</div>;
};
export default Likeicon;